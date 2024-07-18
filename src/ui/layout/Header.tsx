"use client"
import React, { useEffect, useState } from 'react'
import Button from "@/ui/common/Button";
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`w-full fixed z-50 left-0 right-0 ${isScrolling ? 'bg-gradient-to-r from-[#000] to-[#01322090] shadow-[0_5px_16px_rgba(22,104,197,.15)]' : ''}`}>
      <div className={` flex w-full items-center justify-between  container  h-20 `}>
          <div className='text-white text-base sm:text-lg lg:text-2xl'>
            Portfolio
          </div>
          <div className='3/5 m-auto flex items-center justify-center'>
              <Link href="/" className='text-white px-5 text-lg hover:text-[#16F529] transition-all'>Home</Link>
              <Link href="/" className='text-white px-5 text-lg hover:text-[#16F529] transition-all'>About</Link>
              <Link href="/" className='text-white px-5 text-lg hover:text-[#16F529] transition-all'>Project</Link>
              
          </div>
          <Link href="tel:+91-9782241022">
            <Button btntext="Let's Discuss!" />
          </Link>
      </div>
    </div>
    
  )
}

export default Header