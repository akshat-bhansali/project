import React from 'react'
import Navbar from '../../components/atoms/Navbar'
import Dropdowns from '../../components/molecules/Dropdowns'
import Banner1 from '../../components/molecules/Banner1'
import Functions1 from '../../components/molecules/Functions1'
import Banner2 from '../../components/molecules/Banner2'
import Functions2 from '../../components/molecules/Functions2'
import Banner3 from '../../components/molecules/Banner3'
import Functions3 from '../../components/molecules/Functions3'
import Rules from '../../components/molecules/Rules'
import Banner4 from '../../components/molecules/Banner4'
import {localeText, sanityClient} from "../../sanity-client";
import {groq} from "next-sanity";
import {getSEO} from "../../config";
import {Page} from "../../schema";
import SectionMapper from "../../components/molecules/SectionMapper";
import { useState, useEffect } from "react";

export async function generateMetadata({params}:{params:{lang:string}}){
  const data:Page[] = await sanityClient.fetch(groq`*[_type=="page" && slug.current=="index"]`)
  const page = data[0]
  return getSEO(localeText(page.title.meta,params.lang))
}

export default async function Home({params}:{params:{lang:string}}) {
  const data:Page[] = await sanityClient.fetch(groq`*[_type=="page" && slug.current=="index"]`)
  const page = data[0]
  return (
    <span className='max-w-screen-2xl mx-auto flex flex-col gap-5 px-4'>
    <Navbar/>
    <SectionMapper lang={params.lang} sections={page.sections}/>
    <Navbar/>
    </span>
  )
}
export const revalidate=0