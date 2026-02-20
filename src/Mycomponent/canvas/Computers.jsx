import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../layout/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* 1. Global Brightness: Isse pura model saaf dikhega (Andhera khatam) */}
      <hemisphereLight intensity={2} groundColor="black" skyColor="#b1e1ff" />

      {/* 2. Main Spotlight: Ye main roshni hai jo shadow banayegi */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow={false}
        shadow-mapSize={1024}
      />

      {/* 3. Gaming RGB Glow (Purple/Blue): Computer ke side se glow aayega */}
      <pointLight
        position={[-2, 0, -5]}
        intensity={5}
        color="#915EFF"  // Website ka purple color
        distance={10}
      />

      <pointLight
        position={[0, 0, 1]}
        intensity={5}
        color="#915EFF"  // Website ka purple color
        distance={10}
      />

      {/* 4. Front Fill Light: Taaki samne se black na dikhe */}
      <pointLight position={[1, 1, 1]} intensity={2} color="#ffffff" />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.6}
        position={isMobile ? [1.5, -3, 0] : [6, -4.5, -11]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};



const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <Suspense fallback={<CanvasLoader />}> */}
        <Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            // target={isMobile ? [1.5, 0, 0] : [0, 9, 0]}
            target={isMobile ? [1.5, -3, 0] : [6, -4.5, -11]}

          // autoRotate={4}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;