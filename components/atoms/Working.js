import React from 'react'

const Working = (props) => {
  return (
    <div className='grid grid-rows-3 justify-items-center text-center mx-auto lg:w-1/2 '>
      <div className='font-bold text-sm mt-8 mb-3'>{props.index}</div>
      <img src={props.icon} alt="" />
      <div className='font-semibold text-base'>{props.heading}</div>
      <div className='font-normal text-xs'>{props.subheading}</div>
    </div>
  )
}

export default Working
