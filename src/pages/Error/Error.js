import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Images
import ErrorImg from '../../assets/images/error-page.jpg'
import ErrorImgDark from '../../assets/images/error-page-dark.jpg'
// SCSS
import styles from './Error.module.scss'

const Error = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.error} ${styles[theme]}`}>
      <h1>Page not found</h1>
      <img width='700' height='400' className={styles.imgLightMode} src={ErrorImg} alt="Page not found" />
      <img width='700' height='400' className={styles.imgDarkMode} src={ErrorImgDark} alt="Page not found" />
    </div>
  )
}

export default Error
