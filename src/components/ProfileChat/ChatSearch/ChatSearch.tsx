import styles from "./ChatSearch.module.css";
import searchLogoChat from "lib/resources/images/profile-chat/search-logo-chat.svg";
import arrowSearchChatLogo from "lib/resources/images/profile-chat/arrow-chat-search.svg";

interface ChatSearchProps {
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatSearch(props: ChatSearchProps) {
  const { setSearchIsOpen } = props;

  return (
    <div className={styles.chatSearch}>
      <input
        type="search"
        placeholder="Search"
        className={styles.chatSearchInput}
      />
      <img
        className={styles.chatSearchLogo}
        src={searchLogoChat}
        alt="search icon"
      />
      <div className={styles.searchButtons}>
        <button className={styles.searchButton}>
          <img
            className={styles.arrowChatUp}
            src={arrowSearchChatLogo}
            alt="arrow"
          />
        </button>
        <button className={styles.searchButton}>
          <img
            className={styles.arrowChatDown}
            src={arrowSearchChatLogo}
            alt="arrow"
          />
        </button>
      </div>
      <button
        onClick={() => setSearchIsOpen(false)}
        className={styles.chatSearchClose}
      >
        Close
      </button>
    </div>
  );
}

export default ChatSearch;
