import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground2.jpg';
import Journeytotheslaughterhouse from './images/journeytotheslaughterhouse.jpg';
import PorkPackinginCincinnati from './images/PorkPackinginCincinnati.jpg';
import Polandchinahog from './images/Polandchinahog.jpg';
import RationDay from './images/RationDay.jpg';
import RethinkingPorkopolis from './images/RethinkingPorkopolis.pdf';

const PorkopolisWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Porkopolis and the Austin-Magie Farm'
      authorName='Rob Gioielli'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/region"
      references={
        [
          <p>Richard G. Arms, “From Disassembly to Assembly,” <i>Bulletin of the Cincinnati Historical and Philosophical Society of Ohio</i>, Vo. 17 (July, 1959)</p>,
          <p>Sven Beckert, <i>Empire of Cotton: A Global History</i> (New York: Knopf, 2014)</p>,
          <p>Charles Cist, <i>Sketches and Statistics of Cincinnati in 1851</i> (Cincinnati: WH Moore, 1851), 279-280.</p>,
          <p>Stephen Gordon, “The City as Porkopolis: Some Factors in the Rise of the Meat Packing Industry in Cincinnati, 1825-1861” (M.A. Thesis, Miami University, 1981), 26-32</p>,
          <p>Walter Johnson, <i>River of Dark Dreams: Slavery and Empire in the Cotton Kingdom</i> (Cambridge, Mass.: Harvard University Press, 2013)</p>,
          <p>Robert Leslie Jones, <i>History of Agriculture in Ohio</i> (Kent, Oh: Kent State University Press, 1983), 120-123.</p>,
          <p>Alan L. Olmstead and Paul Webb Rhode, <i>Creating Abundance: Biological Innovation and American Agricultural Development</i> (New York: Cambridge University Press, 2008), chap. 5.</p>,
          <p>Margaret Walsh, <i>The Rise of the Midwestern Meatpacking Industry</i> (Lexington: The University Press of Kentucky, 1982)</p>,
        ]
      }
      footNotes={[
        <h2>Credits</h2>,
        <p>Ohio Humanities</p>,
        <p>Harriet Beecher Stowe House</p>,
        <p>Robert Gioielli, Project Director and Curator</p>,
        <p>Jamie Albert, Project Designer</p>,
      ]}
      resources={[
        <a target="blank" href={RethinkingPorkopolis}><p>Rethinking Porkopolis</p></a>,
      ]}
    >
      <p>The Austin-Magie Farm was an important part of the economy of the Miami River Valley in the 19th century, but also connected the community to Cincinnati, the rest of the country, and the globe. The farm did this through the region’s primary agricultural product–pigs.</p>
      <p>Pigs were an important part of all Euro-American farms during the Colonial Period. Because they could graze on their own in the local forests, fields and swamps for months at a time, they were attractive to subsistence-oriented farmers, who didn’t have to tend them on a daily basis. They could simply collect them in the fall for slaughter. When whites settled the Ohio River Valley in the late 18th century, those farm families brought their pigs with them. But once in the valley, they began to look for more commercial farming opportunities. The region’s primary grain crop was corn, but it was too bulky and heavy to cheaply transport to markets, especially when the primary means of transit was a horse-drawn carriage on a muddy road. So, farmers began to condense their corn, into pigs. At first this was just fattening up semi-feral pigs, which had been running free all summer, for a few weeks in the fall. But by the 1820s some farmers were raising hogs in pens and fenced in fields full time to have them grow as robust and as portly as possible for market. That market was Cincinnati. The emerging Queen City of the West would form an important relationship with the farms and farmers of Southwest Ohio, as they would shape each other over the course of the 19th century. </p>
      <figure
        className={classes.figure}
      >
        <img src={Journeytotheslaughterhouse} className={classes.image} alt=""/>
        <figcaption>“Journey to the Slaughterhouse” from Harpers Weekly, Feb. 4, 1860. Courtesy the Public Library of Cincinnati and Hamilton County.</figcaption>
      </figure>
      <p>Cincinnati was originally one of numerous cities competing for the trade and traffic of the burgeoning Trans-Appalachian West, but it was able to set itself apart with strong river connections, an accessible public landing and an early branch of the national bank. This meant that the larger slaughterhouses and meatpackers in town could find a ready market for their products, allowing them to pay higher prices per pound for live hogs, attracting an ever-growing stream of swine to the city during packing season, peaking at 500,000 a year in the late 1840s. Cincinnati meatpackers also pioneered manufacturing techniques, what we may call the “disassembly line,” that allowed them to kill, slaughter and pack hogs at an astonishing rate, further increasing their economies of scale.</p>
      <h3>Byproducts</h3>
      <p>Because of this proficiency and prominence in the hog business, Cincinnati would quickly earn the nickname “Porkopolis.” But although pork was the city’s primary product (up to 50 million pounds a year), it was not the only one. As soon as pork-packers set up shop in town, other manufacturers moved in to process the myriad of byproducts that came from a slaughtered animal. In the 21st century we are used to most of our chemicals and many of our manufactured goods coming from metals, or petrochemicals. But the industrial world of the 19th century was profoundly organic, and still directly connected to the animal and plant products grown on American farms. Pig’s blood was used in dyes and hundreds of other chemicals. Pig hair and bristles were used in pillows, brushes and even plaster, and bones were also ground down for various food products and compounds. But the most valuable byproduct was fat.</p>
      <p className={classes.pullQuote}>In the 21st century we are used to most of our chemicals and many of our manufactured goods coming from metals, or petrochemicals. But the industrial world of the 19th century was profoundly organic, and still directly connected to the animal and plant products grown on American farms.</p>
      <p>Rendered animal fat has long been the primary ingredient in soap and candles. But Cincinnati manufacturers pioneered new methods that made it even more valuable. Through new rendering technologies that involved injecting steam into animal lard, they could produce candles and lard oil that were clean burning, without the animal fat smell of tallow candles. In a rapidly industrializing America, new forms of illuminants were extremely valuable. During the 1850s, Cincinnati lard oil competed with sperm whale oil as the most popular lighting fuel in the United States (Arms).</p>
      <figure
        className={classes.figure}
      >
        <img src={PorkPackinginCincinnati} className={classes.image} alt=""/>
        <figcaption>“Pork Packing in Cincinnati,” by Henry Farny, 1873. Courtesy of the Library of Congress.</figcaption>
      </figure>
      <p>The size and sophistication of Cincinnati’s byproduct market is one of the primary reasons why it continued to grow as a pork-packing center in the decades before the American Civil War. Cincinnati packers could pay a few cents more per pound than in surrounding cities, which added up to an extra $100 or more per year for the average regional farmer, big money in the 19th century. That demand for fat would boomerang back to the Miami Valley, shaping its farms, landscape and especially its pigs (Walsh).</p>
      <h3>Engineering Better Pigs</h3>
      <p>Early American pigs could fend for themselves for weeks or months at a time because they were built far differently than the docile, domesticated hogs of today. With long snouts, stout legs, and bristly “razorbacks” they could fend off predators and run at a fast clip. But their meat was also sinewy and chewy, and their fat and lard often mealy and sour. As soon as Cincinnati began to boom as a packing market, local farmers looked for ways to improve their pigs to make them more marketable, and to increase their profits. The first step was bringing them out of the forest and into pens on the farm, where they could be fattened up on a regular diet of corn and farm scraps. Then it was about breeding to encourage certain characteristics, and discourage others. The earliest custom breeds were brought from England, but eventually, farmers in Southwest Ohio were crossing these breeds together in order to create uniquely American strains (Jones). </p>
      <p>The center of custom breeding in the region, and indeed the country, was a belt of farms that ran through northern Hamilton County, Butler and Warren County. Here more prosperous farmers were constantly experimenting to create different breeds, which they would then market to farms all across Southwestern Ohio and Southeastern Indiana. One of the most successful of these was David Magie, who developed the “Magie Hog” in the 1840s, and would later purchase Aaron Austin’s farm in the 1860s. Magie’s pigs were the origins of the Poland-China breed, the first great American commercial hog breed.</p>
      <p>It is tempting to think of 19th century animal breeding as a quaint practice, but Magie and other Miami Valley breeders were serious “improving farmers,” agriculturalists who were geared towards the market, and were constantly looking for ways to improve yields and profitability. Although a far cry from the test tubes and laboratories of today, their breeding was a form of engineering, looking to isolate and emphasize particular factors in their animals. For example, a farmer’s primary calculus was pounds of corn per pound of hog. They wanted a hog to put on the most weight possible for every pound of corn they fed them, decreasing costs and lowering profits. As they bred hogs who were the best “feeders,” what they were actually doing was increasing the length of the hog’s intestine. The longer the digestive track, the more nutrients and calories the hog could squeeze out of each kernel of corn (Olmsted and Rhode). </p>
      <figure
        className={classes.figure}
      >
        <img src={Polandchinahog} className={classes.image} alt=""/>
        <figcaption>“A Poland China Hog” from G. F. Warren, Elements of Agriculture (London, MacMillan and Co., Ltd., 1913). Courtesy University of South Florida.</figcaption>
      </figure>
      <p>By the 1850s, Miami Valley breeders like Magie were regularly producing hogs that weighed as much as 400 pounds, giant porkers that toddled around on spindly legs. These pigs were not bred for their meat, however, but for their fat. If they are any bigger than 250 pounds, most American pigs stop putting on muscle and exclusively turned all of their consumed calories into fat. This extra fat was not desirable for eating or cooking, because it had very little flavor, but it didn’t matter, because farmers were raising these hogs almost exclusively for the byproduct industry. By the 1850s the price of lard for soap, candles and especially lard oil was so high that many breeders and farmers focused on fat production over meat production. Some would not even bother to have their hogs butchered for pork, but would just sell them whole to fat-renderers, who would boil the whole hog down and sell it to various Cincinnati byproduct companies (Gordon). </p>
      <p>The market in Cincinnati was not just a conduit for Miami Valley agricultural products, but it also shaped the farms, landscape and animals of the region. The two were tied together, city and country, through pigs. But the connections did not stop there, because the pigs also brought the Miami Valley into the larger global economy during the 19th century, including its most important product, cotton. </p>
      <h3>Feeding the Plantation</h3>
      <p>After the pigs were slaughtered, Cincinnati workers packed pork into a myriad array of products and foodstuffs. Almost all of it was destined for markets outside of the region, and so it had to be preserved through salting and smoking. The most valuable were the premium hams and bacons, which commanded a high price and often won prizes at international competitions. Most of the rest of the pork was packed into barrels of various cuts and grades. The two most desirable were “mess” and “clear” pork, which were whole sides of pork smoked and packed in salt, often sold to the U.S. Navy and other oceangoing vessels that needed preserved meat for long trips. The bottom grade, ironically named “prime,” was pig heads, necks and other much less desirable cuts, salted but then also often packed in liquid brine (Cist).</p>
      <p>Since pigs could only be slaughtered during the winter, packed pork would spend months in storage before being shipped down river in the early spring. For most of it, the first stop was New Orleans, America’s great Southern emporium and the gateway to the Mississippi River Valley. From there, it would be shipped back up the coast to Virginia, New York and spots up and down the Eastern Seaboard. A significant portion also went to the islands in the Caribbean like Cuba and Jamaica, and some eventually to England, where prized hams and bacon fetched a high price. But every year, especially before the American Civil War, a good bit of that Cincinnati pork made its way back up the river, to the plantations of the Mississippi Valley. </p>
      <p>During the first half of the 19th century, cotton spread from the Carolinas across the Deep South, eventually into east Texas. But the heart of cotton production was the incredibly fertile plantations of the Lower Mississippi River valley, which had some of the best soil in the world. These plantations fed the textile mills of New England and especially Great Britain. By the 1850s, up to eighty percent of cotton in British mills came from the United States. Laboring in those fields to produce that cotton were enslaved African Americans, and one of their primary food rations was pork, often from the Miami River Valley (Beckert). </p>
      <p>Most plantation owners gave each enslaved person about five pounds of pork a week as part of their rations, usually the saltiest and fattiest cuts. Often times this pork was from hogs raised on the plantation, or from nearby farms. But especially in parts of Mississippi and Louisiana, planters would be so focused on cotton production, and had such large plantations, that they needed to purchase rations on the open market on a regular basis. This is where Cincinnati and Miami Valley pork came in. Tens of thousands of the “prime” barrels that were shipped south each year ended up in plantation storehouses, where the pork would be parsimoniously distributed as part of the meager rations of enslaved persons on cotton plantations (Johnson). </p>
      <figure
        className={classes.figure}
      >
        <img src={RationDay} className={classes.image} alt=""/>
        <figcaption>“Ration Day,” from “Scenes from a Cotton Plantation,” Harper's Weekly, Feb. 2, 1867.</figcaption>
      </figure>
      <p>Miami Valley pigs then, from farms like the Austin-Magie Farm, were an important part of not just the local and regional economy, but also the global one. They provided the primary ingredient for Cincinnati’s great pig-processing machine, being turned into hundreds of different edible and non-edible products. Through that, they were shipped around the world, but helped feed the backbreaking labor on America’s cotton plantations, which themselves were on the cutting edge of global capitalism, and fueling the industrial revolution.</p>
    </ EssayPage>
  );

  const styles = {
    essayOverrides: {
      lineHeight: 1.7,
      '& sup': {
        fontSize: '.7em',
        color: '#F05A28',
      },
      '& h3': {
        fontFamily: 'komu-b',
        fontSize: '2.5em',
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
    sectionDivider: {
      width: '30%',
      borderBottom: '4px solid #F05A28',
      margin: '50px auto'
    },
  }

export default injectSheet(styles)(PorkopolisWithClasses);