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
      iconInformationMap={{
        [SustainableFoodIcon]: {
          articleTitle: "Defining Sustainable Local Agriculture",
          articleContent: "Over the past several decades a range of theories have pointed toward the promise of sustainable agriculture. Influenced by various historical, cultural, geographical, biological, and climate factors, the dream of sustainable agriculture—based as it is in ecology, economics, and social well-being—has depended on faith in local, land-based knowledge. As such, this range of theories can be thought of as converging. Permaculture and planning theory can be brought to bear on this convergence, the result being a more robust definition of sustainable local agriculture.",
          articleLink: "/essays/sustainableagriculture",
        },
      }}
    >
      <img id={MigrationandSettlementIcon} src={MigrationandSettlementIcon} className={[classes.migrationandSettlementIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={SustainableFoodIcon} src={SustainableFoodIcon} className={[classes.sustainableFoodIcon, classes.mapIcons].join(" ")} alt="" />
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
