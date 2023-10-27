import style from "./Members.module.css";
import Member from "lib/resources/images/icons/memeber.png";

export default function GroupMembers() {
  return (
    <div className={style.container}>
      <div className={style.texts}>
        <p className={style.title}>
          Members <span className={style.count}>4,234</span>
        </p>
      </div>

      <div className={style.photos}>
        {[...Array(30)].map((_, i) => (
          <img src={Member} alt="" key={i} />
        ))}
      </div>
    </div>
  );
}
