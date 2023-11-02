import { DataType } from "./types";
import currentUserImage from "lib/resources/images/explore/current-user.png";
import UserIcon from "lib/resources/images/icons/user-icon.png";
import userTwoImage from "lib/resources/images/explore/post-user2.png";
import userThreeImage from "lib/resources/images/explore/post-user3.png";
import postTwoAttachment from "lib/resources/images/explore/post2-attachment.png";
import postThreeAttachment from "lib/resources/images/explore/post3-attachment.png";

export const data: DataType[] = [
  {
    currentUser: {
      image: currentUserImage,
    },
    posts: [
      {
        id: 1,
        user: {
          name: "Christopher Williams",
          image: UserIcon,
        },
        content:
          "#Bitcoin seems to be doing exactly what its done for about a year. Strong sell-off, consolidate & slow grind up, create a bear flag, RSI breaks down its trend line, bear flag breaks down for another strong sell-off and the cycle begins again.",
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
          name: "Christopher Williams",
          image: UserIcon,
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
          name: "Christopher Williams",
          image: UserIcon,
        },
        content: "",
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
