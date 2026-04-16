import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sphere } from "@react-three/drei";
import * as THREE from "three";

function IceCreamScoop({ position, color, speed = 1, distort = 0.3, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.15;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.3} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
          envMapIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Sprinkle({ position, color, rotationSpeed = 1 }: {
  position: [number, number, number];
  color: string;
  rotationSpeed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <capsuleGeometry args={[0.04, 0.15, 4, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function WaffleCone({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.5, 1.2, 8]} />
        <meshStandardMaterial color="#d4a574" roughness={0.6} metalness={0} />
      </mesh>
    </Float>
  );
}

function BubbleParticles({ count = 60 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
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
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#f9a8d4" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const t = scrollRef.current;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -t * 4, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - t * 3, 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, t * 0.15, 0.05);
  });

  return null;
}

const sprinkleColors = ["#f472b6", "#a78bfa", "#34d399", "#fbbf24", "#60a5fa", "#fb923c"];

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#fff5f7', 8, 25]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#fce7f3" />
        <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#dbeafe" />
        <pointLight position={[0, 2, 4]} intensity={0.8} color="#fda4af" distance={12} />

        <ScrollCamera />

        {/* Main scoops */}
        <IceCreamScoop position={[-3.5, 2, -3]} color="#fda4af" speed={0.6} distort={0.35} scale={1.1} />
        <IceCreamScoop position={[3.8, 0.5, -4]} color="#a7f3d0" speed={0.8} distort={0.25} scale={0.9} />
        <IceCreamScoop position={[-2, -2, -2]} color="#fde68a" speed={0.5} distort={0.4} scale={0.7} />
        <IceCreamScoop position={[2, -4, -3]} color="#c4b5fd" speed={0.7} distort={0.3} scale={0.85} />
        <IceCreamScoop position={[0, 3.5, -5]} color="#fbcfe8" speed={0.4} distort={0.2} scale={1.3} />
        <IceCreamScoop position={[-4, -5, -4]} color="#93c5fd" speed={0.9} distort={0.35} scale={0.6} />

        {/* Waffle cones */}
        <WaffleCone position={[4.5, 3, -4]} scale={0.6} />
        <WaffleCone position={[-3, -3.5, -3]} scale={0.5} />

        {/* Sprinkles */}
        {sprinkleColors.map((color, i) => (
          <Sprinkle
            key={i}
            position={[
              (Math.sin(i * 1.7) * 5),
              (Math.cos(i * 2.3) * 5),
              -2 + Math.sin(i) * 2,
            ]}
            color={color}
            rotationSpeed={0.5 + i * 0.2}
          />
        ))}

        <BubbleParticles count={80} />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
