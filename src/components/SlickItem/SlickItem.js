import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// SCSS
import styles from './SlickItem.module.scss'

const SlickItem = ({ id, img, date, name, time, views, title }) => {
  const { theme } = useContext(ThemeContext)

  function makeDate(date) {
    const d = +date
    if (d === 1)
      return '1 day ago'
    else if (d >= 2 && d <= 6)
      return `${d} days ago`
    else if (d === 7)
      return '1 week ago'
    else if (d >= 8 && d <= 14)
      return '2 weeks ago'
    else if (d >= 15 && d <= 21)
      return '3 weeks ago'
    else if (d >= 22 && d <= 28)
      return '4 weeks ago'
    else if (d >= 29 && d <= 59)
      return '1 month'
    else if (d >= 60 && d <= 89)
      return '2 months ago'
    else if (d >= 90 && d <= 120)
      return '3 months ago'
    else if (d >= 121)
      return '1 year ago'
    else
      return 'Now'
  }

  return (
    <Link className={`${styles.link} ${styles[theme]}`} to={`/v/${id}`}>
      <header>
        <img src={img} alt={title} />
        <span className={styles.time}>{time[0] ?? time[2] ?? 1}:{time[2] ?? 0}0</span>
      </header>
      <main>
        <img className={styles.img} width="250" height="150" src={img} alt={title} />
        <h3 className={styles.title}>{title}</h3>
      </main>
      <footer>
        <span className={styles.views}>{views === '' ? 1 : views}k</span>
        <span className={styles.date}>{makeDate(date)}</span>
        <span className={styles.name}>{name}</span>
      </footer>
    </Link>
  )
}

export default SlickItem
