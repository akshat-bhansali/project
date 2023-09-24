import { background } from "@chakra-ui/react";
import { url } from "inspector";
import React from "react";
import Button from "../atoms/Button";
const Banner1 = () => {
  return (
    // <div
    //   className="bg-no-repeat overflow-hidden w-full"
    //   style={{
    //     backgroundImage: `url('/Background.png')`,
    //     height: "409px"
    //   }}
    // >
    <div className="bg-black rounded-lg overflow-hidden h-[409px] pl-[50px]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col mt-[80px] gap-10">
          <span className="font-bold text-2xl">
            Get the excellence of an IT certification without pouring in your
            own time
          </span>
          <span className="text-xs font-light">
            Use our team’s expertise & training to secure an IT certification to
            distinguishes you in your career —without you doing any preparation
            for it yourself
          </span>
          <span>
          <Button title="FIND OUT THE TOTAL COST NOW" color="bg-yellow-400" textcolor="text-black"/>
          </span>
        </div>
          <img src="/Man-Image.png" alt="" className="h-[700px] w-[700px] mt-[-80px] "/>
      </div>
    </div>
  );
};

export default Banner1;
