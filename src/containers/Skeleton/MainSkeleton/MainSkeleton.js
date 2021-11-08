// Containers
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MainContent from '../MainContent/MainContent'

// SCSS
import styles from './MainSkeleton.module.scss'

const MainSkeleton = () => {
  return (
    <div className={styles.mainSkeleton}>
      <Navbar />
      <main>
        <Sidebar />
        <MainContent />
      </main>
    </div>
  )
}

export default MainSkeleton
