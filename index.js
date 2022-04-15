const express = require('express')

const mogoose = require('mongoose')
const routes = require('./routing.js')
require('dotenv').config()

const app = express()

//connecting monogdb
mogoose.connect(process.env.DB_URL)
.then(()=>{
    console.log('conected to db')
}).catch(()=>{console.log('connected to db')})


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ejs setup


app.use('/',routes)




const port = process.env.PORT || 3000


app.listen(port,()=>{
    console.log('server is runing')
})