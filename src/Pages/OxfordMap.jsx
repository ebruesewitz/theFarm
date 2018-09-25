import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import OxfordImage from '../images/oxford.jpg';

import HoneycombIcon from '../images/HoneycombIcon.png';
import BeesThumbnail01 from './Essays/Bees/images/thumbnails/thumbnail01.jpg';
import BeesThumbnail02 from './Essays/Bees/images/thumbnails/thumbnail02.jpg';
import BeesThumbnail03 from './Essays/Bees/images/thumbnails/thumbnail03.jpg';
import BeesThumbnail04 from './Essays/Bees/images/thumbnails/thumbnail04.jpg';

import FoodSecurityIcon from '../images/FoodSecurityIcon.png';
import FoodSecurityThumbnail01 from './Essays/FoodSecurity/images/thumbnails/thumbnail01.jpg';
import FoodSecurityThumbnail02 from './Essays/FoodSecurity/images/thumbnails/thumbnail02.png';
import FoodSecurityThumbnail03 from './Essays/FoodSecurity/images/thumbnails/thumbnail03.jpg';
import FoodSecurityThumbnail04 from './Essays/FoodSecurity/images/thumbnails/thumbnail04.png';

import BeesIcon from '../images/BeesIcon.png';

import LocalFoodIcon from '../images/LocalFoodIcon.png';
import LocalFoodThumbnail01 from './Essays/LocalFood/images/thumbnails/thumbnail01.jpg';

const OxfordMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[BeesIcon, HoneycombIcon, FoodSecurityIcon, LocalFoodIcon]}
      iconImageTitles={['bees', 'beekeeping', 'food security', 'local food']}
      mapImage={OxfordImage}
      previousPageTitle="The Region"
      previousPageLink="/explore/region"
      pageTitle="Oxford"
      nextPageTitle="Section 14"
      nextPageLink="/explore/section14"
      classes
      iconInformationMap={{
        [HoneycombIcon]: {
          articleTitle: "Lorenzo Langstroth and the Birth of American Beekeeping",
          articleContent: "Lorenzo Lorraine Langstroth arrived in Oxford, Ohio in 1858, taking up residence near campus in the brick house known as “Langstroth Cottage.” He had already patented the movable-frame hive that would eventually bring him fame as the reputed “Father of American beekeeping.” The Langstroth hive enabled “modern’ hobby and commercial beekeeping because it integrated the famous “bee space” of one-quarter to three-eighths of an inch around the frames that hold the bees’ combs inside the hive box, thus preventing cross combs, allowing beekeepers to more practically and profitably inspect and manage bees and harvest honey.",
          articleLink: "/essays/bees",
          thumbnails: [BeesThumbnail01, BeesThumbnail02, BeesThumbnail03, BeesThumbnail04],
        },
        [BeesIcon]: {
          articleTitle: "A Landscape for Bees",
          articleContent: "A pound of honey = a dollar of produce. This 1875 Oxford Township map shows orchard products, market garden produce, and honey, as reported by farmers in the 1870 agricultural census. Lorenzo Langstroth was by far Oxford Township’s biggest producer of honey, with 1500 pounds reported.",
          articleLink: "/",
          isExternalLink: true,
        },
        [LocalFoodIcon]: {
          articleTitle: "Local Food",
          articleContent: "Oxford’s local food scene, anchored by Oxford Farmers Market Uptown and MOON Co-op Grocery, is “hyper-local.” The farmer’s market has been in operation since around 1979, and especially emphasizes quality and building community. MOON (Miami Oxford Organic Network) Co-op was incorporated in 2004, largely as a result of the effort of vendors at the farmer’s market who saw the need for a place to sell what they made and grew and raised seven days a week.",
          articleLink: "/essays/localfood",
          thumbnails: [LocalFoodThumbnail01],
        },
        [FoodSecurityIcon]: {
          articleTitle: "Miami University Institute for Food Outreach Program",
          articleContent: "A diet rich in fruits and vegetables has been associated with lower risks of chronic diseases such as heart disease, stroke, diabetes and several types of cancers, but not everyone has access to great produce. The Oxford Community Choice Pantry created the Summer Harvest Program to help address the need.",
          articleLink: "/essays/foodsecurity",
          thumbnails: [FoodSecurityThumbnail01, FoodSecurityThumbnail02, FoodSecurityThumbnail03, FoodSecurityThumbnail04]
        }
      }}
    >
      <img id={HoneycombIcon} src={HoneycombIcon} className={[classes.HoneycombIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={BeesIcon} src={BeesIcon} className={[classes.BeesIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={FoodSecurityIcon} src={FoodSecurityIcon} className={[classes.foodSecurityIcon, classes.mapIcons].join(" ")} alt="" />
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
  HoneycombIcon: {
    top: '56vh',
    left: 'calc(50vw + 17vh)',
    '@media (max-width: 760px)': {
      top: '50vh',
      left: 'calc(50vw + 5vh)',
    }
  },
  BeesIcon: {
    top: '56vh',
    left: 'calc(50vw + 8vh)',
    '@media (max-width: 760px)': {
      top: '50vh',
      left: 'calc(50vw - 3vh)',
    }
  },
  foodSecurityIcon: {
    top: '33vh',
    left: 'calc(50vw - 23vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 14vh)',
    },
  },
  localFoodIcon: {
    top: '52vh',
    left: 'calc(50vw - 33vh)',
    '@media (max-width: 760px)': {
      top: '49vh',
      left: 'calc(50vw - 19vh)',
    }
  },
}

export default injectSheet(styles)(OxfordMapWithClasses);
