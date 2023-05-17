import React from "react";

export const QuizMode = ({ quiz, clearQuiz, missQuiz }) => {
  return (
    <div>
      <div>QuizMode</div>
      <div>{quiz.text}</div>
      <div className="d-flex">
        {quiz.item.map((i, index) => (
          <div
            key={index}
            onClick={index == quiz.answer ? clearQuiz : missQuiz}
            className="btn btn-primary"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
