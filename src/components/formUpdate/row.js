import React from 'react'
import './show.css'
function Row({ k, e, handleClick, handleDelete }) {
  return (
    <tr key={k}>
      {Object.keys(e).map((value) => (
        value === "_id" ? (<th>{k}</th>) : (<th>{e[value]}</th>)
      ))}
      <th>
        <div className='gap'>
          <button type='button' onClick={(event) => { handleClick(event, k, e) }}>edit</button>
          <button type='button' onClick={(event) => { handleDelete(event, e._id) }}>delete</button>
        </div>
      </th>
    </tr>
  )
}

export default Row