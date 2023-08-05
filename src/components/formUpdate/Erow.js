import React from 'react'
import './show.css'
function Erow({k,form,handleChange,setEdit}) {
  return (
    <tr key={k}>
        {Object.keys(form).map((value)=>(
        value==="_id"?(<td>{k}</td>):(<td>
            <input type='text' name={value} value={form[value]} onChange={handleChange}/>
        </td>)
        ))}
        <td className='gap'>
            <button  type='submit'>save</button>
            <button  type='button' onClick={()=>{setEdit(null)}}>cancel</button>
        </td>
    </tr>
  )
}

export default Erow