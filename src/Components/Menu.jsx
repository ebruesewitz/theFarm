import React from 'react';
import injectSheet from 'react-jss'
import {
  Link
} from 'react-router-dom'
import Logo from '../images/Logo_Small.png';
import Menu from '../images/Menu.svg';
import ExitMenu from '../images/exitMenu.svg';
import DownArrow from '../images/downArrow.svg';

const MenuWithClasses = ({
  classes, 
  isOpen,
  iconImages,
  onMenuClick,
  onArrowClick,
  selectedIcon,
  setSelectedIcon,
  shouldShowArrow,
  arrowDirection,
  children,
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
        <div onClick={onArrowClick} className={[classes.logoContainer, classes.downArrowContainer].join(' ')}>
          <img className={arrowDirection === 'up' ? classes.rotate : undefined} src={DownArrow} alt=""/>
        </div>
      }
      {
        iconImages && iconImages.length > 0 &&
          <div onClick={onArrowClick} className={[classes.logoContainer, classes.iconContainer].join(' ')}>
            {iconImages.map((iconImage)=>(
              <div>
                <img 
                  id={iconImage}
                  src={iconImage}
                  style={selectedIcon === iconImage ? {opacity: 1}: {opacity: .5}}
                  onClick={setSelectedIcon}
                  className={classes.mapIcon}
                />
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
            {children}
          </div>
          <div className={[classes.downArrowContainer, classes.exploreLink].join(" ")}>EXPLORE THE MAP</div>
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
      padding: '15px 0px',
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
  exploreLink: {
    fontSize: 22,
    margin: '5px 0px',
    paddingLeft: 50,
    boxSizing: 'border-box',
    '@media (max-width: 760px)': {
      width: 'auto',
      position: 'unset',
      border: 'none',
      backgroundColor: 'unset',
    },
  },
};

export default injectSheet(styles)(MenuWithClasses);