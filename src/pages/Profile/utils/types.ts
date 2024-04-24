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

export type PostsDataChanged = {
  id: number;
  post_author: {
    id: number;
    wallet_address: string;
    username: string;
    display_name: string;
    profile_picture: string | undefined;
    cover_picture: string | null;
  };
  comments: {
    id: number;
    replies: RepliesData[];
    comment_content: string;
    comment_date: string;
    post: number;
    parent_comment: number | null;
    comment_author: number;
  }[];
  upvotes: number[];
  post_date: string;
  post_content: string;
  content_Image: string | null;
  content_video: string | null;
  upvout: number[];
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

// Type for a user's profile
export type UserProfile = {
  id: number;
  username: string;
  profile_picture: string | null;
};

// Type for individual replies to a post
export type ReplyData = {
  id: number;
  user: UserProfile;
  content: string;
  createdAt: string;
  replyReaction: boolean;
  replyLikes: number;
};
export type PostData = {
  id: number;
  user: UserProfile;
  content: string;
  createdAt: string;
  verified: boolean;
  upScore: string;
  numberOfComments: string;
  numberOfShares: string;
  attachment_Image: string | null;
  attachment_video: string | null;
  replies: ReplyData[]; // An array of replies, even if it's empty
};
