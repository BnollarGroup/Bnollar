import styles from "./CreateGroup.module.css";
import { ChangeEvent, useState, FC } from "react";
import searchLogo from "lib/resources/images/profile-chat/search-logo.svg";
import clsx from "clsx";

interface ChatMessage {
    name: string;
    message: string;
    avatar: string;
    hasDot: boolean;
    messageTime: string;
}

interface CreateGroupProps {
    chatMessages: ChatMessage[];
}

const CreateGroup: FC<CreateGroupProps> = ({ chatMessages }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [addedMembers, setAddedMembers] = useState<Set<number>>(new Set());

    // Function to handle input changes
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); // Update the search query state
    };

    // Filter chatMessages based on the search query
    const filteredChatMessages = chatMessages.filter((message) =>
        message.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddMember = (index: number) => {
        // Toggle membership in the group
        const updatedSet = new Set(addedMembers);
        if (updatedSet.has(index)) {
            updatedSet.delete(index); // If the member is already added, remove them
        } else {
            updatedSet.add(index); // Otherwise, add them
        }
        setAddedMembers(updatedSet); // Update the state
    };

    const handleRemoveMember = (index: number) => {
        const updatedSet = new Set(addedMembers);
        updatedSet.delete(index); // Remove the specified index
        setAddedMembers(updatedSet); // Update the state
    };

    return (
        <div className={styles.createGroupWindow}>
            <div className={styles.createGroupSearchWrap}>
                <input
                    className={styles.searchInputGroups}
                    type="text"
                    placeholder="Search"
                    value={searchQuery} // Bind input value to searchQuery state
                    onChange={handleSearchChange} // Handle input change
                />
                <img
                    className={styles.searchImg}
                    src={searchLogo}
                    alt="search logo"
                />
            </div>
            <div className={styles.suggestedFriends}>
                {filteredChatMessages.map((single, index) => {
                    const isAdded = addedMembers.has(index); // Check if the current item is in the 'addedMembers' set

                    return (
                        <div key={index} className={styles.suggestedFriend}>
                            <div className={styles.nameAndAvatarWrapper}>
                                <img src={single.avatar} alt={`${single.name}'s avatar`} />
                                <span>{single.name}</span>
                            </div>
                            <span
                                className={clsx(styles.addMember, {
                                    [styles.added]: isAdded, // Apply style if added
                                })}
                                onClick={() => handleAddMember(index)}
                            >
                                {!isAdded ? 'Follow' : 'Unfollow'}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CreateGroup;
