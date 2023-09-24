import React from 'react'
import Button from '../atoms/Button'
import Working from '../atoms/Working'

const Functions3 = () => {
  return (
    <div className='flex flex-col items-center rounded-lg gap-1 p-5'>
      <span className='font-bold text-xl'>Zero for you to lose</span>
      <span className='font-normal text-lg'>Distinguishment for you gain</span>
      <span className='font-normal text-sm mt-5'>Why choose CBTProxy to secure your IT certification pass</span>
      <div className='text-black text-center grid grid-cols-1 lg:grid-cols-2 lg:gap-5 mx-20'>
        <Working icon="Exam.png" heading="Surety of Passing" subheading="With a rate of 100% passes and 0% fails or re-takes, across 7000+ students since 2016, you can be certain that you’ll get the pass you need—for the badge of excellence for your IT career."/>
        <Working icon="Gauge.png" heading="Speedy Support" subheading="For anything you need, we’re always just a WhatsApp away. We respond speedily, around the clock, and make sure you’re always in crystal-clear clarity."/>
        <Working icon="Wallet.png" heading="Pay After You Pass" subheading="With our “Pay After You Pass” terms, nothing comes out of your pocket until you receive confirmation of your exam pass."/>
        <Working icon="ShieldCheck.png" heading="Security of a Guarantee" subheading="While we’re 100% certain of passing your exam, we still offer a guarantee if you hypothetically don’t pass: we’ll pay for the re-take, sit the exam for you, and ensure you get the pass."/>
        <Working icon="Star.png" heading="Extensive Experience" subheading="We’ve been in this business since 2016. Aside from our proxy software & process that ensures 0% detection, over the years, we’ve built a team of specialized experts that have ensured 100% exam pass rates."/>
      </div>
      <Button textcolor="text-white" color="bg-[#004AAD]" title="CONTACT US NOW TO CHOOSE YOUR IT CERTIFICATION"/>
    </div>
  )
}

export default Functions3
