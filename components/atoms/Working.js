import React from 'react'

const Working = (props) => {
  return (
    <div className='grid grid-rows-4 justify-items-center text-center'>
      <div className='font-bold text-sm mt-8'>{props.index}</div>
      <img src={props.icon} alt="" />
      <div className='font-semibold text-base'>{props.heading}</div>
      <div className='font-normal text-xs'>{props.subheading}</div>
    </div>
  )
}

export default Working
