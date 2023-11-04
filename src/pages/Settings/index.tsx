import styles from "./Settings.module.css";
import useSettings from "hooks/useSettings";
import SettingsNav from "components/Settings/SettingsNav/SettingsNav";
import SettingsTopNav from "components/Settings/SettingsTopNav/SettingsTopNav";
import SideNav from "components/Sidenav";
import Layout from "providers/Layout";
// import withNavigation from "hoc/WithNavigation";

const Settings = () => {
  const { type, component } = useSettings();

  return (
    <Layout>
      <div
        style={{ backgroundColor: "#0d0e11" }}
        className={styles.homeWrapper}
      >
        <SettingsTopNav />
        <div className={styles.main}>
          <SideNav />
          {/* <WrappedComponent {...props} /> */}
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
