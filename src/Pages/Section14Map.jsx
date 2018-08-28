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
      iconInformationMap={{
        [BlackCoveredBridgeIcon]: {
          articleTitle: "Black (Pugh’s Mill) Covered Bridge",
          articleContent: "The Black (Pugh’s Mill) Covered bridge, built in 1868-1869, is a registered historic landmark, listed on the National Register of Historic Places in 1975. Once part of the Fryman Farm, the bridge is now part of the Oxford Recreational Trail.",
          articleLink: "/essays/blackcoveredbridge",
        },
      }}
    >
      <img id={AustinMagieIcon} src={AustinMagieIcon} className={[classes.austinMagieIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={AustinMillComplexIcon} src={AustinMillComplexIcon} className={[classes.austinMillComplexIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={BlackCoveredBridgeIcon} src={BlackCoveredBridgeIcon} className={[classes.blackCoveredBridgeIcon, classes.mapIcons].join(" ")} alt="" />
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
