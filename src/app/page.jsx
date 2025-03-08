"use client";
import Community from "@/components/Community";
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

      <video
        className="h-screen w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header initialState={isMenuOpen} toggleMenuFunction={toggleMenu} />
      <NavMenu initialState={isMenuOpen} />
      <Community/>
      <Footer />
    </>
  );
}
