const mongoose=require('mongoose')
const Schema=mongoose.Schema

const form_data=new Schema({
    name:{
        type:String,
    },
    desc:{
        type:String,
    },
    label:{
        type:Array,
    }
})
 module.exports=mongoose.model('fdatas',form_data)