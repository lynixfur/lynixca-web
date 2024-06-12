import Navbar from "@/components/Navbar";
import WeAreVRContainer from "@/components/sections/SectionVR";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="">
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="flex-1" style={{background: "url('/imgs/8B.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="h-full bg-blue-950 opacity-50">
              LYNIX.HEADER_HERO
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <WeAreVRContainer/>
      <div className="flex-1">
          LYNIX.SECTION_2
      </div>
      <div className="flex-1">
          LYNIX.SECTION_3
      </div>
      <div className="flex-1">
          LYNIX.SECTION_4
      </div>
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
