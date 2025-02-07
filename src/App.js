import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from './Components/ScrollToTop';
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
import BlackCoveredBridge from './Pages/Essays/BlackCoveredBridge';
import AustinsMills from './Pages/Essays/AustinsMills';
import AustinMagieFarm from './Pages/Essays/AustinMagieFarm';
import StudentReflections from './Pages/Essays/StudentReflections';
import LandscapeChoreography from './Pages/Essays/LandscapeChoreography';
import BreakingGround from './Pages/Essays/BreakingGround';
import InstituteForFood from './Pages/Essays/InstituteForFood';
import EducatingFromTheGroundUp from './Pages/Essays/EducatingFromTheGroundUp';
import Harvest from './Pages/Essays/Harvest';
import FoodSecurity from './Pages/Essays/FoodSecurity';
import FloraAndFauna from './Pages/Essays/FloraAndFauna';
import Contributors from './Pages/Contributors';

const Routes = () => (
  <Router>
    <ScrollToTop>
    <div>
      <Route
        render={
          ({ location }) => {
            return(<TransitionGroup>
              <CSSTransition 
                key={location.key} 
                classNames="fade" 
                timeout={500}
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/educatingfromthegroundup" component={EducatingFromTheGroundUp} />
            
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/contributors" component={Contributors} />

                  
                  <Route exact path="/explore/farm" component={FarmMap} />
                  <Route exact path="/essays/studentreflections" component={StudentReflections} />
                  <Route exact path="/essays/landscapechoreography" component={LandscapeChoreography} />
                  <Route exact path="/essays/breakingground" component={BreakingGround} />
                  <Route exact path="/essays/instituteforfood" component={InstituteForFood} />
                  <Route exact path="/essays/harvest" component={Harvest} />
            
                  <Route exact path="/explore/section14" component={Section14Map} />
                  <Route exact path="/essays/blackcoveredbridge" component={BlackCoveredBridge} />
                  <Route exact path="/essays/austinsmills" component={AustinsMills} />
                  <Route exact path="/essays/austinmagiefarm" component={AustinMagieFarm} />
            
            
                  <Route exact path="/explore/oxford" component={OxfordMap} />
                  <Route exact path="/essays/bees" component={Bees} />
                  <Route exact path="/essays/localfood" component={LocalFood} />
                  <Route exact path="/essays/foodsecurity" component={FoodSecurity} />
            
                  <Route exact path="/explore/region" component={RegionMap} />
                  <Route exact path="/essays/groundwater" component={Groundwater} />
                  <Route exact path="/essays/soils" component={Soils} />
                  <Route exact path="/essays/porkopolis" component={Porkopolis} />
                  <Route exact path="/essays/floraandfauna" component={FloraAndFauna} />
                  
                  <Route exact path="/explore/ohiorivervalley" component={OhioRiverValleyMap} />
                  <Route exact path="/essays/sustainableagriculture" component={SustainableFood} />
                  <Route exact path="/essays/migrationandsettlement" component={MigrationAndSettlement} />
            
            
                  <Route exact path="/explore/unitedstates" component={UnitedStatesMap} />
                  <Route exact path="/essays/cornandcows" component={CornAndCows} />
                  <Route exact path="/essays/newruralism" component={NewRuralism} />
            
                  <Route exact path="/explore/earth" component={EarthMap} />
                  <Route exact path="/essays/webelieve" component={WeBelieve} />
                  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        }
      />

    </div>
    </ScrollToTop>
  </Router>
)

export default Routes;