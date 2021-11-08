import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   port: Number(process.env.PORT),
//   host: process.env.POSTGRES_HOST,
//   dialect: "postgres",
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

export const config = {
    username: `${process.env.POSTGRES_USERNAME}`,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    server_port: Number(process.env.API_SERVER_PORT),
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    aws_access_key: process.env.AWS_ACCESS_KEY,
    aws_secret: process.env.AWS_SECRET,
    url: process.env.URL,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
};
