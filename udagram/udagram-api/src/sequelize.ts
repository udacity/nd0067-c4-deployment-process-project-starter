import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

const {
  username,
  password,
  rds_db_url,
  posgres_port,
  database
} = config;

const stringUrl: string = `postgres://${username}:${password}@${rds_db_url}:${posgres_port}/postgres`;


var options = {
  host     : rds_db_url,
  user     : username,
  password : password,
  port     : posgres_port
}

export const sequelize = new Sequelize(stringUrl);
