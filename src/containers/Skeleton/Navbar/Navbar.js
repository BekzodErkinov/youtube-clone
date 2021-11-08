// Components
import {
  Circle,
  LongRect,
  BorderedSquare,
} from '../../../components/Skeleton'

// SCSS
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <BorderedSquare className={styles.square} />
        <LongRect className={styles.input} />
      </div>
      <div className={styles.right}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  )
}

export default Navbar
