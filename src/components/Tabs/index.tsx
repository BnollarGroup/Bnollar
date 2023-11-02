import clsx from "clsx";
import { capitalize } from "lib/utils";
import { Dispatch, SetStateAction } from "react";
import style from "./Tabs.module.css";

interface Props {
  pages: { page: string; icon: any }[];
  value: any;
  onChange: Dispatch<SetStateAction<any>>;
}

export default function Tabs({ pages, value, onChange }: Props) {
  return (
    <div className={style.menu}>
      {pages.map((page, i) => (
        <div
          className={clsx(style.menuItem, page.page === value && style.active)}
          key={i}
          onClick={() => onChange(page.page)}
        >
          <img src={page.icon} alt={page.page} />
          <h1>{capitalize(page.page)}</h1>

          {page.page === value && <div className={style.menuline}></div>}
        </div>
      ))}
    </div>
  );
}
