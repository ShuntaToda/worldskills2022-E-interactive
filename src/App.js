import { useCallback, useEffect, useState } from "react";
import { MainActivityArea } from "./components/mainActivityArea/MainActivityArea";
import { MovingArea } from "./components/movingArea/MovingArea";
import { ParallaxObject } from "./components/ParallaxObject";
import "./styles/style.scss";
import { FullScreenBtn } from "./components/FullScreenBtn";

const barrierObj = {
  id: Math.floor(Math.random() * 1000000),
  text: "一番大きいのを選べ",
  item: ["10", "20", "30", "40"],
  answer: 3,
};

const movingDistance = 20;

function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [playerMoveLimit, setPlayerMoveLimit] = useState({
    top: false,
    bottom: false,
    right: false,
    left: false,
  });
  const [quiz, setQuiz] = useState({});
  const [barriers, setBarriers] = useState([barrierObj, barrierObj]);

  const clearQuiz = () => {
    setQuiz({});
    setBarriers((prevBarriers) => prevBarriers.splice(0, 1));
  };
  const missQuiz = () => {
    setQuiz({});
  };

  const handleKeyDown = (e) => {
    if (e.key == "ArrowRight" && !playerMoveLimit.right) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x + movingDistance,
        y: currentPosition.y,
      }));
    } else if (e.key == "ArrowLeft" && !playerMoveLimit.left) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x - movingDistance,
        y: currentPosition.y,
      }));
    } else if (e.key == "ArrowUp" && !playerMoveLimit.top) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y - movingDistance,
      }));
    } else if (e.key == "ArrowDown" && !playerMoveLimit.bottom) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y + movingDistance,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition]);

  return (
    <div className="App h-100">
      <FullScreenBtn></FullScreenBtn>
      <MainActivityArea quiz={quiz} clearQuiz={clearQuiz} missQuiz={missQuiz}></MainActivityArea>
      <MovingArea
        barriers={barriers}
        setQuiz={setQuiz}
        playerPosition={playerPosition}
        setPlayerMoveLimit={setPlayerMoveLimit}
        movingDistance={movingDistance}
      ></MovingArea>
      <ParallaxObject></ParallaxObject>
    </div>
  );
}

export default App;
