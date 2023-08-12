const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose =require('mongoose');
const uri = "mongodb+srv://animesh:2024@cluster0.rfijjbe.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.sdata=mongoose.createConnection(`${process.env.MID}${DB}?retryWrites=true&w=majority`,{
  
})
module.exports=client


