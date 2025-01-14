{
  /*import React, { useEffect } from "react";
import { useState } from "react";
import Questions from "../questions.js";
export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progressBar, setProgressBar] = useState(100);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        setProgressBar((timeLeft - 1) * (100 / 60));
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(60);
    }
  }, [timeLeft]);

  const handleBtn = () => {
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(60);
  };
  return (
    <>
      <div id="quiz">
        <p className="circle">{`${timeLeft}`}</p>
        <div className="progress-container">
          <div
            className={timeLeft < 20 ? "red" : "progress-bar"}
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
        <p>{`${currentQuestion + 1}.  ${Questions[currentQuestion].text}`}</p>
        {Questions[currentQuestion].answers.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}

        <div>
          <button onClick={handleBtn}>Next</button>
        </div>
      </div>
    </>
  );
};
*/
}

import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import Questions from "../questions.js";
import { Summary } from "./Summary.jsx";

import { Question } from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAns) => [...prevAns, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizCompleted) {
    return <Summary ans={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
