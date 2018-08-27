import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import FarmImage from '../images/farm.jpg';
import HarvestIcon from '../images/HarvestIcon.png';
import BreakingGroundIcon from '../images/BreakingGroundIcon.png';
import InstituteforFoodIcon from '../images/InstituteforFoodIcon.png';
import LandscapeChoreographyIcon from '../images/LandscapeChoreographyIcon.png';
import StudentReflectionsIcon from '../images/StudentReflectionsIcon.png';

const FarmMapWithClasses = ({ 
  classes
}) => (
  <MapPage
    iconImages={[HarvestIcon, BreakingGroundIcon, InstituteforFoodIcon, LandscapeChoreographyIcon, StudentReflectionsIcon]}
    mapImage={FarmImage}
    previousPageTitle="Section 14"
    previousPageLink="/explore/section14"
    pageTitle="The Farm"
    classes
  >
    <img src={HarvestIcon} className={[classes.harvestIcon, classes.mapIcons].join(" ")} alt=""/>
    <img src={BreakingGroundIcon} className={[classes.breakingGroundIcon, classes.mapIcons].join(" ")} alt=""/>
    <img src={InstituteforFoodIcon} className={[classes.instituteforFoodIcon, classes.mapIcons].join(" ")} alt=""/>
    <img src={LandscapeChoreographyIcon} className={[classes.landscapeChoreographyIcon, classes.mapIcons].join(" ")} alt=""/>
    <img src={StudentReflectionsIcon} className={[classes.studentReflectionsIcon, classes.mapIcons].join(" ")} alt=""/>
  </MapPage>
);

const styles = {
  mapIcons: {
    position: 'absolute',
    height: '6vh',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1 !important',
    }
  },
  harvestIcon: {
    top: '56vh',
    left: 'calc(50vw - 17vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 11.9vh)',
    },
  },
  breakingGroundIcon: {
    top: '46vh',
    left: 'calc(50vw - 3vh)',
  },
  instituteforFoodIcon: {
    top: '29vh',
    left: 'calc(50vw + 7vh)',
  },
  landscapeChoreographyIcon: {
    //1.4
    top: '80vh',
    left: 'calc(50vw - 5vh)',
  },
  studentReflectionsIcon: {
    top: '60vh',
    left: 'calc(50vw + 23vh)',
  },
}

export default injectSheet(styles)(FarmMapWithClasses);
