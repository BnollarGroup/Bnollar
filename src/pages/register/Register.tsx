import React, { FC, useState, useEffect } from "react";
import styles from "./Register.module.css";
import registerBg from "../../resources/images/registration/register_bg.svg";
import imgIcon from "../../resources/images/registration/imgIcon.svg";
import addIcon from "../../resources/images/registration/addIcon.svg";
const Register: FC = () => {
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [canCreate, setCanCreate] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [showSelectCategory, setShowSelectCategory] = useState(false);
  const [showAllSet, setShowAllSet] = useState(false);
  useEffect(() => {
    if (userName.length > 3 && displayName.length > 3) {
      setCanCreate(true);
    } else {
      setCanCreate(false);
    }
  });
  const handleCreateAccount = () => {
    if (canCreate) {
      setShowSelectCategory(true);
      setShowRegister(false);
    }
  };
  const categories = [
    {id:1,name:'Business'},
    {id:2,name:'Creative'},
    {id:3,name:'Education'},
    {id:4,name:'Entertainment'},
    {id:5,name:'Fashion & Beauty'},
    {id:6,name:'Food'},
    {id:7,name:'Government & politics'},
    {id:8,name:'Health & wealness'},
    {id:9,name:'More'},

  ]
  return (
    <section className={styles.register}>
      <div className={styles.left_register}>
          {showRegister && (
        <div className={styles.register_wrapper}>
            <div>
              <h1 className={styles.title}>Registration</h1>
              <p className={styles.text}>
                Choose your Bnollar username. You can always change it later.
              </p>
              <div className={styles.addImg_wrapper}>
                <div className={styles.addImg}>
                  <img src={imgIcon} />
                  <img src={addIcon} />
                </div>
              </div>
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Display name"
                  onChange={(e) => setDisplayName(e.target.value)}
                ></input>
                <button
                  className={canCreate ? styles.canCreate : styles.initial}
                  onClick={handleCreateAccount}
                >
                  Create account
                </button>
              </div>
            </div>
          </div>
          )}
          {showSelectCategory && (
            <div className={styles.categories}>
              <h1 className={styles.title}>Select category</h1>
              <p className={styles.text}>For a personalised experience</p>
              <div className={styles.categoriesWrapper}>
                {categories.map(item=>(
                    <div key={item.id} className={styles.categoriesNotSelected}>{item.name}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      <div className={styles.right_image}>
        <img src={registerBg} alt="" />
      </div>
    </section>
  );
};
export default Register;
