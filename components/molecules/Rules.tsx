import React from 'react'
import RuleCard from '../atoms/RuleCard'
import {TabsSection} from "../../schema";
import {localeText} from "../../sanity-client";

const Rules = (props:TabsSection&{lang:string}) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold text-xl my-10 text-center'>{localeText(props.title,props.lang)}</span>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      {props.items.map(item=><RuleCard points={item.points.map(item=>localeText(item, props.lang))} heading={localeText(item.title,props.lang)} subheading={localeText(item.subtitle,props.lang)} color={localeText(item.color,props.lang)} />)}
      </div>
    </div>
  )
}

export default Rules
