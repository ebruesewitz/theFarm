import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import FarmMap from './Pages/FarmMap.jsx';
import OxfordMap from './Pages/OxfordMap.jsx';
import RegionMap from './Pages/RegionMap.jsx';
import OhioRiverValleyMap from './Pages/OhioRiverValleyMap.jsx';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/explore/farm" component={FarmMap} />
      <Route path="/explore/oxford" component={OxfordMap} />
      <Route path="/explore/region" component={RegionMap} />
      <Route path="/explore/ohiorivervalley" component={OhioRiverValleyMap} />
    </div>
  </Router>
)

export default Routes;