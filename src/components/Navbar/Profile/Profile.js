import { useContext, useState } from 'react'

// Contexts
import { ThemeContext } from '../../../helper/Contexts'

// Images
import UserImg from '../../../assets/images/Avatar.png'
// SCSS
import styles from './Profile.module.scss'


const Profile = ({ generalMenuStyle }) => {
  // Contexts
  const { theme, setTheme } = useContext(ThemeContext)

  // Toggle Button
  const [profileDisplay, setProfileDisplay] = useState(false)

  // Icons Theme
  const imgColor = theme === 'dark' ? 'ffffff' : '000000'

  // Appearance
  const [appearanceDisplay, setAppearanceDisplay] = useState(false)

  // Toggle "Profile" menu
  function toggleProfileMenu() {
    setProfileDisplay(!profileDisplay)
    if (appearanceDisplay) {
      setAppearanceDisplay(!appearanceDisplay)
      setProfileDisplay(profileDisplay)
    }
  }

  // Toggle "Profile" and "Appearance" display. In Profile menu
  function holderThemeChanger() {
    setAppearanceDisplay(!appearanceDisplay)
    setProfileDisplay(!profileDisplay)
  }

  // Change Theme and Toggle "Appearance" display. In Theme holder
  function themeChanger(theme) {
    setTheme(theme)
    setAppearanceDisplay(!appearanceDisplay)
  }

  return (
    <div className={`${styles.profile} ${styles[theme]}`}>
      {/* Button */}
      <button
        className={styles.profileBtn}
        onClick={() => toggleProfileMenu()}
      >
        <img width="40" height="40" src={UserImg} alt="User avatar" />
      </button>

      {/* Menu */}
      {profileDisplay && (
        <div className={`${generalMenuStyle} ${styles.profileMenu}`} tabIndex="-1">
          <div className={styles.lead}>
            <img width="80" src={UserImg} alt="User" />
            <div className={styles.txt}>
              <h3>John Doe</h3>
              <button>Manage your Google Account</button>
            </div>
          </div>

          <div className={styles.settings}>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/name--v2.png`} alt="Your channel" />
                <h4>Your channel</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/us-dollar--v1.png`} alt="Purchases and memberships" />
                <h4>Purchases and memberships</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/carbon-copy/35/${imgColor}/youtube-studio.png`} alt="YouTube Studio" />
                <h4>YouTube Studio</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/user-group-man-man.png`} alt="Switch account" />
                <h4>Switch account</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/fluency-systems-regular/30/${imgColor}/exit.png`} alt="Sign out" />
                <h4>Sign out</h4>
              </div>
            </button>

            {/* Appearance button */}
            <button onClick={holderThemeChanger}>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/moon-symbol.png`} alt="Appearance" />
                <h4>Appearance:<span>{theme}</span></h4>
              </div>
              <img className={styles.arrow} src={`https://img.icons8.com/material/24/${imgColor}/more-than--v1.png`} alt="More than" />
            </button>

            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/language.png`} alt="Language" />
                <h4>Language: English</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/ios/30/${imgColor}/globe.png`} alt="Location" />
                <h4>Location: United Sates</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/windows/30/${imgColor}/settings--v1.png`} alt="Settings" />
                <h4>Settings</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/material-outlined/30/${imgColor}/user-shield.png`} alt="Your data in YouTube" />
                <h4>Your data in YouTube</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/material-outlined/30/${imgColor}/help.png`} alt="Help" />
                <h4>Help</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/material-outlined/30/${imgColor}/comments--v1.png`} alt="Send Feedback" />
                <h4>Send Feedback</h4>
              </div>
            </button>
            <button>
              <div className={styles.lead}>
                <img src={`https://img.icons8.com/windows/30/${imgColor}/keyboard.png`} alt="Keyboard shortcuts" />
                <h4>Keyboard shortcuts</h4>
              </div>
            </button>

            <button>
              <h4>Restricted Mode: Off</h4>
              <img className={styles.arrow} src={`https://img.icons8.com/material/24/${imgColor}/more-than--v1.png`} alt="More than" />
            </button>
          </div>
        </div>
      )}

      {/* Appearance Menu */}
      {appearanceDisplay &&
        <div className={`${generalMenuStyle} ${styles.themeMenu}`} tabIndex="-1">
          {/* Back to Profile menu button */}
          <button
            className={styles.back}
            onClick={() => holderThemeChanger()}
          >
            <img className={styles.backArrow} src={`https://img.icons8.com/material/24/${imgColor}/more-than--v1.png`} alt="More than" />
            <span>Appearance</span>
          </button>
          {/* Info */}
          <h5>Setting applies to this browser only</h5>

          {/*   THEME CHANGER BUTTONS   */}
          {/* Use device theme button */}
          <button
            className={styles.themeBtn}
            disabled
          >
            <span className={styles.checkIcon}>
              {false &&
                <img src={`https://img.icons8.com/external-becris-lineal-becris/24/${imgColor}/external-check-mintab-for-ios-becris-lineal-becris-1.png`} alt="Check" />
              }
            </span>
            <span className={styles.txt}>Use device theme</span>
          </button>

          {/* Dark mode button */}
          <button
            className={`${styles.themeBtn} ${styles.darkModeBtn}`}
            onClick={() => themeChanger('dark')}
          >
            <span className={styles.checkIcon}>
              {theme === 'dark' &&
                <img src={`https://img.icons8.com/external-becris-lineal-becris/24/${imgColor}/external-check-mintab-for-ios-becris-lineal-becris-1.png`} alt="Check" />
              }
            </span>
            <span className={styles.txt}>Dark theme</span>
          </button>

          {/* Light mode button */}
          <button
            className={`${styles.themeBtn} ${styles.lightModeBtn}`}
            onClick={() => themeChanger('light')}
          >
            <span className={styles.checkIcon}>
              {theme === 'light' &&
                <img src={`https://img.icons8.com/external-becris-lineal-becris/24/${imgColor}/external-check-mintab-for-ios-becris-lineal-becris-1.png`} alt="Check" />
              }
            </span>
            <span className={styles.txt}>Light theme</span>
          </button>
        </div>
      }
    </div>
  )
}

export default Profile
