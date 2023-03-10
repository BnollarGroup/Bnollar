import { FC } from 'react'
import styles from './Register.module.css'
import registerBg from '../../resources/images/registration/register_bg.svg'
import UseRegister from '../../Hooks/UseRegister'

const Register: FC = () => {
  const { title, message, component } = UseRegister()

  return (
    <section className={styles.register}>
      <div className={styles.left_register}>
        <div className={styles.register_wrapper}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{message}</p>
          {component}
        </div>
      </div>
      <div className={styles.right_image}>
        <img src={registerBg} alt="nft" />
      </div>
    </section>
  )
}
export default Register
