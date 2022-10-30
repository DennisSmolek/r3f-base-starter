import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Floor } from "./components/Floor";
import Lights from "./components/Lights";

function Thing() {
  return (
    <Sphere castShadow>
      <meshPhysicalMaterial />
    </Sphere>
  );
}

export default function App() {
  return (
    <Canvas shadows>
      <fog attach="fog" args={[0xffffff, 10, 90]} />

      <OrbitControls makeDefault />
      <PerspectiveCamera position={[-5, 5, 5]} makeDefault />

      <Lights />
      <Floor />

      <Thing />
    </Canvas>
  );
}
