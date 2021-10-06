import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Components
import {
  SearchForm, ControlButtons
} from '../../components/Navbar'

// Icons
import {
  HamburgerMenuIcon,
  YouTubeLogo,
  YouTubeLogoTxtDarkMode,
  YouTubeLogoTxtLightMode
} from '../../assets/icons/icons'
// SCSS
import styles from './Navbar.module.scss'

const Navbar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.navList}>
        <div className={styles.menu}>
          <button className={styles.hamburgerMenuBtn}>
            {<HamburgerMenuIcon />}
          </button>
          <a className={styles.logo} href="/" width="116" height="25">
            <span className={styles.logoIcon}>{<YouTubeLogo />}</span>
            <span className={styles.logoTxt}>
              {theme === 'dark' ? <YouTubeLogoTxtDarkMode /> : <YouTubeLogoTxtLightMode />}
              {/* Ko'p mavzuli dasturda bu usul ishlamidi. Fnc, switch-case bn qilish kk */}
            </span>
          </a>
        </div>
        <div className={styles.lead}>
          <SearchForm />
          <ControlButtons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
