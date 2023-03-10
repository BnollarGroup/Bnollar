import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CategorySelet from '../components/Register/CategorySelect/CategorySelet'
import Finished from '../components/Register/Finished/Finished'
import PersonalInfoForm from '../components/Register/PersonalInfoForm/PersonalInfoForm'
import useCategories from './useCategories'

const UseRegister = () => {
  const [userName, setUserName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { categories, toggleSelect } = useCategories()
  const [image, setImage] = useState('')

  const { step } = useParams()

  const getComponent = () => {
    switch (step) {
      case 'personal_info':
        return (
          <PersonalInfoForm
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
    personal_info: 'Registration',
    category: 'Select category',
    finished: "You're all set",
  }

  const messages = {
    personal_info:
      'Choose your Bnollar username. You can always change it later.',
    category: 'For a personalised experience',
    finished:
      "We're excited to have you on board. Your account is all set up and ready for you to start using.",
  }
  return {
    title: typeof step === 'string' ? (titles as any)[step] : 'Error',
    message:
      typeof step === 'string' ? (messages as any)[step] : 'try again later.',
    component: getComponent(),
  }
}

export default UseRegister
