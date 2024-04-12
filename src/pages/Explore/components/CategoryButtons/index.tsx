import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './CategoryButtons.module.css';

interface Props {
  categories: string[];
}

const CategoryButtons: React.FC<Props> = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((str, index) => ({
      id: index + 1,
      name: str,
      selected: false
    }))
  );

  const toggleSelect = (id: number) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? {
            ...category,
            selected: !category.selected
          }
          : category
      )
    );
  };

  return (
    <div className={style.container}>
      {selectedCategories.map((item) => (
        <div
          key={item.id}
          className={
            item.selected
              ? style.categorieSelected
              : style.categoriesNotSelected
          }
          onClick={() => {
            toggleSelect(item.id);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

CategoryButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default CategoryButtons;
