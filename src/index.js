import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zyciorys from "./Zyciorys";
import Getto from "./Getto";
import "./global.css";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zyciorys" element={<Zyciorys />} />
        <Route path="/getto-powstanie" element={<Getto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
