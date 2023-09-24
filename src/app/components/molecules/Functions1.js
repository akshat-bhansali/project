import React from 'react'
import Function1 from '../atoms/Function1'

const Functions = () => {
  return (
    <div className='grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 '>
      <Function1 icon="/UsersFour.png" heading="A Team of Experts" subheading1="Sitting 7000+ Proxy Exams" subheading2="Over 7 Years"/>
      <Function1 icon="/Certificate.png" heading="100% Pass Rates" subheading1="0% Retakes and Failures" />
      <Function1 icon="/Toolbox.png" heading="No Tool Detection" subheading1="or Data/Psychometrics"/>
      <Function1 icon="/ShieldCheck.png" heading="Unique Guarantee" subheading1="with Pay After You Pass"/>
    </div> 
  )
}

export default Functions
