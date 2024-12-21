import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import admin from "../firebase-admin-config.js";

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.replace(/\/$/, "")
      : "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], 
  })
);

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

import Routes from "./routes/index.js";
app.use("/api", Routes);

app.post("/testing", (req, res) => {
  console.log("Testing");
  res.send("Hello testing completed");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

export { app };
