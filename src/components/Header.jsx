"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoLight from "@/assets/images/logo-horizontal-light.svg";
import logoDark from "@/assets/images/logo-horizontal-dark.svg";
import { motion } from "motion/react";

export const Header = ({ initialState, toggleMenuFunction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.6) {
        setIsVisible(true);
        setColor(initialState ? "white" : "#7c7262");
      } else {
        setIsVisible(false);
        setColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialState]);

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "#7c7262" ? "white" : "#7c7262"));
  };
  return (
    <header className=" z-[40] fixed top-0 left-0 flex   justify-between  items-center flex-row-reverse md:flex-row py-[8vw] md:py-[1.3rem] w-full px-[1.5rem]">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isVisible ? "100%" : 0 }}
        transition={{ duration: 0.5 }}
        className={`h-full w-full absolute top-0 left-0 duration-700  transition-all -z-10 ${
          initialState ? "bg-transparent" : "bg-white"
        }`}
      />

      <div
        onClick={toggleMenuFunction}
        className={` hamburger-menu cursor-pointer  group flex items-center gap-[1rem] 2xl:gap-[1vw]`}
      >
        <div className="hamburger-menu-lines ">
          <motion.div
            animate={{
              backgroundColor: isVisible && !initialState ? "#7C7262" : "white",
            }}
            className={` ham-line origin-[21.5%_30%] duration-500 transition-all ${
              initialState ? "rotate-[20deg] " : "rotate-0"
            }  h-[2.4px] w-[3.5rem] xl:w-[3vw]`}
          />
          <motion.div
            animate={{
              backgroundColor: isVisible && !initialState ? "#7C7262" : "white",
            }}
            className={`ham-line origin-[21.5%_30%] duration-500 transition-all ${
              initialState ? "-rotate-[20deg] " : "rotate-0"
            }bg-white  h-[2.4px] w-[3.5rem] xl:w-[3vw] mt-[0.5rem] 2xl:mt-[0.5vw]`}
          />
        </div>

        <button className="hidden md:block h-[1rem] overflow-hidden  cursor-pointer relative 2xl:h-[1vw]  ">
          <motion.h3
            animate={{
              color: isVisible && !initialState ? "#7C7262" : "white",
            }}
            transition={{ delay: 0.5 }}
            className={` ${
              initialState ? "-translate-y-[100%]" : "translate-y-0"
            }  absolute left-0 top-0 duration-300 transition-all  mc-button font-nHaas65 leading-none text-white text-[1rem] 2xl:text-[1vw] `}
          >
            MENU
          </motion.h3>
          <motion.h3
            animate={{
              color: isVisible && !initialState ? "#7C7262" : "white",
            }}
            transition={{ delay: 0.5 }}
            className={` ${
              initialState ? "translate-y-0" : "translate-y-[100%]"
            }  duration-300 transition-transform left-0 mc-button font-nHaas65 leading-none text-[1rem]  2xl:text-[1vw] text-white`}
          >
            CLOSE
          </motion.h3>
        </button>
      </div>

      <div className="absolute left-[1rem] md:top-[50%] md:left-[50%] md:-translate-y-[50%] md:-translate-x-[50%] w-[28vw] md:w-[7.5rem]">
        <Link href="/">
          <Image
            src={isVisible && !initialState ? logoDark : logoLight}
            alt="111 West 57th Street logo"
            width={200}
            height={50}
            className="w-full"
            priority
          />
        </Link>
      </div>

      {/* ___________________Inquire button__________________ */}
      <Link href="/">
        <div
          style={{ color: color, borderColor: color }}
          onMouseEnter={toggleColor}
          onMouseLeave={toggleColor}
          className="hidden md:flex relative group duration-700 transition-all group items-center justify-center gap-[5rem] hover:border-0  border-[1px] rounded-[0.2rem] py-[0.5rem] overflow-hidden"
        >
          <div className=" inline-flex items-center group-hover:translate-x-[50%] transition-transform duration-700 gap-4  justify-center inquireBox  z-40 ">
            <i className="fa-solid fa-arrow-right leftArrow opacity-0 group-hover:opacity-100 z-40 translate-x-4 inqurie-right-arrow ri-arrow-right-line text-[1rem] 2xl:text-[1vw]  font-[500] mr-[1vw]"></i>
            <h3
              className="uppercase font-nHaas65 
               text-sm"
            >
              Inquire
            </h3>
          </div>
          <i className="fa-solid fa-arrow-right group-hover:translate-x-[300%] duration-700 transition-transform inqurie-right-arrow ri-arrow-right-line text-[1rem] 2xl:text-[1vw] z-40 font-[500] mr-[1vw]"></i>

          {initialState === false ? (
            <div
              className={`white-plate z-20 h-full w-full absolute top-0 left-0 translate-y-[100%] group-hover:translate-y-0 duration-700 transition-all ${
                isVisible ? "bg-[#7c7262]" : "bg-white"
              }`}
            />
          ) : (
            <div className="white-plate z-20 h-full w-full absolute top-0 left-0 translate-y-[100%] group-hover:translate-y-0 duration-700 transition-all bg-white" />
          )}
        </div>
      </Link>
    </header>
  );
};
