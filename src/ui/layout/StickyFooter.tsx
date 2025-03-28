"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const StickyFooter = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 100); // Update when scrolled past the initial view
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  
  const handleTouch = () => { 
    setTouchStart(true);
  };


  useEffect(() => {
    document.addEventListener('touchstart', handleTouch);
    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []); 

  return (
    <div className={`md:hidden fixed  left-0 right-0 w-[95%] m-auto  gap-2 flex items-between justify-between mx-2 rounded-lg z-40 transition-all ${isScrolling ? 'bottom-2' : '-bottom-20'}`}>
      {touchStart ? '' : ''}            
      <Link
        href="tel:+91-9782241022"
        className="w-[48%] shadow-lg border-1 border-[#C7C7C7] backdrop-blur-lg px-2 py-3 rounded-[10px] text-[15px] font-semibold text-[#242331] flex items-center justify-center gap-2 bg-[#FFFFFF80]"
      >
        <span className="inline-block">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.52113 10.9193C12.2603 10.9193 14.4808 8.69877 14.4808 5.95964C14.4808 3.22051 12.2603 1 9.52113 1C6.78202 1 4.56152 3.22051 4.56152 5.95964C4.56152 8.69877 6.78202 10.9193 9.52113 10.9193Z"
              stroke="#242331"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 20.8398C1 17.001 4.81892 13.8963 9.52064 13.8963C10.4729 13.8963 11.3954 14.0252 12.2584 14.2633"
              stroke="#242331"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8066 20.3485C10.8066 20.5105 10.8427 20.677 10.9193 20.839C10.9959 21.001 11.0951 21.1539 11.2258 21.298C11.4466 21.541 11.69 21.7165 11.9648 21.8289C12.2353 21.9415 12.5283 22 12.8437 22C13.3034 22 13.7946 21.892 14.313 21.6715C14.8312 21.4509 15.3495 21.1539 15.8632 20.7805C16.3816 20.4025 16.8727 19.984 17.3415 19.5204C17.8056 19.0525 18.2248 18.562 18.5989 18.049C18.9684 17.536 19.2658 17.023 19.4822 16.5145C19.6985 16.0015 19.8066 15.511 19.8066 15.043C19.8066 14.7371 19.7526 14.4445 19.6444 14.1745C19.5362 13.9001 19.365 13.648 19.1262 13.423C18.8377 13.1395 18.5222 13 18.1887 13C18.0625 13 17.9364 13.027 17.8237 13.081C17.7066 13.135 17.6028 13.216 17.5217 13.3331L16.4762 14.8046C16.3951 14.917 16.3365 15.0206 16.2959 15.1195C16.2553 15.214 16.2328 15.3085 16.2328 15.394C16.2328 15.502 16.2643 15.61 16.3275 15.7135C16.386 15.817 16.4717 15.925 16.5798 16.033L16.9224 16.3885C16.9719 16.438 16.9944 16.4965 16.9944 16.5685C16.9944 16.6045 16.99 16.636 16.9809 16.672C16.9674 16.708 16.9539 16.735 16.9449 16.762C16.8638 16.9105 16.724 17.104 16.5257 17.338C16.3229 17.572 16.1066 17.8105 15.8722 18.049C15.6289 18.2875 15.3946 18.508 15.1556 18.7105C14.9214 18.9085 14.7275 19.0435 14.5743 19.1245C14.5518 19.1335 14.5247 19.147 14.4931 19.1605C14.4571 19.174 14.4211 19.1785 14.3806 19.1785C14.3039 19.1785 14.2453 19.1515 14.1957 19.102L13.8533 18.7645C13.7406 18.652 13.6324 18.5665 13.5288 18.5125C13.425 18.4495 13.3214 18.418 13.2087 18.418C13.1232 18.418 13.033 18.436 12.9339 18.4765C12.8347 18.517 12.7311 18.5755 12.6184 18.652L11.1266 19.7094C11.0094 19.7904 10.9283 19.8849 10.8788 19.9975C10.8337 20.11 10.8066 20.2224 10.8066 20.3485Z"
              fill="#242331"
            />
          </svg>
        </span>
        Call Me Now
      </Link>
      <Link
       href="/docs/Resume light.pdf"
        className="w-[48%] shadow-lg border-1 border-[#C7C7C7] backdrop-blur-lg px-2 py-3 rounded-[10px] text-[15px] font-semibold text-[#242331] flex items-center justify-center gap-2 bg-[#FFFFFF80]" target='_blank' download
      >
        <span className="inline-block">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.75 14.9994V4.13644C19.75 3.05644 18.868 2.25544 17.797 2.34544H17.743C15.853 2.50744 12.982 3.47044 11.38 4.47844L11.227 4.57744C10.966 4.73944 10.534 4.73944 10.273 4.57744L10.048 4.44244C8.446 3.44344 5.584 2.48944 3.694 2.33644C2.623 2.24644 1.75 3.05644 1.75 4.12744V14.9994C1.75 15.8634 2.452 16.6734 3.316 16.7814L3.577 16.8174C5.53 17.0784 8.545 18.0684 10.273 19.0134L10.309 19.0314C10.552 19.1664 10.939 19.1664 11.173 19.0314C12.901 18.0774 15.925 17.0784 17.887 16.8174L18.184 16.7814C19.048 16.6734 19.75 15.8634 19.75 14.9994Z"
              stroke="#242331"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 4.80374V17.9287"
              stroke="#242331"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.78125 7.42874H4.8125"
              stroke="#242331"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.4375 10.0538H4.8125"
              stroke="#"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Let's Discuss!
      </Link>
    </div>
  );
};

export default StickyFooter;
