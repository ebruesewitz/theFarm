import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import FarmMap from './Pages/FarmMap.jsx';
import Section14Map from './Pages/Section14Map.jsx';
import OxfordMap from './Pages/OxfordMap.jsx';
import RegionMap from './Pages/RegionMap.jsx';
import OhioRiverValleyMap from './Pages/OhioRiverValleyMap.jsx';
import UnitedStatesMap from './Pages/UnitedStatesMap.jsx';
import EarthMap from './Pages/EarthMap.jsx';
import WeBelieve from './Pages/Essays/WeBelieve/index';
import CornAndCows from './Pages/Essays/CornAndCows/index';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/explore/farm" component={FarmMap} />
      <Route path="/explore/section14" component={Section14Map} />
      <Route path="/explore/oxford" component={OxfordMap} />
      <Route path="/explore/region" component={RegionMap} />
      <Route path="/explore/ohiorivervalley" component={OhioRiverValleyMap} />

      <Route path="/explore/unitedstates" component={UnitedStatesMap} />
      <Route path="/essays/cornandcows" component={CornAndCows} />

      <Route path="/explore/earth" component={EarthMap} />
      <Route path="/essays/webelieve" component={WeBelieve} />
    </div>
  </Router>
)

export default Routes;