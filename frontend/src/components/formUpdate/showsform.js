import axios from 'axios'
import React from 'react'
import { useState, useEffect, Fragment } from 'react'
import Row from './row'
import Erow from './Erow'
import './show.css'
import Datafetching from '../loder/Datafetching'


function Showsform({ sselect }) {
    const [edit, setEdit] = useState(null)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState({})
    const [del, setDel] = useState(0)
    const BASE_URL = process.env.REACT_APP_BASE_URL || "//localhost:5001"

    useEffect(() => {
        setLoader(true);
        axios.get(`${BASE_URL}/api/sdata/${sselect}`)
            .then((res) => { setData(res.data) })
            .then(() => {
                setLoader(false)
                setDel(0)
            })
    }, [sselect, edit, del, BASE_URL])
    console.log(data)
    console.log(formData)
    if (loader) {
        return (
            <div><Datafetching/></div>
        )
    }
    else {
        const handleChange = (e) => {
            e.preventDefault()
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }

        const handleClick = (event, k, val) => {
            event.preventDefault();
            setFormData(val)
            setEdit(k)

        }
        const sendData = async (formData) => {
            try {
                const id = formData._id
                const temp = { ...formData }
                delete temp['_id']
                console.log(temp)
                const res = await axios.put(`${BASE_URL}/api/sdata/${sselect}/${id}`, temp)
                setEdit(null)
                console.log(res.data);

            } catch (error) {
                console.log(error)
            }
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            sendData(formData)
        }
        const handleDelete = async (event, id) => {
            event.preventDefault()
            console.log(id)
            try {
                const res = await axios.delete(`${BASE_URL}/api/sdata/${sselect}/${id}`)
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
                            data.map((e, k) => (
                                <Fragment>
                                    {
                                        k===0&&<tr>{Object.keys(e).map((value) => (
                                            value === "_id" ? (<th>No</th>) : (<th>{value}</th>)
                                          ))}
                                          <th>update</th>
                                          </tr>
                                            
                                    }
                                    {
                                        edit === k ?
                                            <Erow e={e} k={k} form={formData} handleChange={handleChange} setEdit={setEdit} /> :
                                            <Row k={k} e={e} handleClick={handleClick} handleDelete={handleDelete} />
                                    }
                                </Fragment>
                            ))
                        }
                    </table>
                </form>
            </div>
        )
    }
}

export default Showsform