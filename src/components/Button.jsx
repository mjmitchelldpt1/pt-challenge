import React from 'react'

function Button({ children }) {
  return (
    <button className='p-2 m-2 bg-black text-white text-lg hover:scale-95 hover:cursor-pointer rounded-lg shadow-xl'>
        Add Text
    </button>
  )
}

export default Button
