"use client";
import React from 'react'
import { useState } from 'react';

const DropdownButton = (props) => {
    const [isOpen, setOpen] = useState(false);
    const handleDropDown = () => {
      setOpen(!isOpen);
    };
  return (
    <button
      id="dropdownDefaultButton"
      onClick={handleDropDown}
      className={`w-full font-semibold text-17px px-5 py-2.5 text-center inline-flex items-center border-[#CFCFCF] border-[1px] ${
        isOpen
          ? "rounded-t-lg bg-[#004AAD] text-white"
          : "rounded-lg bg-[#F5F5F5] text-black"
      }`}
    >
     {props.text}
      <img src="/ArrowCircleLeft.svg" alt="" className={` ml-auto ${isOpen ? "rotate-180" : "rotate-0"}`}/>
    </button>
  )
}

export default DropdownButton
