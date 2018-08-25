import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import OxfordImage from '../images/oxford.jpg';
import BeesIcon from '../images/BeesIcon.png';
import FoodSecurityIcon from '../images/FoodSecurityIcon.png';
import LocalFoodIcon from '../images/LocalFoodIcon.png';

const OxfordMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[BeesIcon, FoodSecurityIcon, LocalFoodIcon]}
      mapImage={OxfordImage}
      previousPageTitle="The Region"
      previousPageLink="/explore/region"
      pageTitle="Oxford"
      nextPageTitle="Section 14"
      nextPageLink="/explore/section14"
      classes
    >
      <img src={BeesIcon} className={[classes.beesIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={FoodSecurityIcon} className={[classes.foodSecurityIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={LocalFoodIcon} className={[classes.localFoodIcon, classes.mapIcons].join(" ")} alt="" />
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
  beesIcon: {
    top: '56vh',
    left: 'calc(50vw + 17vh)',
  },
  foodSecurityIcon: {
    top: '33vh',
    left: 'calc(50vw - 23vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 11.9vh)',
    },
  },
  localFoodIcon: {
    top: '52vh',
    left: 'calc(50vw - 33vh)',
  },
}

export default injectSheet(styles)(OxfordMapWithClasses);
