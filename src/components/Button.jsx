import React from 'react'

function Button({title}) {
  return (
    <button style={{ background: 'linear-gradient(90deg, #159ab7, #9ac5d3)', color: '#fff', boxShadow: '0 2px 8px #159ab780' }} className="px-8 py-4 rounded-full cursor-pointer font-bold transition-all duration-300">{title}</button>
  )
}

export default Button;