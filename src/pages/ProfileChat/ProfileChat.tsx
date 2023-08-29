import WithNavigation from "../../HOCs/WithNavigation/WithNavigation";
import styles from "./ProfileChat.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import edit from "../../resources/images/profile-chat/edit.svg";
import searchLogo from "../../resources/images/profile-chat/search-logo.svg";
import dotIcon from "../../resources/images/profile-chat/dot.png";
import avatar1 from "../../resources/images/profile-chat/avatar1.png";
import avatar2 from "../../resources/images/profile-chat/avatar2.png";
import avatar3 from "../../resources/images/profile-chat/avatar3.png";
import avatar4 from "../../resources/images/profile-chat/avatar4.png";
import avatar5 from "../../resources/images/profile-chat/avatar5.png";
import chatAvatar from "../../resources/images/profile-chat/chat-avatar.png";
import phone from "../../resources/images/profile-chat/phone.svg";
import videoCall from "../../resources/images/profile-chat/videocall.svg";
import arrow from "../../resources/images/profile-chat/arrow.png";
import attachment from "../../resources/images/profile-chat/attachment.svg";
import statsReport from "../../resources/images/profile-chat/stats-report.svg";
import emoji from "../../resources/images/profile-chat/emoji.svg";
import videoPlayButtonIcon from "../../resources/images/profile-chat/play-outline.svg";
import videoPlayButtonIconOrange from "../../resources/images/profile-chat/play-outline-orange.svg";
import DropDownMenu from "../../components/ProfileChat/DropDownMenu/DropDownMenu";
import ChatSearch from "../../components/ProfileChat/ChatSearch/ChatSearch";
import Mute from "../../components/ProfileChat/Mute/Mute";
import BlockMenu from "../../components/ProfileChat/BlockMenu/BlockMenu";

function ProfileChat() {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [muteIsOpen, setMuteIsOpen] = useState<boolean>(false);
  const [muteOption, setMuteOption] = useState<string>("");
  const [blockIsOpen, setBlockIsOpen] = useState<boolean>(false);

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
  ];

  return (
    <div className={styles.container}>
      <div className={styles.rightSideBar}>
        <div className={styles.messagesList}>
          <form
            onChange={(event) => event.preventDefault}
            className={styles.search}
          >
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
            />
            <img
              className={styles.searchImg}
              src={searchLogo}
              alt="search logo"
            />
            <button className={styles.editButton}>
              <img className={styles.editIcon} src={edit} alt="edit icon" />
            </button>
          </form>
          <div className={styles.messageContainer}>
            {chatMessages.map((item, index) => {
              return (
                <div key={index} className={styles.messages}>
                  <div className={styles.messagesContent}>
                    {item.hasDot ? (
                      <img
                        className={styles.messagesDot}
                        src={dotIcon}
                        alt="dot"
                      />
                    ) : null}
                    <img
                      className={styles.userAvatar}
                      src={item.avatar}
                      alt="user avatar"
                    />
                    <div className={styles.messageInfo}>
                      <span className={styles.messagesAuthor}>{item.name}</span>
                      <span className={styles.messagesText}>
                        {item.message}
                      </span>
                    </div>
                  </div>
                  <span className={styles.messagesTime}>
                    {item.messageTime}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.chatWindow}>
          <div className={styles.chatWindowNav}>
            <div className={styles.chatWindowContainer}>
              <div className={styles.chatWindowUserInfo}>
                <img src={avatar1} alt="user avatar" />
                <div className={styles.usernameInfo}>
                  <span className={styles.username}>Owen Padberg</span>
                  <span className={styles.usernameActiveTime}>
                    Active 15 min ago
                  </span>
                </div>
              </div>
              <div className={styles.chatWindowButtons}>
                <button className={styles.actionButton}>
                  <img src={phone} alt="call icon" />
                </button>
                <Link
                  className={styles.actionButton}
                  to="/profile-chat/videocall"
                >
                  <img src={videoCall} alt="video call icon" />
                </Link>
                <button
                  onClick={() => {
                    setDropdownMenu(!dropdownMenu);
                    setSearchIsOpen(false);
                  }}
                  className={styles.actionButton}
                >
                  <span className={styles.actionButtonInner}>...</span>
                </button>
              </div>
              {dropdownMenu ? (
                <DropDownMenu
                  dropdownMenu={dropdownMenu}
                  setDropdownMenu={setDropdownMenu}
                  setSearchIsOpen={setSearchIsOpen}
                  setMuteIsOpen={setMuteIsOpen}
                  setBlockIsOpen={setBlockIsOpen}
                />
              ) : null}
            </div>
            {searchIsOpen ? (
              <ChatSearch setSearchIsOpen={setSearchIsOpen} />
            ) : null}
          </div>
          <div className={styles.chatMessagesContainer}>
            <div className={styles.chatMessages}>
              <div className={styles.currentUser}>
                <img
                  className={styles.currentUserAvatar}
                  src={chatAvatar}
                  alt="current user avatar"
                />
                <p className={styles.currentUserMessage}>
                  Hey Olivia, Katherine sent me over the latest doc. I just have
                  a quick question about the job
                </p>
              </div>
              <p className={styles.answeredMessage}>
                Hey, Yeah Let me know what’s yur question.
              </p>
              <div className={styles.currentUser}>
                <img
                  className={styles.currentUserAvatar}
                  src={chatAvatar}
                  alt="current user avatar"
                />
                <div className={styles.currentUserAttachment}>
                  <div className={styles.currentUserVideo}>
                    <button className={styles.currentUserVideoPlayButton}>
                      <img
                        src={videoPlayButtonIcon}
                        alt="video player play button"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.currentUser}>
                <img
                  style={{ alignSelf: "center" }}
                  className={styles.currentUserAvatar}
                  src={chatAvatar}
                  alt="current user avatar"
                />
                <div className={styles.currentUserAttachment}>
                  <div className={styles.currentUserVoiceMessage}>
                    <button className={styles.currentUserVoiceMessageButton}>
                      <img
                        src={videoPlayButtonIcon}
                        alt="video player play button"
                      />
                    </button>
                    <div className={styles.currentUserVoiceMessageTime}>
                      0:52
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.answeredAttachment}>
                <div className={styles.answeredVoiceMessage}>
                  <button className={styles.answeredVoiceMessageButton}>
                    <img
                      src={videoPlayButtonIconOrange}
                      alt="video player play button"
                    />
                  </button>
                  <div className={styles.answeredVoiceMessageTime}>0:52</div>
                </div>
              </div>
            </div>
            <div className={styles.sendMessage}>
              <div className={styles.sendMessageContainer}>
                <textarea
                  className={styles.messageInput}
                  placeholder="Message..."
                />
                <div className={styles.inputButtons}>
                  <button className={styles.inputButton}>
                    <img src={attachment} alt="attachment logo" />
                  </button>
                  <button className={styles.inputButton}>
                    <img src={statsReport} alt="stats report logo" />
                  </button>
                  <button className={styles.inputButton}>
                    <img src={emoji} alt="emojis logo" />
                  </button>
                </div>
              </div>
              <button className={styles.sendMessageButton}>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {muteIsOpen ? (
        <Mute setMuteIsOpen={setMuteIsOpen} setMuteOption={setMuteOption} />
      ) : null}
      {blockIsOpen ? <BlockMenu setBlockIsOpen={setBlockIsOpen} /> : null}
    </div>
  );
}

export default WithNavigation(ProfileChat);
