"use client"
import React, { useEffect, useState } from 'react'
import Button from "@/ui/common/Button";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const HeaderItems = [
  {
    url:"/",
    title:"Home"
  },
  {
    url:"/about",
    title:"About"
  },
  {
    url:"/project",
    title:"Project"
  },
  {
    url:"/contact",
    title:"Contact"
  }
]
const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`sm:w-1/2 fixed z-50 top-3 w-[96%] m-auto sm:top-5 left-0 right-0 rounded-xl ${isScrolling ? 'bg-gradient-to-r from-[#000] to-[#01322090] shadow-[0_0px_12px_#fff]' : ''}`}>
      <div className={`flex w-full m-auto items-center justify-between  container p-2 border-1 border-indigo-200 rounded-xl bg-[rgb(0,0,0,0.1)] `}>
        {
          HeaderItems.map((HeaderItem,index)=>(
            <Link key={index} href={HeaderItem.url} className={`${pathName === HeaderItem.url ? "bg-white text-[#01322090]":"bg-transparent text-white"} text-sm sm:text-base  hover:scale-105 transition-all uppercase font-semibold w-1/5 text-center rounded-lg p-1 sm:p-2`}>{HeaderItem.title}</Link>
      
          ))
        }
      </div>
    </div>
    
  )
}

export default Header