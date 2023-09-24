import React from 'react'

const Button = (props) => {
  return (
    <button className={`rounded-md px-5 font-medium ${props.textcolor} py-2 text-sm ${props.color} w-full lg:w-fit`}>
      {props.title}
    </button>
  )
}

export default Button
