import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground5.jpg';
import LangstrothCottage from './images/langstrothcottage.jpg';
import AdvertisementLangstrothHive from './images/advertisementlangstrothhive.jpg';
import LangstrothLindenTrees from './images/langstrothlindentrees.jpg';
import LangstrothAIRootMedina from './images/langstrothairootmedina.jpg';
import AIRootLangstrothSketchManuscript from './images/AIRootLangstrothSketchManuscript.pdf';
import BeeManofOxfordManuscript from './images/BeeManofOxfordManuscript.pdf';
import FNaileLangstrothSketchManuscript from './images/FNaileLangstrothSketchManuscript.pdf';
import JBrooksBeeKeeperofOxfordManuscript from './images/JBrooksBeeKeeperofOxfordManuscript.pdf';
import LangstrothBeeLibraryBibliography from './images/LangstrothBeeLibraryBibliography.pdf';

const BeesWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Lorenzo Langstroth and the Birth of American Beekeeping'
      authorName='Adam Ebert'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/oxford"
      references={
        [
          <p>Jennie Brooks, “Memories of Langstroth by one who Knew him in Her Childhood,” The Bee-Keepers’ Review vol. 22 (Feb. 22, 1909), 39-42.</p>,
          <p>Curry, Crossan Hays. 1976. The Bee-Man of Oxford and Langstroth Cottage: Commemorative Impressions of Lorenzo Lorraine Langstroth, His Contributions and His Ohio Home. Oxford, OH: Oxford Printing.</p>,
          <p>Langstroth, Lorenzo Lorraine. 1853. Langstroth on the Hive and the Honey-Bee, 1st ed. Northampton, MA: Hopkins, Bridgman & Co.</p>,
          <p>Langstroth, Lorenzo Lorraine. 1861. MS “Journal on Bees.” Ithaca: NY: Everett Franklin Phillips Collection, Cornell University.</p>,
          <p>Langstroth, Lorenzo Lorraine. 1893. “Reminiscences” [typescripts for publications in Gleanings in Bee Culture v. 21 (1893), 80-81.] Ithaca: NY: Everett Franklin Phillips Collection, Cornell University.</p>,
          <p>Naile F, Phillips E. 1976. America's Master of Bee Culture: The Life Of L. L. Langstroth. Ithaca, N.Y.: Cornell University Press.</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://en.wikipedia.org/wiki/L._L._Langstroth"><p>L. L. Langstroth (Wikipedia)</p></a>,
        <a target="blank" href="https://www.abfnet.org/"><p>American Beekeeping Federation</p></a>,
        <a target="blank" href="http://www.ohiostatebeekeepers.org/"><p>Ohio State Beekeepers Association</p></a>,
        <a target="blank" href="http://www.swohiobeekeepers.com/"><p>Southwestern Ohio Beekeepers Association</p></a>,
        <a target="blank" href="https://u.osu.edu/beelab/monitoring-with-alex-zomchek/"><p>Monitoring Your Bees with Alex Zomchek</p></a>,
        <a target="blank" href="https://xerces.org/"><p>Xerces Society for Invertebrate Conservation</p></a>,
        <a target="blank" href="https://www.beeculture.com/build-original-langstroth-hive/"><p>Build the Original Langstroth Hive</p></a>,
        <a target="blank" href={AIRootLangstrothSketchManuscript}><p>A. I. Root Langstroth Sketch Manuscript</p></a>,
        <a target="blank" href={BeeManofOxfordManuscript}><p>Bee Man of Oxford Manuscript</p></a>,
        <a target="blank" href={FNaileLangstrothSketchManuscript}><p>F. Naile Langstroth Sketch Manuscript</p></a>,
        <a target="blank" href={JBrooksBeeKeeperofOxfordManuscript}><p>J. Brooks Bee-Keeper of Oxford Manuscript</p></a>,
        <a target="blank" href={LangstrothBeeLibraryBibliography}><p>Langstroth Bee Library Bibliography</p></a>,
      ]}
    >
      <figure
        className={classes.figure}
      >
        <img src={LangstrothCottage} className={classes.image} alt="Langstroth cottage, Miami University (Adam Ebert photo)"/>
        <figcaption>Langstroth cottage, Miami University (Adam Ebert photo)</figcaption>
      </figure>
      <p>Lorenzo Lorraine Langstroth spent an internationally influential portion of his life in the vicinity of the Austin-Magie Farm. The “Langstroth Cottage” on Miami University’s campus is a national historical landmark precisely due to the length and significance of his residence in that place.</p>
      <p>Arriving in Oxford in 1858, several years had passed since the hive innovation that eventually brought him fame as the reputed “Father of American beekeeping.” In the lore of bee culture, 1852 is the landmark year when he patented the movable-frame hive that enabled the type of hobby and commercial beekeeping that eventually encompassed the bulk of nations that adopted some form of “modern beekeeping.” The key was integrating the famous “bee space” of one-quarter to three-eighths of an inch around the frames that hold the bees’ combs inside the hive box. The bees tend to leave this space relatively open and unencumbered by cross-combs, allowing beekeepers to more practically and profitably inspect and harvest from movable-frame hive systems (Naile 1976 and Curry 1976).</p>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={AdvertisementLangstrothHive} className={classes.image} alt="Advertisement for Langstroth movable-frame hive (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, Ohio)"/>
        <figcaption>Advertisement for Langstroth movable-frame hive (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, Ohio)</figcaption>
      </figure>
      <p>While it is hard to imagine that Langstroth could have conceived of the scale of the 21<sup style={{color: 'black'}}>st</sup> century almond pollination that draws millions of hives from across the United States, in the early 1860s he clearly regretted that there were “few if any cultivators of the bee in this country who have very large Apiaries,” and he saw opportunity to “make the keeping of bees a business of great importance” (Langstroth 1861).</p>
      <p>It was from Oxford that he participated in the slower process that inevitably accompanied the new hive’s popularization. It eventually replaced most of the other forms of everyday beekeeping, and some beekeepers pressed the movable-frame hive toward its economic promise, pursuing larger-scale operations that specialized in selling bees and bulk quantities of honey and wax. The transformation was not instant.</p>
      <p>Indeed, Langstroth emphasized that “[i]t cannot be too strongly urged upon all who keep bees, either for love or for money, to be exceedingly cautious in trying any new hive, or new system of management” (Langstroth 1853, 297). While people in the past are sometimes criticized for taking time to accept the potential of a technology, the reality was that many other patent hives were introduced in the decades surrounding Langstroth’s model. He did not really blame people for skepticism since he believed that the long list of “improved hives, without an improved system of management, have done on the whole more harm than good” (Langstroth 1853, 251). Despite these reservations, he certainly envisioned a sea-change in practical beekeeping connected to the Langstroth hive. His residence in Oxford from 1858-1887 covers a crucial period of popularization and refinement that followed his moment of innovation.</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={LangstrothAIRootMedina} className={classes.image} alt="Lorenzo Langstroth at the A. I. Root Company, Medina, Ohio (courtesy of American Philosophical Society, Philadelphia, PA)"/>
          <figcaption>Lorenzo Langstroth at the A. I. Root Company, Medina, Ohio (courtesy of American Philosophical Society, Philadelphia, PA)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={LangstrothLindenTrees} className={classes.image} alt="Lorenzo Langstroth and Linden trees, Oxford, Ohio (courtesy of American Philosophical Society, Philadelphia, PA)"/>
          <figcaption>Lorenzo Langstroth and Linden trees, Oxford, Ohio (courtesy of American Philosophical Society, Philadelphia, PA)</figcaption>
        </figure>
      </div>
      <p>At the time of his hive’s invention, Langstroth was more of a knowledge consumer rather than an apicultural luminary. He recalled that in the early 1850s, he only knew many of the British and European aspects of bee culture due to a few treatises he had read, noting that his proper orientation in bee culture took extra time because he “knew absolutely nothing of the vast literature of bee-keeping, and of course my progress was very slow” (Langstroth 1893, 80-81). Consequently, his years in Oxford spanned the period when his knowledge, reputation, and correspondence rose toward greater heights of recognition. In addition to much letter writing, his revised versions of <i>Langstroth on the Hive and the Honey-Bee</i> and periodic articles in the nationally-circulated <i>American Bee Journal</i> and <i>Gleanings in Bee Culture</i> reached the beekeeping public that felt his legacy.</p>
      <p>Langstroth left a mark on the land as well, planting bee-friendly flowers and trees around the cottage that still bears his name as a national historical site. Surrounding acres bore wild flowers, and he devoted another acre to an English-style garden. He adorned the old “State Road” with basswood (linden) trees that could yield tremendous quantities of nectar during favorable weather. The area was an elaborate honey garden devoted to his beloved bees. Indeed, Jennie Brooks recollected Langstroth from her youth and his habit of regularly visiting his neighbor, Dr. McFarland, to share his enthusiasm for the flowers that cropped up in his botanical adventures (Brooks 1909, 39-42). Just as he devoted his attention to bees and their hives, he was one of the many bee lovers who concentrated on providing a favorable environment for them as well. It would be fitting if the nearby Austin Magie Farm and its mill site could one day provide pollinator habitat as well. Langstroth’s father and grandfather owned mills in the Philadelphia area.</p>
      <p className={classes.pullQuote}>" Langstroth left a mark on the land as well, planting bee-friendly flowers and trees around the cottage that still bears his name as a national historical site. "</p>
      <p>A vitally important part of Langstroth’s life involved his fragile constitution. He periodically fell prey to fits of depression and ill health that he referred to as “melancholia” or “head trouble.” Their severity sometimes proved lengthy and crushing, occasionally causing him to give up all employment—including paying heed to his bees. A brutal attack in 1852 (pre-Oxford) caused him to sell his bees and utterly “abandon the business for a season” (Langstroth 1893, 206-207). Jennie Brooks, the youthful neighbor mentioned previously, remembered chess as his sole companion in the stretches of illness that befell him later in life.  She appreciated the artful analysis of the game that he taught her, though she also alleged that he regarded chess with some trepidation since it was his primary retreat in the depths of “profound melancholy” (Brooks 1909, 40).</p>
      <p>Ultimately, Langstroth’s residence in Oxford included heavy doses of all the aspects of life that defined his character. He became internationally established as a renowned innovator and respected commentator and observer of bees. Italian queens rose in prominence during the 1860s, and he and his son imported and helped distribute them throughout America, contributing to the biological transformation of the very bees populating hives. Today, Italian bees are the most popular type of bees in the United States. The duration of his apicultural life, however, was punctuated with the personal struggle and health challenges that threatened to overwhelm his capacity to endure. In the end, however, he eventually departed Oxford (1887) for Dayton and the home of his daughter. It was not a final farewell. In addition to friendships in the area, Oxford Cemetery was the resting place of his wife and mother. As a result, the environment that he helped shape around the Langstroth Cottage was graced with his presence from time to time in the years preceding his 1895 death at the pulpit of a Dayton church.</p>
      <p>Despite his status in the beekeeping community, Langstroth never achieved wealth from apiculture. Patent infringement and health limitations prevented the accumulation of a personal fortune during his Oxford period. He lived long enough to see other beekeepers adopt his hive in broad geographies—sometimes on a scale counting hundreds of hives and a few truly commercial enterprises eclipsing one thousand. While financial comfort eluded him, he perhaps took solace in knowing that his hive innovation had at least made a decisive difference. After remedying his ignorance of the “vast literature of bee-keeping” in the second half of the 1800s, he acknowledged the many people who had also aspired to make meaningful contributions—sometimes hovering on the brink of his own design. He marveled that “[t]o fail, after coming so near to success, has been the hard lot of how many inventors!” (Langstroth 1893, 60-61). That fate he escaped.</p>
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
  headerOverride: {
    fontSize: 80,
    '@media (max-width: 760px)': {
      fontSize: 60,
    }
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
    '@media (max-width: 500px)': {
      width: '75%',
    }
  },
  figureContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'baseline',
    '& figure': {
      margin: '50px'
    },
    '@media (max-width: 500px)': {
      flexDirection: 'column',
    }
  },
  sectionDivider: {
    width: '30%',
    borderBottom: '4px solid #F05A28',
    margin: '50px auto'
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

export default injectSheet(styles)(BeesWithClasses);