const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a database
mongoose
  .connect(
    "mongodb+srv://gagancoding70:Gagan%4002@e-commerce.umw9msj.mongodb.net/e-commerce")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

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

    app.listen(PORT, ()=> console.log('server is now running on PORT'));