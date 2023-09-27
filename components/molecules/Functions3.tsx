import React from 'react'
import Button from '../atoms/Button'
import Working from '../atoms/Working'
import {SecondaryFeaturesSection} from "../../schema";
import {localeText, urlFor} from "../../sanity-client";

const Functions3 = (props:SecondaryFeaturesSection&{lang:string}) => {
  return (
    <div className='flex flex-col items-center rounded-lg gap-1 lg:p-5 text-center p-3'>
      <span className='font-bold text-xl'>{localeText(props.title,props.lang)}</span>
      <span className='font-normal text-lg'>{localeText(props.subtitle,props.lang)}</span>
      <span className='font-normal text-sm mt-5'><i>{localeText(props.light,props.lang)}</i></span>
      <div className='text-black text-center flex  lg:gap-5 lg:mx-20 mb-20'>
          {props.items.map(item=><Working icon={urlFor(item.photo).url()} heading={localeText(item.title,props.lang)} subheading={localeText(item.subtitle,props.lang)}/>)}
      </div>
      <Button textcolor="text-white" color="bg-[#004AAD]" link={props.cta?.url} title={localeText(props.cta?.title,props.lang)}/>
    </div>
  )
}

export default Functions3
