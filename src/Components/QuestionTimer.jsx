import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const QuestionTimer = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const time = setTimeout(() => {
      onTimeOut();
    }, timeout);
    return () => {
      clearTimeout(time);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};
