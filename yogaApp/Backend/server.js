// async errors
require('dotenv').config()
require('express-async-errors')
//import express
const express = require('express')
const mongoose = require('mongoose')

// create app variable as express instant
const app = express()
//add CORS
const cors=require('cors');
//connect to the db
const connectDB=require("./db/connect")

//add middleware for not-found and error
const notFoundMiddleware=require('./middleware/not-found');
const errorMiddleware=require('./middleware/error-handler');

//routes here
app.get('/', (req, res) => {
    //send greetings to Client
    res.send('Hello NODE API')
})



//connect to mongoose if success print success else log the error
mongoose.connect('mongodb+srv://admin:qwerty12345@yogaappapi.owv17ar.mongodb.net/YogaCards?retryWrites=true&w=majority&appName=YogaAppAPI')
    .then(() => {
         console.log('connected to MongoDB')
        //listen to port 3000
        app.listen(3000, () => {
            console.log('Node API running on port 3000');
        })
       
    })
    .catch((error) => {
        console.log(error)
    })