
const formdata = require('../model/formdata')
const fdataid=async(req,res)=>{
    const data=await formdata.findById(req.params.id)
    //console.log(data)
    res.status(200).send(data)

}

const fdata=async(req,res)=>{
    const data=await formdata.find()
    //console.log("data->",data)
    res.status(200).send(data)

}

const fdataAdd=async(req,res)=>{
    //console.log(req.body)
    console.log(Array.isArray(req.body.label))
    const data=new formdata({
        fid:req.body.fid,
        name:req.body.name,
        desc:req.body.desc,
        url:req.body.url,
        label:req.body.label,
    })
    try {
        const result=await data.save()
        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        console.log(error.message)
    }
}

const fdataUpdate=async(req,res)=>{
    //console.log(req.body.label)
    //console.log(Array.isArray(req.body.label))
    try {
        const data=await formdata.findById(req.params.id)
        if(data){
            //data.fid=req.body.fid||data.fid
            data.name=req.body.name||data.name
            data.desc=req.body.desc||data.desc
            data.url=req.body.url||data.url
            data.label=req.body.label||data.label
            const  result=await data.save()
            console.log(result)
            res.status(200).send({"message":"updated successfully"})
        }
        else{
            res.status(200).send({"message":"rejected"})
        }

    } catch (error) {
        console.log(error.message)
    }
}


const fdataDelete=async(req,res)=>{
    try {
        const data=await formdata.findByIdAndRemove(req.params.id)
        console.log(data)
        res.status(200).send({message:"deleted successfuly"})
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    fdataid,
    fdata,
    fdataAdd,
    fdataDelete,
    fdataUpdate,
}