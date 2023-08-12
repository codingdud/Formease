import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Header({text}) {
  const navigate=useNavigate()
  return (
    <div className='head'>
        <svg onClick={()=>{navigate(-1)}} xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none">
        <path d="M4 18.5L18.4 4.09998M4 18.5L18.4 32.9M4 18.5H40" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className='conten'>
            {text}
        </p>
    </div>
  )
}

export default Header