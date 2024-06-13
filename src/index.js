import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './env'
});

const app = express();

connectDB()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log("Mongodb connection failed!!", error);
        throw error;
    });
