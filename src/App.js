import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.scss'

// components //
import Header from './components/Header/Header'

// pages //
import PasswordManager from './Pages/PasswordManager/PasswordManager'
import ImagesManager from './Pages/ImagesManager/ImagesManager'
import VideosManager from './Pages/VideosManager/VideosManager'
import ClickOutside from './Pages/Hooks/ClickOutside/ClickOutside'
import DarkMode from './Pages/Hooks/DarkMode/DarkMode'
import Toggle from './Pages/Hooks/Toggle/Toggle'
import Timeout from './Pages/Hooks/Timeout/Timeout'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={PasswordManager} />
          <Route exact path='/img-manager' component={ImagesManager} />
          <Route exact path='/vdo-manager' component={VideosManager} />
          <Route exact path='/hook' component={Timeout} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
