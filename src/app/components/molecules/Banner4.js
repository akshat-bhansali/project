import React from 'react'
import Button from '../atoms/Button'

const Banner4 = () => {
  return (
    <div className="bg-[url('/Clippathgroup.svg')] bg-no-repeat bg-cover rounded-lg p-3 flex flex-col items-center my-5">
      <div className='text-white text-base flex flex-col lg:flex-row items-center text-center gap-y-3 mt-5'>
      <span className='font-semibold'>PS. No need to memorize this!</span> 
      <span className='font-normal'>We’ll send all this information over to you when book with us your proxy IT certification exam</span>
      </div>
      <span className='px-2 lg:p-0 my-8'><Button title="CONTACT US NOW TO CHOOSE YOUR IT CERTIFICATION" textcolor="text-black" color="bg-[#FEE611]"/></span>
    </div>
  )
}

export default Banner4
