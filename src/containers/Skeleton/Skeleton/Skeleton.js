// Containers
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MainContent from '../MainContent/MainContent'

// SCSS
import styles from './Skeleton.module.scss'

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Navbar />
      <main>
        <Sidebar />
        <MainContent />
      </main>
    </div>
  )
}

export default Skeleton
