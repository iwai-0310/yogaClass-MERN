const express = require('express')
const mongoose = require('mongoose')

// create app variable as express instant
const app = express()

//routes here
app.get('/', (req, res) => {
    //send greetings to Client
    res.send('Hello NODE API')
})

//isten to port 3000
app.listen(3000,()=>{
    console.log('Node API running on port 3000');
})

//connect to mongoose if success print success else log the error
mongoose.connect('mongodb+srv://admin:qwerty12345@yogaappapi.owv17ar.mongodb.net/YogaCards?retryWrites=true&w=majority&appName=YogaAppAPI')
.then(() => {
    console.log('connected to MongoDB')
    })
.catch((error) => {
    console.log(error)
})