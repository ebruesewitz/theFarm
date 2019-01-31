import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import Image4 from './images/Image4.jpg';
import Image5 from './images/Image5.jpg';
import Image6 from './images/Image6.jpg';

const HarvestWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='The Need for Community Support of Local Agriculture'
      authorName='Charles Griffin'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/farm"
      resources={[
        <a target="blank" href="https://www.oeffa.org/"><p>OEFFA</p></a>,
        <a target="blank" href="https://www.nal.usda.gov/afsic/community-supported-agriculture"><p>USDA CSA</p></a>,
        <a target="blank" href="https://www.ams.usda.gov/sites/default/files/media/CSANewModelsforChangingMarketsb.pdf"><p>USDA CSA AMS</p></a>,
      ]}
    >
      <figure
        className={classes.figure}
      >
        <img src={Image1} className={classes.image} alt="Charles Griffin with spinach crop"/>
        <figcaption>Charles Griffin with spinach crop</figcaption>
      </figure>
      <p>The story of the first Community Supported Agricultural enterprise begins in the southern mountains of Germany in the early 1980’s. The small farm was failing not for lack of production, but for lack of viable markets. The local townspeople did not want the farm to disappear, for cultural and economic reasons. A social enterprise group began holding meetings to devise a way to save the farm. The final plan took more than a year to create, and not before the social processes of seesawing and merry-go-rounding was distilled into the agreement. All the food that the farm could grow for an average family—pork, beef, flour, and a few vegetables—would take a few deci-hectares or about a quarter of an acre to produce. The Farm could therefore supply 30 to 40 families with a farm share. The cost of running the farm business—salaries, supplies, and everything else—was divided by the number of shares to arrive at the cost of the share. Some years shareholders got a great deal, and others, maybe not as much. And yet, every year the core values of the farm business, production, and social equity were held intact. There are many reasons why this small farm business model really took off soon after it was introduced into the US, and why the Institute for Food is using this approach to develop its own small farm for Miami University and the surrounding community.</p>
      <p>New farmers and new farm enterprises require a lot of money to get started. And it takes years to establish a viable farming business. In the typical Community Supported Agriculture (CSA) model, shareholders or members invest capital at the beginning of the season for the farmer to start operations. The Institute for Food (IF) would like to demonstrate this approach to Miami students, and to support its growth for farmers and consumers in our local food community.</p>
      <p>So far, CSA farmers and sustainable agriculture practices go hand in hand. By the nature of small farms, the farmer is intimately connected with the soil fertility, crop growth, insect and other forms of wildlife on the farm.  This observational and practical connection with nature is pure nourishment for farmers, and one of the greatest attractions that new farmers have for this vocation. CSA members make this possible and are invited to participate in this connection, if not at least, by eating the crops grown on the farm.</p>
      <figure
        className={classes.figure}
      >
        <img src={Image6} className={classes.image} alt="Rainbow over the farm"/>
        <figcaption>Rainbow over the farm</figcaption>
      </figure>
      <p>A basic notion of sustainable food production is the amount of energy input it takes to produce our food. Using modern farming techniques, it takes about 30 calories to produce one calorie of food. In subsistence agriculture one calorie of labor can produce five to ten calories of food energy. Currently, about one sixth of the energy used in our food system is for refrigeration and transport, the so-called food-miles measure. Locally grown food can reduce the carbon-cost of certain foods that we eat. Other sustainable practices like cover crops and reduced tillage also help improve the environmental impact of producing food.</p>
      <figure
        className={classes.figure}
      >
        <img src={Image5} className={classes.image} alt="Lettuce rows on the IF farm"/>
        <figcaption>Lettuce rows on the IF farm</figcaption>
      </figure>
      <p>"Harvest, wash, pack, and distribute" is the mantra for small farmers and CSA growers.  Storage and refrigeration is impossibly expensive. Instead, farmers make frequent plantings throughout the season for a steady supply of fresh produce. Freshness is a big deal. Freshness is a sign of quality, in part because it means that the phytonutrients are still present in the food. Good food not only contains proteins, fats, carbohydrates, minerals, and vitamins. Vegetables contain plant substances that support heart health, balance blood sugar, lower cholesterol, and promote feelings of satisfaction. Each type of vegetable has its own set of phytonutrients.  That’s why the healthiest diet includes a wide variety of vegetables.</p>
      <p className={classes.pullQuote}>A basic notion of sustainable food production is the amount of energy input it takes to produce our food. Using modern farming techniques, it takes about 30 calories to produce one calorie of food. In subsistence agriculture one calorie of labor can produce 5 to 10 calories of food energy.</p>
      <p>Farm staff pore over the crop planting plan during the winter months to provide the most varied selection of vegetables for each season that our climate allows. At IF farm, we are currently building the capacity to extend the growing seasons earlier into the spring and later into the fall months, with greenhouse grown plant-starts, plastic tunnels and row covers that protect crops from freezing temperatures. This will increase the variety of produce throughout the entire growing season.</p>
      <figure
        className={classes.figure}
      >
        <img src={Image4} className={classes.image} alt="Hoop house on the IF farm"/>
        <figcaption>Hoop house on the IF farm</figcaption>
      </figure>
      <p>Our plan begins with the staple crop for our region: cabbage, potato, tomato, squash, beans, and onions. (Corn will come later.)  We augment the basics with leafy greens like spinach, kale, and the Asian greens which are all in the mustard family. These crops are known for their dense nutrient status or beneficial phytonutrients. To increase variety and round out the salad bowl, we plan for early maturing roots like radishes and turnips, followed by beets and turnips.  When the weather allows, we continue to plant greens and roots every few weeks to maintain a steady supply of the fresh vegetable crops. Our cropping plan repeats all of these crop plantings in late summer for harvest throughout the fall. In addition, we stretch our planting plan to include specialty crops like kohlrabi, eggplant, melons and many others. We attempt to find new and unusual vegetables that might appeal to CSA members, or that could possibly do well on the farm, or that have a unique quality that we may appreciate. And, our long-term plans include asparagus, strawberries and other fruits, which require long term planning and preparations.</p>
      <p>We can also make the distinction between real food and processed food. Just following the USDA guidelines for nutritional health, that is, five to seven servings of fresh fruits and vegetables daily, would require a major change in most people’s diets, specifically, away from processed (fast) food to a plant-based (slow food) diet. CSA’s offer the opportunity for families and individuals to make that change. This does require us to become more involved with our food, like making meals and sharing food, engaging in the activities that form the foundation of human culture.  This is definitely part of the community in Community Supported Agriculture.</p>
      <p>What does all this mean for a local food farmer? To be economically viable, the CSA farmer must produce from early spring to late fall to get the most from his available resources. Here in Ohio we have three growing seasons, spring summer, and fall.  This means we have two cool weather seasons and one warm season, that is six months of cool season crops (leafy vegetables and roots) and, hopefully, four months of summer crops (beans, corn, melons, tomatoes, peppers, and others). Humans in temperate climates ate these crops seasonally for thousands of years, until refrigeration and global transport began less than 150 years ago.  Are there benefits from eating seasonally? Try it and see if you can feel the difference. </p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={Image2} className={classes.image} alt="July CSA Box"/>
          <figcaption>July CSA Box</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Image3} className={classes.image} alt="November CSA Box"/>
          <figcaption>November CSA Box</figcaption>
        </figure>
      </div>
      <p>Three seasons, with six to eight crops to plant and care for each season, and several plantings of popular crops in succession, and when the farmer includes different varieties of tomatoes and corn, and several other crops just to maintain diversity and interest for the CSA members, can add up to 30 plus plantings in one year. A CSA program is therefore a large commitment for any farmer, and it can be a staggering commitment for a new farmer. And yet the CSA movement has grown from a few farms in the 1980’s to thousands of small farms all across the United States.</p>
      <p>Small and local farms can be more successful with a direct marketing approach similar to a CSA. This is due in part because of the transparency between producer and consumer, that is, farmer and eater.  It is the connection that builds cultural value for local communities in so many ways.  It provides a link between the caregivers of the land—the folks who care for the land and for the earth itself—and those who feel nourished by this relationship.</p>

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
    '@media (max-width: 500px)': {
      width: '75%',
    }
  },
  figureContainer: {
    width: '100%',
    display: 'flex',
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
}

export default injectSheet(styles)(HarvestWithClasses);