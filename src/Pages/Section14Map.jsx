import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import Section14Image from '../images/section14.jpg';
import AustinMagieIcon from '../images/AustinMagieIcon.png';
import AustinMillComplexIcon from '../images/AustinMillComplexIcon.png';
import BlackCoveredBridgeIcon from '../images/BlackCoveredBridgeIcon.png';


const Section14MapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[AustinMagieIcon, AustinMillComplexIcon, BlackCoveredBridgeIcon]}
      mapImage={Section14Image}
      previousPageTitle="Oxford"
      previousPageLink="/explore/oxford"
      pageTitle="Section 14"
      nextPageTitle="The Farm"
      nextPageLink="/explore/farm"
      classes
    >
      <img src={AustinMagieIcon} className={[classes.austinMagieIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={AustinMillComplexIcon} className={[classes.austinMillComplexIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={BlackCoveredBridgeIcon} className={[classes.blackCoveredBridgeIcon, classes.mapIcons].join(" ")} alt="" />
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
  austinMagieIcon: {
    top: '68vh',
    left: 'calc(50vw + 15vh)',
  },
  austinMillComplexIcon: {
    top: '63vh',
    left: 'calc(50vw + 8vh)',
  },
  blackCoveredBridgeIcon: {
    top: '72vh',
    left: 'calc(50vw - 7vh)',
  },
}

export default injectSheet(styles)(Section14MapWithClasses);
