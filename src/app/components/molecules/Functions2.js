import React from 'react'
import Function2 from '../atoms/Function2'

const Functions2 = () => {
  return (
    <div className='flex justify-between flex-col lg:flex-row items-center gap-y-5 my-5'>
      <Function2 icon="/ChatsCircle.svg" heading1="Common Questions" heading2="from Buyers"/>
      <Function2 icon="/FadersHorizontal.svg" heading1="How It Works"/>
      <Function2 icon="/FlagPennant.svg" heading1="Pre-requirements" heading2="& Online Exam Rules"/>
    </div>
  )
}

export default Functions2
