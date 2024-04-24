
import React, { ChangeEvent, ReactNode, useState } from "react";
import styless from "./Share.module.css";
import cancelIcon from "lib/resources/images/profile-chat/cancel-block.svg";
import avatar1 from "lib/resources/images/profile-chat/avatar1.png";
import avatar2 from "lib/resources/images/profile-chat/avatar2.png";
import avatar3 from "lib/resources/images/profile-chat/avatar3.png";
import avatar4 from "lib/resources/images/profile-chat/avatar4.png";
import avatar5 from "lib/resources/images/profile-chat/avatar5.png";
import styles from 'pages/ProfileChat/ProfileChat.module.css'
import clsx from 'clsx';
import searchLogo from "lib/resources/images/profile-chat/search-logo.svg";
import cancel from 'lib/resources/images/profile-chat/cancel-block.svg'
interface DeleteChatProps {
  setShareisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const chatMessages = [
  {
    name: "Owen Padberg",
    message: "Hey Olivia, Katherine sent...",
    avatar: avatar1,
    hasDot: true,
    messageTime: "5m",
  },
  {
    name: "Traci Tillman",
    message: "You: Sure thing, I’ll have a loo...",
    avatar: avatar2,
    hasDot: false,
    messageTime: "1h",
  },
  {
    name: "Mr. Percy Sauer",
    message: "I’ve just published the site again.",
    avatar: avatar3,
    hasDot: true,
    messageTime: "2w",
  },
  {
    name: "Jeremy Weber PhD",
    message: "Hey Liv — just wanted to say th...",
    avatar: avatar4,
    hasDot: false,
    messageTime: "12w",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },

];

function ShareSend(props: DeleteChatProps) {
  const { setShareisOpen } = props;
  const [addedMembers, setAddedMembers] = useState<Set<number>>(new Set());
  const handleAddMember = (index: number) => {
    // Create a new Set based on the existing state
    const updatedSet = new Set(addedMembers);
    if (updatedSet.has(index)) {
      // If the member is already added, remove them
      updatedSet.delete(index);
    } else {
      // Otherwise, add them
      updatedSet.add(index);
    }
    setAddedMembers(updatedSet); // Update the state
  };
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

  // Function to handle input changes
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  // Filter chatMessages based on the search query
  const filteredChatMessages = chatMessages.filter((message) =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={styless.container}>
      <div className={styless.blockPopup}>
        <div className={styless.blockHead}>
          <h2 className={styless.blockTitle}>Send It</h2>
          <button
            onClick={() => setShareisOpen(false)}
            className={styless.blockCloseButton}
          >
            <img
              className={styless.blockCloseButtonIcon}
              src={cancelIcon}
              alt="close icon"
            />
          </button>
        </div>
        <div className={styless.blockBody}>
          <div className={styles.createGroupSearchWrap}>
            <input
              className={styles.searchInputGroups}
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <img
              className={styles.searchImg}
              src={searchLogo}
              alt="search logo"
            />
          </div>
          <div className={styles.suggestedFriends}>
            {filteredChatMessages.map((single, index) => {
              // Check if the current item is in the 'addedMembers' set
              const isAdded = addedMembers.has(index);

              return (
                <div key={index} className={styles.suggestedFriend}>
                  <div className={styles.nameAndAvatarWrapper}>
                    <img src={single.avatar} alt={`${single.name}'s avatar`} />
                    <span>{single.name}</span>
                  </div>
                  <span
                    className={clsx(styles.addMember, {
                      [styles.added]: isAdded, // Apply the 'added' style if true
                    })}
                    onClick={() => handleAddMember(index)}
                  >
                    {!isAdded ? 'Send' : 'Sent'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShareSend;