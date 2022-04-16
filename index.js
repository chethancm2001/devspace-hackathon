//importing the packages
const express = require('express')
const mogoose = require('mongoose')
const cors = require('cors')
const routes = require('./routing.js')

//creating the app
const app = express()

//connecting monogdb
mogoose.connect("mongodb+srv://chethancm001:chethancm@cluster0.2p5zc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('conected to db')
}).catch(()=>{console.log('connected to db')})

//midlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}))
app.use(express.static('frontend'))


//all the routes goes here
app.use('/',routes)



//port 
const port = process.env.PORT || 3000

//setting the server
app.listen(port,()=>{
    console.log('server is runing')
})