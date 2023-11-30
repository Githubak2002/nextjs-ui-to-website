import React from "react";
import {
  ourServices,
  footerContent1,
  otherLinks,
  ourLinks,
} from "../constants/constants.js";
import Image from "next/image.js";

const socialCss = "p-2 rounded-full h-8 w-8 flexCenter text-[20px]";
const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1728px] bg-[#C6DEFF1A] sm:py-20 py-10 ">
        
      {/* --- screen size > small --- */}
      <main className="sm:flex hidden mx-auto max-w-[900px] sm:flexBetween px-3 text-[14px]">
        <div className="max-w-[220px] flex flex-col sm:flex-col-reverse">
          <div className="flex gap-2 pt-3">
            <a href="https://github.com/Githubak2002">
            <i className={`${socialCss} bg-blue-300 ri-github-line `} /> 
            </a>
            <a href="https://www.linkedin.com/in/anuraglohar">
            <i className={`${socialCss} bg-blue-200 ri-linkedin-line `} />
            </a>
            <i className={`${socialCss} bg-blue-100 ri-mail-line `} />
          </div>
          <h2 className="leading-6">{footerContent1}</h2>
        </div>

        <ul className="leading-7">
          <h2 className="font-bold pb-2 text-[16px]">Our Links</h2>
          {ourLinks.map((link, i) => (
            <li key={i}> {link.link}</li>
          ))}
        </ul>

        <ul className="leading-7">
          <h2 className="font-bold pb-2 text-[16px]">Our Services</h2>
          {ourServices.map((link, i) => (
            <li key={i}> {link.link}</li>
          ))}
        </ul>

        <ul className="leading-7">
          <h2 className="font-bold pb-2 text-[16px]">Other Links</h2>
          {otherLinks.map((link, i) => (
            <li key={i}> {link.link}</li>
          ))}
        </ul>
      </main>

      {/* --- screen size < small --- */}
      <main className="sm:hidden flex-col mx-auto max-w-[900px] px-4 text-[16px]">
        <Image src="/logo_sm.png" alt="logo" height={30} width={30} />
        <div className="flex flex-col-reverse pt-4 pb-8 sm:border-0 border-b-2 border-[#B8B8B8]">
          <div className="flex gap-2 pt-3">
          <a href="https://github.com/Githubak2002">
            <i className={`${socialCss} bg-blue-300 ri-github-line `} /> 
            </a>
            <a href="https://www.linkedin.com/in/anuraglohar">
            <i className={`${socialCss} bg-blue-200 ri-linkedin-line `} />
            </a>
            <i className={`${socialCss} bg-blue-100 ri-mail-line `} />
          </div>
          <h2 className="leading-6">{footerContent1}</h2>
        </div>

        <div className="flexBetween py-4">
          <ul className="leading-9">
            <h2 className="font-bold pb-2 text-[20px]">Our Links</h2>
            {ourLinks.map((link, i) => (
              <li key={i}> {link.link}</li>
            ))}
          </ul>
          <ul className="leading-9 text-right">
            <h2 className="font-bold pb-2 text-[20px] ">Other Links</h2>
            {otherLinks.map((link, i) => (
              <li key={i}> {link.link}</li>
            ))}
          </ul>
        </div>

        <ul className="leading-9 text-center pb-8 sm:border-0 border-b-2 border-[#B8B8B8]">
          <h2 className="font-bold pb-2 text-[20px]">Our Services</h2>
          {ourServices.map((link, i) => (
            <li key={i}> {link.link}</li>
          ))}
        </ul>
      </main>

      <div className="sm:flexBetween text-center mx-auto max-w-[910px] pt-10 px-4">
        <h2 className="sm:py-0 py-2">Terms & Condition | Privacy Policy </h2>
        <div className="flex sm:flex-row flex-col flex-wrap sm:gap-0 gap-2">
          <h2>
            Copyright © 2023 <b>EXOCODE TECHNOLOGIES</b>{" "}
          </h2>
          <h2 className="sm:flex hidden px-1"> | </h2>
          <h2> All rights reserved</h2>
        </div>
        {/* <h2> All rights reserved</h2> */}
      </div>
    </footer>
  );
};

export default Footer;
