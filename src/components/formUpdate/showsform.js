import axios from 'axios'
import React from 'react'
import { useState,useEffect,Fragment } from 'react'
import Row from './row'
import Erow from './Erow'
import './show.css'


function Showsform({sselect}) {
    const [edit,setEdit]=useState(null)
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(false)
    const [formData,setFormData]=useState({})
    const [del,setDel]=useState(0)
    useEffect(()=>{
        setLoader(true);
        axios.get(`//localhost:5001/api/sdata/${sselect}`)
            .then((res)=>{setData(res.data)})
            .then(()=>{setLoader(false)
                setDel(0)
            })
    },[sselect,edit,del])
    console.log(data)
    console.log(formData)
    if(loader){
        return(
          <div>feaching..</div>
        )
      }
    else{
        const handleChange=(e)=>{
            e.preventDefault()
            setFormData({...formData,[e.target.name]:e.target.value })
          }
       
        const handleClick=(event,k,val)=>{
            event.preventDefault();
            setFormData(val)
            setEdit(k)
            
        }
        const sendData=async(formData)=>{
            try {
                const id=formData._id
                const temp={...formData}
                delete temp['_id']
                console.log(temp)
                const res=await axios.put(`//localhost:5001/api/sdata/${sselect}/${id}`,temp)
                setEdit(null)
                console.log(res.data);
    
            } catch (error) {
                console.log(error)
            }
          }
          const handleSubmit=(e)=>{
            e.preventDefault();
            sendData(formData)
          }
          const handleDelete=async(event,id)=>{
            event.preventDefault()
            console.log(id)
            try {
                const res=await axios.delete(`//localhost:5001/api/sdata/${sselect}/${id}`)
                setDel(1)
                console.log(res.data);
      
              } catch (error) {
                console.log(error)
              }

          }
        
    return (
        <div >
            <form className='App' onSubmit={handleSubmit}>
            <table>
        {
            data.map((e,k)=>(
                <Fragment>{
                    edit===k?
                    <Erow e={e} k={k} form={formData} handleChange={handleChange} setEdit={setEdit}/>: 
                    <Row k={k} e={e} handleClick={handleClick} handleDelete={handleDelete}/>
                }</Fragment>
            ))
        }
            </table>
            </form>
        </div>
    )
    }
}

export default Showsform