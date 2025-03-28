"use client"
import React from 'react'
import ProjectCard from './cards/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay } from 'swiper/modules';
const ProjectDetail=[
  {
    imgUrl:'/assets/gradding.gif',
    projectTitle:'Gradding: Platform for Global Education',
    projectDuration:'Jul 2023 - Present',
    aboutProject:'Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.',
    webUrl:'https://www.gradding.com/'
  },
  {
    imgUrl:'/assets/mySip.gif',
    projectTitle:'My SIP Online: Invest smarter',
    projectDuration:'Jul 2023 - Present',
    aboutProject:'My SIP Online: Your one-stop shop for smarter investing. We guide you through mutual funds, recommend personalized options, and provide top-notch support to ensure success.',
    webUrl:'https://www.mysiponline.com/'
  },
  {
    imgUrl:'/assets/lysosoft.gif',
    projectTitle:'LysoSoft: lift Your Digital Growth',
    projectDuration:'Jan 2024 - Present',
    aboutProject:'focuses on empowering businesses to thrive in the digital age.offer tailored solutions to help small businesses and enterprises build a strong online presence, reach new customers, and drive growth.',
    webUrl:'tel:+91-9782241022'
  },
  {
    imgUrl:'/assets/gradding.gif',
    projectTitle:'Gradding: Platform for Global Education',
    projectDuration:'Jul 2023 - Present',
    aboutProject:'Gradding simplifies the study abroad journey. Explore programs, prepare for tests (IELTS, PTE, Duolingo etc.), and secure accommodation, financing, and visas - all on one platform.',
    webUrl:'https://www.gradding.com/'
  },
  {
    imgUrl:'/assets/mySip.gif',
    projectTitle:'My SIP Online: Invest smarter',
    projectDuration:'Jul 2023 - Present',
    aboutProject:'My SIP Online: Your one-stop shop for smarter investing. We guide you through mutual funds, recommend personalized options, and provide top-notch support to ensure success.',
    webUrl:'https://www.mysiponline.com/'
  },
  {
    imgUrl:'/assets/lysosoft.gif',
    projectTitle:'LysoSoft: lift Your Digital Growth',
    projectDuration:'Jan 2024 - Present',
    aboutProject:'focuses on empowering businesses to thrive in the digital age.offer tailored solutions to help small businesses and enterprises build a strong online presence, reach new customers, and drive growth.',
    webUrl:'tel:+91-9782241022'
  },
]
const ProjectSectionMobile = () => {
  return (
    <div className='my-16 lg:container overflow-auto' id="project">
        <h2 className='pl-[14px] lg:pl-0 text-[32px] mb-5 sm:mb-0 md:text-[48px] font-semibold text-center text-white'>Check out my latest work</h2>
        <p className='pl-[14px] lg:pl-0 text-lg text-[#fff] mt-2 mb-5 sm:mb-10 hidden sm:block text-center'>I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        
            <Swiper
       effect={'cards'}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       grabCursor={true}
       modules={[EffectCards,Autoplay]}
       className='w-3/4'

      >
        
            {
              ProjectDetail.map((detail,index)=>(
                <SwiperSlide key={index} >
                  <ProjectCard classname='' imgUrl={detail.imgUrl} projectTitle={detail.projectTitle} projectDuration={detail.projectDuration} aboutProject={detail.aboutProject} webUrl={detail.webUrl}/>
                </SwiperSlide>
              ))
            }
            </Swiper>
        </div>
  )
}

export default ProjectSectionMobile