import ContactStrip from '@/ui/common/ContactStrip'
import HeroSection from '@/ui/HeroSection'
import ProjectSectionDesktop from "@/ui/ProjectSectionDesktop";
import ProjectSectionMobile from "@/ui/ProjectSectionMobile";
import SkillSection from '@/ui/SkillSection'
import { headers } from 'next/headers'
import React from 'react'
export function getDeviceType() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";

  if (/mobile/i.test(userAgent)) {
    return "Mobile";
  } else if (/tablet/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}
 const device = getDeviceType();
const page = () => {
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