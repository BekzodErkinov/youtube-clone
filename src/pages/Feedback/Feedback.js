import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Videos
import ComingSoonVideoDark from '../../assets/videos/coming-soon-dark.mp4'
import ComingSoonVideoLight from '../../assets/videos/coming-soon-light.mp4'

// SCSS
import styles from './Feedback.module.scss'

const Feedback = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.feedback} ${styles[theme]}`}>
      <h1>Send Feedback</h1>
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

export default Feedback
