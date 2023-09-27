import React from 'react'
import Function1 from '../atoms/Function1'
import {FeatureSection} from "../../schema";
import {localeText, urlFor} from "../../sanity-client";

const Functions = (props:FeatureSection&{lang:string}) => {
  return (
    <div className='grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-10 my-10'>
        {props.items.map(item=><Function1 icon={urlFor(item.photo).url()} heading={localeText(item.title,props.lang)} subheading={localeText(item.subtitle,props.lang)}/>)}
    </div> 
  )
}

export default Functions
