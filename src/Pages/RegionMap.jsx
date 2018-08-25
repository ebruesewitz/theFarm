import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import RegionImage from '../images/region.jpg';
import PigsIcon from '../images/PigsIcon.png';
import SoilIcon from '../images/SoilIcon.png';
import ArchaeologyIcon from '../images/ArchaeologyIcon.png';
import WaterIcon from '../images/WaterIcon.png';
import FloraandFaunaIcon from '../images/FloraandFaunaIcon.png';

const RegionMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[PigsIcon, SoilIcon, ArchaeologyIcon, WaterIcon, FloraandFaunaIcon]}
      mapImage={RegionImage}
      previousPageTitle="Ohio River Valley"
      previousPageLink="/explore/ohiorivervalley"
      pageTitle="The Region"
      nextPageTitle="Oxford"
      nextPageLink="/explore/oxford"
      classes
    >
      <img src={PigsIcon} className={[classes.pigsIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={SoilIcon} className={[classes.soilIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={ArchaeologyIcon} className={[classes.archaeologyIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={WaterIcon} className={[classes.waterIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={FloraandFaunaIcon} className={[classes.floraandFaunaIcon, classes.mapIcons].join(" ")} alt="" />
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
  pigsIcon: {
    top: '56vh',
    left: 'calc(50vw + 17vh)',
  },
  soilIcon: {
    top: '33vh',
    left: 'calc(50vw - 23vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 11.9vh)',
    },
  },
  archaeologyIcon: {
    top: '52vh',
    left: 'calc(50vw - 33vh)',
  },
  waterIcon: {
    top: '33vh',
    left: 'calc(50vw + 23vh)',
  },
  floraandFaunaIcon: {
    top: '44vh',
    left: 'calc(50vw - 10vh)',
  },
}

export default injectSheet(styles)(RegionMapWithClasses);
