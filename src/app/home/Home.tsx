"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "@/lib/ThemeContext";
import CubesAnimation from "@/components/CubesAnimation";




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

      <HeroSection isDarkTheme={isDarkTheme} />

      {/* Animation des cubes */}
      <CubesAnimation />

    </div>
  );
};

export default Home;
