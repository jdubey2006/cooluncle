import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment, Sphere, Torus, Stars } from "@react-three/drei";
import * as THREE from "three";

function IceCreamBlob({ position, color, speed = 1, distort = 0.4, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, color, scale = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.15, 16, 64]} />
        <meshStandardMaterial
          color={color}
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function GlassSphere({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.5}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          ior={1.5}
          color="#e8b4f8"
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c084fc" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#0a0015', 5, 25]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#f0abfc" />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[0, 0, 3]} intensity={1.5} color="#e879f9" distance={10} />

        <IceCreamBlob position={[-3, 1.5, -2]} color="#f472b6" speed={0.8} distort={0.5} scale={1.2} />
        <IceCreamBlob position={[3.5, -1, -3]} color="#a78bfa" speed={1.2} distort={0.3} scale={0.9} />
        <IceCreamBlob position={[0, -2.5, -1]} color="#38bdf8" speed={0.6} distort={0.6} scale={0.7} />

        <FloatingRing position={[-2, -1, 0]} color="#f9a8d4" scale={0.8} />
        <FloatingRing position={[2.5, 2, -2]} color="#c4b5fd" scale={0.6} />

        <GlassSphere position={[1, 0.5, 1]} scale={0.6} />

        <Particles count={300} />
        <Stars radius={15} depth={50} count={1000} factor={2} saturation={0.5} fade speed={0.5} />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
