import React from 'react'

const Function2 = (props) => {
  return (
    <div className='w-[25vw] min-w-[270px] pt-5 h-[143px] rounded-lg border-[#CFCFCF] border-[1px] bg-white text-black hover:bg-[#004AAD] hover:text-white flex flex-col items-center font-bold text-sm'>
      <img src={props.icon} alt="" className='h-[50] w-[50]'/>
      <div><u>{props.heading1}</u></div>
      <div><u>{props.heading2}</u></div>
    </div>
  )
}

export default Function2
