import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground1.jpg';
import BlackCoveredBridge from './images/BlackCoveredBridge.jpg';
import OxfordMuseumAssociationBlackCoveredBridgeFlier from './images/OxfordMuseumAssociationBlackCoveredBridgeFlier.pdf';

const BlackCoveredBridgeWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Black (Pugh’s Mill) Covered Bridge'
      authorName='Ben Jacks'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/section14"
      resources={[
        <a target="blank" href="https://en.wikipedia.org/wiki/List_of_covered_bridges_in_Ohio"><p>List of Covered Bridges in Ohio</p></a>,
        <a target="blank" href="https://en.wikipedia.org/wiki/National_Register_of_Historic_Places"><p>National Register of Historic Places</p></a>,
        <a target="blank" href="http://coveredbridgesociety.org/trusses.html"><p>Covered Bridge Truss Types</p></a>,
        <a target="blank" href="http://coveredbridgesociety.org/default.htm"><p>National Society for Covered Bridges</p></a>,
        <a target="blank" href="http://www.bceo.org/news/nr990922.html"><p>Butler County Engineers Office on 1999 Restoration</p></a>,
        <a target="blank" href={OxfordMuseumAssociationBlackCoveredBridgeFlier}><p>Oxford Museum Association Flier</p></a>,
      ]}
    >
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={BlackCoveredBridge} className={classes.image} alt="Black Covered Bridge (courtesy Abby G)"/>
        <figcaption>Black Covered Bridge (courtesy Abby G)</figcaption>
      </figure>
      <p>To step into the Black Covered Bridge is to be transported to a time when architectural space could be felt more fully as constituting the most significant part of the reality of being. Such an experience allows the young architecture student to feel the power of silence as a transcendent and enduring architectural quality. I have at times taken my students there on a long walk from Alumni Hall and watched them burst variously into exhilaration and quiet reverie.</p>
      <p>After the initial first impression, we talk about the idea of structure. The Black (Pugh’s Mill) Covered bridge is a registered historic landmark, listed on the National Register of Historic Places in 1975. It was built in 1868-1869, with the timbers possibly milled a stone’s throw away at Pugh’s Mill, or else imported for the purpose from a region with wood of the appropriate specification. Covered bridges were built as they were for a variety of reasons, the most important being the protection of the wooden structure from the elements that would quickly reduce the bridge to rot, but also because a covered passage is a safe one, both for people and for horses. The structure consists of two superimposed truss types, “Child’s” and “Long,” as a consequence of being remodeled immediately following construction with the addition of a central pier beneath its 209-foot span.</p>
      <p className={classes.pullQuote}>" To step into the Black Covered Bridge is to be transported to a time when architectural space could be felt more fully as constituting the most significant part of the reality of being. "</p>
      <p>To visit the Black Covered Bridge a couple of years ago one had to duck off of Morning Sun Road, which was re-routed to avoid the bridge in the early 1950s. The bridge felt a bit forlorn, going from nowhere to nowhere, a mere relic. Once part of the Fryman Farm, the bridge is now part of the Oxford Recreational Trail. Phase One of the trail was recently completed: it runs along Morning Sun Road, underneath the bridge skirting Four Mile Creek, to the DeWitt Log Homestead. By spending time with the bridge and its emptiness, and the sound of the waters of Four Mile Creek moving below, it is possible to reimagine the overwhelming vitality it once housed.</p>
    </ EssayPage>
  );

const styles = {
  essayOverrides: {
    lineHeight: 1.7,
    '& sup': {
      fontSize: '.7em',
      color: '#F05A28',
    },
  },
  blockQuote: {
    width: '75%',
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: '15px auto'
  },
  figure: {
    margin: '50px auto',
    textAlign: 'center',
    width: '75%',
    '& figcaption': {
      fontSize: '.7em',
      letterSpacing: '0.2em',
      fontFamily: 'komu-b'
    }
  },
  figureOverride: {
    width: 'calc(50% - 100px)',
  },
  pullQuote: {
    color: '#F05A28',
    width: '75%',
    margin: '50px auto',
    fontSize: '2em',
    fontFamily: 'komu-b',
    textAlign: 'justify',
    lineHeight: '1.5em',

  },
};

export default injectSheet(styles)(BlackCoveredBridgeWithClasses);