import { useCallback, useEffect, useState } from "react";
import { MainActivityArea } from "./components/mainActivityArea/MainActivityArea";
import { MovingArea } from "./components/movingArea/MovingArea";
import { ParallaxObject } from "./components/ParallaxObject";
import "./styles/style.scss";
import { FullScreenBtn } from "./components/FullScreenBtn";
import { Controller } from "./components/Controller";
function App() {
  const [game, setGame] = useState({});
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  const handleOnMove = useCallback(({ x, y }) => {
    setPlayerPosition((currentPosition) => {
      return {
        x: currentPosition.x + x,
        y: currentPosition.y + y,
      };
    });
  }, []);

  return (
    <div className="App h-100">
      <Controller onMove={handleOnMove}></Controller>
      <FullScreenBtn></FullScreenBtn>
      <MainActivityArea></MainActivityArea>
      <MovingArea></MovingArea>
      <ParallaxObject></ParallaxObject>
    </div>
  );
}

export default App;
