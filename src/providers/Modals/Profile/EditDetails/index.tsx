import Modal from "components/Modal";
import style from "./ProfileEditDetails.module.css";
import editIcon from "lib/resources/images/icons/edit.png"
import plusIcon from "lib/resources/images/icons/plus.png"
import clsx from "clsx";

export default function ProfileEditDetailsModal() {
  return (
    <Modal>
      <div className={style.editDetailContainer}>

        <div className={style.editDetail}>
          <h3>Edit details</h3>
          <p>Details you select will be public.</p>
        </div>

        <div className={style.editProfileLine}></div>

        <div className={style.editWork}>
          <h3>Work</h3>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Worked at Meria</p>
            </div>
            <div>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </div>

        <div className={style.editWork}>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Former Pianist at Alla Pugacheva Band</p>
            </div>
            <div>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </div>

        <button className={style.editBtn}>
          <img src={plusIcon} alt="" />

          Add a workplace
        </button>
        <div className={style.editProfileLine}></div>

        <div className={style.editWork}>
          <h3>Education</h3>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Studied at Georgian Technical University</p>
            </div>
            <div>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={style.btnContainer}>
          <button className={style.editBtn}>
            <img src={plusIcon} alt="" />

            Add a workplace
          </button>
          <button className={style.editBtn}>
            <img src={plusIcon} alt="" />

            Add a workplace
          </button>
        </div>
        <div className={style.editProfileLine}></div>

        <div className={style.editWork}>
          <h3>Current city</h3>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Lives in Tbilisi, Georgia</p>
            </div>
            <div>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={style.editProfileLine}></div>
        <div className={style.updateInformation}>
          <div className={style.btnContainer}>
            <button className={style.cancelBtn}>
              Cancel
            </button>
            <button className={clsx(style.editBtn, style.orangeBtn)}>
              Update information
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
