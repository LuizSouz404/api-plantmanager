"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = require("./app");
dotenv_1.default.config();
app_1.app.listen(3333, function () {
    console.log('Server is running on port 3333!');
});
