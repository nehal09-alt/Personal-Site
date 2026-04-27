import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const pointsRef = useRef();
  const timer = useMemo(() => new THREE.Timer(), []);
  const mobile = window.innerWidth < 768;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = mobile ? 400 : 3000;

  useEffect(() => {
    timer.connect(document);

    return () => {
      timer.dispose();
    };
  }, [timer]);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 24;
      pos[i3 + 1] = (Math.random() - 0.5) * 14;
      pos[i3 + 2] = (Math.random() - 0.5) * 24;
      const c = new THREE.Color(i % 2 === 0 ? "#9B59FF" : "#00A3FF");
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame(({ mouse }) => {
    if (!pointsRef.current) return;

    timer.update();
    const delta = timer.getDelta();

    pointsRef.current.rotation.y += delta * (mobile ? 0.015 : 0.03);
    if (!reducedMotion) {
      pointsRef.current.rotation.x = mouse.y * (mobile ? 0.05 : 0.15);
      pointsRef.current.position.x = mouse.x * (mobile ? 0.14 : 0.4);
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} vertexColors transparent opacity={0.85} sizeAttenuation />
      </points>
      <mesh position={[3.5, -1.2, -6]} rotation={[1.2, 0.4, 0.6]}>
        <torusGeometry args={[0.8, 0.12, 16, 60]} />
        <meshStandardMaterial color="#00A3FF" emissive="#00253f" />
      </mesh>
    </>
  );
};

export default ParticleField;
