//Dependencies
const express = require('express')
const mongoose = require('mongoose')

//config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

//middleware

//routes
app.get('/', (req, res) => {
    res.send('<h1>Travel Log App</h1>')
})

//users


//posts


//listen
app.listen(PORT, () => {
    console.log('listening at port', PORT);
})