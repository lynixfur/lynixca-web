import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import ITSection from "@/components/sections/ITSection";
import ProtectKindness from "@/components/sections/ProtectKindness";
import WeAreVRContainer from "@/components/sections/SectionVR";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="">
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="flex-1" style={{background: "url('/imgs/8B.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="h-full flex justify-center items-center bg-neutral-950 bg-opacity-30">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-[#7ff1dc]">Hey I'm Lynix!</h1>
                <p className="text-xl my-5 font-semibold">Welcome to my personal cyberspace where I show my passion and projects!</p>
              </div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <WeAreVRContainer/>
      <br/><br/><br/>
      <AboutMe/>

      <br/><br/>
      <p className="text-center font-bold">Copyright 2024 Lynix - All Rights Reserved</p>
      <br/><br/>
    </main>

    <div className="fixed z-20 h-screen w-full flex justify-center items-center hidden">
      <img src="/imgs/Pana_Overtemp.png"/>
    </div>
    <div className="fixed z-20 h-screen w-full left-20 top-20 hidden">
      <img src="/imgs/tempetature.png" className="h-7"/>
    </div>
    </>
  );
}
