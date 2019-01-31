import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import OhioRiverValleyImage from '../images/ohiorivervalley.jpg';

import MigrationandSettlementIcon from '../images/MigrationandSettlementIcon.png';
import MigrationAndSettlementThumbnail01 from './Essays/MigrationAndSettlement/images/thumbnails/thumbnail01.jpg';

import MyaamiakiAndMyaamionkiIcon from '../images/MyaamiakiAndMyaamionkiIcon.png';
import MyaamiakiAndMyaamionkiThumbnail01 from './Essays/MyaamiakiAndMyaamionki/images/thumbnails/thumbnail01.jpg';
import MyaamiakiAndMyaamionkiThumbnail02 from './Essays/MyaamiakiAndMyaamionki/images/thumbnails/thumbnail02.jpg';

import SustainableFoodIcon from '../images/SustainableFoodIcon.png';
import SustainableFoodThumbnail01 from './Essays/SustainableFood/images/thumbnails/thumbnail01.jpg';
import SustainableFoodThumbnail02 from './Essays/SustainableFood/images/thumbnails/thumbnail02.jpg';
import SustainableFoodThumbnail03 from './Essays/SustainableFood/images/thumbnails/thumbnail03.jpg';


const OhioRiverValleyMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[MigrationandSettlementIcon, MyaamiakiAndMyaamionkiIcon, SustainableFoodIcon]}
      iconImageTitles={['migration and settlement', 'Myaamiaki and Myaamionki', 'sustainable agriculture']}
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
          thumbnails: [SustainableFoodThumbnail01, SustainableFoodThumbnail02, SustainableFoodThumbnail03],
        },
        [MigrationandSettlementIcon]: {
          articleTitle: "Early Anglo-American Settlement in the Miami Valley",
          articleContent: "By 1850, the Ohio country was quintessentially American, with two-thirds of its two million inhabitants native-born, in contrast to the rest of the United States. The migrant population into southwest Ohio brought a distinctive regional Pennsylvania-German subculture, characterized most readily by a commercially-oriented and diversified agricultural econony focused on both crop production and livestock rearing. The Austin-Magie site thus embodies a number of important themes with regard to the early settlement of Ohio and the Corn Belt, and indeed of the Midwest itself.",
          articleLink: "/essays/migrationandsettlement",
          thumbnails: [MigrationAndSettlementThumbnail01],
        },
        [MyaamiakiAndMyaamionkiIcon]: {
          articleTitle: "Myaamiaki and Myaamionki",
          articleContent: "The Austin-Magie farm sits on the southeastern edges of Myaamionki—the heritage homelands of the Myaamia ‘Miami’ people. The land now known as the Austin-Magie farm has been sustaining communities for as long as we can remember. The farm, like Myaamia Mihši- nipwaantikaani ‘Miami University,’ was built on land watered by the Ahsenisiipi siipiiwi ‘Great Miami River.’",
          articleLink: "/essays/myaamiakiandmyaamionki",
          thumbnails: [MyaamiakiAndMyaamionkiThumbnail01, MyaamiakiAndMyaamionkiThumbnail02],
        },
      }}
    >
      <img id={MigrationandSettlementIcon} src={MigrationandSettlementIcon} className={[classes.migrationandSettlementIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={SustainableFoodIcon} src={SustainableFoodIcon} className={[classes.sustainableFoodIcon, classes.mapIcons].join(" ")} alt="" />
      <img id={MyaamiakiAndMyaamionkiIcon} src={MyaamiakiAndMyaamionkiIcon} className={[classes.MyaamiakiAndMyaamionkiIcon, classes.mapIcons].join(" ")} alt="" />
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
  migrationandSettlementIcon: {
    top: '33vh',
    left: 'calc(50vw + 46vh)',
    '@media (max-width: 760px)': {
      top: '42vh',
      left: 'calc(50vw + 13vh)',
    }
  },
  sustainableFoodIcon: {
    top: '35vh',
    left: 'calc(50vw + 31vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw + 6.9vh)',
    },
  },
  MyaamiakiAndMyaamionkiIcon: {
    top: '38vh',
    left: 'calc(50vw + 15vh)',
    '@media (max-width: 760px)': {
      top: '47vh',
      left: '50vw',
    },
  },
}

export default injectSheet(styles)(OhioRiverValleyMapWithClasses);
