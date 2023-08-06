import React from 'react'
import './cform.css'
import Heade from '../formHeader/header'
import Input from './input'
import { useState} from 'react'
import axios from 'axios'
import { useChange } from '../context'

function Cform() {
  const change=useChange()
  const [formData,setFormData]=useState({})
  const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })
  }
  const handleChangeArray=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value.split(',') })
  }
  const clearform=(e)=>{
    e.preventDefault()
    setFormData({})
    document.getElementById("create-form").reset()
  }
  //console.log(formData)
  const sendData=async(formData)=>{
    try {
      const res=await axios.post(`${BASE_URL}/api/fdata`,formData)
      change.change()
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
    <div >
       <form id="create-form" className='formhead' onSubmit={handleSubmit}>
        <Heade text="Create Form"/>
        <div className='sub'> Fill the form Information</div>
        <div className='inputcontainer'>
        <Input label={"From Name"} ob={"name"} val={formData} change={handleChange}/>
        </div>
        <div className='inputcontainer'>
        <Input label={"From Description"} ob={"desc"} val={formData} change={handleChange}/>
        </div>
        <div className='inputcontainer'>
        <Input label={"Form labels"} val={formData} ob={"label"} change={handleChangeArray}/>
        </div> 
        <div className='butt'>
          <input className='button' type="button" value="clear" onClick={clearform}/> 
          <input className='button' type="submit" value="Submit"/> 
        </div>
           
        </form>
    </div>
  )
}

export default Cform