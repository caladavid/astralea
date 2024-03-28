"use client"
import React, { useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { usePathname } from 'next/navigation'
import SearchBar from './SearchBar'
import Link from 'next/link'
import MenuSVG from '@/public/assets/svgs/MenuSVG'
import LogoSVG from '@/public/assets/svgs/LogoSVG'

const Header = () => {
  const pathName = usePathname();
  const isAnimeRoute = pathName.match(/^\/anime\/\d+$/);
  const isHomeRoute = pathName === "/";
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Wrapper>
        <nav className={`${isAnimeRoute ? "absolute md:text-bgColor pt-8" : "py-8 "} w-full flex justify-between md:grid grid-cols-3 `}>

          <Link href='/' className={`${isAnimeRoute ? "md:fill-white md:stroke-white " : ""} flex items-center z-10 hover:text-secondaryColor hover:fill-secondaryColor hover:stroke-secondaryColor  transition-colors`}>
            <LogoSVG />
            <span>
              Astralea
            </span>
          </Link>
          <div className={`${isHomeRoute ? "hidden" : "md:block"} `}>
            <SearchBar ClassName="w-full" IsHide={true} />
          </div>

          <div className={`${isHomeRoute ? "col-span-2" : ""}  hidden md:flex justify-end gap-8 items-center`}>
            <Link href="/browse" className='hover:text-secondaryColor transition-colors '>Browse</Link>
            <Link href="/schedule" className='hover:text-secondaryColor transition-colors'>Schedule</Link>
          </div>

          <button className=" z-[2] stroke-customGray p-3 md:hidden items-center hover:bg-tertiaryColor rounded-full"
            onClick={handleToggleMenu}
            aria-label="Menu">
            <MenuSVG />
          </button>

          {isOpen && (
            <div className="z-10 fixed inset-0 transition-opacity backdrop-blur-sm md:hidden">
              <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black opacity-50"></div>

              <div className={`${isOpen ? 'h-[38%] transition-all ' : 'h-0 hidden transition-all'}fixed  top-0 right-0 w-full transition-all bg-bgColor md:hidden pt-8`}>
                <div>
                  <div className='flex justify-between border-b border-customGray w-4/5 sm:w-9/12 2xl:w-3/5 mx-auto pb-4'>
                    <Link href='/'
                      className={`${isAnimeRoute ? "md:fill-white md:stroke-white " : ""} flex items-center hover:text-secondaryColor hover:fill-secondaryColor hover:stroke-secondaryColor  transition-colors`}>
                      <LogoSVG />
                      <span>
                        Astralea
                      </span>
                    </Link>
                    <button className="stroke-customGray p-3 md:hidden items-center hover:bg-tertiaryColor rounded-full"
                      onClick={handleToggleMenu}
                      aria-label="Menu">
                      <MenuSVG />
                    </button>
                  </div>
                  <div className='z-20 flex flex-col w-4/5 sm:w-9/12 2xl:w-3/5 mx-auto py-4 gap-4 '>
                    <SearchBar ClassName="w-full block cursor-pointer" />
                    <Link href="/browse" className='hover:text-secondaryColor transition-colors' onClick={() => setIsOpen(false)}>Browse</Link>
                    <Link href="/schedule" className='hover:text-secondaryColor transition-colors' onClick={() => setIsOpen(false)}>Schedule</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header