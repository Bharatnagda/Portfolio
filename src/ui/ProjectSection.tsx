import React from 'react'
import ProjectCard from './cards/ProjectCard'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'

const ProjectSection = () => {
  return (
    <div className='my-16 lg:container overflow-auto' id="project">
        <h2 className='pl-[14px] lg:pl-0 text-[32px] mb-5 sm:mb-0 md:text-[48px] font-semibold text-center text-white'>Check out my latest work</h2>
        <p className='pl-[14px] lg:pl-0 text-lg text-[#fff] mt-2 mb-5 sm:mb-10 hidden sm:block text-center'>I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        <div className=' w-full flex items-start justify-center  mx-auto gap-5 xl:gap-16 overflow-auto' style={{display:"-webkit-box"}}>
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
            <div className='ml-[24px] lg:ml-0 w-[80%] sm:w-1/2 lg:w-[35%] xl:w-[30%] 2xl:w-[26%]'>
            <ProjectCard imgUrl="/assets/gradding.gif" projectTitle='Gradding: Platform for Global Education' projectDuration='Jul 2023 - Present' aboutProject='Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.' webUrl='https://www.gradding.com/'/>
            </div>
            <div className='w-[80%] sm:w-1/2 lg:w-[35%] xl:w-[30%] 2xl:w-[26%]'>
            <ProjectCard imgUrl="/assets/mySip.gif" projectTitle='My SIP Online: Invest smarter' projectDuration='Jul 2023 - Present' aboutProject='My SIP Online: Your one-stop shop for smarter investing. We guide you through mutual funds, recommend personalized options, and provide top-notch support to ensure success.' webUrl='https://www.mysiponline.com/'/>
            </div>
            <div className='w-[80%] sm:w-1/2 lg:w-[35%] xl:w-[30%] 2xl:w-[26%] mr-5 sm:mr-0'>
            <ProjectCard imgUrl="/assets/lysosoft.gif" projectTitle='LysoSoft: lift Your Digital Growth' projectDuration='Jan 2024 - Present' aboutProject='Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.' webUrl='tel:+91-9782241022'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection