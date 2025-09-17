@echo off
REM Save this as: deploy-safe.bat

echo ============================================
echo Conner Reavill Website Deployment Script
echo ============================================
echo.

echo Current directory: %CD%
echo.

REM Check Terraform
echo [1/4] Checking Terraform...
terraform --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ TERRAFORM NOT FOUND!
    echo Please install from: https://www.terraform.io/downloads
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
) else (
    echo ✅ Terraform found
)

REM Check AWS CLI
echo [2/4] Checking AWS CLI...
aws --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ AWS CLI NOT FOUND!
    echo Please install from: https://aws.amazon.com/cli/
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
) else (
    echo ✅ AWS CLI found
)

REM Check AWS Configuration
echo [3/4] Checking AWS configuration...
aws sts get-caller-identity >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ AWS NOT CONFIGURED!
    echo Please run: aws configure
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
) else (
    echo ✅ AWS configured
)

REM Check GitHub CLI (optional)
echo [4/4] Checking GitHub CLI...
gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  GitHub CLI not found (optional)
    set GITHUB_CLI=false
) else (
    echo ✅ GitHub CLI found
    set GITHUB_CLI=true
)

echo.
echo ============================================
echo All requirements check complete!
echo ============================================
echo.

echo Press any key to continue with configuration...
pause >nul

echo.
echo Configuration Setup:
echo.
set /p DOMAIN_NAME="Enter your domain name (e.g., connerreavill.com): "
set /p BUCKET_NAME="Enter S3 bucket name (e.g., conner-reavill-website): "

echo.
echo Your configuration:
echo   Domain: %DOMAIN_NAME%
echo   Bucket: %BUCKET_NAME%
echo   Region: us-east-1
echo.

set /p CONFIRM="Is this correct? (y/n): "
if /i not "%CONFIRM%"=="y" (
    echo.
    echo Configuration cancelled.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo Creating terraform.tfvars...

if not exist infrastructure (
    mkdir infrastructure
    echo Created infrastructure directory
)

(
echo domain_name = "%DOMAIN_NAME%"
echo bucket_name = "%BUCKET_NAME%"
) > infrastructure\terraform.tfvars

echo ✅ terraform.tfvars created successfully!
echo.

echo Moving to infrastructure directory...
cd infrastructure

echo.
echo Initializing Terraform...
terraform init
if %errorlevel% neq 0 (
    echo ❌ Terraform init failed!
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo Planning deployment...
terraform plan -var-file=terraform.tfvars
if %errorlevel% neq 0 (
    echo ❌ Terraform plan failed!
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo ============================================
echo Ready to deploy infrastructure!
echo ============================================
echo.
set /p DEPLOY="Deploy now? This will create AWS resources (y/n): "

if /i "%DEPLOY%"=="y" (
    echo.
    echo Deploying infrastructure... This may take 10-15 minutes.
    terraform apply -var-file=terraform.tfvars -auto-approve
    
    if %errorlevel% eq 0 (
        echo.
        echo ✅ Deployment successful!
        echo.
        echo Getting deployment outputs...
        terraform output
    ) else (
        echo.
        echo ❌ Deployment failed!
    )
) else (
    echo.
    echo Deployment skipped.
)

echo.
echo ============================================
echo Script completed!
echo ============================================
echo Press any key to exit...
pause >nul