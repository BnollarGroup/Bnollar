import style from "./ProfileCover.module.css";
import cover from "lib/resources/images/icons/cover (2).png";
import EditCoverImg from "../EditCoverImg";

export default function Cover() {
  return (
    <div className={style.container}>
      <img src={cover} alt="Cover" className={style.image} />

      <EditCoverImg />
    </div>
  );
}
