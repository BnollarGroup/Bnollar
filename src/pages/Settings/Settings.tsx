import SettingsNav from '../../components/Settings/SettingsNav/SettingsNav'
import WithNavigation from '../../HOCs/WithNavigation/WithNavigation'
import useSettings from '../../Hooks/useSettings'
import styles from './Settings.module.css'
const Settings = () => {
  const { type, component } = useSettings()
  return (
    <div className={styles.settingsWrapper}>
      <SettingsNav active={type} />
      {component}
    </div>
  )
}

export default WithNavigation(Settings)
