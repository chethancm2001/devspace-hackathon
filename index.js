const express = require('express')

const app = express()

app.post('/',(req,res)=>{
    res.send(req.body)
})
app.get('/sensor-data',(req,res)=>{
    res.send("working fine")
})

app.listen(3000,()=>{
    console.log('server is runing')
})