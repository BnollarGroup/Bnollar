import styles from "./Settings.module.css";
import useSettings from "hooks/useSettings";
import SettingsNav from "components/Settings/SettingsNav/SettingsNav";
import withNavigation from "hoc/WithNavigation";

const Settings = () => {
  const { type, component } = useSettings();

  return (
    <div className={styles.settingsWrapper}>
      <SettingsNav active={type} />
      {component}
    </div>
  );
};

export default withNavigation(Settings);
