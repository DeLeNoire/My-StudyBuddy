
import { TabsProjects } from "@/components/projectstab";
import React from "react";
export default function Projects() {
    return (
        <div className="h-screen">
        <GridBackgroundDemo/>
        </div>

    );
  }



export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="font-bold w-full relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      <TabsProjects/>
      </div>
    </div>
  );
}



  
  