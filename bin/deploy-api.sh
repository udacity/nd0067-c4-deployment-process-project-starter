echo 'deploy artifact'
# eb init --region $AWS_DEFAULT_REGION $EB_APP
# eb deploy $EB_ENV
# eb init --region us-east-1 udagram-api

eb deploy
# eb deploy