import React from 'react'
import ShimmerButton from "@/components/magicui/shimmer-button";
const Button = ({btntext}:{btntext:string}) => {
  return (
    <ShimmerButton className="shadow-2xl w-full"
    borderRadius='10px'
    background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(10, 207, 131, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(10, 207, 131, 0.50), rgba(0, 0, 0, 0.00)), #12191B">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {btntext}
        </span>
      </ShimmerButton>
  )
}

export default Button