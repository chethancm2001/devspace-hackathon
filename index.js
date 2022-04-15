const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    // Query the db and pass it to home.ejs to display or render a Landing page
    res.send('I am up')
})

app.post('/',(req,res)=>{
    // Data is recieved in url-encoded form. Should be added to db
    res.send(req.body)
})

app.get('/sensor-data',(req,res)=>{
    res.send("working fine")
})

app.listen(port,()=>{
    console.log('server is runing')
})