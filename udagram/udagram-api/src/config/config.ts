import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.RDS_USER}`,
  password: process.env.RDS_PASSWORD,
  database: process.env.POSTGRES_DB,
  posgres_port:process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  aws_access_key_id:process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key:process.env.AWS_SECRET_ACCESS_KEY,
  rds_db_url:process.env.RDS_DATABASE_URL
};
