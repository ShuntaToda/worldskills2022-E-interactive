import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { QuizBarrier } from "./QuizBarrier";

export const MovingArea = ({ playerPosition, setQuiz }) => {
  const barrierObj = {
    id: Math.floor(Math.random() * 1000000),
    text: "一番大きいのを選べ",
    item: ["10", "20", "30", "40"],
    answer: 3,
  };
  const [barriers, setBarriers] = useState([barrierObj, barrierObj]);

  const selectBarrier = (b, index) => {
    console.log("");
    setQuiz({ ...b, index: index });
  };

  return (
    <div id="moving-area">
      <Avatar playerPosition={playerPosition}></Avatar>
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
