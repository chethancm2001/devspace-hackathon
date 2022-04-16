const express = require('express')
const twilio = require('twilio')
const Datamodel = require("./model.js")
require ('dotenv').config()

const client = new twilio(process.env.SID, process.env.TOKEN);
routes = express.Router()
client.logLevel = 'debug';
//all the router  come here 


function sendsms(mess){
  client.messages.create({
      body:mess,
      from:"+13256670177",
      to:"+919148521359"
  }).then(message=>{
      console.log(message)
  }).catch(err=>{console.log(err)})
  }

  
  

//home page route
routes.get('/',(req,res)=>{
    async function datafromdb(){
        let data1 = await deleteMany({}, ()=>{res.send('delted all')})
        
        }
        datafromdb()
})

//update page route
routes.post('/post',(req,res)=>{

    var fired = Number(req.body.fire);
    var  gasd=  Number(req.body.gas);
    var waterd = Number(req.body.water);
    var ledd = Number(req.body.led);
    console.log([fired,gasd,waterd,ledd])


   //validation and twilio came here
   //twilio
   if(fired === 1){
      sendsms("fire is detected in home")
   }
   if(gasd === 1){
       sendsms("gas is leaking in home")
   }
   if(waterd===1){
     sendsms("water is full in home")
   }
   
    async function datatodb(){
        let datan = new Datamodel({firedata:fired,gasdata:gasd,waterlevel:waterd,led:ledd})
        let result =await  datan.save()
        if(result){
            res.send(result)
        }
        else{
          res.send('not updated')
        }
    }
    datatodb()



})

module.exports = routes
