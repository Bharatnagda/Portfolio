import ContactStrip from '@/ui/common/ContactStrip'
import HeroSection from '@/ui/HeroSection'
import ProjectSectionDesktop from "@/ui/ProjectSectionDesktop";
import ProjectSectionMobile from "@/ui/ProjectSectionMobile";
import SkillSection from '@/ui/SkillSection';
import { getDeviceType } from '@/libs/device';

import React from 'react'

 
const page = async () => {
  const device = await  getDeviceType();
  return (
    <main className="max-h-full  relative bg-gradient-to-r from-[#000] to-[#16F5292A] bg-[#12191b]">
    <HeroSection/>
    {
        device == 'Desktop' ?
        <ProjectSectionDesktop/>:
        <ProjectSectionMobile/>
      }
    <SkillSection/>
    <ContactStrip/>
  </main>
  )
}

export default page