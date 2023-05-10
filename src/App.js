import { useCallback, useEffect, useState } from "react";
import { MainActivityArea } from "./components/mainActivityArea/MainActivityArea";
import { MovingArea } from "./components/movingArea/MovingArea";
import { ParallaxObject } from "./components/ParallaxObject";
import "./styles/style.scss";
import { FullScreenBtn } from "./components/FullScreenBtn";

function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [quiz, setQuiz] = useState({});

  const clearQuiz = () => {};
  const MissQuiz = () => {};
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key == "ArrowRight") {
        setPlayerPosition((currentPosition) => ({
          x: currentPosition.x + 5,
          y: currentPosition.y,
        }));
      } else if (e.key == "ArrowLeft") {
        setPlayerPosition((currentPosition) => ({
          x: currentPosition.x - 5,
          y: currentPosition.y,
        }));
      } else if (e.key == "ArrowUp") {
        setPlayerPosition((currentPosition) => ({
          x: currentPosition.x,
          y: currentPosition.y - 5,
        }));
      } else if (e.key == "ArrowDown") {
        setPlayerPosition((currentPosition) => ({
          x: currentPosition.x,
          y: currentPosition.y + 5,
        }));
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App h-100">
      <FullScreenBtn></FullScreenBtn>
      <MainActivityArea quiz={quiz}></MainActivityArea>
      <MovingArea setQuiz={setQuiz} playerPosition={playerPosition}></MovingArea>
      <ParallaxObject></ParallaxObject>
    </div>
  );
}

export default App;
