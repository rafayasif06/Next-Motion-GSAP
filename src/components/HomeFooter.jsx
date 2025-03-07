import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

const HomeFooter = ({ initialState }) => {
  useGSAP(() => {
    let bInfos = document.querySelectorAll(".b-info");
    bInfos.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element.querySelector(".text-bottom-line"), {
          x: "0%",
          duration: 0.5,
          ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element.querySelector(".text-bottom-line"), {
          x: "100%",
          duration: 0.5,
          ease: CustomEase.create("custom", "0.87, 0, 0.13, 1"),

          onComplete: () => {
            gsap.to(element.querySelector(".text-bottom-line"), {
              x: "-101%",
              duration: 0,
            });
          },
        });
      });
    });
  });
  return (
    <>
      <div className="absolute bottom-[17vw] md:bottom-[4vw] lg:bottom-[1rem] left-0 w-[100%] px-[5.5vw] md:px-[1rem] flex justify-end">
        <div className="info-container w-full lg:w-[55%] flex justify-between items-center text-[4vw] md:text-[2vw] lg:text-[1vw] text-white">
          <div className="flex items-center gap-[5vw] lg:gap-[1.5vw]">
            <div className="b-info overflow-hidden font-nHaas65 relative">
              <Link href="#">LEGAL</Link>
              <div className="text-bottom-line -translate-x-[101%] h-[1px] w-full absolute bottom-0 left-0 bg-white"></div>
            </div>

            <div className="b-info overflow-hidden font-nHaas65 relative">
              <Link href="#">TEAM</Link>
              <div className="text-bottom-line -translate-x-[101%] h-[1px] w-full absolute bottom-0 left-0 bg-white"></div>
            </div>
          </div>

          <div className="b-info overflow-hidden text-[5.5vw] md:text-[3.3vw] lg:text-[1.6vw] relative">
            <Link href="#" className="">
              212-935-5757
            </Link>
            <div className="text-bottom-line -translate-x-[101%] h-[1px] w-full absolute bottom-0 left-0 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
