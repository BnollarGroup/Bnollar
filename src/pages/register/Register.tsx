import { FC, useState, useEffect } from 'react'
import styles from './Register.module.css'
import registerBg from '../../resources/images/registration/register_bg.svg'
import { useParams } from 'react-router-dom'
import NameForm from '../../components/Register/NameForm/NameForm'
import CategorySelet from '../../components/Register/CategorySelect/CategorySelet'
import Finished from '../../components/Register/Finished/Finished'

interface Category {
  id: number
  name: string
  selected: boolean
}

type UseCategoriesType = {
  categories: Category[]
  toggleSelect: (id: number) => void
}

const CATEGORIES: Category[] = [
  { id: 1, name: 'Business', selected: false },
  { id: 2, name: 'Creative', selected: false },
  { id: 3, name: 'Education', selected: false },
  { id: 4, name: 'Entertainment', selected: false },
  { id: 5, name: 'Fashion & Beauty', selected: false },
  { id: 6, name: 'Food', selected: false },
  { id: 7, name: 'Government & politics', selected: false },
  { id: 8, name: 'Health & wealness', selected: false },
  { id: 9, name: 'More', selected: false },
]

const useCategories = (): UseCategoriesType => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES)

  const toggleSelect = (id: number) => {
    setCategories((categories) => {
      return categories.map((category) => {
        return category.id === id
          ? {
              ...category,
              selected: !category.selected,
            }
          : category
      })
    })
  }

  return { categories, toggleSelect }
}

const Register: FC = () => {
  const [userName, setUserName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { categories, toggleSelect } = useCategories()
  const [image, setImage] = useState('')

  const { step } = useParams()

  const getComponent = () => {
    switch (step) {
      case 'name':
        return (
          <NameForm
            userName={userName}
            setUserName={setUserName}
            displayName={displayName}
            setDisplayName={setDisplayName}
            image={image}
            setImage={setImage}
          />
        )
      case 'category':
        return (
          <CategorySelet categories={categories} toggleSelect={toggleSelect} />
        )
      case 'finished':
        return <Finished />
    }
  }

  const titles = {
    name: 'Registration',
    category: 'Select category',
    finished: "You're all set",
  }

  const messages = {
    name: 'Choose your Bnollar username. You can always change it later.',
    category: 'For a personalised experience',
    finished:
      "We're excited to have you on board. Your account is all set up and ready for you to start using.",
  }

  return (
    <section className={styles.register}>
      <div className={styles.left_register}>
        <div className={styles.register_wrapper}>
          <h1 className={styles.title}>
            {typeof step === 'string' && (titles as any)[step]}
          </h1>
          <p className={styles.text}>
            {typeof step === 'string' && (messages as any)[step]}
          </p>
          {getComponent()}
        </div>
      </div>
      <div className={styles.right_image}>
        <img src={registerBg} alt="nft" />
      </div>
    </section>
  )
}
export default Register
