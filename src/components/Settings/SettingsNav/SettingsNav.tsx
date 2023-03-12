import SideNavLink from '../../SideNavLink/SideNavLink'
import styles from './SettingsNav.module.css'

interface SettingsNavProps {
  active: string
}

const SettingsNav = ({ active }: SettingsNavProps) => {
  return (
    <div className={styles.settingsNavContainer}>
      <div className={styles.settingsNavWrapper}>
        <SideNavLink
          to="/settings/profile"
          name="Profile"
          active={active === 'profile'}
        />
        <SideNavLink
          to="/settings/manage_wallets"
          name="Manage wallets"
          active={active === 'manage_wallets'}
        />

        <SideNavLink
          to="/settings/notification"
          name="Notifications"
          active={active === 'notification'}
        />
        <SideNavLink
          name="Privacy & Security"
          to="/settings/privacy&security"
          active={active === 'privacy&security'}
        />
      </div>
    </div>
  )
}

export default SettingsNav
