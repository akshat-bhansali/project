import React from 'react'
import Working from '../atoms/Working'

const Banner3 = () => {
  return (
    <div className='flex flex-col items-center rounded-lg bg-red-900 gap-5 p-5 '>
        <span className='font-bold text-2xl text-white'>How It All Works</span>
        <div className='grid md:grid-cols-3 lg:grid-cols-5 text-center gap-x-4 text-white'>
            <Working index="1" icon="/CurrencyCircleDollar.png" heading="Connect with us, find out costs" subheading="Get in touch with our friendly support and tell us what IT certification you’re interested in— amongst the 500+ that we offer—so we can tell you its total costs."/>
            <Working index="2" icon="/Calendar.png" heading="Finalize the exam date, don’t pay yet" subheading="We’ll both agree on an exam date and nothing comes out of your pocket yet. You book it to confirm the date and time of the final exam that we’ll sit for you."/>
            <Working index="3" icon="/Faders.png" heading="We install and test, 24 hours before" subheading="To ensure everything runs to perfection on the real exam day, we run a test with you 24 hours before. We install our tools remotely, run the test, then give the thumbs up."/>
            <Working index="4" icon="/Laptop.png" heading="Our experts answer, you sit in front of Laptop/PC" subheading="Get in touch with our friendly support and tell us what IT certification you’re interested in— amongst the 500+ that we offer—so we can tell you its total costs."/>
            <Working index="5" icon="/HandCoins.png" heading="You pass, pay within 24 hours" subheading="When the exam’s complete: congrats, we’re certain you’ve passed! Only once you receive confirmation will payment be due within 24 hours—in anyway that suits you."/>
        </div>
    </div>
  )
}

export default Banner3
