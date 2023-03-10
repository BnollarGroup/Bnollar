import styles from './NFTItem.module.css'

interface ContactItemProps {
  image: string
  name: string
}
const NFTItem = ({ image, name }: ContactItemProps) => {
  return (
    <div className={styles.NFTItem}>
      <img src={image} alt="user icon" />
      <span>{name}</span>
    </div>
  )
}

export default NFTItem
