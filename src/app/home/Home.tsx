"use client";
import React from "react";
 

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import {useTheme } from "@/lib/ThemeContext";


 
 
const Home = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`  ${
        isDarkTheme
          ? "bg-gradient-to-b from-[#070b14] to-[#07071b] text-white"
          : "bg-white text-black"
      }`}
    >
  <Navbar />
      <HeroSection />
   
    </div>
  );
};

export default Home;
