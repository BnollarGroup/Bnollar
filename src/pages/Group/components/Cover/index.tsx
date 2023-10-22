import style from "./Cover.module.css";
import CoverPicture from "lib/resources/images/icons/coverpic.png";

export default function Cover() {
  return (
    <div className={style.container}>
      <img src={CoverPicture} alt="Cover" className={style.image} />
    </div>
  );
}
