import React from 'react'
import ProjectCard from './cards/ProjectCard'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'

const ProjectSection = () => {
  return (
    <div className='my-16 container'>
        <h2 className='text-[48px] font-semibold text-center text-white'>Check out my latest work</h2>
        <p className='text-lg text-[#fff] mt-2 mb-5 sm:mb-10 hidden sm:block text-center'>I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        <div className='flex items-start justify-center  mx-auto gap-16'>
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
            <div className='w-[26%]'>
            <ProjectCard imgUrl="/assets/gradding.gif" projectTitle='Gradding: Platform for Global Education' projectDuration='Jul 2023 - Present' aboutProject='Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.' webUrl='https://www.gradding.com/'/>
            </div>
            <div className='w-[26%]'>
            <ProjectCard imgUrl="/assets/mySip.gif" projectTitle='My SIP Online: Invest smarter' projectDuration='Jul 2023 - Present' aboutProject='My SIP Online: Your one-stop shop for smarter investing. We guide you through mutual funds, recommend personalized options, and provide top-notch support to ensure success.' webUrl='https://www.mysiponline.com/'/>
            </div>
            <div className='w-[26%]'>
            <ProjectCard imgUrl="/assets/lysosoft.gif" projectTitle='LysoSoft: lift Your Digital Growth' projectDuration='Jan 2024 - Present' aboutProject='Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.' webUrl='tel:+91-9782241022'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection