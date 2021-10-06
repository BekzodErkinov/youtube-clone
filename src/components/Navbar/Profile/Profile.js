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

  return (
    <div className={styles.profile}>
      <button
        className={styles.profileBtn}
        onClick={() => setProfileDisplay(!profileDisplay)}
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
              <img src="https://img.icons8.com/ios/30/000000/name--v2.png" alt="Your channel" />
              <h4>Your channel</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/ios/30/000000/us-dollar--v1.png" alt="Purchases and memberships" />
              <h4>Purchases and memberships</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/carbon-copy/35/000000/youtube-studio.png" alt="YouTube Studio" />
              <h4>YouTube Studio</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/ios/30/000000/user-group-man-man.png" alt="Switch account" />
              <h4>Switch account</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/fluency-systems-regular/30/000000/exit.png" alt="Sign out" />
              <h4>Sign out</h4>
            </button>

            <button>
              <img src="https://img.icons8.com/ios/30/000000/moon-symbol.png" alt="Appearance" />
              <h4>Appearance: {theme}</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/ios/30/000000/language.png" alt="Language" />
              <h4>Language: English</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/ios/30/000000/globe.png" alt="Location: United Sates" />
              <h4>Location: United Sates</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/windows/30/000000/settings--v1.png" alt="Settings" />
              <h4>Settings</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/material-outlined/30/000000/user-shield.png" alt="Your data in YouTube" />
              <h4>Your data in YouTube</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/material-outlined/30/000000/help.png" alt="Help" />
              <h4>Help</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/material-outlined/30/000000/comments--v1.png" alt="Send Feedback" />
              <h4>Send Feedback</h4>
            </button>
            <button>
              <img src="https://img.icons8.com/windows/30/000000/keyboard.png" alt="Keyboard shortcuts" />
              <h4>Keyboard shortcuts</h4>
            </button>

            <button>
              <h4>Restricted Mode: Off</h4>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
