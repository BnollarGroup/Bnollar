// import WithNavigation from "hoc/WithNavigation";
import styles from "./ProfileChat.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import edit from "lib/resources/images/profile-chat/edit.svg";
import searchLogo from "lib/resources/images/profile-chat/search-logo.svg";
import dotIcon from "lib/resources/images/profile-chat/dot.png";
import avatar1 from "lib/resources/images/profile-chat/avatar1.png";
import avatar2 from "lib/resources/images/profile-chat/avatar2.png";
import avatar3 from "lib/resources/images/profile-chat/avatar3.png";
import avatar4 from "lib/resources/images/profile-chat/avatar4.png";
import avatar5 from "lib/resources/images/profile-chat/avatar5.png";
import chatAvatar from "lib/resources/images/profile-chat/chat-avatar.png";
import phone from "lib/resources/images/profile-chat/phone.svg";
import videoCall from "lib/resources/images/profile-chat/videocall.svg";
import arrow from "lib/resources/images/profile-chat/arrow.png";
import attachment from "lib/resources/images/profile-chat/attachment.svg";
import statsReport from "lib/resources/images/profile-chat/stats-report.svg";
import emoji from "lib/resources/images/profile-chat/emoji.svg";
import videoPlayButtonIcon from "lib/resources/images/profile-chat/play-outline.svg";
import videoPlayButtonIconOrange from "lib/resources/images/profile-chat/play-outline-orange.svg";
import DropDownMenu from "components/ProfileChat/DropDownMenu/DropDownMenu";
import ChatSearch from "components/ProfileChat/ChatSearch/ChatSearch";
import Mute from "components/ProfileChat/Mute/Mute";
import BlockMenu from "components/ProfileChat/BlockMenu/BlockMenu";
import EditNicknameMenu from "components/ProfileChat/EditNicknameMenu/EditNicknameMenu";
import DeleteChat from "components/ProfileChat/DeleteChat/DeleteChat";
import { useScreenSize } from "hooks/useScreenSize";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function ProfileChat() {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [muteIsOpen, setMuteIsOpen] = useState<boolean>(false);
  const [muteOption, setMuteOption] = useState<string>("");
  const [blockIsOpen, setBlockIsOpen] = useState<boolean>(false);
  const [editMenuIsOpen, setEditMenuIsOpen] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [createGroup, setCreateGroup] = useState<boolean>(false);
  const size = useScreenSize();
  const chatMessagesContainerRef = useRef<HTMLDivElement>(null);
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

  const containsOnlyEmojis = (text: string) => {
    const emojiPattern = /[\u{1F300}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{3297}\u{3299}\u{3030}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}\u{23EA}\u{25AA}\u{25AB}\u{25B6}\u{25C0}\u{25FB}\u{25FC}\u{25FD}\u{25FE}\u{2600}-\u{26FF}\u{2702}-\u{27B0}\u{1F004}-\u{1F0CF}\u{1F170}-\u{1F251}\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F773}\u{1F780}-\u{1F7D8}\u{1F7E0}-\u{1F7EB}\u{1F800}-\u{1F80B}\u{1F900}-\u{1F9A2}\u{1F9B0}-\u{1F9B3}\u{1F9B5}\u{1F9B6}\u{1F9B8}-\u{1F9BB}\u{1F9BD}-\u{1F9C0}\u{1F9C2}-\u{1F9C2}\u{1F9C4}-\u{1F9C5}\u{1F9C6}-\u{1F9C9}\u{1F9D0}-\u{1F9E6}\u{1F9E7}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FA73}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA82}\u{1FA90}-\u{1FA95}\u{1FAA0}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}\u{200D}\u{FE0F}]/gu;
    return emojiPattern.test(text);
  };
  type sentMessage = {
    text: string,
    isEmoji: boolean
  }
  const [sentMessages, setSentMessages] = useState<Array<sentMessage>>([]);
  const [messageValue, setMessageValue] = useState<string>('');
  const handleAddMessage = () => {
    // Check if the message contains only emojis
    const containsOnlyEmoji = containsOnlyEmojis(messageValue);
    if (containsOnlyEmoji) {
      setSentMessages([...sentMessages, { text: messageValue, isEmoji: true }]);
      setMessageValue('');
    } else {
      // Add the message to the sent messages array
      setSentMessages([...sentMessages, { text: messageValue, isEmoji: false }]);
      setMessageValue('');
    }
  }
  useEffect(() => {
    // Scroll to the bottom of the container when component mounts or chat messages change
    scrollToBottom();
  }, [sentMessages]); // Assuming sentMessages is the state containing chat messages

  const scrollToBottom = () => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddMessage();
    }
  };
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const hideEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const handleEmojiSelect = (emoji: any) => {
    const emojiUnicode = emoji.native;
    setMessageValue(messageValue + emojiUnicode);
  };
  const toggleCreateGroup = () => {
    setCreateGroup(prev => !prev)
  }
  return (
    size !== 'sm' && size !== 'xs' && size !== 'md' ?
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
              <button type="button" className={styles.editButton} onClick={toggleCreateGroup}>
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
          {createGroup
            ?
            <div>
              create a group
            </div>
            :
            <div className={styles.chatWindow}>
              <div className={styles.chatWindowNav}>
                <div className={styles.chatWindowContainer}>
                  <div className={styles.chatWindowUserInfo}>
                    <img src={avatar1} alt="user avatar" />
                    <div className={styles.usernameInfo}>
                      <span className={styles.username}>
                        {nickname.length > 0 ? nickname : "Owen Padberg"}
                      </span>
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
                      setEditMenuIsOpen={setEditMenuIsOpen}
                      setDeleteIsOpen={setDeleteIsOpen}
                    />
                  ) : null}
                </div>
                {searchIsOpen ? (
                  <ChatSearch setSearchIsOpen={setSearchIsOpen} />
                ) : null}
              </div>
              <div className={styles.chatMessagesContainer} ref={chatMessagesContainerRef}>
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
                  {sentMessages.map((message, _index) => (
                    <p key={_index} className={message.isEmoji ? styles.answeredMessageEmoji : styles.answeredMessage}>
                      {message.text}
                    </p>
                  ))}
                </div>

              </div>
              <div className={styles.sendMessage}>
                <div className={styles.sendMessageContainer}>
                  <textarea
                    onChange={(e) => setMessageValue(e.currentTarget.value)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    value={messageValue}
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
                    <button style={{ position: 'relative' }} className={styles.inputButton} onClick={toggleEmojiPicker}>
                      <img src={emoji} alt="emojis logo" />
                      {showEmojiPicker && (
                        <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
                      )}
                    </button>
                  </div>
                </div>
                <button className={styles.sendMessageButton} onClick={handleAddMessage}>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          }

        </div>
        {muteIsOpen ? (
          <Mute setMuteIsOpen={setMuteIsOpen} setMuteOption={setMuteOption} />
        ) : null}
        {blockIsOpen ? <BlockMenu setBlockIsOpen={setBlockIsOpen} /> : null}
        {editMenuIsOpen ? (
          <EditNicknameMenu
            setEditMenuIsOpen={setEditMenuIsOpen}
            nickname={nickname}
            setNickname={setNickname}
          />
        ) : null}
        {deleteIsOpen ? <DeleteChat setDeleteIsOpen={setDeleteIsOpen} nickname={'Owen Padberg'} /> : null}
      </div> :
      <div className={styles.mobileNav}>
        <div className={styles.messagesListSingle}>
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
                    <Link to={'1'}>
                      <div className={styles.messageInfo}>
                        <span className={styles.messagesAuthor}>{item.name}</span>
                        <span className={styles.messagesText}>
                          {item.message}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <span className={styles.messagesTime}>
                    {item.messageTime}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default ProfileChat;
