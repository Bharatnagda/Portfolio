"use client"
import GradualSpacing from '@/components/magicui/gradual-spacing';
import Particles from '@/components/magicui/particles'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const HeroSection = () => {
    const [color, setColor] = useState("#ffffff");
  return (
    <div className=''>
      <div className=' py-[9rem] h-fit  relative overflow-hidden'>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={10}
        color={color}
        refresh
      />
      <GradualSpacing
      className="inline-block  text-center  tracking-[-0.1em] font-medium  text-white dark:text-white md:text-7xl md:leading-[5rem]"
      text="Designing &amp; developing"
      />
      <GradualSpacing
        className="inline-block text-center text-4xl font-bold tracking-[0.1em]  bg-gradient-to-r from-[#0acf83] to-[#0dc27c] bg-clip-text text-transparent md:text-7xl md:leading-[130%]"
        text=" beyond"
      />
      <GradualSpacing
        className="inline-block  text-center text-4xl font-medium tracking-[-0.1em]  text-white dark:text-white md:text-7xl md:leading-[5rem]"
        text="the ordinary"
      />
      <p className=' w-[30%] text-center m-auto text-[#87928f] text-lg font-semibold my-4'>I craft user-friendly interfaces & responsive layouts for brands & B2B businesses, driving conversions & growth.</p>
      <div className='mx-auto mt-10 w-fit  rounded-lg  bg-gradient-to-r from-[#000] to-[#0dc27c] hover:scale-105 border-2 py-2.5 px-14 border-[#0dc27c]  transition-all'>
        <Link href="/docs/Resume light.pdf" className='text-white relative z-50 text-lg font-semibold transition-all' target='_blank' download>Hire Now!</Link>
      </div>
      <Image src="/assets/cloud.webp" width={800} height={50} alt='hero-mask' className='absolute -bottom-[5%] -right-[10%]  m-auto h-min w-1/2 z-50'/>
    </div>
    </div>
  )
}

export default HeroSection