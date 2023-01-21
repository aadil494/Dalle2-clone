import express from "express";

import * as dotenv from 'dotenv';

import cors from 'cors';

import connectDB from "./mongodb/connect.js";

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// allows us to pull our environment variables from our env file 
dotenv.config();

// initilize express 

const app = express();

// Add middlewares
app.use(cors());

app.use(express.json({'limit':'50mb'}));

// render the routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// first route

app.get('/', async(req,res)=> {
    res.send("Hello from DALL-E!");
})

const startServer = async ()=>{

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen('8080', ()=> {
            console.log('Server has been started on port 8080 http://localhost:8080')
        });
    } catch (error) {
        console.log(error);
    }

    
}

startServer();
