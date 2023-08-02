import React from 'react'
import './show.css'
function Erow({k,form,handleChange,setEdit}) {
  return (
    <tr key={k}>
        {Object.keys(form).map((value)=>(
        value==="_id"?(<th>{k}</th>):(<th>
            <input type='text' name={value} value={form[value]} onChange={handleChange}/>
        </th>)
        ))}
        <th className='gap'>
            <button  type='submit'>save</button>
            <button  type='button' onClick={()=>{setEdit(null)}}>cancel</button>
        </th>
    </tr>
  )
}

export default Erow