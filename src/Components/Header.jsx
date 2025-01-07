import React from "react";
import logo from "../assets/quiz-logo.png";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>React Quiz</h1>
    </header>
  );
};
