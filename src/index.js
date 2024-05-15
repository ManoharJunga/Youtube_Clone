import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Example app listening on http://localhost:${port}`)
    })
})
.catch( (error) => {
    console.log( "Mongodb connection failed!! ", error );
    throw err;
})













/*

import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log( "Error", error );
            throw err;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App listening on ${process.env.PORT}`);
        })

    }catch( error ){
        console.log( "Error", error );
        throw err;
    }
})

*/