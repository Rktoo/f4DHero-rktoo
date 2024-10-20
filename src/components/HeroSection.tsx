import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import IconF4dDark from './icons/IconF4dDark'
import IconF4dWhite from './icons/IconF4dWhite'
import IconArrow from './icons/IconArrow'

interface HeroSectionProps {
  isDarkTheme: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkTheme }) => {

  return (
    <section className={`hero-section max-w-6xl mx-auto px-10 bg-dark ${isDarkTheme ? " text-white" : " text-black"} py-5 h-full z-[110] overflow-y-hidden`}>

      <div className="container mx-auto text-center">
        <figure className='logo mb-8 '>
          {
            isDarkTheme ?
              <IconF4dDark />
              :
              <IconF4dWhite />
          }
        </figure>
        <div className='w-full flex justify-center items-center z-[110]'>
          <h2 className="max-w-lg text-3xl font-thin tracking-widest z-[110]">
            <span className="font-semibold">Solutions</span>
            <span> de développement </span>
            <span className="font-semibold">rapides</span> et <span className="font-semibold">flexibles</span> avec
          </h2>
        </div>

        <div className='w-full flex justify-center bordure z-[110]' >
          <div className={`relative flex justify-center items-center gap-4 mt-4 px-10 py-4 border border-[#4960FF] rounded-md border-animate z-[110] ${isDarkTheme ? "dark" : "light"}`}>
            {/* Logo Strapi */}
            <Image src={`/images/Strapi-logo-${isDarkTheme ? "white" : "black"}.png`} alt="Strapi Logo" className='mt-1 strapi' width={100} height={60} />

            <span className="text-xl font-bold z-30">&</span>

            {/* Logo Next.js */}
            <Image src={`/images/Next-JS-logo-${isDarkTheme ? "white" : "black"}.png`} alt="Next.js Logo" className='nextjs' width={80} height={40} />
          </div>
        </div>

        {/* Description */}
        <div className='w-full flex justify-center z-[110]'>
          <p className={`max-w-6xl mt-6 text-center text-lg font-thin ${isDarkTheme ? "text-[#5D6066]" : "text-black"} z-[100]`}>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>
        </div>

        <div className="mt-8 flex justify-center z-[100]">
          <Link href="#" legacyBehavior>
            <a className="relative group max-w-xs flex justify-between items-center space-x-2 bg-[#4960FF] text-white py-4 px-6 font-medium scale-95 hover:bg-[#4359e4] hover:scale-100 transition-all duration-300 rounded-full z-[100]">
              <span className='mr-12 font-semibold tracking-wider'>Demander une démo</span>
              <span className="absolute right-2 bg-white rounded-full -rotate-45 group-active:rotate-0 transition-transform duration-200 ease-in-out">
                <IconArrow color='#4960FF' />
              </span>
            </a>
          </Link>
        </div>

      </div>

    </section >
  )
}

export default HeroSection