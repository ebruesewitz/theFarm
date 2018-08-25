import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import UnitedStatesImage from '../images/unitedstates.jpg';
import NewRuralismIcon from '../images/NewRuralismIcon.png';
import CornandCowsIcon from '../images/CornandCowsIcon.png';


const UnitedStatesMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[NewRuralismIcon, CornandCowsIcon]}
      mapImage={UnitedStatesImage}
      previousPageTitle="Earth"
      previousPageLink="/explore/earth"
      pageTitle="United States"
      nextPageTitle="Ohio River Valley"
      nextPageLink="/explore/ohiorivervalley"
      classes
    >
      <img src={NewRuralismIcon} className={[classes.newRuralismIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={CornandCowsIcon} className={[classes.cornandCowsIcon, classes.mapIcons].join(" ")} alt="" />
    </MapPage>
  );

const styles = {
  mapIcons: {
    position: 'absolute',
    height: '6vh',
    cursor: 'pointer',
    '&:hover': {
      opacity: .5,
    }
  },
  newRuralismIcon: {
    top: '39vh',
    left: 'calc(50vw + 33vh)',
  },
  cornandCowsIcon: {
    top: '33vh',
    left: 'calc(50vw + 20vh)',
  },
}

export default injectSheet(styles)(UnitedStatesMapWithClasses);
