"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import Image from "next/image";
import { CustomEase } from "gsap/CustomEase";
import { motion } from "motion/react";
import NavMenuLinks from "./NavMenuLinks";
import HomeFooter from "./HomeFooter";
export default function NavMenu({ initialState }) {
  const imageRef = useRef();
  
  useGSAP(() => {
    if (initialState === true) {
      gsap.set(imageRef.current, { y: "100%" });
      gsap.to(imageRef.current, {
        y: 0,
        delay: 0.2,
        duration: 0.5,
      });
    }
  });
  useEffect(() => {
    if (initialState === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [initialState]);

  const menuVariants = {
    open: {
      scale: 1,
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      scale: 0.5,
      y: "-100%",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const containerRef = useRef();

  return (
    <motion.div
      ref={containerRef}
      variants={menuVariants}
      initial="closed"
      animate={initialState ? "open" : "closed"}
      style={{ transformOrigin: "top" }}
      className={`bg-[#7C7262] min-h-screen flex flex-col overflow-hidden`}
    >
      <div
        className={`flex flex-col md:flex-row md:gap-[4vw] lg:gap-0 py-[1rem] xl:py-[1vw] w-full overflow-hidden mt-48 ml-8 z-50`}
      >
        <div className="md:block hidden w-[45%] p-[1px] h-[50vw] lg:h-[33vw] relative overflow-hidden">
          <div className="nav-image-cover absolute top-0 left-0 -translate-y-[100%] h-full w-full lg:w-[61%] bg-[#7C7262]"></div>
          {/*  NavMenu Image */}
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              className="nav-image block w-[90%] lg:w-[60%] h-[50vh] lg:h-[34vw] object-center object-cover"
              src="/img.avif"
              width={500}
              height={500}
              alt="A city view with tall buildings"
            />
          </motion.div>
        </div>
        {/* NavMenu links  */}
        <NavMenuLinks initialState={initialState} />
        <HomeFooter initialState={initialState} />
      </div>
    </motion.div>
  );
}
