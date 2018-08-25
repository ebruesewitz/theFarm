import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import ZoomIn from '../images/zoomin.png';
import ZoomOut from '../images/zoomout.png';
import SmartMenu from '../Components/SmartMenu';

const MapPageWithClasses = ({
  children,
  iconImages,
  mapImage,
  mapClassName,
  previousPageTitle,
  previousPageLink,
  pageTitle,
  nextPageTitle,
  nextPageLink,
  classes
}) => (
  <div>
    <SmartMenu iconImages={iconImages} />
    <div className={classes.homePage}>
      <div className={classes.pageContainer}>
        <div className={classes.imageContainer}>
          <img src={mapImage} className={[classes.map, mapClassName].join(" ")} />
        </div>
        {
          previousPageTitle &&
          <h1 className={[classes.bannerText, classes.previousTitle].join(" ")}>{previousPageTitle}</h1>
        }
        <h1 className={classes.bannerText}>{pageTitle}</h1>
        {children}
        <div className={classes.zoomControls}>
          {
            nextPageTitle ?
              <div className={classes.zoomIconAndText}>
                <div className={classes.zoomText}>Zoom in to {nextPageTitle}</div>
                <Link to={nextPageLink}>
                  <div className={classes.iconContainer}>
                    <img src={ZoomIn} alt="" />
                  </div>
                </Link>
              </div>
            :
              <div className={classes.zoomIconAndText}>
                <div className={[classes.disabledIcon, classes.iconContainer].join(" ")}>
                  <img src={ZoomIn} alt="" />
                </div>
              </div>
          }
          {
            previousPageTitle ?
              <div className={classes.zoomIconAndText}>
                <div className={classes.zoomText}>Zoom out to {previousPageTitle}</div>
                <Link to={previousPageLink}>
                  <div className={classes.iconContainer}>
                    <img src={ZoomOut} alt="" />
                  </div>
                </Link>
              </div>
            :
              <div className={classes.zoomIconAndText}>
                <div className={[classes.disabledIcon, classes.iconContainer].join(" ")}>
                  <img src={ZoomOut} alt="" />
                </div>
              </div>
          }
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
  map: {
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
    },
    '&:hover': {
      opacity: 1,
    },
  }
}

export default injectSheet(styles)(MapPageWithClasses);
