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
      <img src={OhioHumanities} alt=""/>
      <img src={InstituteForFoodLogo} alt=""/>
      <img src={Usda} alt=""/>
  </div>
);

const styles = {
  footer: {
    display: 'flex',
    height: 150,
    width: '100vw',
    backgroundColor: 'white',
    marginLeft: -200,
    padding: '40px 350px 40px 200px',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    '& img': {
      height: '80%',
      width: 'auto'
    }
  },
};

export default injectSheet(styles)(FooterWithClasses);
