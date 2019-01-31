import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import ExitMenu from '../images/exitMenu.svg';
import ZoomIn from '../images/zoomin.png';
import ZoomOut from '../images/zoomout.png';
import SmartMenu from '../Components/SmartMenu';

class MapPageWithClasses extends Component {
  constructor(){
    super();
    this.state = {
      selectedIcon: null,
    };
  }

  setSelectedIcon = (event) => {
    this.setState({selectedIcon: event.target.id});
  }

  clearSelectedIcon = () => {
    this.setState({selectedIcon: null});
  }

  render(){
    const {
      children,
      iconImages, 
      iconImageTitles, 
      iconInformationMap,
      mapImage,
      mapClassName,
      previousPageTitle,
      previousPageLink,
      pageTitle,
      nextPageTitle,
      nextPageLink,
      useWhiteText,
      classes
    } = this.props;

    return (
      <div>
        <SmartMenu 
          iconImages={iconImages} 
          iconImageTitles={iconImageTitles}
          selectedIcon={this.state.selectedIcon}
          setSelectedIcon={this.setSelectedIcon}
        />
        <div className={classes.homePage}>
          <div className={classes.pageContainer}>
            <div className={classes.imageContainer}>
              <img src={mapImage} className={[classes.map, mapClassName].join(" ")} />
            </div>
            {/* {
              previousPageTitle &&
              <h1 className={[classes.bannerText, classes.previousTitle].join(" ")}>{previousPageTitle}</h1>
            } */}
            <h1 className={classes.bannerText}>{pageTitle}</h1>
            {
              React.Children.map(children, child =>
                React.cloneElement(child, {
                  onClick: this.setSelectedIcon,
                  style: (!this.state.selectedIcon || child.props.id === this.state.selectedIcon) ? {opacity: 1} : {opacity: .5}
                })
              )
      
            }
            {
              this.state.selectedIcon && iconInformationMap && iconInformationMap[this.state.selectedIcon] &&
              <div className={classes.summaryContainer}>
                <div className={classes.exitIconContainer}>
                    <img onClick={this.clearSelectedIcon} src={ExitMenu} alt=""/>
                </div>
                <h2>{iconInformationMap[this.state.selectedIcon].articleTitle}</h2>
                { iconInformationMap[this.state.selectedIcon].thumbnails && 
                  <div className={classes.thumbnailContainer}>
                    {iconInformationMap[this.state.selectedIcon].thumbnails.map(thumbnail =>
                      <div>
                        <img src={thumbnail} alt=""/>
                      </div>
                    )}
                  </div>
                }
                <p>{iconInformationMap[this.state.selectedIcon].articleContent}</p>
                {iconInformationMap[this.state.selectedIcon].articleLink && (
                  iconInformationMap[this.state.selectedIcon].isExternalLink ? 
                    <a href={`${process.env.PUBLIC_URL}/pdf/LandscapeForBees.pdf`} target="blank">
                      <div className={classes.readMoreButton}>
                        Read More
                      </div>
                    </a>
                  :
                    <Link to={iconInformationMap[this.state.selectedIcon].articleLink}>
                      <div className={classes.readMoreButton}>
                        Read More
                      </div>
                    </Link>
                )
                }
              </div>
            }
            <div className={classes.zoomControls}>
              {
                nextPageTitle ?
                  <div className={classes.zoomIconAndText}>
                    <div className={classes.zoomText}><span style={useWhiteText ? {color: "white"}: undefined}>Zoom in to</span> <b className={classes.zoomTextTitle}>{nextPageTitle}</b></div>
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
                    <div className={classes.zoomText}>Zoom out to <b className={classes.zoomTextTitle}>{previousPageTitle}</b></div>
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
  }
}

const styles = {
  homePage: {
    width: '100vw',
    paddingLeft: 200,
    minHeight: '100vh',
    backgroundColor: '#D1D1CF',
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
    '@media (max-width: 760px)': {
      left: '-5vw',
    }
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
  summaryContainer: {
    width: '25vw',
    zIndex: 50,
    maxHeight: '60vh',
    backgroundColor: '#ffffff',
    overflowY: 'scroll',
    position: 'fixed',
    bottom: '25px',
    left: '130px',
    padding: '30px',
    '& h2': {
      fontFamily: 'komu-b',
      fontSize: 32,
      marginTop: 0,
      '@media(max-width: 760px)': {
        marginBottom: '15px',
      }
    },
    '@media (max-width: 760px)': {
      left: '15px',
      width: '60vw',
      padding: '15px',
      bottom: '100px',
      height: '40vh',
    },
  },
  thumbnailContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '& div': {
      height: 55,
      width: 'auto',
      maxHeight: 55,
    },
    '& img': {
      height: '100%',
    }
  },
  readMoreButton: {
    backgroundColor: '#F05A28',
    display: 'inline-block',
    padding: '15px 45px',
    color: '#ffffff',
    textTransform: 'uppercase',
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
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 20,
  },
  zoomTextTitle: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 5,
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
        width: 20,
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
  },
  exitIconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
    '& img': {
      cursor: 'pointer',
    }
  }
}

export default injectSheet(styles)(MapPageWithClasses);
