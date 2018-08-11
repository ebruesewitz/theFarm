import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import FarmMap from './Pages/FarmMap.jsx';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/explore/farm" component={FarmMap} />
    </div>
  </Router>
)

export default Routes;