import React from 'react';
import injectSheet from 'react-jss'
import {
  Link
} from 'react-router-dom'
import Logo from '../images/logo.1.svg';
import Menu from '../images/Menu.svg';
import ExitMenu from '../images/exitMenu.svg';
import DownArrow from '../images/downArrow.svg';
import InstituteForFoodLogo from './../images/InstituteForFoodLogo.png';
import OhioHumanities from './../images/OhioHumanities.png';
import Usda from './../images/Usda.jpg';
import Button from '../Components/Button';

const MenuWithClasses = ({
  classes, 
  isOpen,
  iconImages,
  iconImageTitles,
  onMenuClick,
  onArrowClick,
  selectedIcon,
  setSelectedIcon,
  shouldShowArrow,
  arrowDirection,
  children,
  mapPageLink = "/explore/earth",
  shouldShowMapLink,
}) => (
  <div className={isOpen ? classes.blurSiblings : classes.menuContainer}>
    <div className={classes.leftMenu}>
      <div className={classes.topMenuContainer}>
        <Link to={`/`}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={Logo} alt=""/>
          </div>
        </Link>
        <div onClick={onMenuClick} className={[classes.logoContainer, classes.menuIconContainer].join(' ')}>
            <img src={isOpen ? ExitMenu : Menu} alt=""/>
        </div>
      </div>
      { shouldShowArrow &&
      <div className={classes.mapLinkContainer}>
        {shouldShowMapLink && <div className={classes.mapLink}><Link to={mapPageLink} >RETURN TO MAP</Link></div>}
        <div onClick={onArrowClick} className={[classes.logoContainer, classes.downArrowContainer].join(' ')}>
          <img className={arrowDirection === 'up' ? classes.rotate : undefined} src={DownArrow} alt=""/>
        </div>
      </div>
      }
      {
        iconImages && iconImages.length > 0 &&
          <div onClick={onArrowClick} className={[classes.logoContainer, classes.iconContainer].join(' ')}>
            {iconImages.map((iconImage, index)=>(
              <div>
                <img 
                  id={iconImage}
                  src={iconImage}
                  style={selectedIcon === iconImage ? {opacity: 1}: {opacity: .5}}
                  onClick={setSelectedIcon}
                  className={classes.mapIcon}
                />
                <p className={classes.iconTitle}>{iconImageTitles[index]}</p>
              </div>
            ))}
          </div>
      }
    </div>
    { isOpen &&
      <div className={classes.rightMenu}>
        <div className={classes.rightMenuContent}>
          <div className={classes.rightMenuChildren}>
            <Link to={`/`}>HOME</Link>
            <Link to={`/contact`}>CONTACT</Link>
            <Link to={`/contributors`}>CONTRIBUTORS</Link>
            {children}
          </div>
          <div>
            <div className={classes.logos}>
                <div>
                  <img src={OhioHumanities} alt=""/>
                </div>
                <div>
                  <img src={InstituteForFoodLogo} alt=""/>
                </div>
                <div>
                  <img src={Usda} alt=""/>
                </div>
            </div>
            <Link to="/explore/earth">
              <Button className={classes.button} buttonText="EXPLORE THE MAP"/>
            </Link>
          </div>
        </div>
        <div className={classes.blurContent}/>
      </div>
    }
  </div>
);

const styles = {
  menuContainer: {
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    zIndex: 100,
    '@media (max-width: 760px)': {
      height: 'unset',
      flexDirection: 'column',
      width: '100vw',
    }
  },
  logos: {
    display: 'flex',
    width: '90%',
    margin: '20px auto',
    height: 50,
    justifyContent: 'space-around',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    '& img': {
      maxWidth: '90%',
      maxHeight: '100%',
    }
  },
  button: {
    width: '80%',
    margin: 'auto'
  },
  rotate: {
    transform: 'rotate(180deg)',
  },
  blurSiblings: {
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    zIndex: 100,
    '& ~ *': {
      filter: 'blur(15px)',
    },
    '@media (max-width: 760px)': {
      flexDirection: 'column'
    }
  },
  leftMenu: {
    borderRight: '1px solid #E4E4E4',
    width: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 760px)': {
      width: '100vw',
      height: 75,
      flexDirection: 'row',
      alignItems: 'center',
    }
  },
  rightMenu: {
    height: '100vh',
    display: 'flex',
    '@media (max-width: 760px)': {
      height: 'calc(100vh - 75px)',
      width: '100vw',
      zIndex: 1001,
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #E4E4E4',
    }
  },
  rightMenuContent: {
    width: 400,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#F05A28',
    fontSize: 22,
    paddingTop: 100,
    '& a': {
      color: '#F05A28',
      textDecoration: 'none',
      paddingLeft: 50,
      marginTop: 40,
    },
    '@media (max-width: 760px)': {
      height: 'calc(100vh - 75px)',
      width: '100vw',
      paddingTop: 10,
    }
  },
  rightMenuChildren: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 100px)',
  },
  blurContent: {
    width: 'calc(100vw - 500px)',
    backgroundColor: 'rgba(251,251,251, .5)',
  },
  topMenuContainer: {
    width: '100%',
    '@media (max-width: 760px)': {
      display: 'flex',
      borderBottom: '1px solid #E4E4E4',
      justifyContent: 'space-between',
    }
  },
  logoContainer: {
    width: '100%',
    borderBottom: '1px solid #E4E4E4',
    padding: '25px 0px',
    textAlign: 'center',
    cursor: 'pointer',
    '@media (max-width: 760px)': {
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      width: 'auto',
      padding: 20,
      borderRight: '1px solid #E4E4E4',
      borderLeft: '1px solid #E4E4E4',
      borderBottom: 'none',
    }
  },
  logo: {
    width: 50,
    height: 'auto',
    flexGrow: 0,
    '@media (max-width: 760px)': {
      height: 35,
      width: 'auto',
    }
  },
  menuIconContainer: {
    padding: '40px 0px',
    '@media (max-width: 760px)': {
      padding: 20,
    }
  },
  mapIcon: {
    '&:hover': {
      opacity: '1 !important',
    }
  },
  downArrowContainer: {
    width: '100%',
    borderTop: '1px solid #E4E4E4',
    padding: '40px 0px',
    cursor: 'pointer',
    '& img': {
      height: 25,
      width: 'auto',
    },
    '@media (max-width: 760px)': {
      position: 'fixed',
      bottom: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      border: '1px solid #E4E4E4',
      width: 75,
      height: 75,
      zIndex: 90,
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  iconContainer: {
    width: '100%',
    borderTop: '1px solid #E4E4E4',
    padding: '15px 0px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 220px)',
    overflow: 'scroll',
    '& img': {
      padding: '15px 0px 0px 0px',
      height: 50,
      width: 'auto',
      '@media (max-width: 760px)': {
        height: 40,
      }
    },
    '@media (max-width: 760px)': {
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: '#FFFFFF',
      border: '1px solid #E4E4E4',
      width: '100vw',
      flexDirection: 'row',
      padding: '0px 15px',
      height: 75,
      zIndex: 90,
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxSizing: 'border-box',
      '& img': {
        padding: '0px 15px',
      },
    }
  },
  iconTitle: {
    color: 'rgba(0,0,0,.23)',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 0,
    '@media (max-width: 760px)': {
      display: 'none',
    }
  },
  exploreLink: {
    fontSize: 22,
    margin: '5px 0px',
    padding: '37px 0px 37px 50px',
    boxSizing: 'border-box',
    '@media (max-width: 760px)': {
      width: 'auto',
      position: 'unset',
      border: 'none',
      backgroundColor: 'unset',
    },
  },
  mapLinkContainer: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  mapLink: {
    maxWidth: '90%',
    margin: '12px auto',
  }
};

export default injectSheet(styles)(MenuWithClasses);