import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Zyciorys from "./Zyciorys";
import Getto from "./Getto";
import Quiz from "./Quiz";
import "./global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import QuizBad from "./QuizBad";
import QuizGood from "./QuizGood";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="globalContent">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/zyciorys" element={<Zyciorys />} />
          <Route path="/getto-powstanie" element={<Getto />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-completed" element={<QuizGood />} />
          <Route path="/quiz-bad-answers" element={<QuizBad />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);
