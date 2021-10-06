import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../../helper/Contexts'
// Icons
import { SearchIcon } from '../../../assets/icons/icons'
// SCSS
import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <form
      className={`${styles.searchForm} ${styles[theme]}`}
      onSubmit={e => e.preventDefault()}
    >
      <input className={styles.searchInput} type="search" name="search" placeholder="Search" required />
      <button className={styles.submitBtn} type="submit">
        <span className={styles.searchIcon}>
          {<SearchIcon />}
        </span>
      </button>
    </form>
  )
}

export default SearchForm
