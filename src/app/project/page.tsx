import ContactStrip from '@/ui/common/ContactStrip'
import HeroSection from '@/ui/HeroSection'
import ProjectSection from '@/ui/ProjectSection'
import SkillSection from '@/ui/SkillSection'
import React from 'react'

const page = () => {
  return (
    <main className="max-h-full  relative bg-gradient-to-r from-[#000] to-[#16F5292A] bg-[#12191b]">
    <HeroSection/>
    <ProjectSection/>
    <SkillSection/>
    <ContactStrip/>
  </main>
  )
}

export default page