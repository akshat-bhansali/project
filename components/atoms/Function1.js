import React from 'react'

const Function1 = (props) => {
  return (
    <div className='flex flex-col items-center text-xs gap-5 text-black'>
        <img src={props.icon} alt="" className='h-[50px] w-[50px]'/>
        <div className='flex flex-col items-center'>
            <div className='font-bold'>{props.heading}</div>
            <div className='font-normal max-w-[180px] text-center'>{props.subheading}</div>
        </div>
    </div>
  )
}

export default Function1