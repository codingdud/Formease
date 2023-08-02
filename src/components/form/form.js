import "./form.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Delete from "./Delete"
import Update from "./Update"
import Addform from "./Addform"
import { Link , Outlet} from "react-router-dom"
import { useChange } from "../context"

function Form({ setSelectform, selectform }) {
  const change=useChange()
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true);
    axios.get("//localhost:5001/api/fdata")
      /* .then((res)=>console.log(JSON.stringify(res.data))) */
      .then((res) => {
        res.data.length!==0 && setSelectform(res.data[0]._id)
        res.data.length!==0 && setData(res.data)
        //console.log("form",res)
      })
      .then(()=>{setLoader(false)})
  }, [setSelectform,change.temp])
  //console.log(selectform)
  const deleteform = async (id) => {
    try {
      console.log(id)
      const res = await axios.delete(`//localhost:5001/api/fdata/${id}`)
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
      <div>feaching..
        
      </div>
    )
  }
  else if (data === undefined || data.length === 0) {
    return (
      <div>no data:{console.log("nodata")}
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