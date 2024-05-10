import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500">Hello Andrianina</h1>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
