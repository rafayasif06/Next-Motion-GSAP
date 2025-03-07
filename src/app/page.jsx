"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header initialState={isMenuOpen} toggleMenuFunction={toggleMenu} />
      <NavMenu initialState={isMenuOpen} />
      <Footer/>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-99"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
