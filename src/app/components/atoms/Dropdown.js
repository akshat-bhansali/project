"use client";
import React, { useState } from "react";

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <div >
      <button
        id="dropdownDefaultButton"
        onClick={handleDropDown}
        className={`w-full font-semibold text-17px px-5 py-2.5 text-center inline-flex items-center border-[#CFCFCF] border-[1px] ${
          isOpen
            ? "rounded-t-lg bg-[#004AAD] text-white"
            : "rounded-lg bg-[#F5F5F5] text-black"
        }`}
        type="button"
      >
       {props.title}
        <svg
         className={`w-6 ml-auto ${isOpen ? "rotate-180" : "rotate-0"}`}
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_23_58304)">
            <path
              d="M28 16.5C28 9.87258 22.6274 4.5 16 4.5C9.37258 4.5 4 9.87258 4 16.5C4 23.1274 9.37258 28.5 16 28.5C22.6274 28.5 28 23.1274 28 16.5Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 21.5V11.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17.5L16 21.5L20 17.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_23_58304">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="matrix(0 -1 1 0 0 32.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <span className="block px-4 py-2 text-sm text-black col-span-2">
             {props.content}
            </span>
            <img src={props.icon} alt="" className="justify-self-center lg:justify-self-end"/>
          </div>
      </div>
    </div>
  );
};

export default Dropdown;
