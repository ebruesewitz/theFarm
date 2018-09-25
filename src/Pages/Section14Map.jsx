import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import Section14Image from '../images/section14.jpg';

import AustinMagieIcon from '../images/AustinMagieIcon.png';
import AustinMagieFarmThumbnail01 from './Essays/AustinMagieFarm/images/thumbnails/thumbnail01.jpg';
import AustinMagieFarmThumbnail02 from './Essays/AustinMagieFarm/images/thumbnails/thumbnail02.jpg';
import AustinMagieFarmThumbnail03 from './Essays/AustinMagieFarm/images/thumbnails/thumbnail03.jpg';

import AustinMillComplexIcon from '../images/AustinMillComplexIcon.png';
import AustinsMillsThumbnail01 from './Essays/AustinsMills/images/thumbnails/thumbnail01.jpg';
import AustinsMillsThumbnail02 from './Essays/AustinsMills/images/thumbnails/thumbnail02.jpg';
import AustinsMillsThumbnail03 from './Essays/AustinsMills/images/thumbnails/thumbnail03.jpg';

import BlackCoveredBridgeIcon from '../images/BlackCoveredBridgeIcon.png';
import BlackCoveredBridgeThumbnail01 from './Essays/BlackCoveredBridge/images/thumbnails/thumbnail01.jpg';


const Section14MapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[AustinMagieIcon, AustinMillComplexIcon, BlackCoveredBridgeIcon]}
      iconImageTitles={['austin-magie farm', 'austin\'s mills', 'black covered bridge']}
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
          thumbnails: [BlackCoveredBridgeThumbnail01],
        },
        [AustinMillComplexIcon]: {
          articleTitle: "Austin’s Mills",
          articleContent: "For 100 years Austin’s Mills, powered by water from Four-Mile Creek, channeled through a mile long mill-race, served the surrounding community by processing grain and timber. The Austin-Magie Farm and Mill District, on the U. S. National Register of Historic Places, represents significant aspects of nineteenth century agricultural and commercial activity, comprised as it is of the Austin-Magie Farm, and the Austin-Pugh mills. This rich history informs the present by revealing how intertwined agricultural and industrial developments operated early in the nineteenth century.",
          articleLink: "/essays/austinsmills",
          thumbnails: [AustinsMillsThumbnail01, AustinsMillsThumbnail02, AustinsMillsThumbnail03],
        },
        [AustinMagieIcon]: {
          articleTitle: "Austin-Magie Farm",
          articleContent: "Over the course of the 19th century, the Austin Magie Farm & Mill District was a flourishing commercial enterprise and one of the most successful farms in Butler County. From 1815-1863, the farm was owned by Aaron Austin, who built Oxford Township’s largest mill complex, which included a flourmill and a sawmill. The subsequent owner, David M. Magie, was one of Ohio’s most prominent 19th century stock farmers and swine breeders. The farm was a thriving agricultural landscape where natural resources—soil, water, trees, and land—were transformed through labor and skill into flour, lumber, and pork which became integral to an expanding supply chain that shipped products across the region, throughout the United States, and eventually around the world.",
          articleLink: "/essays/austinmagiefarm",
          thumbnails: [AustinMagieFarmThumbnail01, AustinMagieFarmThumbnail02, AustinMagieFarmThumbnail03],
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
      opacity: '.7 !important',
    }
  },
  austinMagieIcon: {
    top: '63vh',
    left: 'calc(50vw + 16vh)',
  },
  austinMillComplexIcon: {
    top: '59vh',
    left: 'calc(50vw + 7vh)',
  },
  blackCoveredBridgeIcon: {
    top: '67vh',
    left: 'calc(50vw - 11vh)',
  },
}

export default injectSheet(styles)(Section14MapWithClasses);
