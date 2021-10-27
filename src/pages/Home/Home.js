// Components
// VideoContainer'ga biror props kelmay qolish holati inobatga olinmagan!


// Containers
import Popular from '../../containers/Popular'
// import Recommended from '../../containers/Recommended'

// Images
import Netflix from '../../assets/images/netflix.jpg'
// SCSS
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.videoTypes}>
        <Popular
          path='/c/netflix'
          title='Popular'
          leadImg={Netflix}
          subtitle={false}
        />
      </div>
    </div>
  )
}

export default Home
