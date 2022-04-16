//importing the packages
const express = require('express')
const mogoose = require('mongoose')
const routes = require('./routing.js')
// const cros = require('cors')

const app = express()

//connecting monogdb
mogoose.connect("mongodb+srv://chethancm001:chethancm@cluster0.2p5zc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('conected to db')
}).catch(()=>{console.log('connected to db')})

//midlewares
// app.use(cros())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ejs setup


//all the routes goes here
app.use('/',routes)




const port = process.env.PORT || 3000

//setting the server
app.listen(port,()=>{
    console.log('server is runing')
})