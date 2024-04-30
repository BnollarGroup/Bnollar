import { Link } from "react-router-dom";
import styles from "../../DropDownMenu/DropDownMenu.module.css"; // Fix the correct path
import PropTypes from 'prop-types';
// import downloadIcon from "lib/resources/images/dropdown/download.svg"; // Correct import
// import linkIcon from "lib/resources/images/dropdown/link.svg"; // Correct import

interface FilesDropdownProps { // Use consistent naming
    setDropdownMenu: React.Dispatch<React.SetStateAction<number | null>>;
    dropdownMenu: boolean;
    fileUrl: string; // URL for file download
    originalPostPath: string; // URL for original post
}

const FilesDropdown: React.FC<FilesDropdownProps> = ({
    setDropdownMenu,
    dropdownMenu,
    fileUrl,
    originalPostPath,
}) => {
    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = fileUrl; // URL for download
        link.download = ""; // Trigger download
        link.click(); // Start download
        setDropdownMenu(null); // Close dropdown after download
    };

    return (
        <div className={styles.dropdownMenu}>
            <div className={styles.dropdownContainer}>
                <button
                    className={styles.dropdownMenuCategory}
                    onClick={downloadFile} // Download file
                >
                    <span className={styles.categoryName}>Download</span>
                </button>

                <Link
                    to={originalPostPath} // Navigate to specified route
                    className={styles.dropdownMenuCategory} // Style Link
                    onClick={() => setDropdownMenu(null)} // Close dropdown
                >
                    <span className={styles.categoryName}>Go to Original Post</span>
                </Link>
            </div>
        </div>
    );
};
FilesDropdown.propTypes = {
    setDropdownMenu: PropTypes.func.isRequired, // Expected to be a function
    dropdownMenu: PropTypes.bool.isRequired, // Expected to be a boolean
    fileUrl: PropTypes.string.isRequired, // Expected to be a string (URL)
    originalPostPath: PropTypes.string.isRequired, // Expected to be a string (route)
};
export default FilesDropdown;
