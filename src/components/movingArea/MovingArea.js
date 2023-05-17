import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { QuizBarrier } from "./QuizBarrier";

export const MovingArea = ({
  playerPosition,
  setQuiz,
  barriers,
  setPlayerMoveLimit,
  movingDistance,
}) => {
  const selectBarrier = (b, index) => {
    console.log("");
    setQuiz({ ...b, index: index });
  };

  return (
    <div id="moving-area">
      <Avatar
        playerPosition={playerPosition}
        movingDistance={movingDistance}
        setPlayerMoveLimit={setPlayerMoveLimit}
      ></Avatar>
      <div className="c-quiz-barrier">
        {barriers.map((barrier, index) => (
          <QuizBarrier
            index={index}
            key={index}
            barrier={barrier}
            playerPosition={playerPosition}
            selectBarrier={selectBarrier}
          ></QuizBarrier>
        ))}
      </div>
    </div>
  );
};
