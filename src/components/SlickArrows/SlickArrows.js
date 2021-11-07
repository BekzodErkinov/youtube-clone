import { useContext } from 'react'

// Context
import { ThemeContext } from '../../helper/Contexts'

// SCSS
import styles from './SlickArrows.module.scss'

export function PrevArrow({ style, onClick }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.prevArrow} ${styles[theme]}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="14" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M0.998319 0.666119L0.463653 1.20514C0.287881 1.39201 0.199951 1.61013 0.199951 1.85921C0.199951 2.11332 0.287881 2.32897 0.463653 2.50632L3.92809 6.00001L0.463741 9.4937C0.287968 9.67105 0.200039 9.88669 0.200039 10.1407C0.200039 10.3899 0.287968 10.608 0.463741 10.7949L0.998406 11.3268C1.1789 11.5089 1.39518 11.6 1.64707 11.6C1.90369 11.6 2.11752 11.5089 2.28857 11.3268L6.92907 6.64702C7.10966 6.47444 7.19995 6.25888 7.19995 6.00001C7.19995 5.74598 7.10966 5.52796 6.92907 5.34593L2.28857 0.666119C2.11271 0.488769 1.89888 0.400006 1.64707 0.400006C1.39991 0.400006 1.18372 0.488769 0.998319 0.666119Z" fill="white"/>
      </svg>
    </div>
  )
}

export function NextArrow({ style, onClick }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.nextArrow} ${styles[theme]}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="14" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M0.998319 0.666119L0.463653 1.20514C0.287881 1.39201 0.199951 1.61013 0.199951 1.85921C0.199951 2.11332 0.287881 2.32897 0.463653 2.50632L3.92809 6.00001L0.463741 9.4937C0.287968 9.67105 0.200039 9.88669 0.200039 10.1407C0.200039 10.3899 0.287968 10.608 0.463741 10.7949L0.998406 11.3268C1.1789 11.5089 1.39518 11.6 1.64707 11.6C1.90369 11.6 2.11752 11.5089 2.28857 11.3268L6.92907 6.64702C7.10966 6.47444 7.19995 6.25888 7.19995 6.00001C7.19995 5.74598 7.10966 5.52796 6.92907 5.34593L2.28857 0.666119C2.11271 0.488769 1.89888 0.400006 1.64707 0.400006C1.39991 0.400006 1.18372 0.488769 0.998319 0.666119Z" fill="white"/>
      </svg>
    </div>
  )
}