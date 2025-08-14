import React from 'react'
import "./Toggle.css"

function Toggle({handlechange, ischecked }) {
  return (
    <div className='toggle-container'>
      <input 
      className='toggle' 
      type='checkbox'
      id='check'
      onChange={handlechange}
      checked = {ischecked}
      />
      <label htmlFor="check"></label>
    </div>
  )
}

export default Toggle
