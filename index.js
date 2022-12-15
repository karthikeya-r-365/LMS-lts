const express = require('express');
const mongoose = require('mongoose')
const app = express()
const rotue = require('./src/Routes/route')

app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://karthikeya:wv365@cluster0.6v924iv.mongodb.net/LMS',{useNewUrlParser: true})
.then(()=> console.log('MongoDB is Connected'))
.catch( err => console.log(err))

app.use('/', rotue);




app.listen(3000, ()=>{
    console.log("server running on port 3000......")
})