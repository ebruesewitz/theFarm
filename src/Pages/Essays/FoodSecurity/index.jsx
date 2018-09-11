import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import Picture1 from './images/Picture1.jpg';
import Picture3 from './images/Picture3.jpg';
import Picture2 from './images/Picture2.png';
import Picture4 from './images/Picture4.png';

const FoodSecurityWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Miami University Institute for Food Outreach Program: Increasing Access to Fresh Vegetables'
      authorName='Beth Miller'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/oxford"
    >
      <p>A diet rich in fruits and vegetables has been associated with lower risks of chronic diseases such as heart disease, stroke, diabetes and several types of cancers. In addition, eating fruits and vegetables as a replacement for other high calorie foods helps with preventing obesity. Food secure households have access to enough food, as well as healthy food, for an active, healthy life at all times. Families that have limited income or resources generally have reduced access to healthy food choices, which contributes to a lower intake of fruit and vegetables, a lower quality diet, and obesity. For families with children, summer can be a challenging time because free or reduced-price school meals are not available and families need additional access to food. Local programs such as the Oxford Community Choice Pantry (OCCP) assist in reducing food insecurity by providing access to foods, although the foods provided in these programs are primarily shelf-stable, processed foods, and canned goods rather than fresh produce. To help reduce the burden in the summer months, The OCCP created the Summer Harvest Program in which families with children receive an additional bag of food at their bi-weekly visits, but this program does not include any fresh produce.</p>
      <p>Providing access to fresh produce has shown to increase the intake of fruits and vegetables and improves food security. However, it is equally important to help people increase their nutrition-related skills, knowledge, and attitudes so that they can make healthier food choices, prepare those healthy foods, and establish sustainable nutrition behaviors. Teaching nutrition, gardening and cooking skills in combination with providing resources for families to grow their own food is an emerging strategy to reduce food insecurity, prevent obesity and provide a long-term sustainable solution to improve access to fresh fruits and vegetables.</p>
      <p className={classes.pullQuote}>Teaching nutrition, gardening and cooking skills in combination with providing resources for families to grow their own food is an emerging strategy to reduce food insecurity, prevent obesity and provide a long-term sustainable solution to improve access to fresh fruits and vegetables.</p>
      <p>To address this need to reduce food insecurity and provide access to produce locally, the Miami University Institute for Food received funding for an Outreach Program that was started in the summer of 2017. The program is fighting food insecurity through a housing-based garden project at the Parkview Arms housing complex that provides garden and nutrition education, skills, and resources to build the self-sufficiency of low-income children and families. In the Spring of 2017 the garden was built at the housing complex and a CSA program was designed for families in both the Garden Program at PVA and the Summer Harvest Program at the OCCP. The goal of the CSA outreach was to supplement families with produce items that were not grown in the PVA garden or not received through the Summer Harvest Program. The program also provided experiential learning for Miami students in Nutrition and Food Studies due to the fact that the nutrition team harvested the shares to be delivered to the families.</p>
      <p>Children living in the PVA housing complex participated in a 10 week (13 session) <i>PVA Garden Program</i> where they learned to plant, water, weed, compost, and harvest produce. </p>
      <div
        className={classes.figure}
      >
        <img src={Picture1} className={classes.image}/>
      </div>
      <p>They also participated in hands-on vegetable preparation and nutrition/cooking workshops and received CSA supplemental produce along with simple recipes weekly. Families received knives, cutting boards, vegetable peelers, MyPlate plates, and water bottles as incentives for participation.</p>
      <div
        className={classes.figure}
      >
        <img src={Picture2} className={classes.image}/>
      </div>
      <p>Families in the Summer Harvest Program at the OCCP received CSA supplemental produce and recipes bi-weekly with their regularly scheduled visit to the pantry. This was in addition to the extra food provided through the Summer Harvest Program.</p>
      <div
        className={classes.figure}
      >
        <img src={Picture3} className={classes.image}/>
      </div>
      <p>The results of the project so far indicate that the children in the gardening program have an increased self-efficacy for gardening and vegetable preparation. The impact of the garden on the housing community has been positive. Parents said they and their children enjoyed and respected the community garden established at their apartment complex. They shared that the garden helped their children grow in maturity, independence and responsibility. The children have taken pride in their garden, but more work needs to occur to increase the sense of ownership for the garden by the parents and children. The children in the garden program developed a liking for certain vegetables such as carrots and squash. They also discussed making the flavored water (such as strawberry water they made during the camp program) as substitutes for other beverages. Other families reported the children using the MyPlate plate (received during the program) as a guide to what they should have on their plate. The children’s favorite activities were all hands-on and included watering the garden, cutting the vegetables, and building the herb spiral. Participation in the program increased with consistency of the weekly program which built increased familiarity and connectedness to the camp staff. </p>
      <div
        className={classes.figure}
      >
        <img src={Picture4} className={classes.image}/>
      </div>
      <p>The program would benefit from a parent-child component. Parent involvement increased throughout the summer, as a result of comfort and familiarity. Additional workshops need to be conducted to build familiarity and knowledge of cooking techniques with the vegetables in the CSA bags. Work continues to build a sustainable model for providing CSA produce to the OCCP.</p>
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
  },
  figureContainer: {
    width: '100%',
    display: 'flex',
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
}

export default injectSheet(styles)(FoodSecurityWithClasses);