const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose =require('mongoose')



dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URI

mongoose.connect(url).then((con)=>console.log(`Database connected ${con.connection.host}`))
app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(port,()=>{
    console.log(`Did ${port}`)
})