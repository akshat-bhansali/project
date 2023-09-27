import React from 'react'
import Navbar from '../app/components/atoms/Navbar'
import Dropdowns from '../app/components/molecules/Dropdowns'
import Banner1 from '../app/components/molecules/Banner1'
import Functions1 from '../app/components/molecules/Functions1'
import Banner2 from '../app/components/molecules/Banner2'
import Functions2 from '../app/components/molecules/Functions2'
import Banner3 from '../app/components/molecules/Banner3'
import Functions3 from '../app/components/molecules/Functions3'
import Rules from '../app/components/molecules/Rules'
import Banner4 from '../app/components/molecules/Banner4'

export default function Home() {
  return (
    <span className='items-center grid gap-y-5 px-[30px] lg:px-[60px] pb-5'>
    <Navbar/>
    <Banner1/>
    <Functions1/>
    <Banner2/>
    <Functions2/>
    <Dropdowns/>
    <Banner3/>
    <Functions3/>
    <Rules/>
    <Banner4/>
    <Navbar/>
    </span>
  )
}
