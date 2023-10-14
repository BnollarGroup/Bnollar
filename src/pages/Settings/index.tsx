import SettingsNav from "components/Settings/SettingsNav/SettingsNav";
import WithNavigation from "hoc/WithNavigation";
import useSettings from "hooks/useSettings";
import styles from "./Settings.module.css";

const Settings = () => {
  const { type, component } = useSettings();
  return (
    <div className={styles.settingsWrapper}>
      <SettingsNav active={type} />
      {component}
    </div>
  );
};

export default WithNavigation(Settings);
