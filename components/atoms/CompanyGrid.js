import React from 'react'
import Image from "next/image";
import {urlFor} from "../../sanity-client";

const CompanyGrid = (props) => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 lg:items-center justify-items-center gap-auto'>
        {props.images.map(image=><Image alt={image.alt} src={urlFor(image).url()} width={200} height={200} className='' />)}
    </div>
  )
}

export default CompanyGrid
