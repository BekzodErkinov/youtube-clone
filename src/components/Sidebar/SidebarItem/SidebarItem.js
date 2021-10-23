import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Contexts
import { ThemeContext } from '../../../helper/Contexts'

// SCSS
import styles from './SidebarItem.module.scss'


const SidebarItem = ({ icon, img, path, title }) => {
  // Context
  const { theme } = useContext(ThemeContext)

  // Location
  const location = useLocation()

  // Giving active style to Link when the clicked Link title is equal to url
  const setActive = title => {
    const path = location.pathname
    const caption = '/'+title.toLowerCase()

    return path === caption ? true : path === '/' && caption === '/home'
  }

  return (
    <Link
      to={path}
      title={title}
      className={`${styles.sidebarItem} ${styles[theme]} ${setActive(title) && styles.active}`}
    >
      {icon ?
        <span className={styles.icon}>{icon}</span> :
        <img width="30" height="30" className={styles.img} src={img} alt={title} />
      }
      <span className={styles.txt}>{title}</span>
    </Link>
  )
}

export default SidebarItem
