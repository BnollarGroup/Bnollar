import style from "./Select.module.css";
import clsx from "clsx";
import ArrowDown from "lib/resources/svg/ArrowDown";
import { useState } from "react";
import { useAppDispatch } from "hooks/useRedux";
import { change } from "features/modal/modalSlice";

interface Props {
  className?: string;
  data: { value: string; text: string; addCategory?: boolean }[];
  showArrow?: boolean;
  addCategory?: boolean;
}

export default function Select({
  className,
  data,
  showArrow = true,
  addCategory,
}: Props) {

  const dispatch = useAppDispatch();

  return (
    <div className={clsx(className, style.container)}>
      <select className={style.select}>
        {data.map((item, index, addCategory) => (
          <option
            key={index}
            value={item.value}
            onClick={
              addCategory
                ? () => dispatch(change("uploadNFT-uploadFile"))
                : () => {}
            }
          >
            {item.text}
          </option>
        ))}
      </select>

      {showArrow && <ArrowDown className={style.icon} />}
    </div>
  );
}
