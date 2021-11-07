// Comments
// VideoContainer'ga biror props kelmay qolish holati inobatga olinmagan!


import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Components
import VideoContainerSkeleton from '../../components/Skeleton/YouTubeSkeleton/VideoContainerSkeleton'

// SCSS
import styles from './VideoContainer.module.scss'

const VideoContainer = ({
  pathToChannel = false,
  title,
  leadImg = false,
  subtitle = false,
  videoList,
  children
}) => {
  // Contexts
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.videoContainer} ${styles[theme]}`}>
      {!videoList.isFetched ?
        <VideoContainerSkeleton /> :
        videoList.error ?
          <div>
            <h2>There was an error downloading, check your internet and try again.</h2>
            <h2>If you are not connected to the internet, some icons will not appear, which will affect the appearance of the application.</h2>
            <h1>Error message: <span>{videoList.error}</span></h1>
          </div> :
          <>
            {/* Lead */}
            <div className={styles.lead}>
              {leadImg &&
                <Link to={pathToChannel} className={styles.linkToChannel}>
                  <img className={styles.leadImg} width='50' height='50' src={leadImg} alt={title} />
                  <h1 className={styles.title}>{title}</h1>
                </Link>
              }
              {!leadImg && <h1 className={styles.title}>{title}</h1>}
              {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            </div>
            {/* Slider */}
            {children}
          </>
      }
    </div>
  )
}

export default VideoContainer
