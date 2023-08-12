const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./.env.local'})
//mongoose.connect(`${process.env.MID}${process.env.DB2}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
//console.log(`${process.env.MID}${process.env.DB2}?retryWrites=true&w=majority`)


mongoose.sdata = mongoose.createConnection(`${process.env.MID}${process.env.DB2}?retryWrites=true&w=majority`)
mongoose.fdata = mongoose.createConnection(`${process.env.MID}${process.env.DB1}?retryWrites=true&w=majority`)


module.exports=mongoose
