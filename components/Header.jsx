"use client";
import { useState } from 'react';
import { useEffect } from "react";



import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Cname from '../public/degzzo-logo-web.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [isMenuOpen]);



  return (
    <>
      <header className='scheme-light-dark bg-white text-black pt-10 pb-10 rignt-0 w-auto xl:px-30 flex items-center justify-between'>
        <Link href="/" passHref>
          <Image src={Cname} loading="lazy" priority={false} alt="Company Logo" className="w-40 xl:w-60 h-auto ml-3" />
        </Link>
        <div className='flex gap-10'>
          <ul className='hidden xl:flex items-center gap-8 text-xl'>
            <li><Link href="/OurService"><div  className="flex items-center">Our Service <IoIosArrowDown /></div></Link></li>
            <li><Link href="/industries"><div className="flex items-center content-center">Industries <IoIosArrowDown /></div></Link></li>
            <li><Link href="/OurWork"><div className="">Our Work</div></Link></li>
            <li><Link href="/About"><div className="">About</div></Link></li>
            <li><Link href="/Joinus"><div className="">Let's Talk</div></Link></li>
          </ul>
          <div className="mr-10 text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
        {/* Mobile Menu */}
          <div className={`absolute z-50  mx-auto left-0 w-full h-full bg-[#c756b4] gap-8 transition-all duration-500 ease-in-out overflow-y-auto ${isMenuOpen ? 'top-0' : '-top-full'}`}>
                <div className=" absolute  top-10 right-10 xl:top-12 xl:right-40  text-3xl text-white"><div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer"><FiX /></div></div>
          <div className="flex flex-col xl:flex-row h-screen"> 
                <div className="w-full xl:w-1/2 flex pt-20 xl:pt-30 bg-[#8b9ffc] ">
                     {/* Left Section (Menu Lists) */}
                  <ul className="gap-4 text-2xl xl:text-4xl m-2 pl-6 xl:pl-10 flex flex-col text-white">
                    <li>
                      <Link href="/OurService">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>
                          Our Service <IoIosArrowDown />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>
                          Industries <IoIosArrowDown />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OurWork">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Our Work</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Joinus">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Join Us</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/About">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>About</div>
                      </Link>
                    </li>
                  </ul>
                      {/* Right Section (Menu Lists) */}
                  <ul className="text-xl xl:text-4xl  m-2 pl-6 xl:pl-10 flex flex-col font-poppins font-light text-white">
                    <li>
                      <Link href="/process">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>Process</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>Careers</div>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/Blogs">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Blogs</div>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Whitepapers</div>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/Joinus">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Contact Us</div>
                      </Link>
                    </li>
                  </ul>
                </div> 
                      {/* CloseB & share Section */}
                <div className="flex  justify-between xl:w-1/2 xl:p-5 text-white xl:pt-35 text-4xl font-bold">
                <div className="flex flex-col pl-5 py-5  h-100">
                  <div className="flex flex-col justify-between gap-5">
                      <div className="font-poppins  font-bold">
                        Got An Idea?
                      </div>
                      <div className="font-poppins ">
                        Let's craft
                      </div>
                      <div className="font-poppins ">
                        brilliance together!
                      </div>
                      <div onClick={() => setIsMenuOpen(false)} >
                        <button className=" hover:bg-[#86447b] text-whirt py-2 px-10 text-xl xl:px-16 border-2 mt-5 rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20Meeting" , "hii Degzzo")}>
                          Let's talk
                        </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-xl pt-5 xl:pt-10 font-semibold">
                    <Link href="/" className="hover:text-black  transition">Instagram</Link>
                    <Link href="/" className="hover:text-gray-600 transition">LinkedIn</Link>
                    <Link href="/" className="hover:text-gray-600 transition">X</Link>
                    <Link href="/" className="hover:text-gray-600 transition">WhatsApp</Link>
                    <Link href="/" className="hover:text-gray-600 transition">Careers</Link>
                  </div>
                 </div>
                  
                </div>
          </div>
          </div>
      </header>
    </>
  );
}

export default Header;