import SettingsTopNav from "../../components/Settings/SettingsTopNav/SettingsTopNav";
import SideNav from "components/Sidenav";
import { ComponentType } from "react";
import styles from "./WithNavigation.module.css";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";

const withNavigation = (WrappedComponent: ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <div
        style={{ backgroundColor: "#0d0e11" }}
        className={styles.homeWrapper}
      >
        <SettingsTopNav />
        <div className={styles.main}>
          <SideNav />
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default withNavigation;
