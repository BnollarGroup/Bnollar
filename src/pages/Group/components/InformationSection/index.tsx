import style from "./InformationSection.module.css";

import Twitter from "lib/resources/images/icons/_Twitter (2).png";
import Instagram from "lib/resources/images/icons/instagram.png";
import Discord from "lib/resources/images/icons/Discord.png";
import clsx from "clsx";

export default function InformationSection({ data }: { data: any }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.titleWithBadge}>
          <h1 className={style.title}>{data.name}</h1>

          <div className={style.badge}>
            <span>{">_"}</span> {data.badge}
          </div>
        </div>

        <div className={clsx(style.social, style.socialOnDesktop)}>
          <img src={Instagram} alt="" className={style.icon} />

          <img src={Twitter} alt="" className={style.icon} />

          <img src={Discord} alt="" className={style.icon} />

          <button className={style.button}>Subscribe</button>

          <button className={clsx(style.button, style.dotbtn)}>...</button>
        </div>
      </div>

      <div className={style.description}>
        <p>{data.description}</p>
      </div>

      <div className={clsx(style.social, style.socialOnMobile)}>
        <img src={Instagram} alt="" className={style.icon} />

        <img src={Twitter} alt="" className={style.icon} />

        <img src={Discord} alt="" className={style.icon} />

        <button className={style.button}>Subscribe</button>

        <button className={clsx(style.button, style.dotbtn)}>...</button>
      </div>
    </>
  );
}
