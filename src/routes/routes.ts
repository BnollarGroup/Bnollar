export const PublicRoutes = {
  index: "/",
  connectWallet: "/connect-wallet",
  registerWithStep: "/register/:step",
  uploadNft: "/upload-nft",
  home: "/home",
  post: "/post",
  nft: "/nft",
  nftCollection: "/nft-collection",
  nftCollectionPrice: "/nft-collectionprice",
  profile: "/profile",
  // joincommunity: "/joincommunity",
  groupPage: "/grouppage",
  settingsWithType: "/settings/:type",
  profileChat: "/profile-chat",
  profileChatWithVideoCall: "/profile-chat/videocall",
  explore: "/explore",
  mobileDirectChat: "/profile-chat/:id"
};

export const routes = {
  ...PublicRoutes,
};
