import { lazy, Suspense, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Contexts
import { ThemeContext } from './helper/Contexts'

// Containers
import Navbar from './containers/Navbar/Navbar'
import Sidebar from './containers/Sidebar'

// SCSS
import styles from './assets/styles/App.module.scss'

// Pages
const Home         = lazy(() => import('./pages/Home/Home'))
const Error        = lazy(() => import('./pages/Error/Error'))
const Channel      = lazy(() => import('./pages/Channel/Channel'))
const SingleVideo  = lazy(() => import('./pages/SingleVideo/SingleVideo'))

function App() {
  const [theme, setTheme] = useState('dark')
  const [sidebar, setSidebar] = useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${styles.App} ${styles[theme]} ${sidebar && styles.sidebar_close}`}>
        <Router>
          <Suspense fallback={<div className={styles.loaderAnimation}>Loading...</div>}>
            {/* Navbar */}
            <Navbar sidebar={{ sidebar, setSidebar }} />
            <main className={styles.mainContent}>
              {/* Sidebar */}
              <Sidebar togglerSidebar={sidebar} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/v/:video_id" component={SingleVideo} />
                <Route path="/c/:channel_id" component={Channel} />
                <Route path="*" component={Error} />
              </Switch>
            </main>
          </Suspense>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
