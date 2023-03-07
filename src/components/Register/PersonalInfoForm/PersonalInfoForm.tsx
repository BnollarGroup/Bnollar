import imgIcon from '../../../resources/images/registration/imgIcon.svg'
import addIcon from '../../../resources/images/registration/addIcon.svg'
import styles from './PersonalInfoForm.module.css'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Dropzone from 'react-dropzone'

interface PersonalInfoFormProps {
  userName: string
  setUserName: Dispatch<SetStateAction<string>>
  displayName: string
  setDisplayName: Dispatch<SetStateAction<string>>
  image: string
  setImage: Dispatch<SetStateAction<string>>
}

const PersonalInfoForm = ({
  userName,
  setUserName,
  displayName,
  setDisplayName,
  image,
  setImage,
}: PersonalInfoFormProps) => {
  const [canCreate, setCanCreate] = useState(false)
  const { step } = useParams()
  const dropzoneRef = useRef(null)

  const navigate = useNavigate()

  const imageHandler = (file: File) => {
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        console.log('uploaded')
        setImage(reader.result)
      }
    })
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    if (userName?.length > 3 && displayName?.length > 3) {
      setCanCreate(true)
    } else {
      setCanCreate(false)
    }
  }, [userName, displayName, step])

  const handleClick = () => {
    if (canCreate) {
      navigate('/register/category')
    }
  }

  const openDialog = () => {
    if (dropzoneRef.current) {
      ;(dropzoneRef.current as any).open()
    }
  }

  return (
    <div>
      <Dropzone
        ref={dropzoneRef}
        onDrop={(acceptedFiles) => imageHandler(acceptedFiles[0])}
        noClick
        noKeyboard
        accept={{
          'image/png': ['.png'],
          'image/jpg': ['.jpg'],
          'image/jpeg': ['.jpeg'],
        }}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <>
              {!image && (
                <div {...getRootProps({ className: styles.dropzone })}>
                  <input {...getInputProps()} />
                  <p>
                    Drop image here, or{' '}
                    <span className={styles.browse} onClick={openDialog}>
                      browse
                    </span>
                  </p>
                </div>
              )}
              <div className={styles.addImg}>
                <img
                  className={image ? styles.uploaded : styles.notUploaded}
                  src={image || imgIcon}
                  alt="img icon"
                />

                <img onClick={openDialog} src={addIcon} alt="Upload File" />
              </div>
            </>
          )
        }}
      </Dropzone>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        ></input>
        <button
          className={canCreate ? styles.canCreate : styles.initial}
          onClick={handleClick}
        >
          Create account
        </button>
      </div>
    </div>
  )
}

export default PersonalInfoForm
