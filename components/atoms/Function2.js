import React from 'react'
import Image from "next/image";

const Function2 = (props) => {
  return (
    <a href={props.link} className='w-[25vw] min-w-[270px] pt-5 h-[143px] rounded-lg border-[#CFCFCF] border-[1px] bg-white text-black hover:bg-[#004AAD] hover:text-white flex flex-col items-center font-bold text-sm'>
      <Image height={50} width={50} src={props.icon} alt="" className='h-[50] w-[50]'/>
      <div><u>{props.heading}</u></div>
    </a>
  )
}

export default Function2
