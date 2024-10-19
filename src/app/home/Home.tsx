"use client";
import React, { useEffect } from "react";


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";
import CubeAnimation from "@/components/CubeAnimation";




const Home = () => {
  const { isDarkTheme } = useTheme();


  return (
    <div
      className={`  ${isDarkTheme
        ? "bg-gradient-to-b from-[#070b14] to-[#07071b] text-white"
        : "bg-white text-black"
        } relative`}
    >
      <Navbar />
      <HeroSection />
      {/* Animation des cubes */}

      <CubeAnimation />
    </div>
  );
};

export default Home;
