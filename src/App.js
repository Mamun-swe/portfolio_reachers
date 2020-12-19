import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop/Index'
import PrivateRoute from './components/PrivateRoute/Index'

import ClientIndex from './pages/client/Home/Index'
import AboutIndex from './pages/client/About/Index'
import PublicationIndex from './pages/client/Publication/Index'
import ContactIndex from './pages/client/Contact/Index'

import LoginIndex from './pages/auth/Login'
import ResetIndex from './pages/auth/Reset'

import AdminMaster from './pages/admin/Master'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={ClientIndex} />
            <Route exact path="/about" component={AboutIndex} />
            <Route exact path="/publication/:year" component={PublicationIndex} />
            <Route exact path="/contact" component={ContactIndex} />

            <Route exact path="/login" component={LoginIndex} />
            <Route exact path="/reset" component={ResetIndex} />

            <PrivateRoute path="/admin">
              <AdminMaster />
            </PrivateRoute>

          </Switch>
        </ ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
