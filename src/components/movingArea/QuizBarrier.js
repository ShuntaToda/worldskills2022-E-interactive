import React, { useEffect, useRef } from "react";

export const QuizBarrier = ({ playerPosition, barrier, index, selectBarrier }) => {
  const barrierRef = useRef(null);

  useEffect(() => {
    const playerRight = playerPosition.x + 40;
    if (playerRight >= barrierRef.current.offsetLeft) selectBarrier(barrier, index);
  }, [playerPosition]);

  return (
    <div ref={barrierRef} className="c-quiz-barrier__barrier">
      barrier
    </div>
  );
};
