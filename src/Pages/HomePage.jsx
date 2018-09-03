import React from 'react';
import injectSheet from 'react-jss';
import Marquee from 'react-marquees';
import OxfordMapImage from '../images/ButlerCoAtlas1875OxfordTwnspMap.png';
import LargeLogoImage from '../images/Logo_Large.png';
import SmartMenu from '../Components/SmartMenu';
import Button from '../Components/Button';

const HomePageWithClasses = ({classes}) => (
  <div>
    <SmartMenu shouldShowArrow />
    <div className={classes.homePage}>
      <div className={classes.pageContainer}>
        <div>
          <img className={classes.largeLogo} src={LargeLogoImage} alt=""/>
          <h1 className={classes.bannerText}>The places</h1>
          <h1 className={classes.bannerText}>that sustain</h1>
          <h1 className={classes.bannerText}>us <span className={classes.orangeHighlight}>root us to</span></h1>
          <h1 className={[classes.bannerText, classes.orangeHighlight].join(" ")}>the earth.</h1>
        </div>
      </div>
      <div className={classes.pageContainer}>
        <h2 className={[classes.sectionTwoText, classes.headingText].join(" ")}>WHAT’S THIS ALL ABOUT?</h2>
        <p className={classes.sectionTwoText}>Educating From the Ground Up maps a particular place: a historic farm north of the city of Oxford, Ohio. A micro history that expands out through multiple layers, it explores the intricate connections that link agricultural areas to metropolitan regions—the country and the city—the local and the global. It traces the lay of the land and tracks agricultural development. It documents the economic, ecological, social and cultural value of rural places. And it advocates a vision for the New Ruralism.</p>
        <Button className={[classes.addMargin, classes.button].join(" ")} buttonText="EXPLORE THE MAP"/>
      </div>
      <div className={classes.marquee}>
        <Marquee
          direction="up"
          speed={.5}
        >
          <p>39°31’40”N 84°43’50”W; 240MAMSL</p>
          <p>Till Plains</p>
          <p>Great Miami River Watershed</p>
          <p>Four Mile Creek Basin</p>
          <p>Congress Lands West of Miami River</p>
          <p>Aaron Austin Farm</p>
          <p>Austin-Pugh Mill &amp; Race</p>
          <p>David M. Magie Farm</p>
          <p>Felix Fryman Farm</p>
          <p>Austin-Magie Farm &amp; Mill District</p>
          <p>Institute for Food</p>
          <p>Morning Sun Road &amp; Somerville Road</p>
          <p>State Route 732</p>
          <p>Section 14</p>
          <p>Oxford Township</p>
          <p>Butler County</p>
          <p>Oxford</p>
          <p>Ohio</p>
          <p>Corn Belt</p>
          <p>Midwest</p>
          <p>United States of America</p>
          <p>North America</p>
          <p>Western Hemisphere</p>
          <p>Planet Earth</p>
          <p>Home</p>
          <p>39°31’40”N 84°43’50”W; 240MAMSL</p>
          <p>Till Plains</p>
          <p>Great Miami River Watershed</p>
          <p>Four Mile Creek Basin</p>
          <p>Congress Lands West of Miami River</p>
          <p>Aaron Austin Farm</p>
          <p>Austin-Pugh Mill &amp; Race</p>
          <p>David M. Magie Farm</p>
          <p>Felix Fryman Farm</p>
          <p>Austin-Magie Farm &amp; Mill District</p>
          <p>Institute for Food</p>
          <p>Morning Sun Road &amp; Somerville Road</p>
          <p>State Route 732</p>
          <p>Section 14</p>
          <p>Oxford Township</p>
          <p>Butler County</p>
          <p>Oxford</p>
          <p>Ohio</p>
          <p>Corn Belt</p>
          <p>Midwest</p>
          <p>United States of America</p>
          <p>North America</p>
          <p>Western Hemisphere</p>
          <p>Planet Earth</p>
          <p>Home</p>
          <p>39°31’40”N 84°43’50”W; 240MAMSL</p>
          <p>Till Plains</p>
          <p>Great Miami River Watershed</p>
          <p>Four Mile Creek Basin</p>
          <p>Congress Lands West of Miami River</p>
          <p>Aaron Austin Farm</p>
          <p>Austin-Pugh Mill &amp; Race</p>
          <p>David M. Magie Farm</p>
          <p>Felix Fryman Farm</p>
          <p>Austin-Magie Farm &amp; Mill District</p>
          <p>Institute for Food</p>
          <p>Morning Sun Road &amp; Somerville Road</p>
          <p>State Route 732</p>
          <p>Section 14</p>
          <p>Oxford Township</p>
          <p>Butler County</p>
          <p>Oxford</p>
          <p>Ohio</p>
          <p>Corn Belt</p>
          <p>Midwest</p>
          <p>United States of America</p>
          <p>North America</p>
          <p>Western Hemisphere</p>
          <p>Planet Earth</p>
          <p>Home</p>
        </Marquee>
      </div>
    </div>
  </div>
);

const styles = {
  homePage: {
    width: '100vw',
    paddingLeft: 200,
    minHeight: '200vh',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundImage: `url(${OxfordMapImage})`,
    boxSizing: 'border-box',
    '@media (max-width: 760px)': {
      padding: '75px 0px 77px 0px'
    }
  },
  pageContainer: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  largeLogo: {
    margin: '10vh 0 5vh 0',
    height: '10vh',
    '@media (max-width: 760px)': {
      display: 'none',
    } 
  },
  bannerText: {
    fontFamily: "komu-b",
    fontSize: 'calc(70vh/4)',
    maxWidth: '50vw',
    margin: 0,
    '@media (max-width: 760px)': {
      maxWidth: '80vw',
      marginLeft: '10vw',
      fontSize: 70,
    }
  },
  orangeHighlight: {
    display: 'inline-block',
    position: 'relative',
    '&::before': {
      content: '""',
      backgroundColor: '#F05A28',
      position: 'absolute',
      width: 'calc(100% + 30px)',
      height: '65%',
      top: '30%',
      left: -15,
      zIndex: -1,
    }
  },
  sectionTwoText: {
    maxWidth: '50vw',
    textAlign: 'justify',
    fontFamily: 'brandon-grotesque',
    fontSize: 16,
    '@media (max-width: 760px)': {
      maxWidth: '85vw',
      marginLeft: '5vw',
    }
  },
  headingText: {
    fontFamily: "komu-b",
    fontSize: 32,
    marginTop: 0,
    marginBottom: 10,
  },
  addMargin: {
    marginTop: '5vh',
  },
  button: {
    height: '10vh',
    lineHeight: '10vh',
    fontSize: '3vh',
    '@media (max-width: 760px)': {
      width: '70vw',
      marginLeft: '5vw',
    }
  },
  marquee: {
    position: 'fixed',
    height: '100vh',
    top: 0,
    right: 0,
    '& p': {
      textAlign: 'right',
      textTransform: 'uppercase',
      opacity: .3,
      paddingRight: 50,
    },
    '@media (max-width: 760px)': {
      display: 'none',
    }
  }
}

export default injectSheet(styles)(HomePageWithClasses);
