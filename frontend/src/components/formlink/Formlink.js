import React from 'react'
import { useParams } from 'react-router-dom'
import Listform from '../form/listform'

function Formlink() {
  const {id}=useParams()
  return (<Listform selectform={id} />)
}

export default Formlink