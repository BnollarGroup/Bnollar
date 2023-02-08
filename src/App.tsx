import React from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import UploadNft from "./pages/uploadNft/UploadNft";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

const App = () => {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-nft" element={<UploadNft />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
