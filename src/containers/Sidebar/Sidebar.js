import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Menu Items
import { menuItems, menuItemsCategory } from './MenuItemsData'

// Components
import MenuItem from '../../components/Sidebar/SidebarItem/SidebarItem'

// Icons
import { SettingsIcon, ShowMoreOrLessIcon } from '../../assets/icons/icons'

// SCSS
import styles from "./Sidebar.module.scss"
import './custom.scss'


const Sidebar = ({ togglerSidebar }) => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.sidebar} ${togglerSidebar ? styles.sidebar_open : styles.sidebar_close} ${styles[theme]}`}>
      <header className={styles.header}>
        {menuItems.map(val =>
          <MenuItem
            icon={val.icon}
            path={val.path}
            title={val.title}
          />
        )}
      </header>
      <main className={styles.content}>
        {menuItemsCategory.map(val =>
          <MenuItem
            icon={val.icon}
            path={val.path}
            title={val.title}
          />
        )}
      </main>
      <footer className={styles.footer}>
        <MenuItem
          icon={<SettingsIcon/>}
          path='/settings'
          title='Settings'
        />
      </footer>
    </div>
  )
}

export default Sidebar
