import React from "react";
import { Link } from "react-router-dom";
import sad from "./quiz-images/sad.png";

function QuizBad() {
  return (
    <div className="content">
      <div className="quiz-post-holder">
        <img src={sad} alt="Smutna minka" width={250} height={250} />
        Niestety, nie udało ci się.
        <Link to="/quiz">Kliknij tutaj, aby spróbować jeszcze raz.</Link>
      </div>
    </div>
  );
}

export default QuizBad;
