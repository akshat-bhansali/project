import React from "react";
import Button from "../atoms/Button";
import CompanyGrid from "../atoms/CompanyGrid";
import {SecondaryHeroSection} from "../../schema";
import {localeRichText, localeText, urlFor} from "../../sanity-client";
import RichText from "../atoms/RichText";

const Banner2 = (props:SecondaryHeroSection&{lang:string}) => {
  return (
    <div className="bg-[#F5F5F5] border-[#CFCFCF] border-[1px] w-full h-[700px] lg:h-[390px] rounded-lg text-black grid grid-cols-1 lg:grid-cols-2 gap-x-5">
      <div className="flex flex-col gap-8 my-auto p-4">
        <div className="font-bold text-xl text-center lg:text-left">
          {localeText(props.title,props.lang)}
        </div>
        <div className="text-xs font-light text-center lg:text-left">
          <RichText value={localeRichText(props.subtitle,props.lang)}/>
        </div>
        <div className="w-full">
          <Button
            color="bg-[#004AAD]"
            title={localeText(props.cta?.title,props.lang)}
            url={props.cta?.url}
            textcolor="text-white"
          />
        </div>
      </div>
      <div className="my-auto">
        <CompanyGrid images={props.logos}/>
      </div>
    </div>
  );
};

export default Banner2;
