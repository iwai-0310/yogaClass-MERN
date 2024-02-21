const express = require('express')
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