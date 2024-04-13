import React, { useRef, useState } from "react";
import styles from "./FeedHeader.module.css";
import user1 from "lib/resources/images/icons/user1.svg";
import attach from "lib/resources/images/icons/atach.svg";
import nft from "lib/resources/images/icons/nft.svg";
import emoji from "lib/resources/images/icons/emoji.svg";
import language from "lib/resources/images/icons/language.svg";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function WritePost() {
  const [thought, setThought] = useState<string>("");
  const attachInputRef = useRef<HTMLInputElement>(null);
  const nftInputRef = useRef<HTMLInputElement>(null);
  const [attachFile, setAttachFile] = useState<File | null>(null);
  const [nftFile, setNftFile] = useState<File | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<string>('Public');
  const [attachImageUrl, setAttachImageUrl] = useState<string | undefined>(undefined);
  const [nftImageUrl, setNftImageUrl] = useState<string | undefined>(undefined);

  const handleAttachFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setAttachFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAttachImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNftFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setNftFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setNftImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    const emojiUnicode = emoji.native;
    setThought(thought + emojiUnicode);
  };

  const handleImageClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const togglePrivacy = () => {
    if (privacy === 'Public') {
      setPrivacy('Private');
    } else {
      setPrivacy('Public');
    }
  }
  return (
    <div className={styles.feedHeader}>
      <div className={styles.headerSearch}>
        <div className={styles.shareThoughts}>
          <img src={user1} />
          <textarea
            id="post"
            placeholder="Write your thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            style={{
              height: !thought ? "auto" : "2em",
            }}
          ></textarea>
        </div>
        {nftFile && <img style={{ width: 200, height: 200 }} src={nftImageUrl} alt="NFT Image" />}
        {attachFile && <img style={{ width: 200, height: 200 }} src={attachImageUrl} alt="attached File" />}

      </div>
      <div className={styles.headerButtons}>
        <div className={styles.leftButtons}>
          {/* <img src={attach} />
          <img src={nft} /> */}
          <img
            src={attach} // Replace `attach` with the path to your attach image
            alt="Attach"
            onClick={() => handleImageClick(attachInputRef)}
          />
          <input
            type="file"
            ref={attachInputRef}
            style={{ display: 'none' }}
            onChange={handleAttachFileChange}
          />
          <img
            src={nft} // Replace `nft` with the path to your nft image
            alt="NFT"
            onClick={() => handleImageClick(nftInputRef)}
          />
          <input
            type="file"
            ref={nftInputRef}
            style={{ display: 'none' }}
            onChange={handleNftFileChange}
          />
          <img src={emoji} onClick={() => setShowEmojiPicker(prev => !prev)} />
          {showEmojiPicker && (
            <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
          )}
        </div>
        <div className={styles.rightButtons}>
          <button onClick={togglePrivacy}>
            <img src={language} />
            {privacy}
          </button>
          <button className={styles.postButton}>Post</button>
        </div>
      </div>
    </div >
  );
}
