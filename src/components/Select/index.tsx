import style from "./Select.module.css";
import clsx from "clsx";
import ArrowDown from "lib/resources/svg/ArrowDown";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  data: { value: string; text: string }[];
  showArrow?: boolean;
}

export default function Select({
  className,
  data,
  showArrow = true,
  value,
  onChange,
}: Props) {
  return (
    <div className={clsx(className, style.container)}>
      <select className={style.select} value={value} onChange={onChange}>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>

      {showArrow && <ArrowDown className={style.icon} />}
    </div>
  );
}
