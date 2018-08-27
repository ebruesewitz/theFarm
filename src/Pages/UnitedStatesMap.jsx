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
      iconInformationMap={{
        [CornandCowsIcon]: {
          articleTitle: "Corn & Cows: the Fryman Farm",
          articleContent: "During the 20th century, urbanization and industrialization combined with technological and economic change made agriculture a global business. Farming practices on the Austin-Magie Farm, which was then known as the Fryman Farm, reflect the larger transformation of agricultural and rural life during this period.  The farm expanded and production shifted from pigs and open pollinated “Indian” corn to dairy cows, Angus beef, hybrid corn and soybeans. Felix Fryman, who owned and farmed the property through the last decades of the 20th century, adeptly negotiated the expansion and consolidation of agriculture in the Corn Belt during the pre and post-World War II era.  His success offers a testament to the inherent value of this agricultural landscape.",
          articleLink: "/essays/cornandcows",
        },
      }}
    >
      <img 
        src={NewRuralismIcon} 
        className={[classes.newRuralismIcon, classes.mapIcons].join(" ")} 
        alt=""
        id={NewRuralismIcon}
      />
      <img 
        src={CornandCowsIcon} 
        className={[classes.cornandCowsIcon, classes.mapIcons].join(" ")} 
        alt=""
        id={CornandCowsIcon}
      />
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
