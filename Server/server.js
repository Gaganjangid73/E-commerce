const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const authrouter = require('./routes/auth/auth_routes');

// if mongoDB url not found then throw the warning 
if (!process.env.MONGODB_URI) {
  console.warn('MONGODB_URI is not set. Please configure it in your environment.');
}

// connect to the mongoDB 
mongoose
  .connect(process.env.MONGODB_URI || '')
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods :['GET','POST','DELETE', 'PUT'],
        allowedHeaders : [
            "content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    }));

    app.use(cookieParser());
    app.use(express.json());
    app.use("/api/auth", authrouter);

 

    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));


    // now i want to work  on many  parts and feature of the this website  
    // fg