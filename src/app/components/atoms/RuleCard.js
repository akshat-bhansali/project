import React from 'react'

const RuleCard = (props) => {
  return (
    <div className='border-[1px] rounded-lg border-[#CFCFCF]'>
      <div className={`${props.color} text-white my-auto flex flex-col rounded-t-lg p-5 gap-2`}>
        <span className='font-bold text-xl'>{props.heading}</span>
        <span className='font-lightctext-lg'>{props.subheading}</span>
      </div> 
      <div className=' py-8'>
      <ul className='text-xs font-normal text-[#263238] list-disc px-10'>
        <li>{props.point1}</li>
        <li>{props.point2}</li>
        <li>{props.point3}</li>
        <li>{props.point4}</li>
        <li>{props.point5}</li>
        <li>{props.point6}</li>
        <li>{props.point7}</li>
        <li className={`${props.status}`}>{props.point8}</li>
        <li className={`${props.status}`}>{props.point9}</li>
        <li className={`${props.status}`}>{props.point10}</li>
        <li className={`${props.status}`}>{props.point11}</li>
      </ul>
      </div>
    </div>
  )
}

export default RuleCard
