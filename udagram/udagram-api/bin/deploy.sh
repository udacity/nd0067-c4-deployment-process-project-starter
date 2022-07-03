eb init $EB_APP --region $AWS_REGION --platform node.js
eb create --sample $EB_ENV
eb use $EB_ENV
eb deploy $EB_ENV




