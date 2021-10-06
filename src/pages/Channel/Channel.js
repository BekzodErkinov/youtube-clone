import { useContext } from 'react'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// SCSS
import styles from './Channel.module.scss'

const Channel = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.channel} ${theme}`}>
      <h1>Channel</h1>
    </div>
  )
}

export default Channel
