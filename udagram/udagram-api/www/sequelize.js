"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: config_1.config.username,
    password: config_1.config.password,
    database: config_1.config.database,
    host: config_1.config.host,
    dialect: "postgres",
    storage: ":memory:",
});
//# sourceMappingURL=sequelize.js.map