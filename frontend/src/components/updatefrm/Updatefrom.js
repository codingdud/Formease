import React, {useState,useEffect,Fragment } from 'react'
import '../createform/cform.css'

import Heade from '../formHeader/header'
import Input from '../createform/input'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios'
import Datafetching from '../loder/Datafetching'

function Updatefrom({uselect}) {
    console.log("update form",uselect)
    const [formData,setFormData]=useState({})
    const [loader,setLoader]=useState(false)
    const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"

    useEffect(()=>{
        setLoader(true);
        axios.get(`${BASE_URL}/api/fdata/${uselect}`)
         .then((res)=>{setFormData(res.data)
        console.log("get",res.data)})
         .then(()=>{setLoader(false)})
    },[uselect,BASE_URL])
    
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value })
    }
    const handleChangeArray=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value.split(',') })
    }
    console.log("form",formData)
    const sendData=async(formData)=>{
      try {
        const id=formData._id
        const temp={...formData}
        delete temp['_id']
        //console.log(temp)
        const res=await axios.put(`${BASE_URL}/api/fdata/${id}`,temp)
        //console.log(res.data);
        toast.success(res.data.message)
  
      } catch (error) {
        console.log(error)
      }
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      sendData(formData)
    }

    const deleteform=async(formData)=>{
        try{
           // console.log(formData._id)
        const res=await axios.delete(`${BASE_URL}/api/fdata/${formData._id}`)
        console.log(res.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleDelete=(e)=>{
        e.preventDefault()
        deleteform(formData)
    }
    if(loader){
        return(
          <div><Datafetching/></div>
        )
      }
      if(formData===undefined||formData==={}){
        <div>no data{console.log("no data")}</div>
      }  
    else{
    return (
      <div >
         <form id="create-form" className='formhead' onSubmit={handleSubmit}>
          <Heade text="Update Form"/>
          <div className='sub'> Update the form Information for ({formData.name})</div>
          <div className='inputcontainer'>
            <form className='formhead'>
            {
                Object.keys(formData).map((val)=>(
                    <Fragment>
                    {val==="_id"||val==="__v"?<div className='hid'>{formData[val]}</div>:val==="label"?
                    <Input label={val} val={formData} ob={val} change={handleChangeArray}/>:
                    <Input label={val} val={formData} ob={val} change={handleChange}/>}
                    </Fragment>
                    ))
            }
            </form>
          </div> 
          
          <div className='butt'>
            <input className='button' type="submit" value="Update"/> 
            <input className='button' type="button" value="Delete" onClick={handleDelete}/>
          </div>
             
          </form>
          <ToastContainer/>
      </div>
    )
}
}
export default Updatefrom