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

// Pages
const Home         = lazy(() => import('./pages/Home/Home'))
const Error        = lazy(() => import('./pages/Error/Error'))
const Channel      = lazy(() => import('./pages/Channel/Channel'))
const SingleVideo  = lazy(() => import('./pages/SingleVideo/SingleVideo'))

function App() {
  // const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <Router>
          <Suspense fallback={<div className="loader-animation">Loading...</div>}>
            <Navbar />
            <Sidebar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/v/:video_id" component={SingleVideo} />
              <Route path="/c/:channel_id" component={Channel} />
              <Route path="*" component={Error} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
