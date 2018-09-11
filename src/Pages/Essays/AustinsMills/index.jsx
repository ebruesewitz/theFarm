import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground2.jpg';
import CBarrows from './images/CBarrows.jpg';
import Evansgristmillplan from './images/Evansgristmillplan.jpg';
import PughsMill from './images/PughsMill.jpg';
import OxfordTownshipIndustryCensusData from './images/OxfordTownshipIndustryCensusData.pdf';
import OEvansTheYoungMillwright from './images/OEvansTheYoungMillwright.pdf';
import NationalRegisterApplication from './images/NationalRegisterApplication.pdf';

const AustinsMillsWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Austin’s Mills'
      authorName='Stephen Gordon'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/section14"
      references={
        [
          <p>Evans, Oliver. 1846. The Young Millwright and Miller’s Guide. Philadelphia: Lea & Blanchard.</p>,
          <p>James Leffel & Co. 2001. Website. intagemachinery.org/mfgindex/detail.aspx?id=2207</p>,
          <p>Steinberg, Theodore. 1991. Nature Incorporated: Industrialization and the Waters of New England. Amherst, MA: University of Massachusetts Press.</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://en.wikipedia.org/wiki/Austin%E2%80%93Magie_Farm_and_Mill_District"><p>Austin Magie Farm and Mill District (Wikipedia)</p></a>,
        <a target="blank" href="https://www.lanepl.org/research/smith-library/"><p>Smith Library of Regional History</p></a>,
        <a target="blank" href={OxfordTownshipIndustryCensusData}><p>1870 Oxford Township Industry Census Data</p></a>,
        <a target="blank" href={OEvansTheYoungMillwright}><p>Oliver Evans, The Young Millwright and Miller’s Guide, 1795</p></a>,
        <a target="blank" href={NationalRegisterApplication}><p>National Register Application</p></a>,
      ]}
    >
      <figure
        className={classes.figure}
      >
        <img src={CBarrows} className={classes.image} alt="Charles Barrows, Four Mile Creek and Bonham Road, ca. 1860 (courtesy McGuffey Museum, Oxford, OH)"/>
        <figcaption>Charles Barrows, Four Mile Creek and Bonham Road, ca. 1860 (courtesy McGuffey Museum, Oxford, OH)</figcaption>
      </figure>
      <p>For nearly a century, from 1815-1913, Austin’s Mill operated a few hundred feet north of the spot shown in a painting by Charles Barrow done in 1860. Four Mile Creek provided a nearly year-round supply of water used to power Austin’s Mill. In 1815, Aaron and Hannah Doty Austin, natives of New Jersey, came to Ohio and purchased 200 acres of land along Four Mile Creek in Section 14, Oxford Township. There, Austin constructed a mile-long millrace that channeled water from Four Mile Creek to his gristmill. The diverted water powered an overshot wheel that turned the shafts and buhr stones inside the three-story, heavy timber frame mill.</p>
      <p>Prior to the introduction of wood and coal powered steam engines, American manufacturing depended on water power. Water was harnessed to power water wheels, shafts and millstones that processed grain, to turn gears that powered saws for cutting lumber, and to power spindles and looms in the nation's textile mills. As a result, most of the nation's early inland communities owed their existence to the availability of water power (Steinberg 1991).</p>
      <figure
        className={classes.figure}
      >
        <img src={Evansgristmillplan} className={classes.image} alt="Evans’ grist mill plan, 1795, from Evans, Oliver. 1846. The Young Millwright and Miller’s Guide. Philadelphia: Lea & Blanchard."/>
        <figcaption>Evans’ grist mill plan, 1795, from Evans, Oliver. 1846. The Young Millwright and Miller’s Guide. Philadelphia: Lea & Blanchard.</figcaption>
      </figure>
      <p>Austin’s Mill was likely modeled after Oliver Evans' famous "Improved Merchant Flour Mill," a prototype invented in 1795 (Evans 1846). Austin also constructed a water-powered sawmill near the gristmill. By 1847, Austin's son Benjamin Franklin, or "Frank," served as the millwright and had re-built the original mill. Austin's operation included a three-story merchant grist mill, a water-powered, reciprocating sawmill where it is very likely timbers were later sawn for construction of the Black Covered Bridge (1868), and a two-story, center-hall Greek Revival style house, built ca. 1841. Of the three gristmills and four sawmills in Oxford Township in 1846, Austin's was the largest. The shallow dry channel still visible on the site functioned as the mill's tailrace.</p>
      <p className={classes.pullQuote}>" Today, the millrace, a remarkable 19th-century engineering achievement, is the most intact vestige of Austin's mill operation "</p>
      <p>Aaron Austin died in 1860 from an accidental fall. In 1869, James B. Pugh acquired the mill. Turbine water wheels, very likely employed from the prototype invented by James Leffel of Springfield, Ohio, turned three sets of buhrstones that produced custom and merchant flour (Leffel & Co. 2001). Three employees operated the mill for ten months out of a year. It is likely wheat and corn grown by David Magie, a nationally acclaimed local hog breeder, was ground at Austin’s Mill.</p>
      <figure
        className={classes.figure}
      >
        <img src={PughsMill} className={classes.image} alt="Pugh Mill, looking south-southeast, ca. 1900 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)"/>
        <figcaption>Pugh Mill, looking south-southeast, ca. 1900 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)</figcaption>
      </figure>
      <p>The Great Flood of 1913 spelled the demise of the century-old mill operation. By October 1919, the Hamilton Evening Journal reported: “The old Pugh mill race—a landmark in this vicinity—will soon be a memory. . . The bridge over the race on Morning Sun road has been removed and the bed of the race has been filled up. Sometime ago the old mill was sold to H S. Coulter who tore it down and disposed of the ancient timbers from which it was constructed. "</p>
      <p>Today, the millrace, a remarkable 19th-century engineering achievement, is the most intact vestige of Austin's mill operation. An early description noted: “The Tale [tail] race, passing from the mill in a southeasterly direction to the creek, is 66 rods long [1,089ft.] and to contain a space of land three rods wide [50ft.]." Remnants of the headrace [the former water channel north of Morning Sun Road] and tailrace [the channel south of the mills] attest to the former presence of early industry in Oxford Township.</p>
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
  pullQuote: {
    color: '#F05A28',
    width: '75%',
    margin: '50px auto',
    fontSize: '2em',
    fontFamily: 'komu-b',
    textAlign: 'justify',
    lineHeight: '1.5em',

  },
}

export default injectSheet(styles)(AustinsMillsWithClasses);