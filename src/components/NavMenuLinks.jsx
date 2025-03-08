"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
const navLinks = [
  { id: 1, text: "Residences", href: "/" },
  { id: 2, text: "Services", href: "/" },
  { id: 3, text: "Design", href: "/" },
  { id: 4, text: "Neighborhood", href: "/" },
  { id: 5, text: "Availability", href: "/" },
  { id: 6, text: "Contact", href: "/" },
];

const NavMenuLinks = ({ initialState }) => {
  const boxRefs = useRef(navLinks.map(() => React.createRef()));
  useGSAP(() => {
    boxRefs.current.forEach((boxRef, index) => {
      const onMouseEnter = () => {
        boxRefs.current.forEach((boxRef, idx) => {
          if (index === idx) {
            gsap.to(boxRef.current, { opacity: 1, duration: 0.3 });
          } else {
            gsap.to(boxRef.current, { opacity: 0.4, duration: 0.3 });
          }
        });
      };
      const onMouseLeave = () => {
        boxRefs.current.forEach((boxRef) => {
          gsap.to(boxRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        });
      };

      boxRef.current.addEventListener("mouseleave", onMouseLeave);
      boxRef.current.addEventListener("mouseenter", onMouseEnter);
    });
  });

  return (
    <div className="w-[55%] flex flex-col bg-[#7C7262] leading-none text-white list-none">
      {navLinks.map((item, index) => (
        <motion.div
          key={index}
          ref={boxRefs.current[index]}
          className="nav-link-container"
        >
          <motion.li
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl p-2"
          >
            <Link className="nav-link w-fit" href={item.href}>
              {item.text}
            </Link>
          </motion.li>
        </motion.div>
      ))}
    </div>
  );
};

export default NavMenuLinks;
