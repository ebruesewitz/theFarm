import React from 'react';
import injectSheet from 'react-jss';
import MapPage from '../Components/MapPage';
import EarthImage from '../images/earth.jpg';

import WeBelieveIcon from '../images/WeBelieveIcon.png';
import WeBelieveThumbnail01 from './Essays/WeBelieve/images/thumbnails/thumbnail01.jpg';



const EarthMapWithClasses = ({
  classes
}) => (
    <MapPage
      iconImages={[WeBelieveIcon]}
      mapImage={EarthImage}
      pageTitle="Earth"
      nextPageTitle="United States"
      nextPageLink="/explore/unitedstates"
      classes
      iconInformationMap={{
        [WeBelieveIcon]: {
          articleTitle: "We believe...",
          articleContent: "When we met to envision the Institute for Food Farm in January, 2016," + 
            " the group of participants—students, faculty, and members of the Oxford" + 
            " community—responded to the prompt, “We believe in an Institute for Food.." + 
            " (fill in the blank).” Here are the somber, serious, playful, joyous, imaginative" + 
            " results—a snapshot of spontaneous collective wisdom.",
          articleLink: "/essays/webelieve",
          thumbnails: [WeBelieveThumbnail01],
        },
      }}
    >
      <img 
        alt="" 
        className={[classes.weBelieveIcon, classes.mapIcons].join(" ")}
        id={WeBelieveIcon}
        src={WeBelieveIcon}
      />
    </MapPage>
  );

const styles = {
  mapIcons: {
    position: 'absolute',
    height: '6vh',
    cursor: 'pointer',
    '&:hover': {
      opacity: '.7 !important',
    }
  },
  weBelieveIcon: {
    top: '43vh',
    left: 'calc(50vw + 8vh)',
  },
}

export default injectSheet(styles)(EarthMapWithClasses);
