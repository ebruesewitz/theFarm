import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import AustinMagiefarmhouse1841 from './images/AustinMagiefarmhouse1841.jpg';
import Blackcoveredbridge from './images/Blackcoveredbridge.jpg';
import ACallforNewRuralism from './images/ACallforNewRuralism.pdf';
import DesigningIFFarm from './images/DesigningIFFarm.jpg';
import SalsaMoonCoop from './images/SalsaMoonCoop.jpg';
import Newplots from './images/Newplots.jpg';
import CSAPackOut from './images/CSAPackOut.jpg';

const EducatingFromTheGroundUpWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Educating from the Ground Up'
      authorName='Ben Jacks & Marguerite S. Shaffer'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      hasMapButton
      mapPageLink="/"
      mapTextOverride="Return To Home Page"
      references={
        [
          <p>Kraus, Sibella, “A Call for New Ruralism: Reinvestment in Metro-Region Agriculture as Integral to Metro-Region Sustainability,” Smart Growth Network: National Conversation on the Future of Our Communities (February 2013).</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://www.nal.usda.gov/afsic"><p>USDA United States Department of Agriculture National Agriculture Library Alternative Farming Systems Information Center</p></a>,
        <a target="blank" href="https://www.sare.org/"><p>Sustainable Agriculture Research & Education</p></a>,
        <a target="blank" href="http://www.sustainableaged.org/"><p>Sustainable Agriculture Education Association</p></a>,
        <a target="blank" href="http://www.oeffa.org/"><p>Ohio Ecological Food and Farm Association (OEFFA)</p></a>,
        <a target="blank" href="http://www.sagecenter.org/publications/a-call-for-new-ruralism/"><p>A Call for New Ruralism</p></a>,
        <a target="blank" href={ACallforNewRuralism}><p>PDF: A Call for New Ruralism</p></a>,
      ]}
    >
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={AustinMagiefarmhouse1841} className={classes.image} alt="Austin- Magie farm house, 1841 (courtesy Laurel Himmell)."/>
          <figcaption>Austin- Magie farm house, 1841 (courtesy Laurel Himmell).</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Blackcoveredbridge} className={classes.image} alt="Black Covered (Pugh’s Mill) Bridge, 1869 (courtesy Stephen Gordon)"/>
          <figcaption>Black Covered (Pugh’s Mill) Bridge, 1869 (courtesy Stephen Gordon)</figcaption>
        </figure>
      </div>
      <p>The Austin-Magie Farm, also known as the Fryman Farm, is a familiar forgotten place in rural America. About 35 miles northwest of Cincinnati in southwestern Ohio and less than five miles from the Indiana border, it sits on the eastern edge of the Corn Belt. You drive north through box-store sprawl on State Route 27 from the beltway circling Cincinnati and gradually wind uphill to the town of Oxford, home to Miami University with its Neo-Georgian brick campus and gridded village referred to locally as the Square Mile. Heading north from the commercial heart of Oxford, the intersection of High and Main Streets, you gradually descend from the orderly cobbled bricks and transition to the Four Mile Creek basin on the state highway, Route 732. About a mile out of town you can begin to see the vestiges of the Old Road to Eaton as it’s marked on 19th century township maps. Black Covered Bridge, also known as Pugh’s Mill Bridge, seen just through the trees to the left, crosses Four Mile Creek as it flows south to the Great Miami River. Built in 1868-69 and one of the few remaining structures of its kind in Ohio, the bridge provides some indication that this was once an important commercial thoroughfare. Despite the fact that it now sits off on a little traveled side road and is more recreational space than commercial corridor, the bridge is obviously the product of skilled labor, heavy work, and robust engineering. Its wooden roof and 209-foot span, supported by a unique combination of Childs and Long trusses, show the time, energy, materials, and craft devoted to making this a durable, functional structure—a testament to the value of the thoroughfare.</p>
      <p>To understand Black Bridge you must travel a little further up Route 732 to the corner of Somerville Road. Just across Four Mile Creek, less than a quarter mile from the bridge, an abandoned brick farmhouse sits back from the road. As you turn down the drive you cross what seems to be a channel in the landscape, which marks the tail end of the mile-long millrace, the only remains of a mill complex which stood adjacent to Four Mile Creek at the corner of State Route 732 (the Old Road to Eaton) and Somerville Road for almost a century. The house is a two-story, Federal style, brick I-house with gable ends anchored by two massive chimneys. The symmetrical façade is a study in builder’s proportion with two sets of tall narrow nine-over-nine pane double hung windows flanking a central hall on the first and second floors. Inside, an elegant Greek revival staircase graces an entry hallway with 11-foot ceilings. This is the last standing vestige of the original Austin-Magie Farmstead. Despite its impressive stature, the house shows signs of neglect. The marker trees shading the entrance are long dead. The roof of a side porch added in the mid 20th century has collapsed and the screen door has fallen from its hinges. Some windowpanes are broken and wooden trim around the door and windows are pulling away from the frames. Although the structure and the roof are solid, vegetation is slowly creeping up around the foundation. The collapse of one of the marker trees on the roof will speed the demise of this well-built home, which has survived going on two centuries. </p>
      <p className={classes.pullQuote}>What defines the places that sustain us and how do we effectively sustain those places?</p>
      <p>If you’ve driven through the rural Midwest, you have seen these kinds of dilapidated places, well-built houses with large barns from another era, abandoned or slowly crumbling. It is a familiar landscape that sparks all sorts of questions. Who built these well-crafted structures? Who lived here? Who worked here? What is their story? What will become of these places? The Austin-Magie Farm and places like it still have the power to spark the imagination. Located in the rich bottomlands parallel to Four Mile Creek in Section 14 of Oxford Township, Butler County, Ohio, the farm has a long and rich history that links past and present, rural and urban, local and global.  This project—a chronicle of this place—is rooted in a pair of questions: What defines the places that sustain us and how do we effectively sustain those places?</p>
      <p>Sibella Kraus, founder and president of SAGE (Sustainable Agriculture Education), begins her call for the New Ruralism with the assertion that rural areas are “indispensible to the economic, environmental, social, and cultural vitality” of the metropolitan areas that surround and support them. She offers up a plan for smart growth that links sustainable agriculture and healthy food with local entrepreneurship and environmental stewardship (Kraus, 1).</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={DesigningIFFarm} className={classes.image} alt="Designing IF Farm. (courtesy Miami University Photo Services)"/>
          <figcaption>Designing IF Farm. (courtesy Miami University Photo Services)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Newplots} className={classes.image} alt="New plots on the Austin-Magie farm. (courtesy Claire Anderson)"/>
          <figcaption>New plots on the Austin-Magie farm. (courtesy Claire Anderson)</figcaption>
        </figure>
      </div>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={SalsaMoonCoop} className={classes.image} alt="Institute for Food salsa at the Moon Co-op, Oxford, OH. (courtesy Stephanie Beckner)"/>
          <figcaption>Institute for Food salsa at the Moon Co-op, Oxford, OH. (courtesy Stephanie Beckner)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={CSAPackOut} className={classes.image} alt="Packing out for the CSA. (courtesy Claire Anderson)"/>
          <figcaption>Packing out for the CSA. (courtesy Claire Anderson)</figcaption>
        </figure>
      </div>
      <p>In this vein, <b>Educating from the Ground Up</b> has two motives: It seeks to document a threatened historic farm—the Austin-Magie Farm—while also imagining and enacting a blueprint (greenprint) for its future. The maps, icons, images, and essays populating this website document the ecology, history, and local food system that define this place. The icons locate you in relation to the farm in relative scale and lead you to information about the topics they represent. Icons representing soil, water, and flora & fauna detail the first nature or ecosystems of the area. Icons representing the Archeology, Austin Mill Complex, Austin-Magie Farm, Bees, Black Covered Bridge, Corn & Cows, Migration and Settlement, and Pigs chronicle of the history of this place. Icons representing Breaking Ground, Food Security, Harvest, Institute for Food, Landscape Choreography, and We Believe document experiential education projects. And Icons representing Local Food, New Ruralism, and Sustainable Food explore the current local food system. Each icon is located on a map linked to the scale of the place it defines and impacts. You can move through the maps from the local to the global following the icons. Each is connected to a longer illustrated essay and links to resources. You will also find a printable PDF of a self-guided tour related to the icons.</p>
      <p><b>Educating from the Ground Up</b> is a project that has developed a life of its own.  Student, faculty, and community participants have given their time, talent, and energy to a project and a place larger than the sum of the individuals involved in an effort to imagine a more sustainable future. Enjoy!</p>
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
  figureContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'baseline',
    '& figure': {
      margin: '50px'
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

export default injectSheet(styles)(EducatingFromTheGroundUpWithClasses);