import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import EarthImage from '../images/earth.jpg';
import WeBelieveIcon from '../images/WeBelieveIcon.png';


const EarthMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[WeBelieveIcon]}
      mapImage={EarthImage}
      pageTitle="Earth"
      nextPageTitle="United States"
      nextPageLink="/explore/unitedstates"
      classes
    >
      <img src={WeBelieveIcon} className={[classes.weBelieveIcon, classes.mapIcons].join(" ")} alt="" />
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
  weBelieveIcon: {
    top: '43vh',
    left: 'calc(50vw + 8vh)',
  },
}

export default injectSheet(styles)(EarthMapWithClasses);
