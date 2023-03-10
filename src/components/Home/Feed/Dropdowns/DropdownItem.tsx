import styles from './Dropdowns.module.css'
interface DropdownItemProps {
  label: string
  callback?: () => void
}

const DropdownItem = ({ label, callback }: DropdownItemProps) => {
  const clickHandler = () => {
    if (callback) {
      callback()
    }
  }
  return (
    <div className={styles.dropdownItem} onClick={() => clickHandler()}>
      {label}
    </div>
  )
}

export default DropdownItem
