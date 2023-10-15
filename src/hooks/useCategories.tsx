import { useState } from "react";

interface Category {
  id: number;
  name: string;
  selected: boolean;
}

type UseCategoriesType = {
  categories: Category[];
  toggleSelect: (id: number) => void;
};

const CATEGORIES: Category[] = [
  { id: 1, name: "Business", selected: false },
  { id: 2, name: "Creative", selected: false },
  { id: 3, name: "Education", selected: false },
  { id: 4, name: "Entertainment", selected: false },
  { id: 5, name: "Fashion & Beauty", selected: false },
  { id: 6, name: "Food", selected: false },
  { id: 7, name: "Government & politics", selected: false },
  { id: 8, name: "Health & wealness", selected: false },
  { id: 9, name: "More", selected: false },
];

const useCategories = (): UseCategoriesType => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);

  const toggleSelect = (id: number) => {
    setCategories((categories) => {
      return categories.map((category) => {
        return category.id === id
          ? {
              ...category,
              selected: !category.selected,
            }
          : category;
      });
    });
  };

  return { categories, toggleSelect };
};

export default useCategories;
