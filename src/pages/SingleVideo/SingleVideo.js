import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Videos
import ComingSoonVideoDark from '../../assets/videos/coming-soon-dark.mp4'
import ComingSoonVideoLight from '../../assets/videos/coming-soon-light.mp4'

// SCSS
import styles from './SingleVideo.module.scss'

const SingleVideo = () => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.singleVideo}>
      <h1>Video Page</h1>

      <div className={styles.wrapper}>
        <video
          loop
          autoPlay
          type="video/mp4"
          src={theme === 'dark' ? ComingSoonVideoDark : ComingSoonVideoLight}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default SingleVideo
