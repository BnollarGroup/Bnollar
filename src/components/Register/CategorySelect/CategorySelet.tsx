import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CategorySelect.module.css'

interface Category {
  id: number
  name: string
  selected: boolean
}

interface CategorySelectParams {
  categories: Category[]
  toggleSelect: (id: number) => void
}

const CategorySelet = ({ categories, toggleSelect }: CategorySelectParams) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.categoriesWrapper}>
        {categories.map((item) => (
          <div
            key={item.id}
            className={
              item.selected
                ? styles.categorieSelected
                : styles.categoriesNotSelected
            }
            onClick={() => toggleSelect(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/register/finished')}
        className={styles.continue}
      >
        Continue
      </button>
    </>
  )
}

export default CategorySelet
