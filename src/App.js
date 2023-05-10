import { useCallback, useEffect, useState } from "react";
import { MainActivityArea } from "./components/mainActivityArea/MainActivityArea";
import { MovingArea } from "./components/movingArea/MovingArea";
import { ParallaxObject } from "./components/ParallaxObject";
import "./styles/style.scss";
import { FullScreenBtn } from "./components/FullScreenBtn";

function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [keyFlag, setKeyFlag] = useState("");

  const game = () => {
    if (keyFlag == "ArrowRight") {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x + 5,
        y: currentPosition.y,
      }));
    } else if (keyFlag == "ArrowLeft") {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x - 5,
        y: currentPosition.y,
      }));
    } else if (keyFlag == "ArrowUp") {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y - 5,
      }));
    } else if (keyFlag == "ArrowDown") {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y + 5,
      }));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key == "ArrowRight") {
        setKeyFlag(e.key);
      } else if (e.key == "ArrowLeft") {
        setKeyFlag(e.key);
      } else if (e.key == "ArrowUp") {
        setKeyFlag(e.key);
      } else if (e.key == "ArrowDown") {
        setKeyFlag(e.key);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    setInterval(game, 16);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="App h-100">
      <FullScreenBtn></FullScreenBtn>
      <MainActivityArea></MainActivityArea>
      <MovingArea playerPosition={playerPosition}></MovingArea>
      <ParallaxObject></ParallaxObject>
    </div>
  );
}

export default App;
