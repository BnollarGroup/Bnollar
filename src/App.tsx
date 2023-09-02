import "./App.css";
import Landing from "./pages/landing/Landing";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import UploadNft from "./pages/uploadNft/UploadNft";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Nft from "./pages/Nft/Nft";

import NftCollection from "./pages/nftCollection/NftCollection";
import NftCollectionsecond from "./pages/nftCollection2/NftCollectionsecond";
import Profile from "./pages/Profile/Profile";
import JoinCommunity from "./pages/joinCommunity/JoinCommunity";
import Profile_2 from "./pages/Profile2/Profile_2";

const App = () => {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />

import Settings from "./pages/Settings/Settings";
import ProfileChat from "./pages/ProfileChat/ProfileChat";
import VideoCall from "./pages/ProfileChat/VideoCall/VideoCall";
import Explore from "./pages/Explore/Explore";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/connect-wallet" element={<SignIn />} />
        <Route path="/register/:step" element={<Register />} />

        <Route path="/upload-nft" element={<UploadNft />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/nft" element={<Nft />} />

        <Route path="/nft-collection" element={<NftCollection/>} />
        <Route path="/nft-collectionprice" element={<NftCollectionsecond/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/joincommunity" element={<JoinCommunity/>} />
        <Route path="/grouppage" element={<Profile_2/>} />

        <Route path="/settings/:type" element={<Settings />} />
        <Route path="/profile-chat" element={<ProfileChat />} />
        <Route path="/profile-chat/videocall" element={<VideoCall />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>
    </div>
  );
};

export default App;
