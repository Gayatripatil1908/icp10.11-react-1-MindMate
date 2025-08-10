import React from 'react'

function Button({ title }) {
  return (
    <button
      className="px-8 py-4 rounded-full cursor-pointer font-bold text-white
                 bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]
                 transition-transform duration-200 ease-out
                 hover:scale-105 active:scale-95"
    >
      {title}
    </button>
  )
}

export default Button;