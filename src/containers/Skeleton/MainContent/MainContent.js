// Components
import { VideoContainerSkeleton } from '../../../components/Skeleton'

// SCSS
import styles from './MainContent.module.scss'

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <VideoContainerSkeleton className={styles.videoContainer} />
      <VideoContainerSkeleton className={styles.videoContainer} />
      <VideoContainerSkeleton className={styles.videoContainer} />
      <VideoContainerSkeleton className={styles.videoContainer} />
    </div>
  )
}

export default MainContent
