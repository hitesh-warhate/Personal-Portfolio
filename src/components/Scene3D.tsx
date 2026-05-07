import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Text, RoundedBox, Line } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Floating code snippet planes around a central wireframe core
const CODE_LINES = [
  "const agent = new LLMAgent();",
  "await agent.reason(task);",
  "function build(idea) {",
  "  return ship(idea);",
  "}",
  "model.fit(data);",
  "import torch",
  "<Hitesh />",
  "git commit -m 'ship it'",
  "while(learning) { grow++; }",
];

function CodeRibbon({ text, position, rotation, color }: { text: string; position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[2.6, 0.45, 0.04]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#0e1b2e"
            metalness={0.6}
            roughness={0.3}
            emissive={color}
            emissiveIntensity={0.15}
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.16}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

function WireCore() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <group ref={ref}>
      {/* outer wireframe icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#5ad6ff" wireframe transparent opacity={0.5} />
      </mesh>
      {/* inner glowing core */}
      <mesh scale={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#3aa9ff"
          emissive="#3aa9ff"
          emissiveIntensity={1.2}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      {/* mid wireframe */}
      <mesh scale={0.95}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#7af0d4" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, tilt, color }: { radius: number; tilt: number; color: string }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);
  return (
    <group rotation={[tilt, 0, 0]}>
      <Line points={points} color={color} lineWidth={1} transparent opacity={0.4} />
    </group>
  );
}

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 6.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#7ad0ff" />
        <pointLight position={[-5, -3, -2]} intensity={1.2} color="#3aa9ff" />
        <Stars radius={60} depth={50} count={2000} factor={3} saturation={0} fade speed={0.4} />

        <WireCore />

        <OrbitRing radius={2.4} tilt={0.4} color="#5ad6ff" />
        <OrbitRing radius={3.2} tilt={-0.3} color="#7af0d4" />

        {CODE_LINES.map((line, i) => {
          const angle = (i / CODE_LINES.length) * Math.PI * 2;
          const radius = 2.8 + (i % 2) * 0.6;
          const y = Math.sin(i * 1.3) * 1.4;
          const colors = ["#5ad6ff", "#7af0d4", "#3aa9ff"];
          return (
            <CodeRibbon
              key={i}
              text={line}
              position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}
              rotation={[0, -angle + Math.PI / 2, 0]}
              color={colors[i % 3]}
            />
          );
        })}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
        />
      </Suspense>
    </Canvas>
  );
};
