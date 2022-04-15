const express = require('express')
const mogoose = require('mongoose')

const app = express()
mogoose.connect('mongodb+srv://chethancm001:chethancm@cluster0.2p5zc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('conected to db')
}).catch(()=>{console.log('connected to db')})


app.use(express.json())
app.use(express.urlencoded())

app.post('/',(req,res)=>{
    let body =req.body
    res.send(body)
})

app.get('/sensor-data',(req,res)=>{
    res.send("working fine")
})

app.listen(3000,()=>{
    console.log('server is runing')
})