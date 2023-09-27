import React from 'react'
import Link from 'next/link'
function Wrapper({link,children}){
    if(link) return <Link href={link}>{children}</Link>
    return children
}

const Button = (props) => {
  return (
      <Wrapper link={props.link}>

          <button className={`rounded-md px-5 font-medium ${props.textcolor} py-2 text-sm ${props.color} w-full lg:w-fit`}>
              {props.title}
          </button>
      </Wrapper>
  )
}

export default Button
