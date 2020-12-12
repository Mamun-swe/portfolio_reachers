import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop/Index'

import ClientIndex from './pages/client/Home/Index'
import AboutIndex from './pages/client/About/Index'
import PublicationIndex from './pages/client/Publication/Index'

// import LoginIndex from './Pages/Auth/Login'
// import RegisterIndex from './Pages/Auth/Register'
// import ResetIndex from './Pages/Auth/Reset'

// import DoctorAccountMaster from './Pages/Account/Doctor/Master'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={ClientIndex} />
            <Route exact path="/about" component={AboutIndex} />
            <Route exact path="/publication/:year" component={PublicationIndex} />


            {/* <Route exact path="/contact-us" component={ContactIndex} />

            <Route exact path="/login" component={LoginIndex} />
            <Route exact path="/register" component={RegisterIndex} />
            <Route exact path="/reset" component={ResetIndex} />

            <Route path="/doctor" component={DoctorAccountMaster} />

            <Route path="*" component={FourOFour} /> */}

          </Switch>
        </ ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
