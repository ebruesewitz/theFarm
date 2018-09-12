import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import UnitedStatesImage from '../images/unitedstates.jpg';

import NewRuralismIcon from '../images/NewRuralismIcon.png';
import NewRuralismThumbnail01 from './Essays/NewRuralism/images/thumbnails/thumbnail01.jpg';
import NewRuralismThumbnail02 from './Essays/NewRuralism/images/thumbnails/thumbnail02.jpg';


import CornandCowsIcon from '../images/CornandCowsIcon.png';
import CornandCowsThumbnail01 from './Essays/CornAndCows/images/thumbnails/thumbnail01.jpg';
import CornandCowsThumbnail02 from './Essays/CornAndCows/images/thumbnails/thumbnail02.jpg';
import CornandCowsThumbnail03 from './Essays/CornAndCows/images/thumbnails/thumbnail03.jpg';



const UnitedStatesMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[NewRuralismIcon, CornandCowsIcon]}
      iconImageTitles={['urban-rural divide', 'corn and cows']}
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
          thumbnails: [CornandCowsThumbnail01, CornandCowsThumbnail02, CornandCowsThumbnail03],
        },
        [NewRuralismIcon]: {
          articleTitle: "Education for Healing the Rural-Urban Divide",
          articleContent: "The rural-urban divide, reflected strongly in recent political events, has been a long time in the making. The Austin-Magie farm reflects the trajectory of this divide. In little more than a hundred years, the United States went from a country with a majority of its population engaged in direct food production to less than two percent farmers. The rural-urban divide is a global phenomenon that requires urgent attention. It is likely going to be one of a handful of essential sociocultural divides of the 21st century. Our universities are the perfect place to start, as is the Institute for Food Farm.",
          articleLink: "/essays/newruralism",
          thumbnails: [NewRuralismThumbnail01, NewRuralismThumbnail02],
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
      opacity: '.7 !important',
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
