const express = require('express');
const app = express.Router();
const Task = require('../model/task')

app.get('/data',async(req,res)=>{
    const tasks = await Task.find({});
    
    res.status(200).json({
        message:"Tasks fetched successfully",
        tasks
    })
});

module.exports = app;