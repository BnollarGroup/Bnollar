import React, { useState } from 'react';
import style from './FilesTab.module.css';
import FilesDropdown from './components/FilesDropdown';
const FilesTab = () => {
    const filesData = [
        { img: 'https://picsum.photos/50', date: '03-10-2019', time: '23:09', title: 'Lorem Ipsum', author: 'irakli Lolashvili', link: '/dummy.pdf', linkToPost:'/home' },
        { img: 'https://picsum.photos/50', date: '03-10-2019', time: '23:09', title: 'Lorem Ipsum', author: 'irakli Lolashvili', link: '/dummy.pdf', linkToPost:'/home' },
        { img: 'https://picsum.photos/50', date: '03-10-2019', time: '23:09', title: 'Lorem Ipsum', author: 'irakli Lolashvili', link: '/dummy.pdf', linkToPost:'/home' },
    ];

    // Track the index of the active dropdown. If null, no dropdown is open.
    const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);

    return (
        <div className={style.FileContainer}>
            {filesData.map((file, index) => {
                const parts = file.date.split('-'); // Split the date into components
                const month = parseInt(parts[0], 10) - 1; // Months are zero-indexed
                const day = parseInt(parts[1], 10);
                const year = parseInt(parts[2], 10);
                const parsedDate = new Date(year, month, day);
                const formattedDate = parsedDate.toLocaleDateString('en-US', {
                    month: 'long', // Full name of the month
                    day: 'numeric', // Day number
                    year: 'numeric', // Four-digit year
                });

                const toggleDropdown = () => {
                    // If the current index is active, close it; otherwise, set the new active index
                    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
                };

                return (
                    <div key={index} className={style.fileWrap}>
                        <div className={style.imgAndInfoWrap}>
                            <div className={style.imgWrapper}>
                                <img src={file.img} alt='...' />
                            </div>
                            <div className={style.infoWrap}>
                                <h6>{file.title}</h6>
                                <span className={style.authorResponsive}>{file.author}</span>
                                <span>{formattedDate} at {file.time}</span>
                            </div>
                        </div>
                        <div className={style.authorWrap}>
                            <span>by {file.author}</span>
                        </div>
                        <button
                            onClick={toggleDropdown}
                            className={style.actionButton}
                        >
                            <span className={style.actionButtonInner}>...</span>
                        </button>

                        {activeDropdownIndex === index && (
                            <FilesDropdown
                                dropdownMenu={true} // Always true when it's the active index
                                setDropdownMenu={setActiveDropdownIndex}
                                fileUrl={file.link}
                                originalPostPath={file.linkToPost}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default FilesTab;
