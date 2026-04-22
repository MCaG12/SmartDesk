import "dotenv/config"; 
import "reflect-metadata";           
import express from "express";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());


app.get("/", (req, res) => res.json({ message: "API running!" }));

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected.");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });