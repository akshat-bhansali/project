import React from 'react'
import Function2 from '../atoms/Function2'
import {NavigatorSection} from "../../schema";
import {localeText, urlFor} from "../../sanity-client";

const Functions2 = (props:NavigatorSection&{lang:string}) => {
  return (
    <div className='flex justify-between flex-col lg:flex-row items-center gap-y-5 my-5'>
        {props.items.map(item=><Function2 icon={urlFor(item.photo).url()} heading={localeText(item.title,props.lang)} link={item.url}/>)}
    </div>
  )
}

export default Functions2
