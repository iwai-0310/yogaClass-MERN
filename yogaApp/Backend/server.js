// async errors
require('dotenv').config()
require('express-async-errors')
//import express
const express = require('express')
const mongoose = require('mongoose')

// create app variable as express instant
const app = express();
//add CORS
const cors=require('cors');
//connect to the db
const connectDB=require("./db/connect")

const cardsRouter=require('./routes/cards')

//add middleware for not-found and error
const notFoundMiddleware=require('./middleware/not-found');
const errorMiddleware=require('./middleware/error-handler');

//use cors with express instance
app.use(express.json());

//cors support
app.use(cors());

app.get("/",(req,res)=>{
    res.send('<h1>Cards API</h1><a href="/api/v1/products"> products routes</a>')
  })
  
  app.use("/api/v1/cards",cardsRouter)
  
  //products route
  app.use(notFoundMiddleware);
  app.use(errorMiddleware);
  
  const port=process.env.PORT || 3000;
  
  const start=async()=>{
    try{
      await connectDB(process.env.MONGO_URI)
      app.listen(port,console.log('Server is listening oon 3000'))
    }
    catch(err){
      console.log(err);
    }
  }
  start();
