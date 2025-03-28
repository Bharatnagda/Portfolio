import ContactStrip from "@/ui/common/ContactStrip";
import FloatingContact from "@/ui/common/FloatingContact";
import Experience from "@/ui/Experience";
import HeroSection from "@/ui/HeroSection";
import ProjectSectionDesktop from "@/ui/ProjectSectionDesktop";
import ProjectSectionMobile from "@/ui/ProjectSectionMobile";
import SkillSection from "@/ui/SkillSection";
import { headers } from "next/headers";
import Image from "next/image";

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


export default function Home() {
  const device = getDeviceType();
  console.log('device is ',device);
  
    
  return (
    <main className="max-h-full  relative bg-gradient-to-r from-[#000] to-[#16F5292A] bg-[#12191b]">
      <HeroSection/>
      <SkillSection/>
      {
        device == 'Desktop' ?
        <ProjectSectionDesktop/>:
        <ProjectSectionMobile/>
      }
      <Experience/>
      <ContactStrip/>
    </main>
  );
}
