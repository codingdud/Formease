import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import Heade from '../formHeader/header'
import List from "./list"
function Listform({selectform}) { 
    const [formData,setFormData]=useState({})
    const [label,setLabel]=useState([])
    const [des,setDes]=useState({})
    const [loader,setLoader]=useState(false)
    useEffect(()=>{
        setLoader(true);
        axios.get(`//localhost:5001/api/fdata/${selectform}`)
         .then((res)=>{
          setLabel(res.data.label)
          setDes(res.data)
        })
         .then(()=>{setLoader(false)})
         .then(()=>{
          setFormData({})
         })
         
    },[selectform])
    //console.log(des)
    console.log(formData)

    if(loader){
      return(
        <div>feaching..</div>
      )
    }
    if(label===undefined||label.length===0){
      <div>no data{console.log("no data")}</div>
    }
    else{
      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value })
      }
      const sendData=async(formData)=>{
        try {
          const res=await axios.post(`//localhost:5001/api/sdata/${des.name}`,formData)
          console.log(res.data);

        } catch (error) {
          console.log(error)
        }
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        sendData(formData)
      }
      return (
        <form id='showform' className='formhead' onSubmit={handleSubmit}>
          <Heade text={des.name+" From"}/>
          <div className='sub'>{des.desc}</div>
          <div className='inputcontainer'>
          {
          label.map((fild)=>(
            <List
            list={fild}
            val={formData.fild}
            change={handleChange}
            />
        ))
        }
        </div>
        <input className='button' type="submit" value="Submit"/>
        </form>
      )
  }
}

export default Listform