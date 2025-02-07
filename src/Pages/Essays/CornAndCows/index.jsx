import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground4.jpg';
import AustinMagieFarm from './images/austinmagiefarm.jpg';
import FoodMapOfUs from './images/foodmapofus.jpg';
import HolsteinCows from './images/holsteincows.jpg';
import CornBelt from './images/cornbelt.png';
import PDFMapOxfordTownship from './images/1930MapOxfordTownship.pdf'

const CornAndCowsWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Corn &amp; Cows (The Fryman Farm)'
      authorName='Marguerite S. Shaffer'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/unitedstates"
      references={
        [
          <p>Bogue, Allan G. “Changes in Mechanical and Plant Technology: The Corn Belt, 1910-1940.” <i>The Journal of Economic History</i>, vol. 43. No. 1, March: 1-25.</p>,
          <p>Conkin, Paul K. 2008. <i>A Revolution Down on the Farm: The Transformation of American Agriculture Since 1929</i>. Lexington, KY: The University Press of Kentucky.</p>,
          <p>Fitzgerald, Deborah. 2003. <i>Every Farm a Factory: The Industrial Ideal in American Agriculture</i>. New Haven: Yale University Press.</p>,
          <p>Fryman, John Felix. 1971. <i>From the Mountains to the Valley</i>. Oxford, OH: Oxford Press.</p>,
          <p>Hurt, R. Douglas. 1988. “Ohio Agriculture Since World War II.” <i>Ohio History</i>. Vol. 97. Winter/Spring: 50-71.</p>,
          <p>Hurt, R. Douglas. 2002. <i>Problems of Plenty: The American Farmer in the Twentieth Century</i>. Chicago: Ivan R. Dee.</p>,
          <p>Warman, Arturo. 2003. <i>Corn &amp; Capitalism: How a Botanical Bastard Grew to Global Dominance</i>. Chapel Hill, NC: University of North Carolina Press.</p>
        ]
      }
      footNotes={[
        <p><sup>1</sup> Felix Fryman purchased the farm from the Cordes family in 1955 and turned the operation over to his son Jack who farmed the valley through the early 1970s (Fryman 1971, 96-97).</p>,
        <p><sup>2</sup> For his services Fryman received $150.00 per month, free house rent, use of garden, fuel, electric light, milk, butter and eggs and two hogs in the fall (Fryman 1971, 76).</p>,
        <p><sup>3</sup> Email from Jack Fryman to Marguerite S. Shaffer July 10, 2018.</p>,
      ]}
      resources={[
        <a target="blank" href="https://butler.osu.edu/home"><p>OSU Extension, Butler County</p></a>,
        <a target="blank" href="https://www.lanepl.org/research/smith-library/"><p>OSU Extension, Butler County</p></a>,
        <a target="blank" href={PDFMapOxfordTownship}><p>1930 Map Oxford Township</p></a>
      ]}
    >
      <figure
        className={classes.figure}
      >
        <img src={AustinMagieFarm} className={classes.image} alt="Austin-Magie Farm (also known as the Fryman Farm), ca. 1970"/>
        <figcaption>Austin-Magie Farm (also known as the Fryman Farm), ca. 1970</figcaption>
      </figure>
      <p>It is difficult to summarize the radical transformation of farming and rural communities that took place during the first half of the 20<sup style={{color: 'black'}}>th</sup> century. The emergence of globalized and specialized agricultural supply chains; new technologies such as the affordable gasoline-powered tractor, hybrid seed, artificial fertilizer, and chemical pesticides and herbicides; modern lifestyles shaped by electricity, refrigeration, the automobile, the radio, the telephone, rural free delivery, mail order, chain stores, and the like; all of these combined with economic and geopolitical instability and restructuring reshaped the practices of farming and realigned the connections between rural and urban communities. Urban and suburban dwellers turned to consuming branded, processed, and packaged food from cornflakes to Crisco. Everyday routines related to food and eating, driven by much larger cultural shifts, transformed the nature of agriculture. The Austin-Magie Farm (known as the Fryman Farm in the latter half of the 20<sup style={{color: 'black'}}>th</sup> century) along with farms throughout Oxford Township, Butler County, and Southwest Ohio, which marked the eastern edge of the Corn Belt, were no exception.</p>
      <p>Globalization and urbanization combined with technological change and the new eating habits that resulted, made agriculture a global business in the early 20<sup style={{color: 'black'}}>th</sup> century. Farming and foodways linked to regional and seasonal harvests and diversified, self-sufficient market farms shifted to more commercial, regionally specialized farming increasingly tied to a global food system that supplied a diverse array of food—packaged, frozen, and fresh—year round. Farmers expanded the number of acres under cultivation and embraced specialized, commercial-scale production with the help of new tilling, planting, and harvesting machines. Between 1900 and 1920 farmers, especially grain farmers in the Midwest, prospered. The disruption of farming across Europe during World War I further stimulated the agricultural market in the United States. Farms became bigger, more productive, and more profitable. Prices for farm products increased as urban demand outpaced agricultural supply. As agricultural incomes rose, so too did the value of farmland. This gave farmers who owned their land increased collateral to borrow money for new machinery and additional acreage. Farmers purchased more land, bought new machinery and improved their farm infrastructure. In this way farmers slowly became integrated into what historian Deborah Fitzgerald has called “an industrial logic”—a network of equipment dealers, bankers, government officials, agriculture experts, railroad agents, wholesalers, merchants, mechanics, day laborers, among many others—who tied them to industrial factories, corporate boardrooms, transportation networks, communication systems, educational institutions, government bureaucracies, and urban desires (Fitzgerald 2003, 3).</p>
      <p>During the first two decades of the 20<sup style={{color: 'black'}}>th</sup> century, despite the widespread prosperity in agricultural areas, the status of farming was changing. Urban jobs and modern lifestyles lured people away from rural areas. Farmers felt they lacked control and political power in a more complex, volatile, national and global marketplace. The regionalization and specialization of agriculture across the U.S.—dairy farming in New England; fruit and vegetable truck farming in the Mid Atlantic; corn, meat and dairy in the Midwest; wheat and cattle on the Great Plains; citrus in the South; and large-scale vegetable and fruit farming in California—made it more difficult for small-scale, diversified farmers to gain a secure foothold in the national and global food supply chain. In addition, farmers became more dependent as their debts rose and their reliance on market regulation increased. All of this came to a head when agricultural markets in the U.S. crashed in the aftermath of World War I. The agricultural recession of the 1920s presaged the economic collapse and restructuring brought about by the Great Depression. As the nation shifted from a series of predominantly rural, regionally-focused, producer-oriented communities to a more urban, nationally-focused, industrialized consumer culture, farming became more mechanized, more specialized, more tied to government supports and subsidies, and more integrated with the complex, interconnected, modern world (Hurt 2002, 3-67).</p>
      <figure
        className={classes.figure}
      >
        <img src={FoodMapOfUs} className={classes.image} alt="Louis D. Fancher, A Food Map of the US, Montvale, NJ: A&amp;P, 1932 (courtesy David Rumsey Map Collection, Cartography Associates)"/>
        <figcaption>Louis D. Fancher, <i>A Food Map of the US</i>, Montvale, NJ: A&amp;P, 1932 (courtesy David Rumsey Map Collection, Cartography Associates)</figcaption>
      </figure>
      <p>Changing ownership and farming practices on the Austin-Magie Farm reflect the larger transformation of agricultural and rural life during this period. Louis C. Cordes, a Cincinnati resident and joint owner of a lumberyard, purchased the Kumler estate (the Austin-Magie Farm)—286 acres in the southeastern part of section 14—in 1927 (Fryman, 1971, 102). Like the Kumler’s before him, Cordes was more investor than hands-on farmer. Under Cordes’s ownership, the farm shifted from pigs and open pollinated Indian corn to dairy cows and hybrid corn (Fryman 1971, 75-81). As urban populations expanded, rising demand for pasteurized milk brought higher prices and greater profits than traditional grain and stock farming; and hybrid seed dramatically increased yield per acre (Hurt 2002, 8). During the early thirties, Cordes’s son-in-law ran the Kienker dairy on the property. After Kienker’s death in 1937, Cordes hired Felix Fryman to manage and run the farm. Eventually, Fryman came to own over 400 acres comprising the original Austin-Magie Farm and other adjacent acreage.<sup>1</sup></p>
      <figure
        className={classes.figure}
      >
        <img src={HolsteinCows} className={classes.image} alt="Registered Holstein cows from Wisconsin, 1937 (Fryman, John Felix. 1971. From the Mountains to the Valley. Oxford, OH: Oxford Press.)" />
        <figcaption>Registered Holstein cows from Wisconsin, 1937 (Fryman, John Felix. 1971. <i>From the Mountains to the Valley.</i> Oxford, OH: Oxford Press.)</figcaption>
      </figure>
      <p>A farm boy from Kentucky, who had taken courses in agriculture at Morehead State and worked on and briefly managed the Hamilton County Experiment Station farm, Fryman incorporated new technologies and scientific farm practices to develop the property. Cordes, as an absentee owner and investor, gave him free reign. Their agreement stipulated that Fryman should manage the operation “in the same manner as he would if he were operating said farm and dairy for himself” (Fryman 1971, 76).<sup>2</sup> Fryman began by building up the dairy herd, purchasing registered Holstein dairy cows from Wisconsin in 1937 to increase his herd to sixty cows. He ran a dairy operation on the farm, pasteurized and bottled the milk, and delivered it house-to-house to customers in Oxford and the surrounding area. In his memoir, Fryman notes, “we raised corn, wheat, oats, and hay, and later, soybeans. We had about 300 acres of land under cultivation. We also did a lot of custom bailing,” in addition to the dairy and hogs (Fryman 1971, 84).</p>
      <p>A wager he boasts about over hybrid corn best reflects his allegiance to modern farming practices. While scanning the farm books sometime after he was hired, Cordes questioned him about the use of hybrid corn seed. At the time, hybrid seed, which had only been commercially available since the early thirties, was expensive and farmers both doubted seed industry claims about increased productivity and questioned the economic logic of buying corn seed rather than saving it from the previous harvest. The two men agreed on a bet for the coming season. Fryman would plant an acre of open pollinated corn for Cordes and an acre of hybrid corn for himself; at the end of the season they would weigh out the yield of each acre to determine which seed offered a better return on investment. The winner pocketed the return; the loser paid for the seed. Fryman fertilized both acres and both produced a bumper corn crop. He describes how the open pollinated corn “had great big ears,” but the strain of his mule team pulling the wagons to the scales gave away the winner. In the end, the hybrid seed yielded 146 bushels to the acre; the open pollinated corn yielded 85 bushels to the acre (Fryman 1971, 84). Hybrid corn seed, scientifically bred and tested for substantial increases in yield per acre, fewer days to maturation, seed stock appropriate to moisture levels, temperature, growing season, and resistance to disease, insects, and pests, with uniform ear size and strong stalks to facilitate mechanical harvesting, carried the day (Bogue 1983, 8-15).</p>
      <figure
        className={classes.figure}
      >
        <img src={CornBelt} className={classes.image} alt="Corn Belt (courtesy of dakotafire.net)" />
        <figcaption>Corn Belt (courtesy of dakotafire.net)</figcaption>
      </figure>
      <p>Spurred on by New Deal agricultural policy and high agricultural prices during World War II, followed by postwar technological advances and unprecedented prosperity, many farmers across the Corn Belt, followed Felix Fryman’s lead and began to bank on the same wager. They invested in hybrid seeds, artificial fertilizer, more mechanized production, larger acreage, and increased dependence on chemical pesticides and herbicides—most notably DDT and 2,4-D. Diversified farming gave way to commodity crop growers (Hurt 2002, 67-174 and Conkin 2008). The Corn Belt, which spread across Ohio, Indiana, Illinois, Michigan, Minnesota, Wisconsin, and Nebraska, with “its rich black soil, level terrain, . . . and regular rainfall of almost forty inches a year” became the dominant region for corn production in the U.S (Warman 2003, 180-181). Increasingly, specialized corn production resulted in quantities that far surpassed the demand for corn as food. Rather, corn became a commodity in the industrial food chain as animal feed—an intermediary forage crop that supported the expanding cattle, swine, and poultry industry. And refined corn—cornstarch, corn oil, and corn syrup—supplied an emerging processed food industry that would come to define American food culture by the 1960s.</p>
      <p>Felix Fryman was a forward-looking farmer and a smart businessman; he adeptly negotiated the expansion and consolidation of agriculture in the Corn Belt during the Post World War II era. Agricultural historian R. Douglas Hurt describes an intensifying price cost squeeze that took place across Ohio during the second half of the 20<sup style={{color: 'black'}}>th</sup> century: farm costs steadily increased while farm income lagged and farmers sought to expand acreage and increase production and efficiency to make ends meet in a global commodities market they had no control over. Hurt writes, “By the 1950s farming had become more than a way of life; it was a business where only the most efficient survived” (Hurt 1988, 55). In the decades that followed, farm capital investment costs rose, average farm size grew, yield-per-acre increased, reliance on off-farm income rose, and the number of farmers fell. In 1960, farmers made up 8% of Ohio’s population; a decade later they had fallen to 3% (Hurt 1988). By the 1970s, Ohio farmers faced a range of problems from high costs and low prices to livestock and crop disease to soil erosion and urban sprawl. The USDA was prodding farmers to expand commodity crop production for the global market and plant fence row to fence row. By the mid 1970s, over a quarter of Ohio’s agricultural economy was dependent on commodity exports and most of which centered on soybeans and wheat. Production was expanding, yet farm income for individual farmers in Ohio was less than the national average (Hurt 1988). Rapid price increases for gas, oil, and other petroleum-based or related products such as artificial fertilizer added to farmers’ costs. In response they turned to even more specialized grain production. By the mid 1980s “more part-time farmers cultivated crops in Ohio than full-time farmers” and part-time commodity crop farming became the norm (Hurt 1988, 69). Despite all this, by Felix Fryman’s telling, the Austin-Magie Farm prospered and grew under his family’s stewardship during this time. He succeeded through a diverse business strategy. He expanded his acreage in production and embraced new agricultural science and technology; he invested in farmland after World War II at a time when land prices were beginning to rise; he bought a garage and car dealership in 1948; and by the mid 1950s he was able to pass on the farm and its daily operation to his son Jack.</p>
      <p className={classes.pullQuote}>" Felix Fryman was a forward-looking farmer and a smart businessman; he adeptly negotiated the expansion and consolidation of agriculture in the Corn Belt during the Post World War II era. "</p>
      <p>Fryman and his son successfully negotiated a volatile period for farmers in the Corn Belt. When Jack returned from the Korean War in 1953 at the age of 23, he took over farm operations. At the time, the farm encompassed 416 acres: approximately 275 acres were cropland, 100 acres were permanent pasture, and the balance was woodland, streams, and road easements. Jack farmed approximately 110 acres of corn, 100 acres of soybeans, 30 to 40 acres of alfalfa hay and pastured the remaining acres with a 50-cow herd of black angus beef cows. In 1972, he stopped farming and turned the farm back over to his father, who had retired and sold his car dealership and garage at the age of 61. Over the next decade, Felix Fryman farmed part of the land and rented out the remaining fields. After his death in 1987, Felix’s wife Milta inherited the farm, and Jack and his brother helped her cash rent the tillable acreage until her death in 2001. In 2004, the estate sold 230 acres to Miami University for $2.3 million; the remainder of the farm went to Dallas Butterfield of Butterfield Farms, one of the largest farm operations in Butler County, and to the Metro Park of Butler County to establish a park around Black Covered Bridge.<sup>3</sup></p>
      <p>Felix Fryman wrote his memoir, <i>From the Mountains to the Valley</i>, in part as a plea to protect the farm from destruction by a planned, four-lane bypass around the city of Oxford (which thankfully never came to pass). Fryman had a deep understanding and respect for the land he farmed. His description bears quoting in full. He writes:</p>
      <p className={classes.blockQuote}>"This was one of the most beautiful farms that I had ever seen. It had the things on it that I wanted in a farm. It had a creek—named Four Mile Creek—running down through the west, and south side of it. Beautiful big sycamore trees lined the creek bed. A covered bridge crossed the creek, and there were swimming holes, fishing holes, and wonderful areas for picnics. In the east, and part of the north of the farm, there was a 50-foot hill—a rim. On top of the rim, was a large, wonderful plateau, that made wonderful pasture. Most of the side of the hill was covered with big ash trees, and a few cottonwoods. From the house, you could see the leaves changing to the seasons. From the top of the hill, you could look out over the farm, and see the large fields, the fertile bottom land, and all the buildings. There were wooded areas, all round—not only on the hill, but all up and down the creek. You had everything, that you could want in a farm.” (Fryman 1971, 78).</p>
      <p>In our current moment where concerns about nutrient run-off, pesticides, monocultures, and GMO’s are rising, it seems convenient to juxtapose modern commodity crop farming across the Corn Belt and sustainable small-scale diversified farming. In this frame, commodity crop corporate businessmen are pitched against sustainable farm environmentalists. Felix Fryman’s appreciation of his farmland and successful stewardship of the farm suggest this polarized view is not so simple. Forces far beyond the control of individual farmers have shaped Corn Belt farming: industrialization, modernization, government policy, and globalization. That does not mean that individual commodity farmers do not have a deep commitment to the places they farm. Felix Fryman and his family’s stewardship of the Austin-Magie Farm during the 20<sup style={{color: 'black'}}>th</sup> century attest to a longstanding desire to value and conserve this place as a productive agricultural landscape.</p>
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
};

export default injectSheet(styles)(CornAndCowsWithClasses);