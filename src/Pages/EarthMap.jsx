import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import EarthImage from '../images/earth.jpg';

import InstituteforFoodIcon from '../images/InstituteforFoodIcon.png';
import InstituteForFoodThumbnail01 from './Essays/InstituteForFood/images/thumbnails/thumbnail01.jpg';
import InstituteForFoodThumbnail02 from './Essays/InstituteForFood/images/thumbnails/thumbnail02.jpg';


const EarthMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[InstituteforFoodIcon]}
      iconImageTitles={['Institute for Food']}
      mapImage={EarthImage}
      pageTitle="Earth"
      nextPageTitle="United States"
      nextPageLink="/explore/unitedstates"
      classes
      iconInformationMap={{
        [InstituteforFoodIcon]: {
          articleTitle: "The Institute for Food",
          articleContent: "The Institute for Food is a Provost Interdisciplinary Innovation Initiative to engage the Miami University community around issues of food, health, and sustainable agriculture. The Institute seeks to offer a national model for interdisciplinary food-centered liberal arts education, emphasizing integrative approaches to sustainable agriculture and resilient food systems. Its mission is to foster healthy food, healthy eating, healthy communities, and a healthy planet. ",
          articleLink: "/essays/instituteforfood",
          thumbnails: [InstituteForFoodThumbnail01, InstituteForFoodThumbnail02],
        },
      }}
    >
      <img id={InstituteforFoodIcon} src={InstituteforFoodIcon} className={[classes.instituteforFoodIcon, classes.mapIcons].join(" ")} alt=""/>
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
  instituteforFoodIcon: {
    top: '49vh',
    left: 'calc(50vw - 2vh)',
    '@media (max-width: 760px)': {
      top: 'calc(29vh + 25px)',
      left: 'calc(50vw - 1vh)',
    },
    '@media (max-width: 500px)': {
      top: '40vh',
    },
  },
}

export default injectSheet(styles)(EarthMapWithClasses);