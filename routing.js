const express = require('express')
const Datamodel = require("./model.js")
routes = express.Router()

//all the router 


//home page route
routes.get('/',(req,res)=>{
    async function datafromdb(){
        let data1 = await Datamodel.find({})
        console.log(data1)
        res.json({data:"data1"})
      
        }
        datafromdb()
})

//update page route
routes.get('/post',(req,res)=>{
//input datavalidation

async function updatadb(){
  let resu = await Datamodel.findByIdAndUpdate("625908d378ae67ace32a6685",{
      $set:{
          firedata:0
          }
  })
  console.log(resu)
}
updatadb() 
res.send("updated")

})

module.exports = routes
