import currentUserImage from "lib/resources/images/explore/current-user.png";
import userOneImage from "lib/resources/images/explore/post-user1.png";
import userTwoImage from "lib/resources/images/explore/post-user2.png";
import userThreeImage from "lib/resources/images/explore/post-user3.png";
import postTwoUserImage from "lib/resources/images/explore/post2-user.png";
import postThreeUserImage from "lib/resources/images/explore/post3-user.png";
import postTwoAttachment from "lib/resources/images/explore/post2-attachment.png";
import postThreeAttachment from "lib/resources/images/explore/post3-attachment.png";
import { Post } from "./types";

export type ConfigType = {
  currentUser: {
    image: string;
  };
  posts: Post[] | undefined;
};

export const data: ConfigType[] = [
  {
    currentUser: {
      image: currentUserImage,
    },
    posts: [
      {
        id: 1,
        user: {
          name: "Feral",
          image: userOneImage,
        },
        content: "Giving away a FREE NFT to someone who likes this tweet",
        createdAt: "Dec 14",
        verified: true,
        upScore: "17.k",
        numberOfComments: "354",
        numberOfShares: "234",
        attachment: "",
        replies: [
          {
            id: 1,
            username: "Namesax",
            image: userTwoImage,
            content:
              "The toughest designs for beginners are ones without any nice illustrations or photos to make them pleasant to the eye. In this post I’ll show you how to create the right hierarchy for a minimal product card without any graphics.",
            createdAt: "Dec 14",
            replyReaction: false,
            replyLikes: 4,
          },
          {
            id: 2,
            username: "Namesax",
            image: userThreeImage,
            content: "Love this NFT Collection for real.",
            createdAt: "Dec 14",
            replyReaction: false,
            replyLikes: 1,
          },
        ],
      },
      {
        id: 2,
        user: {
          name: "Sonko Wa Mashamba",
          image: postTwoUserImage,
        },
        content: "Elon musk has changed Twitter like button from ❤️ to ❤️",
        createdAt: "Dec 14",
        verified: false,
        upScore: "7.3k",
        numberOfComments: "143",
        numberOfShares: "72",
        attachment: postTwoAttachment,
        replies: [],
      },
      {
        id: 3,
        user: {
          name: "CryptoBullet",
          image: postThreeUserImage,
        },
        content: "Imagine if there’s no dip No way? Go watch Q2 2019 #Bitcoin",
        createdAt: "Dec 14",
        verified: false,
        upScore: "7.3k",
        numberOfComments: "143",
        numberOfShares: "72",
        attachment: postThreeAttachment,
        replies: [],
      },
    ],
  },
];
