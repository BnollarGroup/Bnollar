import React from 'react';
import PropTypes from 'prop-types';
import style from './CategoryButtons.module.css';

interface Props {
  categories: string[];
}

const CategoryButtons: React.FC<Props> = ({ categories }) => {
  return (
    <div className={style.container}>
      {categories.map((category, i) => (
        <button className={style.item} key={i}>
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CategoryButtons;
