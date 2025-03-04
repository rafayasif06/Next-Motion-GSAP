"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-horizontal-light.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { RiArrowRightLine } from "react-icons/ri"; // Import the icon

gsap.registerPlugin(CustomEase);

export const Header = ({ initialState, toggleMenuFunction }) => {
  const inquireButtonRef = useRef();
  const inquireBoxRef = useRef();
  const inquireLeftArrowRef = useRef();
  const inquireRightArrowRef = useRef();
  const hamMenuLRef = useRef([]);
  const hamMenuLine1Ref = useRef();
  const hamMenuLine2Ref = useRef();
  const menuTextRef = useRef();
  const closeTextRef = useRef();
  useGSAP(() => {
    // hamMenuLRef.current.addEventListener("click", () => {
    //   if (initialState === true) {
    //     gsap.to(hamMenuLine1Ref.current, {
    //       rotate: "20deg",
    //     });
    //     gsap.to(hamMenuLine2Ref.current, {
    //       rotate: "-20deg",
    //     });
    //   }
    // });

    inquireButtonRef.current.addEventListener("mouseenter", () => {
      gsap.to(inquireRightArrowRef.current, {
        x: "80%",
        opacity: 0,
        duration: 0.8,
        ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
      });

      gsap.to(inquireBoxRef.current, {
        x: "35%",
        duration: 0.8,
      });

      gsap.to(".white-plate", {
        y: "0%",
        duration: 0.8,
        ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
      });

      gsap.to(".inquireBox h3, .inquireBox i", {
        color: "#7c7262",
        delay: 0.2,
        duration: 0.5,
      });
      gsap.to(inquireLeftArrowRef.current, {
        opacity: 1,
        delay: 0.3,
        duration: 0.5,
      });

      inquireButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(inquireRightArrowRef.current, {
          x: "0%",
          duration: 0.8,
          opacity: 1,
          ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
        });

        gsap.fromTo(
          inquireLeftArrowRef,
          {
            x: "35%",
            opacity: "1",
          },
          {
            x: "0%",
            opacity: "0",

            duration: 0.8,
            opacity: 0,
            ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
          }
        );

        gsap.to(inquireBoxRef.current, {
          x: "0%",
          duration: 0.8,
          ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
        });

        gsap.to(".white-plate", {
          y: "100%",
          ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
        });
        gsap.to(inquireLeftArrowRef.current, {
          opacity: 0,
          duration: 0.5,
        });

        gsap.to("h3, i", {
          color: "white",
          delay: 0.2,
          duration: 0.5,
        });
      });
    });
  }, {});
  return (
    <header className=" z-[40] fixed top-0 left-0 flex justify-between  items-center flex-row-reverse md:flex-row py-[8vw] md:py-[1.3rem] w-full px-[1.5rem]">
      <div
        ref={hamMenuLRef}
        onClick={toggleMenuFunction}
        className={` hamburger-menu cursor-pointer group flex items-center gap-[1rem] 2xl:gap-[1vw]`}
      >
        <div className="hamburger-menu-lines ">
          <div
            ref={hamMenuLine1Ref}
            className={` ham-line origin-[21.5%_30%] duration-500 transition-all ${
              initialState ? "rotate-[20deg] " : "rotate-0"
            } bg-white h-[2.4px] w-[3.5rem] xl:w-[3vw]`}
          ></div>
          <div
            ref={hamMenuLine2Ref}
            className={`ham-line origin-[21.5%_30%] duration-500 transition-all ${
              initialState ? "-rotate-[20deg] " : "rotate-0"
            } bg-white h-[2.4px] w-[3.5rem] xl:w-[3vw] mt-[0.5rem] 2xl:mt-[0.5vw]`}
          ></div>
        </div>

        <button className="hidden md:block h-[1rem] overflow-hidden  cursor-pointer relative 2xl:h-[1vw]  ">
          <h3
            ref={menuTextRef}
            className={` ${
              initialState ? "-translate-y-[100%]" : "translate-y-0"
            }  absolute left-0 top-0 duration-300 transition-all  mc-button font-NHaasGroteskTXPro-medium leading-none text-[1rem] 2xl:text-[1vw] text-white`}
          >
            MENU
          </h3>
          <h3
            ref={closeTextRef}
            className={` ${
              initialState ? "translate-y-0" : "translate-y-[100%]"
            }  duration-300 transition-transform left-0 mc-button font-NHaasGroteskTXPro-medium leading-none text-[1rem]  2xl:text-[1vw] text-white`}
          >
            CLOSE
          </h3>
          {/* <h3 className={`mc-button font-NHaasGroteskTXPro-medium leading-none text-[1rem] group-hover:-translate-y-8 2xl:text-[1vw] text-white`}>
            MENU
          </h3>
          <h3 className="mc-button font-NHaasGroteskTXPro-medium leading-none text-[1rem] group-hover:-translate-y-4  2xl:text-[1vw] text-white">
            CLOSE
          </h3> */}
        </button>
      </div>

      <div className="absolute left-[1rem] md:top-[50%] md:left-[50%] md:-translate-y-[50%] md:-translate-x-[50%] w-[28vw] md:w-[7.5rem]">
        <Link href="/">
          <Image
            src={logo}
            alt="111 West 57th Street logo"
            width={200}
            height={50}
            className="w-full"
            priority
          />
        </Link>
      </div>

      <Link href="/">
        <div
          ref={inquireButtonRef}
          className=" hidden md:flex relative group: items-center justify-center gap-[5rem] border-[1px] border-[#fff] rounded-[0.2rem] py-[0.5rem] overflow-hidden"
        >
          <div
            ref={inquireBoxRef}
            className=" inline-flex items-center justify-center inquireBox  z-[40]  gap-[0.8vw]"
          >
            {/* <i
              ref={inquireLeftArrowRef}
              className="fa-solid fa-arrow-right inqurie-left-arrow ri-arrow-right-line text-[1rem] 2xl:text-[1vw]  text-white font-[500] opacity-0"
            ></i> */}
            <i
              ref={inquireLeftArrowRef}
              className="fa-solid fa-arrow-right leftArrow opacity-0 translate-x-4 inqurie-right-arrow ri-arrow-right-line text-[1rem] 2xl:text-[1vw] text-white font-[500] mr-[1vw]"
            ></i>
            <h3 className="uppercase font-NHaasGroteskTXPro-medium  text-white text-[1rem]  2xl:text-[1vw]">
              Inquire
            </h3>
          </div>
          <i
            ref={inquireRightArrowRef}
            className="fa-solid fa-arrow-right inqurie-right-arrow ri-arrow-right-line text-[1rem] 2xl:text-[1vw] text-white font-[500] mr-[1vw]"
          ></i>

          <div className="white-plate z-[30] h-full w-full  absolute top-0 left-0 bg-white translate-y-[100%]"></div>
        </div>
      </Link>
    </header>
  );
};
