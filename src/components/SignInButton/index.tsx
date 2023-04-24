import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export const SignInButton = () => {

  const isUsedLoggedIn = true

  return isUsedLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color='#84D361' /> 
      Renan Vilela
      <FiX color='#727288' className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color='#EBA417' /> Sign in with Github
    </button>
  )
}