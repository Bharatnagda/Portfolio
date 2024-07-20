import ContactStrip from "@/ui/common/ContactStrip";
import FloatingContact from "@/ui/common/FloatingContact";
import Experience from "@/ui/Experience";
import HeroSection from "@/ui/HeroSection";
import ProjectSection from "@/ui/ProjectSection";
import SkillSection from "@/ui/SkillSection";
import Image from "next/image";



export default function Home() {
  return (
    <main className="max-h-full  relative bg-gradient-to-r from-[#000] to-[#16F5292A] bg-[#12191b]">
      <HeroSection/>
      <SkillSection/>
      <ProjectSection/>
      <Experience/>
      <ContactStrip/>
    </main>
  );
}
