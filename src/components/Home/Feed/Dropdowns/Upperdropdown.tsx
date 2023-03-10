import DropdownItem from './DropdownItem'
import styles from './Dropdowns.module.css'
const Upperdropdown = () => {
  return (
    <div className={styles.dropdownWrapper}>
      <DropdownItem label="Report" />
      <DropdownItem label="Copy link" />
      <DropdownItem label="Add to favourites" />
    </div>
  )
}

export default Upperdropdown
