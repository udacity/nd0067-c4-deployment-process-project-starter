import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
<<<<<<< HEAD:udagram/udagram-api/src/sequelize.ts
=======
  port: config.dbPort,

>>>>>>> 77257f5710956c577a15ed7468cf4fec046c3760:udagram-api/src/sequelize.ts
  dialect: "postgres",
  storage: ":memory:",
});
