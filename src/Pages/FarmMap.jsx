import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import FarmImage from '../images/farm.jpg';
import HarvestIcon from '../images/HarvestIcon.png';
import BreakingGroundIcon from '../images/BreakingGroundIcon.png';
import InstituteforFoodIcon from '../images/InstituteforFoodIcon.png';
import LandscapeChoreographyIcon from '../images/LandscapeChoreographyIcon.png';
import ZoomIn from '../images/zoomin.png';
import ZoomOut from '../images/zoomout.png';
import SmartMenu from '../Components/SmartMenu';

const FarmMapWithClasses = ({ classes }) => (
  <div>
    <SmartMenu iconImages={[HarvestIcon, BreakingGroundIcon, InstituteforFoodIcon, LandscapeChoreographyIcon]}/>
    <div className={classes.homePage}>
      <div className={classes.pageContainer}>
        <div className={classes.imageContainer}>
          <img src={FarmImage} className={classes.farmMap}/>
        </div>
        <h1 className={[classes.bannerText, classes.previousTitle].join(" ")}>Oxford</h1>
        <h1 className={classes.bannerText}>The Farm</h1>
        <img src={HarvestIcon} className={[classes.harvestIcon, classes.mapIcons].join(" ")} alt=""/>
        <img src={BreakingGroundIcon} className={[classes.breakingGroundIcon, classes.mapIcons].join(" ")} alt=""/>
        <img src={InstituteforFoodIcon} className={[classes.instituteforFoodIcon, classes.mapIcons].join(" ")} alt=""/>
        <img src={LandscapeChoreographyIcon} className={[classes.landscapeChoreographyIcon, classes.mapIcons].join(" ")} alt=""/>
        <div className={classes.zoomControls}>
          <div className={classes.zoomIconAndText}>
            <div className={[classes.iconContainer, classes.disabledIcon].join(" ")}>
              <img src={ZoomIn} alt=""/>
            </div>
          </div>
          <div className={classes.zoomIconAndText}>
            <div className={classes.zoomText}>Zoom out to Oxford</div>
            <Link to="/">
              <div className={classes.iconContainer}>
                <img src={ZoomOut} alt=""/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  homePage: {
    width: '100vw',
    paddingLeft: 200,
    minHeight: '100vh',
    backgroundColor: '#F7F7F7',
    boxSizing: 'border-box',
    '@media (max-width: 760px)': {
      padding: '75px 0px 77px 0px'
    }
  },
  pageContainer: {
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  imageContainer: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  farmMap: {
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: 'auto',
    width: 'auto',
    '@media (max-width: 760px)': {
      maxWidth: '100vw',
      maxHeight: '70vh',
      height: 'auto',
      width: 'auto',
    }
  },
  bannerText: {
    fontFamily: "komu-b",
    fontSize: '15vh',
    maxWidth: '50vw',
    margin: 0,
    position: 'absolute',
    top: '8vh',
    '@media (max-width: 760px)': {
      maxWidth: '80vw',
      marginLeft: '10vw',
      fontSize: 70,
      top: 110,
    }
  },
  previousTitle: {
    color: 'rgba(0,0,0,.07)',
    top: '-7vh',
    '@media (max-width: 760px)': {
      top: 45,
    }
  },
  mapIcons: {
    position: 'absolute',
    height: '6vh',
    cursor: 'pointer',
    '&:hover': {
      opacity: .5,
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
  zoomControls: {
    position: 'fixed',
    bottom: 25,
    right: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 760px)': {
      bottom: 100,
      right: 15,
    }
  },
  zoomIconAndText: {
    display: 'flex',
    alignItems: 'center',
  },
  zoomText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,.23)',
    fontWeight: 'bold',
    paddingRight: 20,
    '@media (max-width: 760px)': {
      display: 'none',
    }
  },
  iconContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    textAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: .5,
    },
    '@media (max-width: 760px)': {
      padding: 15,
      '& img': {
        width: 15,
        height: 'auto',
      }
    }
  },
  disabledIcon: {
    cursor: 'default',
    '& img': {
      opacity: .3,
    }
  }
}

export default injectSheet(styles)(FarmMapWithClasses);
