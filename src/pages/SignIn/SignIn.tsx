import { FC } from 'react'
import classes from './SignIn.module.css'
import Nft_1 from '../../resources/images/SignIn/nft_1.svg'
// import SignInNavbar from '../../components/SignIn/SignInNavbar'
import coinbase from '../../resources/images/SignIn/wallets/coinbase.svg'
import walletconnect from '../../resources/images/SignIn/wallets/walletconnect.svg'
import metamask from '../../resources/images/SignIn/wallets/metamask.svg'
import WalletItem from '../../components/WalletItem/WalletItem'

const SignIn: FC = () => {
  return (
    <section className={classes.sign_in}>
      <div className={classes.left_image}>
        <img src={Nft_1} alt="" />
      </div>
      <div className={classes.right_sign_in}>
        <div className={classes.sign_in_wrapper}>
          <h1 className={classes.title}>Connect wallet</h1>
          <p className={classes.text}>
            Choose how you want to connect. There are several wallet providers.
          </p>
          <div className={classes.sign_in_cont}>
            {/* <SignInNavbar /> */}
            <div className={classes.wallets_list}>
              <WalletItem image={metamask} title="Metamask" />
              <WalletItem image={walletconnect} title="Walletconnect" />
              <WalletItem image={coinbase} title="Coinbae" />
              <WalletItem
                title="More"
                callback={() => console.log('showmore')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SignIn
