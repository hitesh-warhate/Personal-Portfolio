import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.6, 96, 96]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#3aa9ff"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
          emissive="#0a4f8a"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function Orbitals() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={2 + i} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron
            args={[0.25, 0]}
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 3,
              Math.sin((i / 3) * Math.PI * 2) * 1.2,
              Math.sin((i / 3) * Math.PI * 2) * 2,
            ]}
          >
            <meshStandardMaterial
              color={i === 0 ? "#5ad6ff" : i === 1 ? "#7af0d4" : "#3aa9ff"}
              emissive={i === 0 ? "#1f7fb8" : i === 1 ? "#1f9e80" : "#1a5ea8"}
              emissiveIntensity={0.6}
              metalness={0.7}
              roughness={0.2}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  );
}

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7ad0ff" />
        <pointLight position={[-5, -3, -2]} intensity={1.5} color="#3aa9ff" />
        <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={0.5} />
        <AnimatedSphere />
        <Orbitals />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Suspense>
    </Canvas>
  );
};
