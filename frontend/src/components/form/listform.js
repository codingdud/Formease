import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import Heade from '../formHeader/header'
import List from "./list"
import Datafetching from '../loder/Datafetching'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Listform({selectform}) { 
    const [formData,setFormData]=useState({})
    const [label,setLabel]=useState([])
    const [des,setDes]=useState({})
    const [loader,setLoader]=useState(false)
    const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"
    useEffect(()=>{
        setLoader(true);
        axios.get(`${BASE_URL}/api/fdata/${selectform}`)
         .then((res)=>{
          setLabel(res.data.label)
          setDes(res.data)
        })
         .then(()=>{setLoader(false)})
         .then(()=>{
          setFormData({})
         })
         
    },[selectform,BASE_URL])
    //console.log(des)
    //console.log(formData)

    if(loader){
      return(
        <div><Datafetching/></div>
      )
    }
    if(label===undefined||label.length===0){
      <div>No forms{console.log("no forms")}</div>
    }
    else{
      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value })
      }
      const sendData=async(formData)=>{
        try {
          const res=await axios.post(`${BASE_URL}/api/sdata/${des.name}`,formData)
          console.log(res.data);
          toast.success(res.data.message)
          setFormData({})
          document.getElementById("showform").reset()

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
          <Heade text={des.name+" From"} path={selectform}/>
          <div className='sub'>{des.desc}</div>
          <div className='inputcontainer'>
          {
          label.map((fild)=>(
            <List
            key={fild}
            list={fild}
            val={formData.fild}
            change={handleChange}
            />
        ))
        }
        </div>
        <input className='button' type="submit" value="Submit"/>
        <ToastContainer/>
        </form>
      )
  }
}

export default Listform