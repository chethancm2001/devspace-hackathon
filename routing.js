const express = require('express')
const Datamodel = require("./model.js")
routes = express.Router()

//all the router  come here 


//home page route
routes.get('/',(req,res)=>{
    async function datafromdb(){
        let data1 = await Datamodel.find({})
        res.send(data1)
        
      
        }
        datafromdb()
})

//update page route
routes.post('/post',(req,res)=>{
//input datavalidation


// async function updatadb(){
//   let resu = await Datamodel.findByIdAndUpdate("625908d378ae67ace32a6685",{
//       $set:{
//           firedata:0
//           }
//   })
//   console.log(resu)
// }
// updatadb() 
// res.send("updated")
    var fired = Number(req.body.fire);
    var  gasd=  Number(req.body.gas);
    var waterd = Number(req.body.water);
    var ledd = Number(req.body.led);
    console.log([fired,gasd,waterd,ledd])
   //validation and twilio came here
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
