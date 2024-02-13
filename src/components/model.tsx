"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Mesh } from "three";

export function MeshComponent() {

    const fileUrl = "./modelLib/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        // mesh.current.rotation.y -= 0.0002;
        mesh.current.rotation.y += 0.0001;
        // mesh.current.rotation.z -= 0.0003;
        mesh.current.scale.z += 0.00035;
        mesh.current.scale.x += 0.00035;
        mesh.current.scale.y += 0.00035;
       
        // mesh.current.rotateY = 0.2
        // mesh.current.scale.x += 0.003;
     });
  
    return (
      <>
        <mesh ref={mesh}>
        <primitive object={gltf.scene}
        position={[-1.1 , -0.8, 0]}
        scale={4.2}
        rotation={[0,-0.8,0]}
        />
      </mesh>
      </>
    );
  }
