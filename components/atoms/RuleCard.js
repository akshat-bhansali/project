import React from 'react'

const RuleCard = (props) => {
  return (
    <div className='border-[1px] rounded-lg border-[#CFCFCF] h-fit'>
      <div className={`${props.color} text-white my-auto flex flex-col rounded-t-lg p-5 gap-2`}>
        <span className='font-bold text-xl'>{props.heading}</span>
        <span className='font-lightctext-lg'>{props.subheading}</span>
      </div> 
      <div className=' py-8'>
      <ul className='text-xs font-normal text-[#263238] list-disc px-10'>
          {props.points.map(point=><li>{point}</li>)}
      </ul>
      </div>
    </div>
  )
}

export default RuleCard
