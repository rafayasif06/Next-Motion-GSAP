import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const FirstComp = () => {
  const socialLinks = [<FaInstagram />, <FaSquareFacebook />, <FaLinkedin />];
  const footerLinks = ["BLOG", "BEST OF CROWN", "SEARCH AGENT", "CAREER"];
  const data = [
    { line1: "OFFICE", line2: ["+43 1 361 60 60", "office@crownd.at"] },
    { line1: "SALES", line2: ["+43 1 361 61 61", "sales@crownd.at"] },
    { line1: "VISIT US", line2: ["Dorotheergasse 12, 1010 Vienna"] },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 lg:px-12 md:gap-0 pb-12 gap-8 ">
      {/* First */}
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-semibold md:text-4xl">Stay up to date.</h3>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-80">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent py-1 pl-3"
          />
          <button className="text-gray-600 w-4 cursor-pointer duration-500 transition-colors hover:text-gray-800">
            <Image width={100} height={100} src="/footer/submit.png" alt="" />
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={"/"}>
              <button className=" cursor-pointer bg-white flex items-center justify-center rounded-full">
                <span className="p-3 hover:scale-110 duration-300 transition-all">
                  {link}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
      {/* Second */}
      <ul className="flex flex-col md:gap-4  text-lg">
        {footerLinks.map((footerLink, index) => (
          <Link href="#" key={index}>
            <li className="text-[#333333] px2 hover:text-[#3333337a] font-medium">
              {footerLink}
            </li>
          </Link>
        ))}
      </ul>
      {/* Third */}
      <div>
        <ul className="flex flex-col gap-4 text-lg">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start font-medium gap-2"
            >
              <span className="text-[#333333]">{item.line1}</span>
              <ul className="flex gap-2 flex-col ">
                {item.line2.map((line, index) => (
                  <li
                    key={index}
                    className="text-[#33333389] hover:underline text-lg decoration-[#33333389] 
 "
                  >
                    <Link href="/">{line}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstComp;
