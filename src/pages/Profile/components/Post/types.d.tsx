export type DataType = {
    currentUser: {
      image: string;
    };
    posts: PostsData[] | undefined;
  };
  
  export type PostsData = {
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
    replies: RepliesData[] | undefined;
  };
  
  type RepliesData = {
    id: number;
    username: string;
    image: string;
    content: string;
    createdAt: string;
    replyReaction: boolean;
    replyLikes: number;
  };
  