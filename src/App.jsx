import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./page/Home";
import About from "./page/About";
import Emplois from "./page/Emplois";
import Formation from "./page/Formations";

export  default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/group-de-reussite/" element={<Home />} />
        <Route path="/group-de-reussite/about" element={<About />} />
        <Route path="/group-de-reussite/emplois" element={<Emplois />} />
        <Route path="/group-de-reussite/formation" element={<Formation/>} />

      </Routes>
    </Router>
  );
} 
