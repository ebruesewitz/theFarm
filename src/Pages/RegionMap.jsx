import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import RegionImage from '../images/region.jpg';

import PigsIcon from '../images/PigsIcon.png';
import PorkopolisThumbnail01 from './Essays/Porkopolis/images/thumbnails/thumbnail01.jpg';
import PorkopolisThumbnail02 from './Essays/Porkopolis/images/thumbnails/thumbnail02.jpg';

import SoilIcon from '../images/SoilIcon.png';
import SoilsThumbnail01 from './Essays/Soils/images/thumbnails/thumbnail01.jpg';

import ArchaeologyIcon from '../images/ArchaeologyIcon.png';

import WaterIcon from '../images/WaterIcon.png';
import GroundwaterThumbnail01 from './Essays/Groundwater/images/thumbnails/thumbnail01.jpg';

import FloraandFaunaIcon from '../images/FloraandFaunaIcon.png';

const RegionMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[PigsIcon, SoilIcon, WaterIcon, ArchaeologyIcon, FloraandFaunaIcon]}
      iconImageTitles={['pigs', 'soil', 'water', '', 'flora']}
      mapImage={RegionImage}
      previousPageTitle="Ohio River Valley"
      previousPageLink="/explore/ohiorivervalley"
      pageTitle="The Region"
      nextPageTitle="Oxford"
      nextPageLink="/explore/oxford"
      classes
      iconInformationMap={{
        [WaterIcon]: {
          articleTitle: "Groundwater Flow and Quality ",
          articleContent: "The Institute for Food farm is surrounded by conventionally-cultivated farmland, making it an excellent site to study the potential benefits to groundwater quality of abstaining from application of artificial fertilizer and pesticides. Seven small wells were installed around the IF farm to measure groundwater pressure, flow, and quality. Nitrate sampling will continue, to better discern the spatial patterns and perhaps observe the positive impact of sustainable farming on groundwater quality. We also hope to expand our field work to include sampling and analysis for atrazine as well as nitrate.",
          articleLink: "/essays/groundwater",
          thumbnails: [GroundwaterThumbnail01],
        },
        [SoilIcon]: {
          articleTitle: "Soils of Four Mile Creek, Ohio, and the Austin-Magie Farm",
          articleContent: "Soils are the foundation of modern society, and humans all over the world turned to agriculture at about the same time ten thousand years ago; humans will not be turning back from agriculture any time soon. But soil is also more often abused than cared for as a precious resource, threatening the very foundation of a healthy society. The US is no exception. And yet, the soils of the Institute for Food Farm are exceptional, the small-scale farming practices employed are the best available for mitigating soil erosion loss, and the diversity of soils bodes well for sustainability and resilience in the future. ",
          articleLink: "/essays/soils",
          thumbnails: [SoilsThumbnail01],
        },
        [PigsIcon]: {
          articleTitle: "Porkopolis and the Austin-Magie Farm",
          articleContent: "The Austin-Magie Farm was an important part of the economy of the Miami River Valley in the nineteenth century, but also connected the community to Cincinnati, the rest of the country, and the globe. The farm did this through the region’s primary agricultural product–pigs. Supplying Porkopolis with pigs for a range of products, made from every part of the animal, required the development of suitable breeds. One of the most successful breeders was David Magie, who developed the “Magie Hog” in the 1840s, the origins of the Poland-China hog, the first great American commercial breed.",
          articleLink: "/essays/porkopolis",
          thumbnails: [PorkopolisThumbnail01, PorkopolisThumbnail02],
        },
        [FloraandFaunaIcon]: {
          articleTitle: "Gaining a Sense of Place through the Interpretation of Vegetation Patterns",
          articleContent: "The biogeographic distribution of vegetation types and their ecological composition and structure provide important interpretative clues to a place. Patterns of vegetation diversity offer clues to human-historical processes that modify land-cover change and vegetation dynamics over time.",
          articleLink: "/essays/floraandfauna",
        },
        [ArchaeologyIcon]: {
          articleTitle: "Archaeology Article - Coming Soon!",
          articleContent: "Check back often. We'll be publishing new content soon!"
        }
      }}
    >
      <img id={PigsIcon} src={PigsIcon} className={[classes.pigsIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={SoilIcon} src={SoilIcon} className={[classes.soilIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={ArchaeologyIcon} src={ArchaeologyIcon} className={[classes.archaeologyIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={WaterIcon} src={WaterIcon} className={[classes.waterIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={FloraandFaunaIcon} src={FloraandFaunaIcon} className={[classes.floraandFaunaIcon, classes.mapIcons].join(" ")} alt="" />
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
