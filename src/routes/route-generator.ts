import lazy from "react-lazy-with-preload";

import { routes } from "./routes";

export const publicRoutes = [
  {
    title: "Index",
    path: routes.index,
    component: lazy(() => import("pages/Landing")),
  },
  {
    title: "Connect Wallet",
    path: routes.connectWallet,
    component: lazy(() => import("pages/SignIn")),
  },
  {
    title: "Register with Step",
    path: routes.registerWithStep,
    component: lazy(() => import("pages/Register")),
  },
  {
    title: "Upload NFT",
    path: routes.uploadNft,
    component: lazy(() => import("pages/UploadNFT")),
  },
  {
    title: "Home",
    path: routes.home,
    component: lazy(() => import("pages/Home")),
  },
  {
    title: "Post",
    path: routes.post,
    component: lazy(() => import("pages/Post")),
  },
  {
    title: "NFT",
    path: routes.nft,
    component: lazy(() => import("pages/NFT")),
  },
  {
    title: "NFT Collection",
    path: routes.nftCollection,
    component: lazy(() => import("pages/NFTCollection")),
  },
  {
    title: "NFT Collection Price",
    path: routes.nftCollectionPrice,
    component: lazy(() => import("pages/NFTCollectionPrice")),
  },
  {
    title: "Profile",
    path: routes.profile,
    component: lazy(() => import("pages/Profile")),
  },
  // {
  //   title: "Join Community",
  //   path: routes.joincommunity,
  //   component: lazy(() => import("pages/JoinCommunity")),
  // },
  {
    title: "Group Page",
    path: routes.groupPage,
    component: lazy(() => import("pages/Profile2")),
  },
  {
    title: "Settings with Type",
    path: routes.settingsWithType,
    component: lazy(() => import("pages/Settings")),
  },
  {
    title: "Profile Chat",
    path: routes.profileChat,
    component: lazy(() => import("pages/ProfileChat")),
  },
  {
    title: "Profile Chat with Video Call",
    path: routes.profileChatWithVideoCall,
    component: lazy(() => import("pages/VideoCall")),
  },
  {
    title: "Explore",
    path: routes.explore,
    component: lazy(() => import("pages/Explore")),
  },
];
