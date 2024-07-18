import BlurIn from '@/components/magicui/blur-in'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const SkillSection = () => {
  return (
    <div className="relative  h-[80vh] w-full  mb-16">
      <div className='h-full'>
        <div className="flex items-center justify-center w-[40%] m-auto h-full">
        <BlurIn
          word="Crafted and steward a vast library of interfaces, demonstrating expertise in designing and managing intricate user flows."
          className="text-base font-medium text-white dark:text-white my-20"
        />
          {/* <TextRevealByWord text="Crafted and steward a vast library of interfaces, demonstrating expertise in designing and managing intricate user flows." /> */}
        
        </div>
        <div className='hidden sm:block'>
          <Image src="/icons/html5.png" width={85} height={85} alt='icons' className='animate-floatleft absolute top-[5%] left-[45%] drop-shadow-md'/>
          <Image src="/icons/css.png" width={85} height={85} alt='icons' className='animate-floatright absolute top-[30%] left-[25%] drop-shadow-md'/>
          <Image src="/icons/reactjs.png" width={85} height={85} alt='icons' className='animate-floatleft absolute top-[8%] left-[10%] drop-shadow-md'/>
          <Image src="/icons/tailwind.png" width={85} height={85} alt='icons' className='animate-floatleft absolute top-[50%] left-[12%] drop-shadow-md'/>
          <Image src="/icons/nextjs.png" width={85} height={85} alt='icons' className='animate-floatleft absolute top-[5%] right-[10%] drop-shadow-md'/>
          <Image src="/icons/jira.png" width={85} height={85} alt='icons' className='animate-floatright absolute top-[35%] right-[22%] drop-shadow-md'/>
          <Image src="/icons/vscode.png" width={85} height={85} alt='icons' className='animate-floatleft absolute bottom-[20%] left-[30%] drop-shadow-md'/>
          
          <Image src="/icons/bootstrap.png" width={85} height={85} alt='icons' className='animate-floatleft absolute bottom-[20%] right-[25%] drop-shadow-md'/>
          <Image src="/icons/figma.png" width={85} height={85} alt='icons' className='animate-floatleft absolute top-[55%] right-[5%] drop-shadow-md'/> 
          <Image src="/icons/javascript.png" width={85} height={85} alt='icons' className='animate-floatright absolute bottom-[5%] right-[45%] drop-shadow-md'/> 
        </div>
      </div>
      <DotPattern
          width={15}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
      />
    </div>
  )
}

export default SkillSection