import { url } from "inspector";
import React from "react";
import Button from "../atoms/Button";
import {HeroSection} from "../../schema";
import {localeText, urlFor} from "../../sanity-client";
import Image from "next/image";
const Banner1 = (props:HeroSection&{lang:string}) => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[url('/Clippathgroup.svg')] bg-no-repeat bg-cover rounded-lg overflow-hidden h-[700px] lg:h-[409px] px-[30px] lg:pl-[50px] text-white">
        <div className="flex flex-col mt-[40px] lg:mt-[80px] gap-5 lg:gap-10">
          <span className="font-bold text-2xl text-center lg:text-left">
            {localeText(props.title, props.lang)}
          </span>
          <span className="text-xs font-light text-center lg:text-left">
            {localeText(props.subtitle, props.lang)}
          </span>
          <span>
          <Button title={localeText(props.cta?.title,props.lang)} link={props.cta?.url} color="bg-yellow-400" textcolor="text-black"/>
          </span>
        </div>
          <Image src={urlFor(props.photo).url()} alt={localeText(props.photo.alt,props.lang)} width={700} height={700} className="h-[700px] w-[1000px] lg:w-[700px] mt-[-80px]"/>
      </div>
  );
};

export default Banner1;
