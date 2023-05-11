import React from "react";

export const QuizMode = ({ quiz, clearQuiz, missQuiz }) => {
  console.log(quiz);
  return (
    <div>
      <div>QuizMode</div>
      <div>{quiz.text}</div>
      <div onClick={clearQuiz} className="btn btn-primary">
        clear
      </div>
      <div onClick={missQuiz} className="btn btn-danger">
        miss
      </div>
    </div>
  );
};
