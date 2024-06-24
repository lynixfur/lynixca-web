import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import ITSection from "@/components/sections/ITSection";
import ProtectKindness from "@/components/sections/ProtectKindness";
import WeAreVRContainer from "@/components/sections/SectionVR";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-5">
        <i className="fa-solid fa-cog fa-spin text-6xl"/>
        <h1 className="text-4xl font-bold text-cyan-400">Lynx Network Deployment In Progress</h1>
        <p className="text-xl text-center">The Lynx Network is currently being set up.<br/> This means we are installing the necessary equipment and configuring the system to be operational.</p>
      </div>
    </main>
  );
}
