import { useContext, useState } from 'react'

// Contexts
import { ThemeContext } from '../../../helper/Contexts'

// Components
import { Profile } from '../'

// Icons
import {
  CreateVideoIcon,
  CircledMenuIcon,
  NotificationIcon,
  VideoIcon,
  LiveIcon,
} from '../../../assets/icons/icons'
// Images
import YouTube from '../../../assets/images/youtube.png'
import YouTubeTV from '../../../assets/images/youtube-tv.png'
import YouTubeKids from '../../../assets/images/kids-pool.png'
import YouTubeMusic from '../../../assets/images/youtube-music.png'
import YouTubeTutorials from '../../../assets/images/youtube-tutorials.png'
// SCSS
import styles from './ControlButtons.module.scss'

const ControlButtons = () => {
  // Contexts
  const { theme } = useContext(ThemeContext)

  // Toggle Buttons
  const [addVideoDisplay, setAddVideoDisplay] = useState(false)
  const [YTAppsDisplay, setYTAppsDisplay] = useState(false)
  const [notificationsDisplay, setNotificationsDisplay] = useState(false)

  // Toggle "Add Video Menu" and hide other windows
  function toggleAddVideoMenu() {
    setYTAppsDisplay(false)
    setAddVideoDisplay(!addVideoDisplay)
    setNotificationsDisplay(false)
  }

  // Toggle "YouTube Apps Menu" and hide other windows
  function toggleYouTubeApps() {
    setYTAppsDisplay(!YTAppsDisplay)
    setAddVideoDisplay(false)
    setNotificationsDisplay(false)
  }

  // Toggle "Notification Menu" and hide other windows
  function toggleNotificationMenu() {
    setYTAppsDisplay(false)
    setAddVideoDisplay(false)
    setNotificationsDisplay(!notificationsDisplay)
  }

  return (
    <div className={`${styles.controlButtons} ${styles[theme]}`}>
      {/* ADD VIDEO */}
      <button
        className={styles.addVideoBtn}
        onClick={() => toggleAddVideoMenu()}
      >
        {<CreateVideoIcon/>}
      </button>
      {/* Menu */}
      {addVideoDisplay &&
        <div className={`${styles.menu} ${styles.addVideoMenu}`} tabIndex="-1">
          <button className={styles.uploadVideoBtn}>
            {<VideoIcon />}
            <span>Upload Video</span>
          </button>
          <button className={styles.goLiveBtn}>
            {<LiveIcon />}
            <span>Go live</span>
          </button>
        </div>
      }


      {/* YOUTUBE APPS */}
      <button
        className={styles.youtubeAppsBtn}
        onClick={() => toggleYouTubeApps()}
      >
        {<CircledMenuIcon/>}
      </button>
      {/* Menu */}
      {YTAppsDisplay &&
        <div className={`${styles.menu} ${styles.youtubeAppsMenu}`} tabIndex="-1">
          <button className={styles.ytTVBtn}>
            <img width="26" src={YouTubeTV} alt="YouTube TV" />
            <span>YouTube TV</span>
          </button>
          <button className={styles.ytMusicBtn}>
            <img width="26" src={YouTubeMusic} alt="YouTube Music" />
            <span>YouTube Music</span>
          </button>
          <button className={styles.ytKidsBtn}>
            <img width="26" src={YouTubeKids} alt="YouTube Kids" />
            <span>YouTube Kids</span>
          </button>
          <button className={styles.ytAcademyBtn}>
            <img width="26" src={YouTubeTutorials} alt="YouTube Academy" />
            <span>YouTube Academy</span>
          </button>
          <button className={styles.ytArtistBtn}>
            <img width="26" src={YouTube} alt="YouTube for Artists" />
            <span>YouTube for Artists</span>
          </button>
        </div>
      }


      {/* NOTIFICATION */}
      <button
        className={styles.notificationBtn}
        onClick={() => toggleNotificationMenu()}
      >
        {<NotificationIcon/>}
      </button>
      {/* Menu */}
      {notificationsDisplay &&
        <div className={`${styles.menu} ${styles.notificationsMenu}`} tabIndex="-1">
          <div className={styles.lead}>
            <h2>Notifications</h2>
            <button>
              {/*  */}
              <img
                src={`https://img.icons8.com/windows/24/${theme === 'dark' ? 'ffffff' : '000000'}/settings--v1.png`}
                alt="Settings"
              />
            </button>
          </div>
          <div className={styles.info}>
            {<NotificationIcon/>}
            <h3>Notifications will be here</h3>
            <h4>Here you will be notified of new videos uploaded to the channels in your subscriptions.</h4>
          </div>
        </div>
      }


      {/* PROFILE */}
      <Profile
        generalMenuStyle={styles.menu}
        displays={{setAddVideoDisplay, setYTAppsDisplay, setNotificationsDisplay}}
      />
    </div>
  )
}

export default ControlButtons
