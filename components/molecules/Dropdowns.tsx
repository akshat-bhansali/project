/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";
import DropdownButton from "../atoms/DropdownButton";
import {FaqSection} from "../../schema";
import {localeRichText, localeText, urlFor} from "../../sanity-client";
import RichText from "../atoms/RichText";
import Image from 'next/image'
function Dropdown(props:FaqSection['items'][number]&{lang:string}){
  const [open,setOpen]=useState(false)
  return <div><div onClick={()=>setOpen(o=>!o)}>
    <DropdownButton text={localeText(props.question,props.lang)} />
  </div>
    <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
            open ? "block" : "hidden"
        }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className={'col-span-1 lg:col-span-2 p-4 my-auto'}>

        <RichText value={localeRichText(props.answer,props.lang)}/>
        </div>
        <Image src={urlFor(props.photo).url()} alt="" height={500} width={500} className="justify-self-center" />
      </div>
    </div>
  </div>
}

const Dropdowns = (props:FaqSection&{lang:string}) => {
  return (
    <div className="grid gap-3 my-5">
      <span className="font-bold text-2xl mx-auto text-black text-center mb-8">
        {localeText(props.title,props.lang)}
      </span>
      {props.items.map(faq=><Dropdown {...faq} lang={props.lang}/>)}
    </div>
  );
};

export default Dropdowns;
