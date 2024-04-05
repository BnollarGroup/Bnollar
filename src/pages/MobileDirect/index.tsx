// import WithNavigation from "hoc/WithNavigation";
import styles from "../ProfileChat/ProfileChat.module.css";
import mobileStyles from "./MobileDirect.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
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
import MobileNavbar from "components/MobileNavbar";

function MobileDirect() {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
    const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
    const [muteIsOpen, setMuteIsOpen] = useState<boolean>(false);
    const [muteOption, setMuteOption] = useState<string>("");
    const [blockIsOpen, setBlockIsOpen] = useState<boolean>(false);
    const [editMenuIsOpen, setEditMenuIsOpen] = useState<boolean>(false);
    const [nickname, setNickname] = useState<string>("");
    const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
    const size = useScreenSize();
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
        <div style={{width:'100dvw', height:'100dvh'}}>
            <div className={styles.chatWindow} style={{ height: '90dvh', width: '100%' }}>
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

                </div>
                <div className={mobileStyles.sendMessage}>
                    <div className={mobileStyles.sendMessageContainer}>
                        <textarea
                            className={mobileStyles.messageInput}
                            placeholder="Message..."
                        />
                        <div className={mobileStyles.inputButtons}>
                            <button className={mobileStyles.inputButton}>
                                <img src={attachment} alt="attachment logo" />
                            </button>
                            <button className={mobileStyles.inputButton}>
                                <img src={statsReport} alt="stats report logo" />
                            </button>
                            <button className={mobileStyles.inputButton}>
                                <img src={emoji} alt="emojis logo" />
                            </button>
                        </div>
                    </div>
                    <button className={mobileStyles.sendMessageButton}>
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
                {muteIsOpen ? (
                    <Mute setMuteIsOpen={setMuteIsOpen} setMuteOption={setMuteOption} />
                ) : null}
                {blockIsOpen ? <BlockMenu setBlockIsOpen={setBlockIsOpen} /> : null}
                {
                    editMenuIsOpen ? (
                        <EditNicknameMenu
                            setEditMenuIsOpen={setEditMenuIsOpen}
                            nickname={nickname}
                            setNickname={setNickname}
                        />
                    ) : null
                }
                {deleteIsOpen ? <DeleteChat setDeleteIsOpen={setDeleteIsOpen} nickname={'Owen Padberg'} /> : null}
            </div>
            <MobileNavbar />
        </div>
    );
}

export default MobileDirect;
