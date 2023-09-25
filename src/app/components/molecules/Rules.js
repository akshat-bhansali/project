import React from 'react'
import RuleCard from '../atoms/RuleCard'

const Rules = () => {
  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold text-xl my-10'>Pre-requirement & Exam Rules</span>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <RuleCard heading="Pre-requirements" subheading="for us to sit a proxy exam for you" color="bg-[#004AAD]" point1="Your PC or Laptop must have Windows 10 or 11 (64-bit) installed" point2="Your device must have no corporate firewall enabled" point3="We will have to mutually agree on a time to book your exam slot" point4="To sit your online exam, your device must have a camera and microphone" point5="You must be able to join 30 minutes before the exam starts" point6="You must be have your ID ready—not for us, but to show the proctor to be allowed to start the exam" point7="You will have to remain seated and act like you’re undertaking the exam while we do it remotely on your behalf" status="hidden"/>
      <RuleCard heading="Exam rules" subheading="for all online proctors for IT exams" color="bg-[#9D2A75]" point1="When you’re sitting the exam, no one is permitted in your work area for any reason" point2="You cannot leave your work area for any reason (only in break time can you leave)" point3="You cannot use scratch paper, take physical notes, or talk" point4="Items by mobiles, headphones, and watches must be out of reach—if you’re seen using our phone, your exam may be revoked" point5="Food, drinks, smoking and gum are prohibited" point6="Your desk must be clean. Only a laptop/PC, keyboard, mouse and a transparent water bottle is allowed" point7="If you have any extra screen connected to your laptop or PC, disconnect it" point8="If you have any mirror, TV, or screen in your room, cover it with a sheet" point9="Keep your laptop connected to a charger while the exam is running" point10="Do not click the photo of anything in the exam, including the results" point11="Please watch the video https://home.pearsonvue.com/onvue/online-testing-video to understand the check-in process."/>
    </div>
    </div>
  )
}

export default Rules
