import React, { useEffect, useState } from "react";
import { QuizMode } from "./QuizMode";

export const MainActivityArea = ({ quiz, clearQuiz, missQuiz }) => {
  const [mode, setMode] = useState("");
  useEffect(() => {
    if (quiz.id !== undefined) {
      setMode("quiz");
    }
  }, [quiz]);
  return (
    <div id="main-activity-area">
      MainActivityArea
      {mode == "quiz" && (
        <QuizMode quiz={quiz} clearQuiz={clearQuiz} missQuiz={missQuiz}></QuizMode>
      )}
    </div>
  );
};
