import React from 'react'
import LoadingSpinner from './images/LoadingSpinner.svg'

function Loading() {
  return (
    <div className='container flex justify-center item-center'>
      <img src={LoadingSpinner} alt="Loading" />
    </div>
  )
}

export default Loading
