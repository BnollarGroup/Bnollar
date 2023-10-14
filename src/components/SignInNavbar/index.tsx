import React, { FC } from "react";
import classes from "./SignInNavbar.module.css";

const SignInNavbar: FC = () => {
  return (
    <ul className={classes.navbar}>
      <li className={classes.active_nav}>Ethereum</li>
      <li>Solana</li>
      <li>Tezos</li>
      <li>Immutable X</li>
      <li>Polygon</li>
    </ul>
  );
};

export default SignInNavbar;
