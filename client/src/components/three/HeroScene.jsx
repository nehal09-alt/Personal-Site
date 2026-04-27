import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

const HeroScene = () => {
  const mobile = window.innerWidth < 768;

  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.5]}
      gl={{ antialias: !mobile, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 55 }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 2]} intensity={0.8} />
      <ParticleField />
    </Canvas>
  );
};

export default HeroScene;
