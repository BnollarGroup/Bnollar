import React, { FC, useState, useEffect } from "react";
import styles from "./Register.module.css";
import registerBg from "../../resources/images/registration/register_bg.svg";
import imgIcon from "../../resources/images/registration/imgIcon.svg";
import addIcon from "../../resources/images/registration/addIcon.svg";
import ok from "../../resources/images/registration/ok.svg";

interface Category {
  id: number;
  name: string;
  selected: boolean;
}

const CATEGORIES: Category[] = [
  { id: 1, name: "Business", selected: false },
  { id: 2, name: "Creative", selected: false },
  { id: 3, name: "Education", selected: false },
  { id: 4, name: "Entertainment", selected: false },
  { id: 5, name: "Fashion & Beauty", selected: false },
  { id: 6, name: "Food", selected: false },
  { id: 7, name: "Government & politics", selected: false },
  { id: 8, name: "Health & wealness", selected: false },
  { id: 9, name: "More", selected: false },
];

type UseCategoriesType = {
  categories: Category[];
  toggleSelect: (id: number) => void;
};

const useCategories = (): UseCategoriesType => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);

  const toggleSelect = (id: number) => {
    setCategories((categories) => {
      return categories.map((category) => {
        return category.id === id
          ? {
              ...category,
              selected: !category.selected,
            }
          : category;
      });
    });
  };

  return { categories, toggleSelect };
};

const Register: FC = () => {
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [canCreate, setCanCreate] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [showSelectCategory, setShowSelectCategory] = useState(false);
  const [showAllSet, setShowAllSet] = useState(false);
  const { categories, toggleSelect } = useCategories();
  const [file, setFile] = useState(null);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    if (userName.length > 3 && displayName.length > 3) {
      setCanCreate(true);
    } else {
      setCanCreate(false);
    }
  }, [userName, displayName]);
  const handleCreateAccount = () => {
    if (canCreate) {
      setShowSelectCategory(true);
      setShowRegister(false);
    }
  };
  const handleContinue = () => {
    setShowSelectCategory(false);
    setShowAllSet(true);
  };
  
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
                  <img src={imgIcon} alt="img icon" />
                  <label htmlFor="file-input">
                    <img src={addIcon} alt="Upload File" />
                  </label>
                  <input type="file" id="file-input" onChange={handleChange} style={{display:'none'}}/>
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
              {categories.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.selected
                      ? styles.categorieSelected
                      : styles.categoriesNotSelected
                  }
                  onClick={() => {
                    toggleSelect(item.id);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className={styles.continue}>
              <button onClick={handleContinue}>Continue</button>
            </div>
          </div>
        )}
        {showAllSet && (
          <div className={styles.allSetWrapper}>
            <div>
              <img src={ok} alt="ok" />
            </div>
            <div>
              <h1 className={styles.title}>You’re all set</h1>
              <p className={styles.text}>
                We're excited to have you on board. Your account is all set up
                and ready for you to start using.
              </p>
            </div>
            <div className={styles.finish}>
              <button>Finish</button>
            </div>
          </div>
        )}
        </div>
        <div className={styles.right_image}>
         <img src={registerBg} alt="nft" />
       </div>
        </section>

  )
}
export default Register

