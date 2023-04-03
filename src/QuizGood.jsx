import React from "react";
import { Link } from "react-router-dom";

import happy from "./quiz-images/happy.png";
function QuizGood() {
  return (
    <div className="content">
      <div className="quiz-post-holder">
        <img src={happy} alt="Smutna minka" width={250} height={250} />
        Gratulacje! Udało ci się zrobić ten quiz!
        <Link to="/">Kliknij tutaj, aby przejść do strony głównej.</Link>
      </div>
    </div>
  );
}

export default QuizGood;
