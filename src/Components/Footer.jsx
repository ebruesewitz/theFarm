import React from 'react';
import injectSheet from 'react-jss';
import InstituteForFoodLogo from './../images/InstituteForFoodLogo.png';
import OhioHumanities from './../images/OhioHumanities.png';
import Usda from './../images/Usda.jpg';

const FooterWithClasses = ({
  classes,
  className,
}) => (
  <div className={className ? [classes.footer, className].join(" ") : classes.footer}>
      <img src={InstituteForFoodLogo} alt=""/>
      <img src={OhioHumanities} alt=""/>
      <img src={Usda} alt=""/>
  </div>
);

const styles = {
  footer: {
    display: 'flex',
    height: 200,
    width: '100vw',
    backgroundColor: 'white',
    marginLeft: -200,
    padding: '50px 200px',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    '& img': {
      height: '100%',
      width: 'auto'
    }
  },
};

export default injectSheet(styles)(FooterWithClasses);
