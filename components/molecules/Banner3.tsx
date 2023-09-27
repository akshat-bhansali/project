import React from 'react'
import Working from '../atoms/Working'
import {StepsSection} from "../../schema";
import {localeText, urlFor} from "../../sanity-client";

const Banner3 = (props:StepsSection&{lang:string}) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[url('/Clippathgroup.svg')] bg-no-repeat bg-cover p-10">
        <span className='font-bold text-2xl text-white'>{localeText(props.title,props.lang)}</span>
        <div className='grid lg:grid-cols-5 text-center gap-x-8 text-white'>
            {props.items.map((item,i)=> <Working index={i+1} icon={urlFor(item.photo).url()} heading={localeText(item.title,props.lang)} subheading={localeText(item.subtitle,props.lang)}/>)}
        </div>
    </div>
  )
}

export default Banner3
