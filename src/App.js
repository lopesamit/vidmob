import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from './constants/routes'
import SignUp from './components/SignUp'
import CompanySignUp from './components/CompanySignUp'
import SignIn from './components/SignIn'
import ResetPassword from './components/ResetPassword'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex justify-content-center">
          <Header />        
          <Route exact path={routes.LANDING} component={LandingPage}/>
          <Route exact path={routes.SIGN_UP} component={SignUp}/>
          <Route exact path={routes.COMPANY_SIGN_UP} component={CompanySignUp}/>
          <Route exact path={routes.SIGN_IN} component={SignIn}/>
          <Route exact path={routes.RESET_PASSWORD} component={ResetPassword}/>
        </div>
      </Router>
    );
  }
}

export default App;
