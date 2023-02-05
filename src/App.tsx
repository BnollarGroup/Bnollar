import React from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
