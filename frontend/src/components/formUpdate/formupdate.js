import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Delete from "../form/Delete"
import { Outlet } from 'react-router-dom'
import Fetching from '../loder/fetching'

function Formupdate({ setSselect, sselect }) {
  const [change,setChange]=useState(false)
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"


  useEffect(() => {
    setLoader(true);
    axios.get(`${BASE_URL}/api/sdata`)
      /* .then((res)=>console.log(JSON.stringify(res.data))) */
      .then((res) => {
        setData(res.data)
        setSselect(res.data[0])
        //console.log(res)
      })
      .then(() => { 
        setLoader(false)  
        setChange(false)
      })
      .catch(err=>window.alert("Oops! server is down"))

  }, [setSselect,change,BASE_URL])

  const deleteform = async (form) => {
    try {
      //console.log(form)
      const res = await axios.delete(`${BASE_URL}/api/sdata/${form}`)
      setChange(true)
      console.log(res.data);
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleDelete = (e,id) => {
    e.preventDefault()
    deleteform(id)
  }
  if (loader) {
    return (
      <div><Fetching/></div>
    )
  }
  else if (data === undefined || data.length === 0) {
    return (
      <div className='sub'><h1>No Data To Show</h1>{console.log("nodata")}</div>
    )
  }
  else
    return (
      <>
      <div className="top">
        {
          data.map((value) => (
            <div className="navcontainer">
              <div
                onClick={() => setSselect(value)}
                className={value === sselect ? "nav-select" : "nav"}
              >
                {value}

              </div>
              <div onClick={(event)=>handleDelete(event,value)}>
              <Delete/>
              </div>
            </div>
          ))
        }
      </div>
      <Outlet/>
      </>
    )
}


export default Formupdate
