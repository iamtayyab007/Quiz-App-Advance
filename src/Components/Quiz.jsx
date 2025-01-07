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

import React from "react";
import { useState } from "react";
import Questions from "../questions.js";
import quizCompletedImage from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  };

  if (quizCompleted) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
        <img src={quizCompletedImage} alt="Trophy" />
      </div>
    );
  }

  const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
