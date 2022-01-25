echo 'deploy api'
# eb init --region $AWS_DEFAULT_REGION $EB_APP
# eb deploy $EB_ENV
# eb codesource local
eb init --region us-east-1 udagram-api
# eb use Udagramapi-env
eb deploy Udagramapi-env