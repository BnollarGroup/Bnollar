import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../resources/images/logo/bnollar_logo.svg'
import Search from './../../resources/images/Navbar/search.svg'
import Notifications from '../../resources/images/Navbar/notifications.svg'
import Messanger from '../../resources/images/Navbar/messanger.svg'

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_container}>
        <div className={classes.left_cont}>
          <div className={classes.logo_cont}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={classes.search_input_cont}>
            <img src={Search} alt="search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className={classes.right_cont}>
          <div className={classes.create}>
            <span>+</span>
            Create
          </div>
          <div className={classes.notifications}>
            <img src={Notifications} alt="notifications" />
          </div>
          <div className={classes.messanger}>
            <img src={Messanger} alt="messanger" />
          </div>
          <div className={classes.avatar}>
            <img
              src={
                'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg'
              }
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
