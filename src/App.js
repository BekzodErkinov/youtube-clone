import { lazy, Suspense, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Contexts
import { ThemeContext } from './helper/Contexts'

// Components
import MainSkeleton from './containers/Skeleton/MainSkeleton/MainSkeleton'

// Containers
import Navbar from './containers/Navbar/Navbar'
import Sidebar from './containers/Sidebar'

// SCSS
import styles from './assets/styles/App.module.scss'

// Pages
const Help          = lazy(() => import('./pages/Help/Help'))
const Home          = lazy(() => import('./pages/Home/Home'))
const Live          = lazy(() => import('./pages/Live/Live'))
const Error         = lazy(() => import('./pages/Error/Error'))
const Games         = lazy(() => import('./pages/Games/Games'))
const Music         = lazy(() => import('./pages/Music/Music'))
const Movies        = lazy(() => import('./pages/Movies/Movies'))
const Channel       = lazy(() => import('./pages/Channel/Channel'))
const History       = lazy(() => import('./pages/History/History'))
const Library       = lazy(() => import('./pages/Library/Library'))
const Settings      = lazy(() => import('./pages/Settings/Settings'))
const Speeches      = lazy(() => import('./pages/Speeches/Speeches'))
const Trending      = lazy(() => import('./pages/Trending/Trending'))
const Feedback      = lazy(() => import('./pages/Feedback/Feedback'))
const Favorites     = lazy(() => import('./pages/Favorites/Favorites'))
const WatchLater    = lazy(() => import('./pages/WatchLater/WatchLater'))
const LikedVideos   = lazy(() => import('./pages/LikedVideos/LikedVideos'))
const SingleVideo   = lazy(() => import('./pages/SingleVideo/SingleVideo'))
const Subscriptions = lazy(() => import('./pages/Subscriptions/Subscriptions'))
const ReportHistory = lazy(() => import('./pages/ReportHistory/ReportHistory'))

function App() {
  const [theme, setTheme] = useState('dark')
  const [sidebar, setSidebar] = useState(false)

  // Body style
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${styles.App} ${styles[theme]} ${sidebar && styles.sidebar_close}`}>
        <Router>
          <Suspense fallback={<MainSkeleton />}>
            {/* Navbar */}
            <Navbar sidebar={{ sidebar, setSidebar }} />
            {/* Main content */}
            <main className={styles.mainContent}>
              {/* Sidebar */}
              <Sidebar togglerSidebar={sidebar} />
              {/* Pages */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/v/:video_id" component={SingleVideo} />
                <Route path="/c/:channel_id" component={Channel} />
                <Route path="/help" component={Help} />
                <Route path="/live" component={Live} />
                <Route path="/games" component={Games} />
                <Route path="/music" component={Music} />
                <Route path="/movies" component={Movies} />
                <Route path="/history" component={History} />
                <Route path="/library" component={Library} />
                <Route path="/settings" component={Settings} />
                <Route path="/speeches" component={Speeches} />
                <Route path="/trending" component={Trending} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/watch later" component={WatchLater} />
                <Route path="/liked videos" component={LikedVideos} />
                <Route path="/subscriptions" component={Subscriptions} />
                <Route path="/send feedback" component={Feedback} />
                <Route path="/report history" component={ReportHistory} />
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
