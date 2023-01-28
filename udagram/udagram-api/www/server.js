"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./sequelize");
const index_router_1 = require("./controllers/v0/index.router");
const body_parser_1 = __importDefault(require("body-parser"));
const model_index_1 = require("./controllers/v0/model.index");
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv.config();
    try {
        yield sequelize_1.sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    yield sequelize_1.sequelize.addModels(model_index_1.V0_FEED_MODELS);
    yield sequelize_1.sequelize.addModels(model_index_1.V0_USER_MODELS);
    yield sequelize_1.sequelize.sync();
    console.log("Database Connected");
    const app = (0, express_1.default)();
    const port = process.env.PORT || 8080;
    app.use(body_parser_1.default.json());
    // app.use(cors());
    // We set the CORS origin to * so that we don't need to
    // worry about the complexities of CORS.
    app.use((0, cors_1.default)({
        allowedHeaders: [
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
            "X-Access-Token",
            "Authorization",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Methods",
        ],
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        preflightContinue: true,
        origin: "*",
    }));
    app.use("/api/v0/", index_router_1.IndexRouter);
    // Root URI call
    app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send("/api/v0/");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`Backend server is listening on port ${port}....`);
        console.log(`Frontent server running ${process.env.URL}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map