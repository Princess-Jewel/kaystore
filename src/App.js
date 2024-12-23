import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chatbox from "./components/Chatbox";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Chatbox/>
    </Router>
  );
};

export default App;

