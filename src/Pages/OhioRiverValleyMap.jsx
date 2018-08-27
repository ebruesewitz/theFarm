import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import OhioRiverValleyImage from '../images/ohiorivervalley.jpg';
import MigrationandSettlementIcon from '../images/MigrationandSettlementIcon.png';
import SustainableFoodIcon from '../images/SustainableFoodIcon.png';


const OhioRiverValleyMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[MigrationandSettlementIcon, SustainableFoodIcon]}
      mapImage={OhioRiverValleyImage}
      previousPageTitle="United States"
      previousPageLink="/explore/unitedstates"
      pageTitle="Ohio River Valley"
      nextPageTitle="The Region"
      nextPageLink="/explore/region"
      classes
    >
      <img src={MigrationandSettlementIcon} className={[classes.migrationandSettlementIcon, classes.mapIcons].join(" ")} alt="" />
      <img src={SustainableFoodIcon} className={[classes.sustainableFoodIcon, classes.mapIcons].join(" ")} alt="" />
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
  migrationandSettlementIcon: {
    top: '56vh',
    left: 'calc(50vw + 17vh)',
  },
  sustainableFoodIcon: {
    top: '33vh',
    left: 'calc(50vw - 23vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 11.9vh)',
    },
  },
}

export default injectSheet(styles)(OhioRiverValleyMapWithClasses);
