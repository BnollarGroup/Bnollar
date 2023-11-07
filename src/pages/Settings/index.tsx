import styles from "./Settings.module.css";
import useSettings from "hooks/useSettings";
import SettingsNav from "./components/SettingsNav/SettingsNav";
import LeftSidebar from "components/LeftSidebar";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";

const Settings = () => {
  const { type, component } = useSettings();

  return (
    <Layout>
      <div
        style={{ backgroundColor: "#0d0e11" }}
        className={styles.homeWrapper}
      >
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.main}>
          <div className={styles.LeftSidebar}>
            <LeftSidebar />
          </div>
          <div className={styles.settingsWrapper}>
            <SettingsNav active={type} />
            {component}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
