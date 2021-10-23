import { useState, useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Menu Items
import {
  menuItems, menuItemsCategory, menuMoreItems, subscriptions, moreSubscriptions
} from './MenuItemsData'

// Components
import SidebarItem from '../../components/Sidebar/SidebarItem/SidebarItem'

// Icons
import { SettingsIcon, ShowMoreOrLessIcon } from '../../assets/icons/icons'

// SCSS
import styles from "./Sidebar.module.scss"

const Sidebar = ({ togglerSidebar }) => {
  // Context
  const { theme } = useContext(ThemeContext)

  // Items Toggler
  const [toggleItem, setToggleItem] = useState(false)
  // Subscriptions Toggler
  const [toggleSubs, setToggleSubs] = useState(false)

  return (
    <div className={`
        ${styles[theme]}
        ${styles.sidebar}
        ${togglerSidebar && styles.sidebar_close}
      `}>
      <header className={styles.header}>
        {menuItems.map(val =>
          <SidebarItem
            icon={val.icon}
            path={val.path}
            title={val.title}
            key={val.title}
          />
        )}
      </header>
      <main className={styles.content}>
        {menuItemsCategory.map(val =>
          <SidebarItem
            icon={val.icon}
            path={val.path}
            title={val.title}
            key={val.title}
          />
        )}

        {/* More Items */}
        <div className={styles.moreItems}>
          {toggleItem && menuMoreItems.map(val =>
            <SidebarItem
              icon={val.icon}
              path={val.path}
              title={val.title}
              key={val.title}
            />
          )}

          {/* More Items Toggler Button */}
          <button
            onClick={() => setToggleItem(!toggleItem)}
            className={`${styles.showMoreBtn} ${toggleItem && styles.less}`}
          >
            <span className={styles.icon}>{<ShowMoreOrLessIcon/>}</span>
            <span className={styles.txt}>Show {toggleItem || menuMoreItems.length} {toggleItem ? 'Less' : 'More'}</span>
          </button>
        </div>

        {/* Subscriptions */}
        <div className={styles.subscriptions}>
          {subscriptions.map(val =>
            <SidebarItem
              img={val.img}
              path={val.path}
              title={val.title}
              key={val.title}
            />
          )}

          {toggleSubs && moreSubscriptions.map(val =>
            <SidebarItem
              img={val.img}
              path={val.path}
              title={val.title}
              key={val.title}
            />
          )}

          {/* Subscriptions Toggler Button */}
          <button
            onClick={() => setToggleSubs(!toggleSubs)}
            className={`${styles.showMoreBtn} ${toggleSubs && styles.less}`}
          >
            <span className={styles.icon}>{<ShowMoreOrLessIcon/>}</span>
            <span className={styles.txt}>Show {toggleSubs || moreSubscriptions.length} {toggleSubs ? 'Less' : 'More'}</span>
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <SidebarItem
          icon={<SettingsIcon/>}
          path='/settings'
          title='Settings'
        />
        <div className={styles.links}>
          <div className={styles.primary}>
            <button>About</button>
            <button>Press</button>
            <button>Copyright</button>
            <button>Contact us</button>
            <button>Creators</button>
            <button>Advertise</button>
            <button>Developers</button>
          </div>
          <div className={styles.secondary}>
            <button>Terms</button>
            <button>Privacy</button>
            <button>Policy & Safety</button>
            <button>How YouTube works</button>
            <button>Test new features</button>
          </div>
        </div>
        <span className={styles.copyright}>&copy; 2021 Bekzod Erkinov</span>
      </footer>
    </div>
  )
}

export default Sidebar
