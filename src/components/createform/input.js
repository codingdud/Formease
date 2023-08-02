import React from 'react'
/* import './cform.css' */
function Input({label,val,ob,change}) {
  return (
    <div className='fram3'>
        <label className='label'for={label}>{label}</label>
        
        <svg className="strock" xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1040 2" fill="none">
          <path d="M0 1H1040" stroke="black"/>
        </svg>
        
        <input className='input' type='text'  id={label} name={ob} value={val[ob]} onChange={change}/>
    </div>
  )
}

export default Input