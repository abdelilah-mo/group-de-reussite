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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emplois" element={<Emplois />} />
        <Route path="/formation" element={<Formation/>} />

      </Routes>
    </Router>
  );
} 
