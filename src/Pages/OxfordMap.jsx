import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import OxfordImage from '../images/oxford.jpg';

import BeesIcon from '../images/BeesIcon.png';
import BeesThumbnail01 from './Essays/Bees/images/thumbnails/thumbnail01.jpg';
import BeesThumbnail02 from './Essays/Bees/images/thumbnails/thumbnail02.jpg';
import BeesThumbnail03 from './Essays/Bees/images/thumbnails/thumbnail03.jpg';
import BeesThumbnail04 from './Essays/Bees/images/thumbnails/thumbnail04.jpg';

// import FoodSecurityIcon from '../images/FoodSecurityIcon.png';
import LocalFoodIcon from '../images/LocalFoodIcon.png';
import LocalFoodThumbnail01 from './Essays/LocalFood/images/thumbnails/thumbnail01.jpg';

const OxfordMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[BeesIcon, /* FoodSecurityIcon */, LocalFoodIcon]}
      mapImage={OxfordImage}
      previousPageTitle="The Region"
      previousPageLink="/explore/region"
      pageTitle="Oxford"
      nextPageTitle="Section 14"
      nextPageLink="/explore/section14"
      classes
      iconInformationMap={{
        [BeesIcon]: {
          articleTitle: "Lorenzo Langstroth and the Birth of American Beekeeping",
          articleContent: "Lorenzo Lorraine Langstroth arrived in Oxford, Ohio in 1858, taking up residence near campus in the brick house known as “Langstroth Cottage.” He had already patented the movable-frame hive that would eventually bring him fame as the reputed “Father of American beekeeping.” The Langstroth hive enabled “modern’ hobby and commercial beekeeping because it integrated the famous “bee space” of one-quarter to three-eighths of an inch around the frames that hold the bees’ combs inside the hive box, thus preventing cross combs, allowing beekeepers to more practically and profitably inspect and manage bees and harvest honey.",
          articleLink: "/essays/bees",
          thumbnails: [BeesThumbnail01, BeesThumbnail02, BeesThumbnail03, BeesThumbnail04],
        },
        [LocalFoodIcon]: {
          articleTitle: "Local Food",
          articleContent: "Oxford’s local food scene, anchored by Oxford Farmers Market Uptown and MOON Co-op Grocery, is “hyper-local.” The farmer’s market has been in operation since around 1979, and especially emphasizes quality and building community. MOON (Miami Oxford Organic Network) Co-op was incorporated in 2004, largely as a result of the effort of vendors at the farmer’s market who saw the need for a place to sell what they made and grew and raised seven days a week.",
          articleLink: "/essays/localfood",
          thumbnails: [LocalFoodThumbnail01],
        },
      }}
    >
      <img id={BeesIcon} src={BeesIcon} className={[classes.beesIcon, classes.mapIcons].join(" ")} alt="" />
      {/* <img id={FoodSecurityIcon} src={FoodSecurityIcon} className={[classes.foodSecurityIcon, classes.mapIcons].join(" ")} alt="" /> */}
      <img id={LocalFoodIcon} src={LocalFoodIcon} className={[classes.localFoodIcon, classes.mapIcons].join(" ")} alt="" />
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
