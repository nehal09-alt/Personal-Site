import { EffectComposer, Bloom } from "@react-three/postprocessing";

const HeroBloom = ({ mobile }) => (
  <EffectComposer multisampling={0}>
    <Bloom intensity={mobile ? 0.4 : 0.65} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
  </EffectComposer>
);

export default HeroBloom;
