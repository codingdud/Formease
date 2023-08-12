const { ObjectId } = require('mongodb')
const client=require('../assets/database')

const addData=async(req,res)=>{
    //console.log(req.params.form)
    //console.log(req.body)
    try {
        const result=await client.sdata.db.collection(req.params.form).insertOne(req.body)
        if(result){
            res.status(200).send({"message":"data added successful"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message":"fail"})
    }
    
}

const getlist=async(req,res)=>{

    const collections = await client.sdata.db.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);
    //console.log("collection name",collectionNames)
    res.status(200).send(collectionNames)
}

const getsdata=async(req,res)=>{
    const listform=client.sdata.db.collection(req.params.form)
    const queryResult = await listform.find({}).toArray();
    res.status(200).send(queryResult)
}

const updatesdata=async(req,res)=>{
    //console.log(req.body)
    //console.log(req.params.id)
    //console.log(req.params.form)
    const update={
        $set:req.body
    }
    const collection = client.sdata.db.collection(req.params.form);   
    const queryResult = await collection.updateOne({_id:new ObjectId(req.params.id)},update)
    if(queryResult){
        res.status(200).send({"mesage":"data updated successfull"})
    }else{
        res.status(400).send({"mesage":"fail"})
    }
}
const sdelete=async(req,res)=>{
    const collection = client.sdata.db.collection(req.params.form);
    const queryResult = await collection.deleteOne({_id:new ObjectId(req.params.id)})
    console.log(queryResult)
    if(queryResult){
        res.status(200).send({"mesage":"data deleted successfull"})
    }else{
        res.status(400).send({"mesage":"fail"})
    }
}

const ddelete=async(req,res)=>{
    const result=client.sdata.db.dropCollection(req.params.form)
    if(result){
        res.status(200).send({"mesage":"form data deleted successfull"})
    }else{
        res.status(400).send({"mesage":"fail"})
    }
}

module.exports={
    addData,
    getlist,
    getsdata,
    updatesdata,
    sdelete,
    ddelete
}