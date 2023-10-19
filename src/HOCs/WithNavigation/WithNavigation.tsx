import React, { ComponentType } from "react";
import SettingsTopNav from "../../components/Settings/SettingsTopNav/SettingsTopNav";
import SideNav from "../../components/Sidenav";
import styles from "./WithNavigation.module.css";

const WithNavigation = (WrappedComponent: ComponentType<any>) => {
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

export default WithNavigation;
