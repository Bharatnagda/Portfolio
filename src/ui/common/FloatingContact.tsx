import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FloatingContact = () => {
  return (
    <div className='fixed left-3 bottom-[15%] z-50 m-auto h-fit p-1 border-1 border-white bg-white flex flex-col gap-5 rounded-full shadow-[0_35px_85px_2px_#fff]'>
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
         <Link href="/" className='rounded-full transition-all'>
            <Image src="/icons/whatsapp.png" width={34} height={34} alt='social icon' className='hover:scale-125 hover:drop-shadow-lg transition-all rounded-full'/>
        </Link> 
    </div>
  )
}

export default FloatingContact