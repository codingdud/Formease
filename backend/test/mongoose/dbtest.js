const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./.env.local'})
//mongoose.connect(`${process.env.MID}${process.env.DB2}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(`${process.env.MID}${process.env.DB}?retryWrites=true&w=majority`)
mongoose.help = mongoose.createConnection(`${process.env.MID}${process.env.DB}?retryWrites=true&w=majority`);
mongoose.sdata = mongoose.createConnection(`${process.env.MID}${process.env.DB2}?retryWrites=true&w=majority`);


mongoose.help.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.sdata.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports=mongoose