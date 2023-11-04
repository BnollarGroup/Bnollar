import style from "./CategoryButtons.module.css";

export default function CategoryButtons() {
  const categories = [
    "Recommended",
    "Business",
    "Creative",
    "Education",
    "Entertainment",
    "Fashion & Beauty",
  ];

  return (
    <div className={style.container}>
      {categories.map((category, i) => {
        return (
          <button className={style.item} key={i}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
