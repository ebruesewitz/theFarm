import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import FarmImage from '../images/farm.jpg';
// import HarvestIcon from '../images/HarvestIcon.png';

import BreakingGroundIcon from '../images/BreakingGroundIcon.png';
import BreakingGroundThumbnail01 from './Essays/BreakingGround/images/thumbnails/thumbnail01.jpg';
import BreakingGroundThumbnail02 from './Essays/BreakingGround/images/thumbnails/thumbnail02.jpg';
import BreakingGroundThumbnail03 from './Essays/BreakingGround/images/thumbnails/thumbnail03.jpg';
import BreakingGroundThumbnail04 from './Essays/BreakingGround/images/thumbnails/thumbnail04.jpg';

import InstituteforFoodIcon from '../images/InstituteforFoodIcon.png';
import InstituteForFoodThumbnail01 from './Essays/InstituteForFood/images/thumbnails/thumbnail01.jpg';
import InstituteForFoodThumbnail02 from './Essays/InstituteForFood/images/thumbnails/thumbnail02.jpg';
import InstituteForFoodThumbnail03 from './Essays/InstituteForFood/images/thumbnails/thumbnail03.jpg';
import InstituteForFoodThumbnail04 from './Essays/InstituteForFood/images/thumbnails/thumbnail04.jpg';

import LandscapeChoreographyIcon from '../images/LandscapeChoreographyIcon.png';
import LandscapeChoreographyThumbnail01 from './Essays/LandscapeChoreography/images/thumbnails/thumbnail01.jpg';
import LandscapeChoreographyThumbnail02 from './Essays/LandscapeChoreography/images/thumbnails/thumbnail02.jpg';
import LandscapeChoreographyThumbnail03 from './Essays/LandscapeChoreography/images/thumbnails/thumbnail03.jpg';
import LandscapeChoreographyThumbnail04 from './Essays/LandscapeChoreography/images/thumbnails/thumbnail04.jpg';

import StudentReflectionsIcon from '../images/StudentReflectionsIcon.png';
import StudentReflectionsThumbnail01 from './Essays/StudentReflections/images/thumbnails/thumbnail01.jpg';
import StudentReflectionsThumbnail02 from './Essays/StudentReflections/images/thumbnails/thumbnail02.jpg';
import StudentReflectionsThumbnail03 from './Essays/StudentReflections/images/thumbnails/thumbnail03.jpg';
import StudentReflectionsThumbnail04 from './Essays/StudentReflections/images/thumbnails/thumbnail04.jpg';

const FarmMapWithClasses = ({ 
  classes
}) => (
  <MapPage
    iconImages={[/* HarvestIcon */, BreakingGroundIcon, InstituteforFoodIcon, LandscapeChoreographyIcon, StudentReflectionsIcon]}
    mapImage={FarmImage}
    previousPageTitle="Section 14"
    previousPageLink="/explore/section14"
    pageTitle="The Farm"
    classes
    iconInformationMap={{
      [StudentReflectionsIcon]: {
        articleTitle: "Student Reflections",
        articleContent: "Reflection is arguably the most important and significant aspect of learning. Here students who have participated with the Institute for Food in a variety of ways reflect on what they have learned and gained—as interns and independent studies students, in the course Introduction to Food Systems and Food Studies and in farm lab. As one student put it, “I learned how to work with a team on a project bigger than myself that would produce a positive outcome for the community.”",
        articleLink: "/essays/studentreflections",
        thumbnails: [StudentReflectionsThumbnail01, StudentReflectionsThumbnail02, StudentReflectionsThumbnail03, StudentReflectionsThumbnail04],
      },
      [LandscapeChoreographyIcon]: {
        articleTitle: "Landscape Choreography",
        articleContent: "Landscape choreography, as practiced by Landscape Architect Elisa Serra and Choreographer/ Activist Emanuele Braga, is a strange-making process. It is a kind of game of follow-the-leader that allows a group of people to dance together, and play, and in so doing imbue the world around them with a new reality. It is at once a political action and a consciousness raising, and for a group intent on making change it offers the possibility, over time, of learning about intentions. Landscape Choreography, like walking in the world, belongs in the tool-kit of experiential educators.",
        articleLink: "/essays/landscapechoreography",
        thumbnails: [LandscapeChoreographyThumbnail01, LandscapeChoreographyThumbnail02, LandscapeChoreographyThumbnail03, LandscapeChoreographyThumbnail04],
      },
      [BreakingGroundIcon]: {
        articleTitle: "Breaking Ground",
        articleContent: "The Institute for Food Farm project began in February, 2016, with a design charrette—an intensive weekend brainstorming and drawing session—involving sixty-five students in architecture and interior design, some community members and teachers. The results were big dreams, and a smaller, actionable plan for laying out a few acres of abused but excellent soils for beginning production. Design students continued to work throughout the semester to continue to imagine what might be, in the best of all possible worlds, if the University and community would fully embrace a plan for sustainable living and learning.", articleLink: "/essays/breakingground",
        thumbnails: [BreakingGroundThumbnail01, BreakingGroundThumbnail02, BreakingGroundThumbnail03, BreakingGroundThumbnail04]
      },
      [InstituteforFoodIcon]: {
        articleTitle: "The Institute for Food",
        articleContent: "The Institute for Food is a Provost Interdisciplinary Innovation Initiative to engage the Miami University community around issues of food, health, and sustainable agriculture. The Institute seeks to offer a national model for interdisciplinary food-centered liberal arts education, emphasizing integrative approaches to sustainable agriculture and resilient food systems. Its mission is to foster healthy food, healthy eating, healthy communities, and a healthy planet. ",
        articleLink: "/essays/instituteforfood",
        thumbnails: [InstituteForFoodThumbnail01, InstituteForFoodThumbnail02, InstituteForFoodThumbnail03, InstituteForFoodThumbnail04],
      },
    }}
  >
    {/* <img id={HarvestIcon} src={HarvestIcon} className={[classes.harvestIcon, classes.mapIcons].join(" ")} alt=""/> */}
    <img id={BreakingGroundIcon} src={BreakingGroundIcon} className={[classes.breakingGroundIcon, classes.mapIcons].join(" ")} alt=""/>
    <img id={InstituteforFoodIcon} src={InstituteforFoodIcon} className={[classes.instituteforFoodIcon, classes.mapIcons].join(" ")} alt=""/>
    <img id={LandscapeChoreographyIcon} src={LandscapeChoreographyIcon} className={[classes.landscapeChoreographyIcon, classes.mapIcons].join(" ")} alt=""/>
    <img id={StudentReflectionsIcon} src={StudentReflectionsIcon} className={[classes.studentReflectionsIcon, classes.mapIcons].join(" ")} alt=""/>
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
  harvestIcon: {
    top: '56vh',
    left: 'calc(50vw - 17vh)',
    '@media (max-width: 760px)': {
      top: '39.2vh',
      left: 'calc(50vw - 11.9vh)',
    },
  },
  breakingGroundIcon: {
    top: '46vh',
    left: 'calc(50vw - 3vh)',
  },
  instituteforFoodIcon: {
    top: '29vh',
    left: 'calc(50vw + 7vh)',
  },
  landscapeChoreographyIcon: {
    //1.4
    top: '80vh',
    left: 'calc(50vw - 5vh)',
  },
  studentReflectionsIcon: {
    top: '60vh',
    left: 'calc(50vw + 23vh)',
  },
}

export default injectSheet(styles)(FarmMapWithClasses);
