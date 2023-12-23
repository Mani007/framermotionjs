import React from 'react'

function Box(props) {
  return (
    <>
    <div className={`box-content h-25 w-32 p-4 rounded ${props.color}`} >
  <p className='z-10 text-center text-white'>{props.text}</p>
</div>
    </>
  )
}

export default Box