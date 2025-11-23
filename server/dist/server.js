"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
// creating express app
const app = (0, express_1.default)();
// setters
app.set("port", process.env.PORT || 4000);
// middlewares
app.use(express_1.default.json());
// routes
app.use(router_1.default);
// server
app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});
