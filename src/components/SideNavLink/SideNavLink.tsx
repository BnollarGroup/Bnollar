import styles from './SideNavLink.module.css'

interface SideNavLink {
  name: string
  image: string
  active: boolean
}

const SideNavLink = ({ name, image, active }: SideNavLink) => {
  return (
    <button className={`${styles.side_nav_link} ${active && styles.active}`}>
      <img src={image} alt={name} />
      {name}
    </button>
  )
}

export default SideNavLink
