import Modal from "components/Modal";
import style from "./ProfileEditDetails.module.css";
import editIcon from "lib/resources/images/icons/edit-pencil.svg"
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
            <label className={style.switch}>
              <input type="checkbox" />
              <span className={clsx(style.slider, style.round)}></span>
            </label>
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
            <label className={style.switch}>
              <input type="checkbox" />
                <span className={clsx(style.slider, style.round)}></span>
            </label>
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
            <label className={style.switch}>
              <input type="checkbox" />
              <span className={clsx(style.slider, style.round)}></span>
            </label>
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
            <label className={style.switch}>
              <input type="checkbox" />
              <span className={clsx(style.slider, style.round)}></span>
            </label>
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
