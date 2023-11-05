import style from "./Select.module.css";
import clsx from "clsx";
import ArrowDown from "lib/resources/svg/ArrowDown";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  data: { value: string; text: string; onClick?: () => void }[];
  showArrow?: boolean;
}

export default function Select({
  className,
  data,
  showArrow = true,
  value,
  onChange,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const item = data.find((item) => item.value === value);

    item?.onClick && item.onClick();

    onChange && onChange(e);
  };

  return (
    <div className={clsx(className, style.container)}>
      <select className={style.select} value={value} onChange={handleChange}>
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
