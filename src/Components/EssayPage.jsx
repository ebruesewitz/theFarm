import React from 'react';
import injectSheet from 'react-jss';
import ArticleBackgroundImage from '../images/articlebackground.jpg';
import SmartMenu from '../Components/SmartMenu';

const EssayPageWithClasses = ({
  articleTitle,
  authorName,
  contributors,
  links,
  children,
  classes,
}) => (
  <div>
    <SmartMenu/>
    <img src={ArticleBackgroundImage} alt="" className={classes.backgroundImage}/>
    <div className={classes.homePage}>
      { articleTitle &&
        <h1 className={classes.bannerText}>{articleTitle}</h1>
      }
      {
        authorName &&
        <h2 className={classes.authorName}>{authorName}</h2>
      }
      <div className={classes.childContainer}>
        {children}
      </div>
    </div>
  </div>
);

const styles = {
  homePage: {
    width: '100vw',
    paddingLeft: 200,
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 760px)': {
      padding: '75px 0px 77px 0px'
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
    marginTop: 150,
  }
}

export default injectSheet(styles)(EssayPageWithClasses);
