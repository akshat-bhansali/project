import React from "react";
import Button from "../atoms/Button";
import CompanyGrid from "../atoms/CompanyGrid";

const Banner2 = () => {
  return (
    <div className="bg-[#F5F5F5] border-[#CFCFCF] border-[1px] w-full h-[700px] lg:h-[398px] rounded-lg text-black grid grid-cols-1 lg:grid-cols-2 gap-x-3">
      <div className="flex flex-col gap-8 my-auto p-4">
        <div className="font-bold text-xl text-center lg:text-left">
          Need the certification but don’t have the time?
        </div>
        <div className="text-xs font-light text-center lg:text-left">
          In a time when the IT sector is only getting more competitive, getting
          a globally-recognized certification can be the factor that
          distinguishes you & advances you in your career. But it’s not only a
          cost of money, but precious time: time that takes you away from your
          paid work and important other things.
        </div>
        <div className="text-xs font-light text-center lg:text-left">
          But the reality is: you don’t need to train for it to pass. With a
          pioneering proxy system that lets our trained experts sit the exam
          remotely on your behalf, you can quit delaying or stressing, and let
          us take care of it for you—securely, undetectably, and guaranteeing
          your pass in the first try.
        </div>
        <div className="w-full">
          <Button
            color="bg-[#004AAD]"
            title="CONTACT US NOW TO CHOOSE YOUR IT CERTIFICATION"
            textcolor="text-white"
          />
        </div>
      </div>
      <div className="my-auto">
        <CompanyGrid />
      </div>
    </div>
  );
};

export default Banner2;
