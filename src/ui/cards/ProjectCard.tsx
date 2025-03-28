import React from 'react'
import { MagicCard } from "@/components/magicui/magic-card";
import Image from 'next/image';
import Link from 'next/link';
import { BorderBeam } from '@/components/magicui/border-beam';
const ProjectCard = ({classname,imgUrl,projectTitle,projectDuration,aboutProject,webUrl}:{classname:string,webUrl:string,imgUrl:string,projectTitle:string,projectDuration:string,aboutProject:string}) => {
  return (
    <div className={`${classname} rounded-2xl `}>
      
        <MagicCard
        className="flex flex-col items-center justify-center shadow-lg rounded-2xl bg-white "
        gradientColor="#16F5292A"
        >
           <BorderBeam size={350} duration={20} delay={2} />
        <div className='w-full '>
          <Image src={imgUrl} width={300} height={300} alt='project image' className='w-full h-full'/>
         
        </div>
        <div className='w-full p-2'>
       
          <p className='text-sm sm:text-base text-black font-semibold'>{projectTitle}</p>
          <p className='text-xs sm:text-sm font-medium text-[#737373] my-1'>{projectDuration}</p>
          <p className='text-xs sm:text-sm text-[#737373] my-4 line-clamp-2 sm:line-clamp-none'>{aboutProject}
          </p>
          
          <div className='flex flex-wrap gap-2 my-3'>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>Nextjs</p>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>TailwindCSS</p>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>Shadcn UI</p>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>Next UI</p>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>Figma</p>
            <p className='py-1 px-2 rounded-md bg-[#747579]/10 text-black font-semibold text-[12px]'>Redux</p>
          </div>
          <Link href={webUrl} className='flex gap-1 items-center capitalize bg-black  rounded-md py-1.5 px-4 text-white w-fit text-sm hover:scale-105 transition-all'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>

            </span>
            website
          </Link>
        </div>
      </MagicCard>
    </div>
  )
}

export default ProjectCard