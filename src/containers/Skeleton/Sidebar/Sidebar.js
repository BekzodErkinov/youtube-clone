// Components
import { BulletItem } from '../../../components/Skeleton/index'

// SCSS
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  let bulletCount = 15
  const bulletList = []

  for (let i = 0; i < bulletCount; i++)
    bulletList.push(<BulletItem />)

  return (
    <div className={styles.sidebar}>
      {bulletList}
    </div>
  )
}

export default Sidebar
