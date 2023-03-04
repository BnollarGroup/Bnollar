import React from 'react'
import './App.css'
import Landing from './pages/landing/Landing'
import SignIn from './pages/SignIn/SignIn'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import UploadNft from './pages/uploadNft/UploadNft'
import Home from './pages/Home/Home'
import Post from './pages/Post/Post'
import Nft from './pages/Nft/Nft'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/connect-wallet" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-nft" element={<UploadNft />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/nft" element={<Nft />} />
      </Routes>
    </div>
  )
}

export default App
