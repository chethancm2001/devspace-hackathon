const mongoose = require('mongoose')

let dataSchema = new mongoose.Schema({
    firedata:{
        type:Number
    },
    gasdata:{
        type:Number
    },
    waterlevel:{
        type:Number
    },
    led:{
       type:Number
    },
    date:{
       type:Date,
       default:Date.now()
    }

})


let Datamodel = new mongoose.model("Data",dataSchema)
module.exports = Datamodel