import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import IconF4dDark from './icons/IconF4dDark'
import { Context } from '@/lib/ThemeContext'
import IconF4dWhite from './icons/IconF4dWhite'
import IconArrow from './icons/IconArrow'

const HeroSection = () => {
  const themeContext = useContext(Context);

  if (!themeContext) {
    throw new Error("ThemeSwitcher must be used within a ThemeProvider");
  }

  const { isDarkTheme } = themeContext;

  return (
    <section className={`hero-section max-w-6xl mx-auto px-10 bg-dark ${isDarkTheme ? " text-white" : " text-black"} py-5 h-full z-20`}>

      <div className="container mx-auto text-center">
        <figure className='logo mb-8 '>
          {
            isDarkTheme ?
              <IconF4dDark />
              :
              <IconF4dWhite />
          }
        </figure>
        <div className='w-full flex justify-center items-center  z-20'>
          <h2 className="max-w-lg text-3xl  z-20">
            <span className="font-semibold">Solutions</span>
            <span className="font-thin"> de développement </span>
            <span className="font-semibold">rapides</span> et <span className="font-semibold">flexibles</span> avec
          </h2>
        </div>

        <div className='w-full flex justify-center'>
          <div className={`relative flex justify-center items-center gap-4 mt-4 px-20 py-4 border border-[#4960FF] rounded-md border-animate ${isDarkTheme ? "dark" : "light"}`}>
            {/* Logo Strapi */}
            <Image src={`/images/Strapi-logo-${isDarkTheme ? "white" : "black"}.png`} alt="Strapi Logo" className='mt-1 z-30' width={100} height={60} />

            <span className="text-xl font-bold z-30">&</span>

            {/* Logo Next.js */}
            <Image src={`/images/Next-JS-logo-${isDarkTheme ? "white" : "black"}.png`} alt="Next.js Logo" className='z-30' width={80} height={40} />
          </div>
        </div>




        {/* Description */}
        <div className='w-full flex justify-center'>
          <p className="max-w-4xl mt-6 text-center text-lg font-thin">
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>
        </div>
        {/* Bouton Call-to-Action */}
        <div className="mt-8 flex justify-center ">
          <Link href="#" legacyBehavior>
            <a className="relative group max-w-xs flex justify-between items-center space-x-2 bg-[#4960FF] text-white py-4 px-6 font-medium scale-95 hover:bg-[#4359e4] hover:scale-100 transition-all duration-300 rounded-full">
              <span className='mr-12'>Demander une démo</span>
              <span className="absolute right-2 bg-white rounded-full -rotate-45 group-active:rotate-0 transition-transform duration-200 ease-in-out">
                <IconArrow />
              </span>
            </a>
          </Link>
        </div>

      </div>


    </section >
  )
}

export default HeroSection