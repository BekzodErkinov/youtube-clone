import { useContext, useState } from 'react'

// Contexts
import { ThemeContext } from '../../../helper/Contexts'

// Icons
import {
  CreateVideoIcon,
  CircledMenuIcon,
  NotificationIcon,
  VideoIcon,
  LiveIcon,
} from '../../../assets/icons/icons'
// Images
import UserImg from '../../../assets/images/Avatar.png'
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

  return (
    <div className={`${styles.controlButtons} ${styles[theme]}`}>
      {/* ADD VIDEO */}
      <button
        className={styles.addVideoBtn}
        onClick={() => setAddVideoDisplay(!addVideoDisplay)}
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
        onClick={() => setYTAppsDisplay(!YTAppsDisplay)}
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
        onClick={() => setNotificationsDisplay(!notificationsDisplay)}
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
      <button
        className={styles.profileBtn}
      >
        <img width="40" height="40" src={UserImg} alt="User avatar" />
      </button>
    </div>
  )
}

export default ControlButtons


/*
YT Studio
<img src="https://img.icons8.com/carbon-copy/100/000000/youtube-studio.png"/>

You Channel
<img src="https://img.icons8.com/ios/48/000000/name--v2.png"/>

DOllar light
<img src="https://img.icons8.com/ios/50/000000/us-dollar--v1.png"/>
BOld
<img src="https://img.icons8.com/ios/50/000000/us-dollar--v2.png"/>

shield
<img src="https://img.icons8.com/material-outlined/80/000000/user-shield.png"/>

s acc
<img src="https://img.icons8.com/ios/30/000000/user-group-man-man.png"/>

out
<img src="https://img.icons8.com/fluency-systems-regular/48/000000/exit.png"/>

theme
<img src="https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"/>
light
<img src="https://img.icons8.com/ios/50/000000/moon-symbol.png"/>

lang
<img src="https://img.icons8.com/ios/48/000000/language.png"/>

earth
<img src="https://img.icons8.com/ios/48/000000/globe.png"/>

setting
<img src="https://img.icons8.com/windows/24/000000/settings--v1.png"/>


help
<img src="https://img.icons8.com/material-outlined/24/000000/help.png"/>

feed
<img src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png"/>

key
<img src="https://img.icons8.com/windows/30/000000/keyboard.png"/>
*/