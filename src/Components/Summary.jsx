import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "../questions.js";

export const Summary = ({ ans }) => {
  const skipped = ans.filter((skip) => skip === null);
  const correctAns = ans.filter(
    (item, index) => item === Questions[index]?.answers?.[0]
  );

  const skippedAnsShare = Math.round((skipped.length / ans.length) * 100);

  const correctAnsShare = Math.round((correctAns.length / ans.length) * 100);

  const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {ans.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
