import React, { FC } from "react";
import classes from "./SignIn.module.css";
import Nft_1 from "lib/resources/images/SignIn/nft_1.svg";
import Logo from "lib/resources/images/logo/bnollar_logo.svg";
import coinbase from "lib/resources/images/SignIn/wallets/coinbase.svg";
import walletconnect from "lib/resources/images/SignIn/wallets/walletconnect.svg";
import metamask from "lib/resources/images/SignIn/wallets/metamask.svg";
import WalletItem from "components/WalletItem/WalletItem";

const SignIn: FC = () => {
  return (
    <section className={classes.signIn}>
      <div className={classes.leftImage}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <img src={Nft_1} alt="nft logo" className={classes.maskImg} />
      </div>
      <div className={classes.rightSignIn}>
        <div className={classes.signInWrapper}>
          <h2 className={classes.title}>Connect wallet</h2>
          <p className={classes.text}>
            Choose how you want to connect. There are several wallet providers.
          </p>
          <div className={classes.signInContent}>
            <WalletItem
              image={metamask}
              title="Metamask"
              callback={() => console.log("Metamask clicked")}
            />
            <WalletItem
              image={walletconnect}
              title="Walletconnect"
              callback={() => console.log("Walletconnect clicked")}
            />
            <WalletItem
              image={coinbase}
              title="Coinbase wallet"
              callback={() => console.log("Coinbase clicked")}
            />
            <WalletItem
              title="More"
              callback={() => console.log("showmore")}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
