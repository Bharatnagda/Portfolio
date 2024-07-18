import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FloatingContact = () => {
  return (
    <div className='fixed left-5 top-0 bottom-0 m-auto h-fit p-3 border-1 border-white bg-black/20 flex flex-col gap-5 rounded-2xl shadow-[0_35px_85px_2px_#fff]'>
        {/* <Link href="/" className='rounded-full '>
            <Image src="/icons/github.png" width={24} height={24} alt='social icon' className='hover:scale-125 hover:drop-shadow-lg transition-all rounded-full'/>
        </Link>
        <Link href="/" className='rounded-full transition-all'>
            <Image src="/icons/linkedin.png" width={24} height={24} alt='social icon' className='hover:scale-125 hover:drop-shadow-lg transition-all rounded-full'/>
        </Link>
        <Link href="/" className='rounded-full transition-all'>
            <Image src="/icons/instagram.png" width={24} height={24} alt='social icon' className='hover:scale-125 hover:drop-shadow-lg transition-all rounded-full'/>
        </Link>
        <Link href="/" className='rounded-full transition-all'>
            <Image src="/icons/whatsapp.png" width={24} height={24} alt='social icon' className='hover:scale-125 hover:drop-shadow-lg transition-all rounded-full'/>
        </Link> */}
    </div>
  )
}

export default FloatingContact