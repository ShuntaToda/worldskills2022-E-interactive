import React, { useEffect, useState } from "react";
import { QuizMode } from "./QuizMode";

export const MainActivityArea = ({ quiz }) => {
  const [mode, setMode] = useState("");
  useEffect(() => {
    if (quiz.id !== undefined) {
      setMode("quiz");
    }
  }, [quiz]);
  return (
    <div id="main-activity-area">
      MainActivityArea
      {mode == "quiz" && <QuizMode quiz={quiz}></QuizMode>}
    </div>
  );
};
