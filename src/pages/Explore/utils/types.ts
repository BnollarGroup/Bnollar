export type Post = {
  id: number;
  user: {
    name: string;
    image: string;
  };
  content: string;
  createdAt: string;
  verified: boolean;
  upScore: string;
  numberOfComments: string;
  numberOfShares: string;
  attachment: string;
  replies: Reply[] | undefined;
};

type Reply = {
  id: number;
  username: string;
  image: string;
  content: string;
  createdAt: string;
  replyReaction: boolean;
  replyLikes: number;
};
