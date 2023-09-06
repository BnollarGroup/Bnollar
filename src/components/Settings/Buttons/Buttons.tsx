import styles from './Buttons.module.css'

interface ButtonsProps {
  updateButtonTitle: string
}

const Buttons = ({ updateButtonTitle }: ButtonsProps) => {
  return (
    <div className={styles.buttonsWrapper}>
      <button type="button" className={styles.cancelButton}>
        Cancel
      </button>
      <button type="button" className={styles.updateButton}>
        {updateButtonTitle}
      </button>
    </div>
  )
}

export default Buttons
