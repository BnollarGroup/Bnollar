import clsx from "clsx";
import { PropsWithChildren } from "react";
import style from "./Layout.module.css";

interface Props extends PropsWithChildren<any> {
  hasPaddingOnMobile?: boolean;
}

function Layout({ children, hasPaddingOnMobile }: Props) {
  return (
    <div
      className={clsx(
        style.container,
        hasPaddingOnMobile && style.paddingOnMobile
      )}
    >
      {children}
    </div>
  );
}

export default Layout;
