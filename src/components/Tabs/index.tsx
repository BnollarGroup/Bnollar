import clsx from "clsx";
import { capitalize } from "lib/utils";
import { Dispatch, SetStateAction } from "react";
import style from "./Tabs.module.css";

interface Props {
  pages: { page: string; icon: any }[];
  currentPage: any;
  setCurrentPage: Dispatch<SetStateAction<any>>;
}
export default function Tabs({ pages, currentPage, setCurrentPage }: Props) {
  return (
    <div className={style.menu}>
      {pages.map((page, i) => (
        <div
          className={clsx(
            style.menuItem,
            page.page === currentPage && style.active
          )}
          key={i}
          onClick={() => setCurrentPage(page.page)}
        >
          <img src={page.icon} alt={page.page} />
          <h1>{capitalize(page.page)}</h1>

          {page.page === currentPage && <div className={style.menuline}></div>}
        </div>
      ))}
    </div>
  );
}
