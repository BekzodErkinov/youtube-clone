import { useContext } from 'react'
import { Link } from 'react-router-dom'

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

const Navbar = ({ sidebar }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.navList}>
        <div className={styles.menu}>
          <button
            className={styles.hamburgerMenuBtn}
            onClick={() => sidebar.setSidebar(!sidebar.sidebar)}
          >
            {<HamburgerMenuIcon />}
          </button>
          <Link className={styles.logo} to="/" width="116" height="25">
            <span className={styles.logoIcon}>{<YouTubeLogo />}</span>
            <span className={styles.logoTxt}>
              {theme === 'dark' ? <YouTubeLogoTxtDarkMode /> : <YouTubeLogoTxtLightMode />}
              {/* Ko'p mavzuli dasturda bu usul ishlamaydi. Fnc, switch-case bilan qilinishi kerak */}
            </span>
          </Link>
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
