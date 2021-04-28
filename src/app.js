"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("./database");
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var app = express_1.default();
exports.app = app;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
