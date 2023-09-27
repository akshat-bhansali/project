import React from 'react'
import Button from '../atoms/Button'
import {CtaSection} from "../../schema";
import RichText from "../atoms/RichText";
import {localeRichText, localeText} from "../../sanity-client";

const Banner4 = (params:CtaSection&{lang:string}) => {
  return (
    <div className="bg-[url('/Clippathgroup.svg')] bg-no-repeat bg-cover rounded-lg p-5 flex flex-col items-center my-10">
      <div className='text-white text-base flex flex-col lg:flex-row items-center text-center gap-y-3 mt-5'>
          <RichText value={localeRichText(params.title,params.lang)}/>
      </div>
      <span className='px-2 lg:p-0 my-8'>
          <Button title={localeText(params.cta?.title,params.lang)} link={params.cta?.url} textcolor="text-black" color="bg-[#FEE611]"/>
      </span>
    </div>
  )
}

export default Banner4
