"use client"
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import Marquee from '@/components/magicui/marquee'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef, useRef } from 'react'
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white hover:scale-105 transition-all p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
const Icons = [
    {
      skillImg: "/icons/whats.png",
      
    },
    {
      skillImg: "/icons/linkedin.png",
      
    },
    {
      skillImg: "/icons/github.png",
      
    },
    {
        skillImg: "/icons/skype.png",
        
      },
      {
        skillImg: "/icons/gmail.png",
        
      },
   
  ];
const Footer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center  bg-gradient-to-r from-[#000] to-[#16F5292A] bg-[#12191b]"
      ref={containerRef}
    >
      <div className="flex size-full flex-col w-full max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Link href="https://wa.me/919782241022">
                <Image src="/icons/whats.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
          <Circle ref={div5Ref}>
            <Link href="https://github.com/bharatnagda">
                    <Image src="/icons/github.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Link href="/">
                <Image src="/icons/skype.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
          </Circle>
          <Circle ref={div6Ref}>
            <Link href="mailto:bharat.nagda94@gmail.com">
                <Image src="/icons/gmail.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Link href="https://www.linkedin.com/in/bharat-nagda">
                <Image src="/icons/linkedin.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
          <Circle ref={div7Ref}>
            <Link href="/">
                <Image src="/icons/instagram.png" width={65} height={65} alt='icons'/>
            </Link>
          </Circle>
        </div>
      </div>
      
 
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}

export default Footer