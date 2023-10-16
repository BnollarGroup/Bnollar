import Modal from "components/Modal";
import style from "./ProfileEditDetails.module.css";

export default function ProfileEditDetailsModal() {
  return (
    <Modal>
      <div className={style.editDetailContainer}>
        <div className={style.editDetail}>
          <h3>Edit details</h3>
          <p>Details you select will be public.</p>
        </div>
        <div className={style.editProfileLine}></div>
      </div>
    </Modal>
  );
}
