import "dotenv/config";
import express from "express";
import router from "./router/router";

// creating express app
const app = express();

// setters
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.json());

// routes
app.use(router);

// server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
