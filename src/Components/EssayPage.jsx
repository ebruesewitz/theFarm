import React, {Component} from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import SmartMenu from '../Components/SmartMenu';
import DefaultBackgroundImage from '../images/EssayBackground5.jpg';

class EssayPageWithClasses extends Component {
  constructor(){
    super();
    this.state = {areLinksOpen: false}
  }

  // componentDidMount(){
  //   if(window.innerWidth > 760){
  //     this.setState({areLinksOpen: true})
  //   }
  // }

  toggleMenu = () => {
    this.setState({areLinksOpen: !this.state.areLinksOpen})
  }

  render(){
    const {
      articleTitle,
      authorName,
      articleBackgroundImage=DefaultBackgroundImage,
      references,
      footNotes,
      resources,
      children,
      classes,
      className,
      headerClassName,
      mapPageLink,
      mapTextOverride,
    } = this.props;
    
    return (
      <div>
        <SmartMenu shouldShowArrow isArrowDirectionFixed/>
        {
          (resources || references || footNotes) &&
          <div className={classes.linksMenu} onClick={this.toggleMenu}>Resources &amp; References</div>
        }
        {
          (resources || references || footNotes) && this.state.areLinksOpen &&
          <div className={classes.linksContainer}>
            {
              footNotes && 
              <div>
                {footNotes}
              </div>
            }
            {
              references && 
              <div>
                <h2>References</h2>
                {references}
              </div>
            }
            {
              resources && 
              <div>
                <h2>Resources</h2>
                {resources}
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
            authorName &&
            <h2 className={classes.authorName}>{authorName}</h2>
          }
          <div className={[classes.childContainer, className].join(" ")}>
            {children}
            {mapPageLink && <Link to={mapPageLink}><p className={classes.mapLink}>{mapTextOverride || 'Return To Map'}</p></Link>}
          </div>
        </div>
      </div>
    );
  } 
}

const styles = {
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
      width: '100vw',
      right: 0,
      transform: 'initial',
      bottom: 0,
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
    textAlign: 'center',
    right: 50,
    backgroundColor: '#ffffff',
    borderRight: '2px solid #e4e4e4',
    // borderLeft: '2px solid #e4e4e4',
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
      width: '100vw',
      height: 'calc(100vh - 50px)',
      right: '0px',
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
  }
}

export default injectSheet(styles)(EssayPageWithClasses);
