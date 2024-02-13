/* eslint-disable react/no-children-prop */
'use client'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshComponent } from "../../components/model";


export default function RenderModel() {

  
  return (
    <>

      <main className=" bg-gradient-to-r from-green-50 via-white to-green-50 w-screen h-screen flex overflow-scroll mt-0 rounded-lg">
        <div className="h-screen w-screen">        
        <Canvas className=' flex justify-center items-center w-[1200px] h-[900px] overflow-auto'>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <MeshComponent/>
        </Canvas> 

        </div>
        
      </main>
     
    </>
  );
}
