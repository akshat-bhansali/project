/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";
import DropdownButton from "../atoms/DropdownButton";

const Dropdowns = (props) => {
  const [isOpen1, setOpen1] = useState(false);
  const handleDropDown1 = () => {
    setOpen1(!isOpen1);
  };
  const [isOpen2, setOpen2] = useState(false);
  const handleDropDown2 = () => {
    setOpen2(!isOpen2);
  };
  const [isOpen3, setOpen3] = useState(false);
  const handleDropDown3 = () => {
    setOpen3(!isOpen3);
  };
  const [isOpen4, setOpen4] = useState(false);
  const handleDropDown4 = () => {
    setOpen4(!isOpen4);
  };
  const [isOpen5, setOpen5] = useState(false);
  const handleDropDown5 = () => {
    setOpen5(!isOpen5);
  };
  return (
    <div className="grid gap-3 my-5">
      <span className="font-bold text-2xl mx-auto text-black text-center mb-8">
        Common Questions From Buyers
      </span>
      <div onClick={handleDropDown1}>
        <DropdownButton text="Can you really sit the exam for me without being detected?" />
      </div>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen1 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <span className="block px-4 py-2 text-sm text-black col-span-2 my-auto">
            1000%. And that’s the core of our entire service. We understand that
            for anyone thinking about taking a proxy exam,{" "}
            <strong>
              the risk of detection is the very first thing on their mind
            </strong>
            . And of course, it’s very legitimate for it to be.
            <br />
            <br />
            We only started providing our proxy services in 2016{" "}
            <strong>
              after being completely sure that we had an undetectable tool
            </strong>{" "}
            that could allow us to sit exams for students and professionals
            remotely and guarantee their pass.
            <br />
            <br />
            And to create that, it took us a lot of work. Drawing on our
            background as <strong>IT Programmers in Security</strong>, we
            underwent a rigorous process to remotely crack online proctoring,
            without being detected, until it was a resounding success.
            <br />
            <br />
            Since then,{" "}
            <strong>
              we’ve passed over 7000 exam certifications for students worldwide
            </strong>{" "}
            by bypassing Pearsonvue, Honorlock, ProctorU, Proctorio, Safe Exam
            Browser, and every other online proctoring.{" "}
            <strong>
              Name it, and our tool bypasses it—securely and undetected.
            </strong>
          </span>
          <img src="/Group3.png" alt="" className="justify-self-center" />
        </div>
      </div>
      <div onClick={handleDropDown2}>
        <DropdownButton text="What about detection from data &psychometric analysis?" />
      </div>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen2 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <span className="block px-4 py-2 text-sm text-black col-span-2 my-auto">
            // eslint-disable-next-line react/no-unescaped-entities We love this
            question,{" "}
            <strong>because it shows you’re serious about passing</strong> and
            that you've done yourresearch. When creating our proxy services,
            ensuring zero detection just from our tool, but bydata and
            psychometrics analysis, was our top consideration from the
            beginning.
            <br />
            <br />
            <strong>
              And our continuously successful process ensures of this.
            </strong>
            <br />
            <br />
            Data and psychometrics analysis simply means an analysis of your eye
            position (not lookinganywhere other than your computer screen) and
            how your exam was completed (not finishingextremely fast or 100%
            matching with others).
            <br />
            <br />
            We easily avoid these by (1) requesting from you to{" "}
            <strong>always keep your eyes on the screen</strong> (2) ustaking
            time to answer questions normally,{" "}
            <strong>
              while purposefully and randomly marking somequestions wrong
            </strong>{" "}
            so you never match with anyone,
          </span>
          <img src="/Group7.png" alt="" className="justify-self-center" />
        </div>
      </div>
      <div onClick={handleDropDown3}>
        <DropdownButton text="Would I have to sit in front of the screenduring the whole exam?”" />
      </div>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen3 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <span
            className="block px-4 py-2 text-sm text-black col-span-2 my-auto"
            my-auto
          >
            Absolutely. To ensure you remain undetected throughout your exam and
            that you secure yourcertification: while we answer the questions for
            you remotely,
            <strong>
              {" "}
              you’ll have to physically sit infront of your PC/laptop during the
              whole exam.
            </strong>
            <br />
            <br />
            We also strongly advise that you actually “act out” as if you are
            doing the exam yourself. Forexample:{" "}
            <strong>
              actually reading all the questions and their options and answering
              them in your head{" "}
            </strong>
            (no lip-sync or voicing is allowed).
            <br />
            <br />
            This will guarantee that your body language looks authentic—so that
            along with our provenprocess—{" "}
            <strong>
              you will entirely avoid any risk of any psychometric analysis.
            </strong>
          </span>
          <img src="/Group6.png" alt="" className="justify-self-center" />
        </div>
      </div>
      <div onClick={handleDropDown4}>
        <DropdownButton text="What’s your success ratio? If I fail, would you pay the fee for my reattempt?”" />
      </div>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen4 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <span
            className="block px-4 py-2 text-sm text-black col-span-2 my-auto"
            my-auto
          >
            Since we opened our services in 2016,{" "}
            <strong>
              we have proudly maintained a pass success ratio of 100%.
            </strong>{" "}
            But it’s nothing to do with luck, and everything to do with our
            rigorous processes andsubject experts.
            <br />
            <br />
            From our background as IT Programmers in Security, we created
            fool-proof proxy tools &processes to ensure 100% secure bypassing of
            online proctoring.
            <br />
            <br />
            <strong>
              And it’s our team of subject experts—training in the very
              certification you’re looking for—whoanswer your exam questions on
              your behalf
            </strong>{" "}
            to guarantee your pass. Because of those, up tothe point of you
            reading this now, we’ve retained a 0% fail rate and 0% retakes over
            7 years.
            <br />
            <br />
            However: to completely remove any concern and because we know the
            exam fee would be alot for some people,{" "}
            <strong>
              we offer a guarantee that if we hypothetically don’t pass the
              first time
            </strong>
            , we will pay the fee to pass you on a second attempt that we also
            sit for you. But with thatbeing said: passing you at first try is
            the heart of our business.
          </span>
          <img src="/Group5.png" alt="" className="justify-self-center" />
        </div>
      </div>
      <div onClick={handleDropDown5}>
        <DropdownButton text="I’m amazed by your Pay After You Pass offer. Is there any hidden catch?”" />
      </div>
      <div
        className={`rounded-b-lg bg-white divide-y divide-gray-100 shadow ${
          isOpen5 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <span
            className="block px-4 py-2 text-sm text-black col-span-2 my-auto"
            my-auto
          >
            No catches here. We understand the stakes of passing your exam: the
            investment of moneyfrom you, the mind space it takes, and the career
            advancement you depend on for it. And wealso understand the
            hesitation that comes with proxies: the concerns and fear of scams
            thatunfortunately do exist.
            <br />
            <br />
            Because of that,{" "}
            <strong>
              we wanted to create a unique offer that removed all of that risk.
            </strong>
            <br />
            <br />
            By taking zero payments upfront from you until you get confirmation
            of your pass,{" "}
            <strong>
              we knew we’d be taking on all the risk ourselves
            </strong>{" "}
            (in case some customers received our services butdecided not to
            pay).
            <br />
            <br />
            However, when we rolled out this offer,{" "}
            <strong>we found in reality it fantastically worked</strong>.
            Studentsand professionals chose us because of the zero risk to them.
            And when{" "}
            <strong>
              they receive their passresults, greatly satisfied, they've been
              sure to pay us within 24 hours 100% of the time.
            </strong>
          </span>
          <img src="/Group4.png" alt="" className="justify-self-center" />
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
