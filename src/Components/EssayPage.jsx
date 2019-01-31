import React, {Component} from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import SmartMenu from '../Components/SmartMenu';
import Button from './Button';

class EssayPageWithClasses extends Component {
  constructor(){
    super();
    this.state = {areLinksOpen: false}
  }

  toggleMenu = () => {
    this.setState({areLinksOpen: !this.state.areLinksOpen})
  }

  render(){
    const {
      articleTitle,
      authorName,
      articleBackgroundImage,
      hasMapButton,
      references,
      footNotes,
      resources,
      children,
      classes,
      className,
      headerClassName,
      mapPageLink,
      mapTextOverride,
      subTitle,
    } = this.props;
    
    return (
      <div>
        <SmartMenu shouldShowArrow isArrowDirectionFixed mapPageLink={mapPageLink} shouldShowMapLink/>
        {
          (resources || references) &&
          <div className={classes.linksMenu} onClick={this.toggleMenu}>Resources &amp; References</div>
        }
        {
          (resources || references) && this.state.areLinksOpen &&
          <div className={classes.linksContainer}>
            {
              resources && 
              <div>
                <h2>Resources & PDFs</h2>
                {resources}
              </div>
            }
            {
              references && 
              <div>
                <h2>References</h2>
                {references}
              </div>
            }
          </div>
        }
        { articleBackgroundImage && <img src={articleBackgroundImage} alt="" className={classes.backgroundImage}/>}
        <div className={classes.homePage}>
          { articleTitle &&
            <h1 className={[classes.bannerText, headerClassName].join(" ")}>{articleTitle}</h1>
          }
          {
            subTitle &&
            <h1 className={[classes.bannerText, classes.subtitleText, headerClassName ].join(" ")}>{subTitle}</h1>
          }
          {
            authorName &&
            <h2 className={classes.authorName}>{authorName}</h2>
          }
          <div className={[classes.childContainer, className].join(" ")}>
            {children}
            {
              footNotes &&
              <div>
                <div className={classes.sectionDivider} />
                {footNotes}
                {
                  (resources || references) &&
                  <div className={classes.linksContainerMobile}>
                    {
                      resources && 
                      <div>
                        <h2>Resources & PDFs</h2>
                        {resources}
                      </div>
                    }
                    {
                      references && 
                      <div>
                        <h2>References</h2>
                        {references}
                      </div>
                    }
                  </div>
                }
                <div className={classes.sectionDivider} />
              </div>
            }
            {mapPageLink && <Link to={mapPageLink}><p className={classes.mapLink}>{mapTextOverride || 'Return To Map'}</p></Link>}
            {hasMapButton && 
              <Link to="/explore/earth">
                <Button className={classes.addMargin} buttonText="EXPLORE THE MAP"/>
              </Link>
            }
          </div>
        </div>
      </div>
    );
  } 
}

const styles = {
  addMargin: {
    margin: '50px 0px',
  },
  linksMenu: {
    width: '100vh',
    height: '50px',
    transform: 'rotate(270deg)',
    zIndex: '100',
    position: 'fixed',
    bottom: 'calc(50vh - 25px)',
    textAlign: 'center',
    right: 'calc(-50vh + 25px)',
    backgroundColor: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: 'komu-b',
    fontSize: '32px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#F05A28'
    },
    '@media (max-width: 760px)': {
      display: 'none',
      visibility: 'hidden',
    }
  },
  linksContainer: {
    width: '20vw',
    height: '100vh',
    zIndex: '99',
    position: 'fixed',
    top: '0',
    padding: 15,
    overflowY: 'scroll',
    right: 50,
    backgroundColor: '#ffffff',
    borderRight: '2px solid #e4e4e4',
    textAlign: 'left',
    boxSizing: 'border-box',
    boxShadow: '-4px 0px 10px 1px rgba(0, 0, 0, .2)',
    '& h2': {
      fontFamily: 'komu-b',
      textAlign: 'center',
    },
    '& a': {
      color: '#F05A28',
      textDecoration: 'none',
    },
    '@media (max-width: 760px)': {
      display: 'none',
      visibility: 'hidden',
    }
  },
  linksContainerMobile: {
    display: 'none',
    visibility: 'hidden',
    '& h2': {
      fontFamily: 'komu-b',
      textAlign: 'center',
    },
    '& a': {
      color: '#F05A28',
      textDecoration: 'none',
    },
    '@media (max-width: 760px)': {
      display: 'block',
      visibility: 'unset',
    }
  },
  homePage: {
    width: '100vw',
    paddingLeft: 200,
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 760px)': {
      padding: '75px 0px 77px 0px',
      textAlign: 'center',
    }
  },
  backgroundImage: {
    position: 'absolute',
    width: '100vw',
    height: 'auto',
    top: 0,
    left: 0,
  },
  bannerText: {
    fontFamily: "komu-b",
    fontSize: 125,
    maxWidth: '50vw',
    margin: 0,
    marginTop: '30vh',
    '@media (max-width: 760px)': {
      maxWidth: '80vw',
      marginLeft: '10vw',
      fontSize: 70,
    }
  },
  subtitleText: {
    marginTop: 0,
  },
  authorName: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 400,
    marginTop: 0,
  },
  childContainer: {
    width: '50vw',
    marginTop: 50,
    marginBottom: 150,
    '@media (max-width: 760px)': {
      margin: 'auto',
      width: '90vw',
    }
  },
  mapLink: {
    marginTop: 50,
    color: '#F05A28',
    borderBottom: '2px solid #F05A28',
    display: 'inline',
  },
  sectionDivider: {
    width: '60%',
    borderBottom: '2px solid #F05A28',
    margin: '50px auto'
  },
}

export default injectSheet(styles)(EssayPageWithClasses);
