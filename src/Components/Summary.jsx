import React from "react";
import quizCompletedImage from "../assets/quiz-complete.png";
import Questions from "../questions.js";
export const Summary = ({ ans }) => {
  let nullCount = 0;
  let nullindices = [];
  const skipped = ans.forEach((e, index) => {
    if (e === null) {
      nullCount++;
      nullindices.push(index);
    }
  });
  let correctQuestions = [];
  const correct = ans.forEach((e, index) => {
    if (e === Questions[index].answers[0]) {
      correctQuestions.push(index);
    }
  });

  return (
    <div id="summary">
      <img src={quizCompletedImage} alt="Trophy" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{nullCount === 0 ? "" : nullCount}</span>
          {nullindices.map((e) => (
            <span className="text">
              <li>{Questions[e].text}</li>
            </span>
          ))}
        </p>
        <p>
          <span className="number">{correctQuestions.length}</span>

          {correctQuestions.map((e) => (
            <span className="text">{Questions[e].text}</span>
          ))}
        </p>

        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">Question text</p>
          <p className="user-answer">User's answer</p>
        </li>
      </ol>
    </div>
  );
};
