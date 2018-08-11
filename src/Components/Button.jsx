import React from 'react';
import injectSheet from 'react-jss';

const ButtonWithClasses = ({
  classes, 
  className,
  buttonText,
  onClick,
}) => (
  <div 
    className={[classes.button, className].join(" ")}
    onClick={onClick}
  >
    {buttonText}
  </div>
);

const styles = {
  button: {
    backgroundColor: '#F05A28',
    width: 500,
    height: 70,
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '70px',
    cursor: 'pointer'
  }
}

export default injectSheet(styles)(ButtonWithClasses);
