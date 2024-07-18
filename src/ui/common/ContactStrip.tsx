import Link from 'next/link'
import React from 'react'
import Button from '@/ui/common/Button';

const ContactStrip = () => {
  return (
    <div className='container py-20'>
      <h2 className='w-3/4 m-auto bg-gradient-to-b from-white to-[#0dc27c] bg-clip-text text-transparent text-[46px] font-bold text-center mb-10 sm:leading-[72px]'>Start Your IELTS preparation with Expert Trainers to get 8+ Band</h2>
      <Link href="https://github.com/bharatnagda" className="w-1/5 m-auto text-center mt-[1.6rem]  transition-all block rounded-md  text-black font-semibold text-lg hover:scale-105 transition-all"><Button btntext="Discover How I Can Help!" /></Link>
      
    </div>
  )
}

export default ContactStrip