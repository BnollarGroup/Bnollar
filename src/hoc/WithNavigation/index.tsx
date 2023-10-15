import Navbar from "components/Navbar";
import SideNav from "components/Sidenav";
import { ComponentType } from "react";
import styles from "./WithNavigation.module.css";

const withNavigation = (WrappedComponent: ComponentType<any>) => {
  return (props: any) => {
    return (
      <div
        style={{ backgroundColor: "#0d0e11" }}
        className={styles.homeWrapper}
      >
        <Navbar />
        <div className={styles.main}>
          <SideNav />
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default withNavigation;
