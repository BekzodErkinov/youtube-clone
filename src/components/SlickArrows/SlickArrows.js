// SCSS
import styles from './SlickArrows.module.scss'

export function PrevArrow({ style, onClick }) {
  return (
    <div
      className={styles.prevArrow}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  )
}

export function NextArrow({ style, onClick }) {
  return (
    <div
      className={styles.nextArrow}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  )
}