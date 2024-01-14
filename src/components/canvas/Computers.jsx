import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ screenWidth }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const [ scale, setScale ] = useState(0.6)
  const [ position, setPosition ] = useState([0, -3.3, -1])
  
  useEffect(() => {
    // Atualiza a escala com base na largura da tela
    if (screenWidth < 750) {
      setScale(0.6);
      setPosition([0, -3.3, -1])
    } else if (screenWidth < 1100) {
      setScale(0.8);
      setPosition([0, -4.6, -1.3])
    } else {
      setScale(0.9);
      setPosition([0, -4.6, -1.3])
    }
    console.log(computer)
  }, [screenWidth]);

  return (
      <mesh> 
        <hemisphereLight
          intensity={10}
          groundColor='black'
        />
        <pointLight
          intensity={4}
          position={[0, -1.1, -0.2]}
        />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
      </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth ] = useState(window.innerWidth)

  function handleResize() {
    setScreenWidth(window.innerWidth)
    console.log(screenWidth);
  }

  useEffect(() => {

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [screenWidth])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {<Computers screenWidth={screenWidth}/>}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
