import "./form.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Delete from "./Delete"
import Update from "./Update"
import Addform from "./Addform"
import { Link , Outlet} from "react-router-dom"
import { useChange } from "../context"
import Fetching from "../loder/fetching"

function Form({ setSelectform, selectform }) {
  const change=useChange()
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"


  useEffect(() => {
    setLoader(true);
    axios.get(`${BASE_URL}/api/fdata`)
      /* .then((res)=>console.log(JSON.stringify(res.data))) */
      .then((res) => {
        res.data.length!==0 && setSelectform(res.data[0]._id)
        res.data.length!==0 && setData(res.data)
        //console.log("form",res)
      })
      .then(()=>{setLoader(false)})
      .catch(err=>window.alert("Oops! server is down"))
  }, [setSelectform,change.temp,BASE_URL])
  //console.log(selectform)
  //console.log(BASE_URL)

  const deleteform = async (id) => {
    try {
      //console.log(id)
      const res = await axios.delete(`${BASE_URL}/api/fdata/${id}`)
      change.change()
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
      <div>
       <Fetching/>
      </div>
    )
  }
  else if (data === undefined || data.length === 0) {
    return (
      <div className="sub"><h1 style={{"display":"inline","margin":"10px"}}>Create Form</h1>{console.log("nodata")}
      <Link to="create">
      <Addform/>
      </Link>
      <Outlet/>
      </div>
    )
  }
  return (
    <>
    <div className="top">

      {data.map((form) => (
        <div className="navcontainer">
          <Link to="fill">
          <div
            onClick={() => setSelectform(form._id)}
            herf={form.url}
            className={form._id === selectform ? "nav-select" : "nav"}
            key={form._id}
          >
            {form.name}
            <span className="hid"> {form._id}</span>
          </div>
          </Link>
          <Link to="update" onClick={()=>setSelectform(form._id)}>
          <Update />
          </Link>
          <div onClick={(event)=>{handleDelete(event,form._id) 
            setSelectform("")
            setData([])
            }}>
          <Delete/>
          </div>
        </div>
      ))}
      <Link to="create">
      <Addform/>
      </Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Form