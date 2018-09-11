import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground5.jpg';
import OxfordFarmersMarketUptownJuly2018 from './images/OxfordFarmersMarketUptownJuly2018.jpg';
import FreedomFarmsJohnBigham from './images/FreedomFarmsJohnBigham.jpg';
import LocustRunFarmsHarvRoehling from './images/LocustRunFarmsHarvRoehling.jpg';
import LindaSimmons from './images/LindaSimmons.jpg';
import LarryandKennedyJohnson from './images/LarryandKennedyJohnson.jpg';

const LocalFoodWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Local Food: Oxford Farmers Market Uptown and MOON Co-op Grocery'
      authorName='James Rubinstein'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/oxford"
      resources={[
        <a target="blank" href="http://www.mooncoop.coop/"><p>Moon Co-Op</p></a>,
        <a target="blank" href="https://oxfordfarmersmarket.com/"><p>Oxford Farmer’s Market</p></a>,
      ]}
    >
      <p>Oxford’s local food scene is anchored by Oxford Farmers Market Uptown and MOON Co-op Grocery. The Farmers Market is held every Saturday morning between May and November and once a month the rest of the year. MOON Co-op is a full-service grocery store open year-round seven days a week.</p>
      <p>Oxford has had a weekly farmers market since around 1979. It was first held in a parking lot at 12 W. Church St. that is now used by Oxford Internal Medicine. After a few years there, the market then operated for two decades in the parking lot of Stewart School, at the corner of College Ave. and Spring St. The school was demolished in 2005 to make way for Stewart Square shopping area, so in 2004 the Farmers Market moved to the current location at Main and Church St adjacent to the Oxford Memorial Park. Some of the vendors displaced from Stewart School met at Talawanda High School for a few years before joining the current Uptown site. For a few years, a smaller farmers market was held along High St. on Tuesday afternoons.</p>
      <p>Oxford’s Farmers Market more tightly controls its vendors than the typical farmers market. Many farm stands and urban farmers markets permit reselling of products acquired elsewhere, such as from out-of-town wholesalers. Larry Slocum, the Market Manager beginning 2006, likes to say that in Oxford vendors either “make it, bake it, or grow it” themselves. The market’s motto “cultivating community” is a reminder that growers and producers are hyper-local.</p>
      <figure
        className={classes.figure}
      >
        <img src={OxfordFarmersMarketUptownJuly2018} className={classes.image} alt="Oxford Farmers Market Uptown (photo by James Rubinstein)"/>
        <figcaption>Oxford Farmers Market Uptown (photo by James Rubinstein)</figcaption>
      </figure>
      <p>The four dozen vendors are at Oxford’s Farmers Market for a variety of reasons. For Bob Rauen, Harv Roehling, and Ted Elliott, veterans of four decades, setting up on Saturday mornings is an opportunity to socialize. It’s a question of scale for Jennifer Bayne of 7 Wonders Farm and Kristi Hutchinson of 5 Oaks Farm. They don’t grow enough to sell in the national distribution system, where margins are so low that farmers can only survive through very high volume.</p>
      <p>For Craig and Sharon Harkrider of Stoney Hedgerow Farm, it’s also a question of scale, but from the opposite direction. They were already growing food for their family, so by growing a bit more they could grow enough to sell at the Farmers Market and MOON Co-op Grocery. Craig sees it as an opportunity to apply their passion to grow healthy food for others, not just for themselves.</p>
      <p>Freedom Farm’s John Bigham and Johnson Family Farm’s Larry Johnson are examples of younger people who have started farming fruits and vegetables for local distribution. John started selling his produce at Oxford’s Farmers Market at age 16. His younger brother James bakes pastries for the Farmers Market. John and Larry emphasize the importance of growing healthy quality products without chemicals. </p>
      <figure
        className={classes.figure}
      >
        <img src={FreedomFarmsJohnBigham} className={classes.image} alt="Freedom Farm’s John Bigham at Oxford Farmers Market Uptown (photo by James Rubinstein)"/>
        <figcaption>Freedom Farm’s John Bigham at Oxford Farmers Market Uptown (photo by James Rubinstein)</figcaption>
      </figure>
      <p>Artistry Farm’s Debra Bowles raises goats on her farm and makes products like soap from the goat milk. She considers the Farmers Market and MOON Co-op Grocery as opportunities to teach how food is grown to people who know little about agriculture. Harv Roehling, whose Locust Run Farm is certified organic, concurs with the mission of educating people about the importance of certifying produce as organic. “It’s healthier and better tasting.”</p>
      <figure
        className={classes.figure}
      >
        <img src={LocustRunFarmsHarvRoehling} className={classes.image} alt="Locust Run Farm’s Harv Roehling with certified organic lettuce at Oxford Farmers Market Uptown (photo by James Rubinstein)"/>
        <figcaption>Locust Run Farm’s Harv Roehling with certified organic lettuce at Oxford Farmers Market Uptown (photo by James Rubinstein)</figcaption>
      </figure>
      <p>Miami Oxford Organic Network (MOON) Cooperative Services Inc. was incorporated in 2004 for the purpose of opening a locally owned, operated, and stocked grocery store. Many of the folks working to open a store were vendors at the Farmers Market. They recognized the need for a place to sell what they made and grew and raised seven days a week. The big box supermarkets didn’t want them, so they decided to open their own store. Co-op grocery stores are common in the Upper Midwest and New England, but when MOON opened in 2011 it was the first co-op in Ohio in 45 years. The co-op is owned by around 880 households, including 650 who live in and around Oxford. However, anyone can shop in the store.</p>
      <p className={classes.pullQuote}>“ The food here tastes like it’s supposed to taste. ”</p>
      <p>Folks become member-owners through a $150 purchase of a share of common stock in the cooperative. Around 120 of the owners have invested further in the store through purchase of preferred shares and loans. In addition, the co-op received loans from the City of Oxford’s Community Improvement Corporation and from Cooperative Development Services.</p>
      <p>MOON emphasizes local, organic, and Fair Trade products. The store has around 50 vendors within 50 miles of Oxford who supply local meat, dairy, and grocery items, not just produce. For example, the beef, chicken, lamb, and pork sold in the store are raised on four Oxford-area farms—Harris-Miller Farm, Jericho Run Farm, Morning Sun Farm, and Reserve Run Farm. The soap comes from Oxford-area soap-makers Artistry Farm’s Debra Bowles and Tapaahsia Farm’s Karen Baldwin.</p>
      <figure
        className={classes.figure}
      >
        <img src={LindaSimmons} className={classes.image} alt="Linda Simmons, member-owner, former board member and produce manager, MOON Co-op Grocery (photo by James Rubinstein)"/>
        <figcaption>Linda Simmons, member-owner, former board member and produce manager, MOON Co-op Grocery (photo by James Rubinstein)</figcaption>
      </figure>
      <p>Products from outside Oxford come primarily from certified organic, non-GMO, Fair Trade, and producer co-ops. For example, MOON Co-op’s principal supplier of coffee, tea, and chocolate is Equal Exchange, a co-op owned by its 100 employees in Massachusetts. Equal Exchange in turn sources its beans from grower-owned co-ops in Africa and South America.</p>
      <figure
        className={classes.figure}
      >
        <img src={LarryandKennedyJohnson} className={classes.image} alt="Local growers Larry and Kennedy Johnson at MOON Co-op Grocery (photo by James Rubinstein)"/>
        <figcaption>Local growers Larry and Kennedy Johnson at MOON Co-op Grocery (photo by James Rubinstein)</figcaption>
      </figure>
      <p>Carla Blackmar Rice and Andy Rice judged the presence of a co-op to be an important factor in their decision to move from Los Angeles to Oxford, a small-town in the Midwest. They love what Carla calls Oxford’s “hyper local” food, compared with Los Angeles where “local” meant several hundred miles.</p>
      <p>Mary Slocum likes shopping at MOON Co-op Grocery and the Farmers Market because the food is fresh, and she knows who produced it. Patsy and Ken Grabach echo Mary’s sentiments. Says Ken, “The food here tastes like it’s supposed to taste.”</p>
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

export default injectSheet(styles)(LocalFoodWithClasses);