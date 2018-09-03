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
import NewRuralism from './Pages/Essays/NewRuralism/index';
import SustainableFood from './Pages/Essays/SustainableFood/index';
import MigrationAndSettlement from './Pages/Essays/MigrationAndSettlement/index';
import Groundwater from './Pages/Essays/Groundwater/index';
import Soils from './Pages/Essays/Soils/index';
import Porkopolis from './Pages/Essays/Porkopolis';
import Bees from './Pages/Essays/Bees';
import LocalFood from './Pages/Essays/LocalFood';
import EducatingFromTheGroundUp from './Pages/Essays/EducatingFromTheGroundUp';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/educatingfromthegroundup" component={EducatingFromTheGroundUp} />


      <Route path="/contact" component={ContactPage} />

      <Route path="/explore/farm" component={FarmMap} />

      <Route path="/explore/section14" component={Section14Map} />
     
      <Route path="/explore/oxford" component={OxfordMap} />
      <Route path="/essays/bees" component={Bees} />
      <Route path="/essays/localfood" component={LocalFood} />
      
      <Route path="/explore/region" component={RegionMap} />
      <Route path="/essays/groundwater" component={Groundwater} />
      <Route path="/essays/soils" component={Soils} />
      <Route path="/essays/porkopolis" component={Porkopolis} />
      
      <Route path="/explore/ohiorivervalley" component={OhioRiverValleyMap} />
      <Route path="/essays/sustainableagriculture" component={SustainableFood} />
      <Route path="/essays/migrationandsettlement" component={MigrationAndSettlement} />


      <Route path="/explore/unitedstates" component={UnitedStatesMap} />
      <Route path="/essays/cornandcows" component={CornAndCows} />
      <Route path="/essays/newruralism" component={NewRuralism} />

      <Route path="/explore/earth" component={EarthMap} />
      <Route path="/essays/webelieve" component={WeBelieve} />
    </div>
  </Router>
)

export default Routes;