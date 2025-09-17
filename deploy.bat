@echo off
REM Save this as: deploy.bat

setlocal enabledelayedexpansion

echo 🚀 Setting up Conner Reavill Website Infrastructure

REM Check if required tools are installed
echo 🔍 Checking requirements...

terraform --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Terraform is required but not installed.
    echo Install from: https://www.terraform.io/downloads
    pause
    exit /b 1
)

aws --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ AWS CLI is required but not installed.
    echo Install from: https://aws.amazon.com/cli/
    pause
    exit /b 1
)

gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  GitHub CLI not found. You'll need to set secrets manually.
    set GITHUB_CLI_AVAILABLE=false
) else (
    set GITHUB_CLI_AVAILABLE=true
)

echo ✅ Requirements check complete

REM Get user input for configuration
echo.
echo 📝 Configuration setup...
set /p DOMAIN_NAME="Enter your domain name (e.g., connerreavill.com): "
set /p BUCKET_NAME="Enter S3 bucket name (e.g., conner-reavill-website): "
set /p AWS_REGION="Enter AWS region (default: us-east-1): "
if "%AWS_REGION%"=="" set AWS_REGION=us-east-1

echo.
echo Configuration:
echo   Domain: %DOMAIN_NAME%
echo   Bucket: %BUCKET_NAME%
echo   Region: %AWS_REGION%
echo.
set /p CONFIRM="Is this correct? (y/n): "
if /i not "%CONFIRM%"=="y" (
    echo Exiting...
    pause
    exit /b 1
)

REM Create terraform variables file
echo.
echo 📄 Creating terraform.tfvars...

if not exist infrastructure mkdir infrastructure

(
echo domain_name = "%DOMAIN_NAME%"
echo bucket_name = "%BUCKET_NAME%"
) > infrastructure\terraform.tfvars

echo ✅ Created terraform.tfvars

REM Deploy infrastructure
echo.
echo 🏗️  Deploying infrastructure with Terraform...

cd infrastructure

terraform init
if %errorlevel% neq 0 (
    echo ❌ Terraform init failed
    pause
    exit /b 1
)

terraform plan -var-file=terraform.tfvars
if %errorlevel% neq 0 (
    echo ❌ Terraform plan failed
    pause
    exit /b 1
)

echo.
set /p DEPLOY_CONFIRM="Deploy infrastructure? (y/n): "
if /i "%DEPLOY_CONFIRM%"=="y" (
    terraform apply -var-file=terraform.tfvars -auto-approve
    if %errorlevel% neq 0 (
        echo ❌ Terraform apply failed
        pause
        exit /b 1
    )
    
    REM Get outputs for GitHub secrets
    for /f "delims=" %%i in ('terraform output -raw cloudfront_distribution_id') do set CLOUDFRONT_DISTRIBUTION_ID=%%i
    for /f "delims=" %%i in ('terraform output -raw s3_bucket_name') do set S3_BUCKET_NAME=%%i
    
    echo.
    echo ✅ Infrastructure deployed successfully
    echo CloudFront Distribution ID: !CLOUDFRONT_DISTRIBUTION_ID!
    echo S3 Bucket Name: !S3_BUCKET_NAME!
    
    REM Store values for GitHub secrets setup
    (
    echo CLOUDFRONT_DISTRIBUTION_ID=!CLOUDFRONT_DISTRIBUTION_ID!
    echo S3_BUCKET_NAME=!S3_BUCKET_NAME!
    ) > ..\github_secrets.env
)

cd ..

REM Setup GitHub secrets
echo.
echo 🔐 Setting up GitHub secrets...

if "%GITHUB_CLI_AVAILABLE%"=="true" (
    echo Using GitHub CLI to set secrets...
    
    set /p AWS_ACCESS_KEY_ID="Enter your AWS Access Key ID: "
    set /p AWS_SECRET_ACCESS_KEY="Enter your AWS Secret Access Key: "
    
    REM Load the terraform outputs
    for /f "tokens=2 delims==" %%i in ('findstr "CLOUDFRONT_DISTRIBUTION_ID" github_secrets.env') do set CLOUDFRONT_DISTRIBUTION_ID=%%i
    for /f "tokens=2 delims==" %%i in ('findstr "S3_BUCKET_NAME" github_secrets.env') do set S3_BUCKET_NAME=%%i
    
    gh secret set AWS_ACCESS_KEY_ID --body "%AWS_ACCESS_KEY_ID%"
    gh secret set AWS_SECRET_ACCESS_KEY --body "%AWS_SECRET_ACCESS_KEY%"
    gh secret set S3_BUCKET_NAME --body "%S3_BUCKET_NAME%"
    gh secret set CLOUDFRONT_DISTRIBUTION_ID --body "%CLOUDFRONT_DISTRIBUTION_ID%"
    
    echo ✅ GitHub secrets configured
    
    REM Clean up
    if exist github_secrets.env del github_secrets.env
) else (
    echo ⚠️  GitHub CLI not available. Set these secrets manually in your GitHub repository:
    echo Go to: https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions
    echo.
    echo Required secrets:
    echo   AWS_ACCESS_KEY_ID: Your AWS access key
    echo   AWS_SECRET_ACCESS_KEY: Your AWS secret key
    
    if exist github_secrets.env (
        for /f "tokens=2 delims==" %%i in ('findstr "S3_BUCKET_NAME" github_secrets.env') do echo   S3_BUCKET_NAME: %%i
        for /f "tokens=2 delims==" %%i in ('findstr "CLOUDFRONT_DISTRIBUTION_ID" github_secrets.env') do echo   CLOUDFRONT_DISTRIBUTION_ID: %%i
        del github_secrets.env
    )
)

echo.
echo 🎉 Setup complete!
echo Next steps:
echo 1. Commit and push your changes to GitHub
echo 2. The GitHub Action will automatically deploy on pushes to main branch
echo 3. Your website will be available at: https://%DOMAIN_NAME%
echo.
echo Repository structure:
echo ├── .github/workflows/deploy.yml    # CI/CD pipeline
echo ├── infrastructure/                 # Terraform files
echo │   ├── main.tf                    # Infrastructure definition
echo │   └── terraform.tfvars           # Your configuration
echo └── src/                           # Your React app

pause