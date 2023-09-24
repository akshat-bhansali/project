import React from 'react'
import Dropdown from '../atoms/Dropdown'

const Dropdowns = () => {
  return (
    <div className='grid gap-4'>
      <span className='font-bold text-2xl mx-auto text-black'>Common Questions From Buyers</span>
      <Dropdown title="Can you really sit the exam for me without being detected?" content="content goes here"/>
      <Dropdown title="What about detection from data &psychometric analysis?"/>
      <Dropdown title="Would I have to sit in front of the screenduring the whole exam?"/>
      <Dropdown title="What’s your success ratio? If I fail, would you pay the fee for my reattempt?”"/>
      <Dropdown title="I’m amazed by your Pay After You Pass offer. Is there any hidden catch?”"/>
      <span className='font-light text-sm mx-auto text-[#363636]'><u>Jump here for a continuation of FAQs</u></span>
    </div>
  )
}

export default Dropdowns
