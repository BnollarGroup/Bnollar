import WithNavigation from "../../HOCs/WithNavigation/WithNavigation";
import SettingsNav from "../../components/Settings/SettingsNav/SettingsNav";
import styles from "./Settings.module.css";
import useSettings from "hooks/useSettings";

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
