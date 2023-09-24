import React from 'react'
import Button from '../components/atoms/Button'
import Navbar from '../components/atoms/Navbar'
import Dropdowns from '../components/molecules/Dropdowns'
import Banner1 from '../components/molecules/Banner1'
import Functions1 from '../components/molecules/Functions1'
import Banner2 from '../components/molecules/Banner2'
import CompanyGrid from '../components/atoms/CompanyGrid'
import Functions2 from '../components/molecules/Functions2'
import Banner3 from '../components/molecules/Banner3'
import Functions3 from '../components/molecules/Functions3'

const first = () => {
  return (
    <span className='items-center grid gap-y-5 px-[30px] lg:px-[60px] pb-5'>
    <Navbar/>
    <Banner1/>
    <Functions1/>
    <Dropdowns/>
    <Banner2/>
    <Functions2/>
    <Banner3/>
    <Functions3/>
    </span>
  )
}

export default first