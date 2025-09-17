@echo off
REM Save this as: deploy-debug.bat

echo Starting deployment script...
echo Current directory: %CD%

echo.
echo Checking Terraform...
terraform --version
if %errorlevel% neq 0 (
    echo ERROR: Terraform not found!
    echo Please install Terraform from: https://www.terraform.io/downloads
    pause
    exit
)
echo Terraform OK!

echo.
echo Checking AWS CLI...
aws --version
if %errorlevel% neq 0 (
    echo ERROR: AWS CLI not found!
    echo Please install AWS CLI from: https://aws.amazon.com/cli/
    pause
    exit
)
echo AWS CLI OK!

echo.
echo Checking AWS connection...
aws sts get-caller-identity
if %errorlevel% neq 0 (
    echo ERROR: AWS not configured!
    echo Please run: aws configure
    pause
    exit
)
echo AWS connection OK!

echo.
echo All checks passed! Ready to proceed.
echo.

set /p DOMAIN_NAME="Enter your domain name: "
set /p BUCKET_NAME="Enter S3 bucket name: "

echo.
echo You entered:
echo Domain: %DOMAIN_NAME%
echo Bucket: %BUCKET_NAME%
echo.

set /p CONTINUE="Continue? (y/n): "
if /i not "%CONTINUE%"=="y" (
    echo Cancelled by user
    pause
    exit
)

echo.
echo Creating terraform.tfvars...
if not exist infrastructure mkdir infrastructure

echo domain_name = "%DOMAIN_NAME%" > infrastructure\terraform.tfvars
echo bucket_name = "%BUCKET_NAME%" >> infrastructure\terraform.tfvars

echo terraform.tfvars created!
echo.

cd infrastructure
echo Running terraform init...
terraform init

echo.
echo Running terraform plan...
terraform plan -var-file=terraform.tfvars

echo.
echo Script completed! Check output above for any errors.
pause