import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground1.jpg';
import Oxfordtownship1855 from './images/Oxfordtownship1855.jpg';
import Oxfordtownship1875 from './images/Oxfordtownship1875.jpg';
import Oxfordtownship1895 from './images/Oxfordtownship1895.jpg';
import AustinMagiefarmhouseinterior from './images/AustinMagiefarmhouseinterior.jpg';
import AustinMagieHousePhoto1950 from './images/AustinMagieHousePhoto1950.jpg';
import MagiesBlackPrince from './images/MagiesBlackPrince.jpg';
import OxfordTownshipAgCensusData1850 from './images/1850OxfordTownshipAgCensusData.pdf';
import OxfordTownshipAgCensusData1860 from './images/1860OxfordTownshipAgCensusData.pdf';
import OxfordTownshipAgCensusData1870 from './images/1870OxfordTownshipAgCensusData.pdf';
import OxfordTownshipAgCensusData1880 from './images/1880OxfordTownshipAgCensusData.pdf';
import OxfordTownshipPlatMaps18361930 from './images/OxfordTownshipPlatMaps18361930.pdf';
import DavidMMagieObituary from './images/DavidMMagieObituary.pdf';
import DavidMMagieWill from './images/DavidMMagieWill.pdf';

const AustinMagieFarmWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='The Austin-Magie Farm'
      authorName='Marguerite S. Shaffer'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      references={
        [
          <p>I am deeply indebted to Valerie E. Elliot, Manager for the Smith Library of Regional History at The Lane Library in Oxford, Ohio. She guided me to relevant materials in the collection and provided a wealth of sources about numerous topics related to the Austin-Magie Farm. I would not have been able to tell this early history of the farm without her help. Anyone interested in the history of Butler County and Southwestern Ohio should visit this rich collection documenting the region.</p>,
          <p>Becker, Carl M. 1968. “Evolution of the Disassembly Line: The Horizontal Wheel and the Overhead Railway Loop.” Cincinnati Historical Society Bulletin 26, no. 3: 277-282.</p>,
          <p>Cronon, William. 1991. Nature’s Metropolis: Chicago and the Great West. New York: W. W. Norton.</p>,
          <p>“David M. Magie Built Residence.” 1953. Oxford Press, October 10, 1953. David Magie Folder, Smith Library of Regional History, Lane Library, Oxford, Ohio.</p>,
          <p>Davis, Joseph Ray and Duncan, Harvey Samuel. 1921. History of the Poland China Breed of Swine. Omaha, NB: Poland China History Association. https://archive.org/stream/historyofpolandc01davi/historyofpolandc01davi_djvu.txt</p>,
          <p>Dawson, Charles. 1919. Success with Hogs. Chicago: Forbes & Company.</p>,
          <p>History and Biographical Cyclopedia of Butler County Ohio. 1882. Cincinnati: Western Biographical Publishing Co.</p>,
          <p>“Fireside Musings, No. 54”. 1897. Oxford News. 21 May 1897. David Magie Folder, Smith Library of Regional History, Lane Library, Oxford, Ohio.</p>,
          <p>Fryman, John Felix. 1971. From the Mountains to the Valley. Oxford, OH: Oxford Press.</p>,
          <p>Gordon, Steve C. 1981. The City as “Porkopolis”: Some Factors in the Rise of the Meat Packing Industry in Cincinnati, 1825-1861. M.A. Thesis, Department of History, Miami University, Oxford, OH.</p>,
          <p>Hurt, R. Douglas. 1982. “Pork and Porkopolis.” Cincinnati Historical Society Bulletin 40, no. 3:191-215.</p>,
          <p>McBride, James. 1983. McBride’s Map of 1836 combined with Atlases of 1875 and 1895. Evansville, IN.: Whipporwill Publications.</p>,
          <p>U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1850. Ancestry.Com.</p>,
          <p>U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1860. Ancestry.Com.</p>,
          <p>U.S. Census, Nonpopulation Census, Industry Schedule, Oxford Township, Butler County, OH, 1870. Ancestry.Com.</p>,
          <p>U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1880. Ancestry.Com.</p>,
          <p>White, Sam. 2011. “From Globalized Pig Breeds to Capitalist Pigs: A Study in Animal Culture in Evolutionary History,” Environmental History 16, No. 1: January: 94-120.</p>,
        ]
      }
      footNotes={[
        <p><sup>1</sup>The Ohio Historic Inventory Record by Lucy Curry, located in the Smith Library of Regional History at the Lane Library in Oxford, OH, provides a detailed account of the history of the property. See Ohio Historic Inventory, But-231-1, July 3, 1978.</p>,
        <p><sup>2</sup>Felix Fryman, <i>From the Mountains to the Valley</i>, indicates that Austin’s heirs first sold the mill to James Broadberry, who operated the mills for three years and then sold it to Samuel Mollyneaux, who sold it to James Pugh some time around 1868. Pugh owned and ran the mill until 1885 (Fryman 1971, 98). </p>,
        <p><sup>3</sup>For the pig’s transformation from a small-farm subsistence animal into an industrial commodity see Sam White, “From Globalized Pig Breeds to Capitalists Pigs: A Study in Animal Culture in Evolutionary History,” <i>Environmental History</i> 16, No. 1. (January 2011): 94-120.</p>,
        <p><sup>4</sup>Butler County produced 51,077 hogs in 1846 followed by Clermont County at 31,659 and Adams at 21,133. For more information see Gordon, Steve C. 1981. The City as “Porkopolis”: Some Factors in the Rise of the Meat Packing Industry in Cincinnati, 1825-1861. M.A. Thesis, Department of History, Miami University, Oxford, OH.</p>,
        <p><sup>5</sup>Census records from 1860 show that Magie’s was the largest farm in terms of acreage in Oxford township. He is listed in the 1860 schedule as David McGee. His farm is valued at $18,600 almost double that of a decade ago. See U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1860.</p>,
        <p><sup>6</sup>Charles Dawson notes that the Poland China, “is a breed of truly American origin, being the pioneer of all large types of American hogs, and being evolved from practically all of the early day types and breeds”(Dawson 1919, 22).</p>,
        <p><sup>7</sup>An article in the <i>Oxford News</i> from 1897 notes that the Poland China “was first called the Magie hog in honor of the man who first called attention to the improved breed” (“Fireside Musings, no. 54” 1897). At the National Swine Breeders Convention in 1872 in Indianapolis IN, Magie claimed to be the originator of the Poland China breed, but his claim was rejected. As a result, Magie refused to register the pedigree of his hogs.</p>,
        <p><sup>8</sup>“David M. Magie Built Residence” clipping from 1953 in the Smith Regional History Collection at the Lane Library in Oxford indicates it was Magie who built the house he moved to on North Beech Street. Library records show that this is incorrect. The house was built by James Wetheroe in the 1830s. </p>,
        <p><sup>9</sup>David Magie’s handwritten will, which can be found by searching his name in Butler County on Ancestry.com, indicates he owned properties in Oxford Village, Middletown, Ohio, and Oxford Township. See also Clipping, Obituary “David Magie is Dead at Oxford,” <i>Hamilton Telegram</i>, February 1, 1900 in the Smith Regional History Library at the Lane Library in Oxford, OH.</p>,
        <p><sup>10</sup>According to his handwritten will, his wife was to receive income from half the farm during the remainder of her life, but she predeceased him in 1892. He left his other daughter, Sarah Coffman, his house and lot in Middletown, Ohio. His granddaughter, Mary Kumler, the daughter of Laura and T. R. Kumler, was to receive the house and lot in Oxford, after his wife’s death; she too predeceased him in 1898. Note that an article in the <i>Republican News</i> calls into question this distribution of property. It refers to a suit filed by his younger daughter Sarah Coffman against his older daughter Laura Kumler and indicates they came to an amicable agreement to set aside David M. Magie’s handwritten will. The final agreement about the distribution of property was kept private. See the clipping, “Magie Contest Compromised,” <i>Republican News</i>, Hamilton, OH, April 11, 1900.  Smith Library of Regional History, Lane Library, Oxford, OH. Oxford Township maps from 1914 indicate the farm belonged to Laura Kumler as designated in the original will.</p>,
        <p><sup>11</sup>Quote is believed to be from Carl R. Greer, <i>Old Oxford Days</i>, Oxford, OH: Cullen Printing Co., 1947 (“David M. Magie Built Residence” 1953).  A 1907 article suggests that T. R. Kumler sold 306 acres to Reuben Martin of Ripley, Ohio for $35,000 described as “one of the biggest sales ever made here.” See clipping “Oxford Kumler to Sell,” <i>Democrat Sun</i>, October 22, 1907, Smith Library of Regional History, Lane Library, Oxford, OH. However, a later owner, Felix Fryman, suggested that Martin sued the Kumlers after damage caused by the 1913 flood, and in settlement Mrs. Kumler repurchased at least 140 acres of the original farm (Fryman 1971, 100).</p>,
      ]}
      resources={[
        <a target="blank" href="https://www.lanepl.org/research/smith-library/"><p>Smith Library of Regional History</p></a>,
        <a target="blank" href={OxfordTownshipAgCensusData1850}><p>1850 Oxford Township Ag Census Data</p></a>,
        <a target="blank" href={OxfordTownshipAgCensusData1860}><p>1860 Oxford Township Ag Census Data</p></a>,
        <a target="blank" href={OxfordTownshipAgCensusData1870}><p>1870 Oxford Township Ag Census Data</p></a>,
        <a target="blank" href={OxfordTownshipAgCensusData1880}><p>1880 Oxford Township Ag Census Data</p></a>,
        <a target="blank" href={OxfordTownshipPlatMaps18361930}><p>Oxford Township Plat Maps 1836-1930</p></a>,
        <a target="blank" href={DavidMMagieObituary}><p>David M. Magie Obituary</p></a>,
        <a target="blank" href={DavidMMagieWill}><p>David M. Magie Will</p></a>,
      ]}
      mapPageLink="/explore/section14"
    >
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={Oxfordtownship1855} className={classes.image} alt="Section 14, Oxford Township, 1855 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)"/>
          <figcaption>Section 14, Oxford Township, 1855 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Oxfordtownship1875} className={classes.image} alt="Section 14, Oxford Township, 1875 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)"/>
          <figcaption>Section 14, Oxford Township, 1875 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)</figcaption>
        </figure>
      </div>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={Oxfordtownship1895} className={classes.image} alt="Section 14, Oxford Township, 1895 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)"/>
        <figcaption>Section 14, Oxford Township, 1895 (courtesy Smith Library of Regional History, The Lane Libraries, Oxford, OH)</figcaption>
      </figure>
      <div className={classes.sectionDivider} />
      <p>The Austin Magie Farm & Mill District was once a flourishing commercial enterprise and one of the most successful farms in Butler County. Aaron Austin, an early settler of the region, who at one time owned almost the whole western half of Section 14, built the township’s largest grist mill in 1815. After purchasing an additional 160 acres in 1832, he built his Federal-style brick farmhouse nine years later in 1841—evidence of the richness of the soil and the flow and power of Four Mile Creek, which supported 35 years of success as a farmer and miller. Although the original mill burned about 1845, Aaron Austin’s son, aptly named Benjamin Franklin, quickly rebuilt the mill and added a saw mill (McBride 1983). Around that time, in 1846, Butler County Courthouse Tax Re-Appraisal Records valued the mills at $4000, the brick house at $275; with the 200 acres, the total value of the property came to $8875, a substantial sum.<sup>1</sup> In 1850, Samuel Austin, another son, farmed the land adjacent to the mill complex. Census records value the property at $5000, and show that he owned 200 improved acres, seven horses, six milk cows, six sheep and 25 swine. He produced 50 bushels of rye, 800 bushels of Indian corn, and 500 pounds of butter (U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1850). During the first half of the 19th century, Austin and his sons oversaw a multifaceted commercial enterprise whose products—flour, animal feed, lumber, hogs, and butter—were traded and used throughout the region. Austin’s success is still evident in the design and craft of his house. The last farmer who lived there, Felix Fryman, lovingly detailed its features: “thick walls, eleven-foot ceilings, . . . three wood-burning fireplaces . . . . The large hall, and winding staircase with landing, made its beauty complete, and gave one the feeling, that the person who designed it so long ago, really knew what living meant” (Fryman 1971, 79).</p>
      <p className={classes.pullQuote}>" thick walls, eleven-foot ceilings, . . . three wood-burning fireplaces . . . . The large hall, and winding staircase with landing, made its beauty complete, and gave one the feeling, that the person who designed it so long ago, really knew what living meant "</p>
      <div className={classes.figureContainer}>
        <figure
          className={[classes.figure, classes.figureOverride].join(" ")}
        >
          <img src={AustinMagiefarmhouseinterior} className={classes.image} alt="Austin-Magie farm house interior (courtesy Stephen Gordon)"/>
          <figcaption>Austin-Magie farm house interior (courtesy Stephen Gordon)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={AustinMagieHousePhoto1950} className={classes.image} alt="Austin-Magie farm house, ca. 1950 (Fryman, John Felix. 1971. From the Mountains to the Valley. Oxford, OH: Oxford Press.)"/>
          <figcaption>Austin-Magie farm house, ca. 1950 (Fryman, John Felix. 1971. From the Mountains to the Valley. Oxford, OH: Oxford Press.)</figcaption>
        </figure>
      </div>
      <p>After Aaron Austin died in 1860, his heirs sold the mill complex and farm property. Eventually, James Pugh assumed ownership and operation of the mills, thus the original name for the bridge down the road—Pugh’s Mill Covered Bridge.<sup>2</sup>  Local historians speculate that the large timbers used to construct the bridge were milled in Pugh’s saw mill. Census records from 1870 indicate Pugh’s personal property (other than real estate) was valued at $4500. The industry schedule for that year shows the firm of Rohrer & Pugh with $12,000 invested in the business, three employees, who together were paid $2000 for the year, and three water-powered mill buhrs which ran for 10 months a year. The firm produced 5000 pounds of flour valued at $29,250 and 350,000 pounds of offal or stock feed, which was valued at $28,125 after grinding (U.S. Census, Nonpopulation Census, Industry Schedule, Oxford Township, Butler County, OH, 1870). Old photographs suggest the three-story mill building with its 16-foot overshot water wheel and mile-long millrace served as a landmark at the intersection of the Old Road to Eaton (State Route 732, also known as Morning Sun Road) and the road to Somerville. In this way, a landscape shaped by glaciers and domesticated by Native Americans became a thriving agricultural landscape where natural resources—soil, water, trees, and land—were transformed through labor and skill into wealth—crops, livestock, and lumber. </p>
      <p>The history of the surrounding farmland further complements that of the mill complex. Shortly after Aaron Austin’s death, David M. Magie, another successful businessman and prominent stock farmer in the region, whose farm sat next to Austin’s on the eastern half of Section 14, purchased Aaron Austin’s farm property in 1863. Magie, who came to southwestern Ohio with his parents as a toddler around 1813, moved to Section 14 in Oxford Township with his young family in the spring of 1847. At the time he was already an established swine breeder. As one history notes, “Records show that the Magies, as early as 1840, drove hundreds of hogs of their own breeding to the markets in Cincinnati (Davis and Duncan 1921).” In the mid-19th century, hogs were a valuable form of capital that simultaneously increased the profitability of what was known as Indian corn while decreasing transportation costs. “The hog,” as one British journalist explained, “is regarded as the most compact form in which the Indian corn crop of the states can be transported to the market (Quoted in Cronon 1991, 208-209).” (Whiskey offered another alternative.) To fully capitalize on the value of his farm and profit from the expanding industrial meat production market, Magie implemented a form of agricultural vertical integration: he grew ample amounts of corn to feed his stock, and he bred hogs that were large, even tempered, and quick to mature, good for efficiently processing corn and maintaining bulk while walking the 35 miles to Cincinnati markets.<sup>3</sup>  He understood what one 19th century commentator observed, that hogs were corn incarnate. “[F]or what is a hog? But fifteen or twenty bushels of corn on four legs” (Quoted in Cronon 1991, 226). An article touting his success as a breeder noted that in 1842 he drove 60 hogs to Cincinnati. It took a week for the hogs to make the trek to the market where they were penned for two weeks and fed sparingly on corn. “In spite of three weeks of half feed and half care,” the article boasts, “the hogs dressed gave an average of 444 pounds” (“Fireside Musings, No. 54” 1897). Census records from 1850 show that Magie owned 310 acres, 200 of which were improved, valued at $9500. He owned eight horses, four milk cows, 12 other cattle, and 167 hogs. In addition, he raised 186 bushels of wheat, 2200 bushels of Indian corn, 300 bushels of oats, and 160 bushels of barley. He produced 260 pounds of butter and five tons of hay along with potatoes and orchard products (U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1850). These statistics suggest that Magie oversaw a profitable diversified commercial farm and that he was already highly successful by the time he purchased Austin’s property. When Butler County lead the state of Ohio in the production of hogs, David Magie was one of the leading distributors of hogs in the county.<sup>4</sup>  Of the 205 farmers enumerated in Oxford Township in 1850, Magie was one of three farmers listed who owned 200 acres of improved farmland; his farm ranked sixth in terms of cash value; and he ranked eighth in production of Indian corn. He dominated the township in hog production. Only Samuel Douglass, with 150 hogs, came close to Magie. Elijah Saddler followed with 125 hogs and James Wright with 100; everyone else fell in the double or single digits in the swine category (U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1850).</p>
      <p>Magie’s pigs intricately linked his farm to a growing network of farmers, drovers, shippers, meatpackers, coopers, candle, soap, and lamp oil makers, middlemen, retailers and consumers who extended out from Cincinnati and the central Ohio River valley to cities east and west as well as European and international trading partners. By the 1830s, just as Magie was getting started, Cincinnati had already claimed the name Porkopolis in celebration of the disassembly lines that by their mid-nineteenth century peak processed in excess of 400,000 hogs in a year (Gordon 1981, 65). The manufacturing process pioneered in Cincinnati, which Frederick Law Olmsted described as “a human chopping machine”—“Plump falls the hog upon the table, chop, chop; chop, chop; chop, chop, fall the cleavers. All is over. But, before you can say so, plump, chop, chop; chop, chop; chop, chop, sounds again”—used new technologies and specialized division of human labor to not only produce pork products—bacon, ham, sausage, lard, and a variety of pickled pork—but also brushes, buttons, glue, shoe polish, candles, soaps, and lamp oil (quoted in Cronon 1991, 228-229). Large numbers of pigs needed to be processed into pork quickly during the cold season to outpace the warming temperatures that brought decay and disease. Pork packers developed a systematized process that involved killing and scalding the hogs, then lifting them to a scraping table where the hair and bristles were removed. Once this was complete, the hogs were hooked, evenly spaced, to a ten-foot diameter wheel raised 6 feet off the floor. As the wheel turned, workers washed and removed the remaining hair, degutted the hogs, and washed out the cavity. The hogs were then shuttled off to a cooling room where they hung for 24 hours before being cut into parts for packing. It was estimated that the most efficient packing houses could process a hog a minute (Hurt 1982, 200). One historian notes that by 1860, “the annual value of product of the industry in Cincinnati and its environs was well over four million dollars,” second only to the men’s clothing industry (Becker 1968, 277). </p>
      <div className={classes.sectionDivider} />
      <p>The expansion of the railroad infrastructure across the state precipitated the decline of the pork packing industry in Cincinnati beginning in the 1850s, but pig farming continued across southwestern Ohio. Farmers preferred to ship live hogs via railroad because it was convenient and cheap. Rail transport made the hog trade more efficient and less susceptible to bad weather; hogs shipped by rail arrived in better condition—healthier and fatter—than those driven overland. In addition, the expanding railroad infrastructure increased the value of farmland in southwestern Ohio, putting pressure on the profitability of hog production. The geographical distance traveled by farm products increased. The Corn Belt began to shift west into Indiana, Illinois, and Iowa; and with the closing of southern markets during the Civil War, Chicago emerged as the new center for meat packing (Cronon 1991, 207-259). But even as production shifted west, hog farming and corn production remained integral to farming in Southwestern Ohio. In the Post Civil War era, railroad efficiencies and long-distance markets spurred increased attention to selective breeding and specialized hog raising practices among Miami Valley farmers in an effort to maintain and grow farm profits in the emerging global industrial market (Cronon 1991; Hurt 1982; and White 2011). </p>
      <p>With the addition of Aaron Austin’s property in the 1860s, Magie embraced the increasingly industrial and global focus of pig farming and continued to prosper.<sup>5</sup>  He became more businessman than farmer, facilitating and benefiting from an expanding long-distance trade in livestock dependent on improved breeding as well as distinct, identifiable, registered breeds that served as branded products recognizable and interchangeable across distant marketplaces. By 1875, he owned 385.76 acres of Section 14 and was gaining notoriety for his “Magie breed,” a special cross between semi wild hogs descendant from those imported from England during the colonial period and more specialized 19th-century imports such as the Berkshire, the Big China, the Russian, the Byfield, and the Irish Grazier. A 1921 history of the Poland China breed credits David Magie with successfully raising and marketing this new, distinctly American hog, which would be officially designated as the Poland China breed in 1872.<sup>6</sup>  “The superior quality of these animals,” according to the authors, “attracted a great deal of attention among the leading stockmen, who purchased many for breeding purposes”. The authors go on to note that Magie’s success “brought to him the credit of being the greatest advertiser and shipper of his day” (Davis and Duncan 1921).” And although Magie tried to claim credit as the originator of the breed, in 1872 the National Swine Breeders Association refused to legitimate his claim.<sup>7</sup> </p>
      <figure
        className={classes.figure}
      >
        <img src={MagiesBlackPrince} className={classes.image} alt="David Magie’s “Black Prince,” Ohio Farmer, August, 1875. (courtesy Stephen Gordon)"/>
        <figcaption>David Magie’s “Black Prince,” Ohio Farmer, August, 1875. (courtesy Stephen Gordon)</figcaption>
      </figure>
      <p>Despite the unsanctioned pedigree of the “Magie Hog”, Magie gained success and a reputation for promoting and selling the breed. “No matter then by what name the world’s finest hog is known,” one booster wrote, “Mr. Magie lifted the animal from being a racer and a razor back to a bristling gentleman whose savory meat adorns the tables of peers and prelates of princes and potentates of sages and statesmen” (“Fireside Musings, no. 54” 1897). An 1882 history of Butler County notes that the “Magie breed” was in “great demand.” The firm of Magie & Kumler sold from 500-700 head annually, “and these are sent not only all over the States and Territories, but many go to fill orders from foreign countries, some even as far as Australia” (<i>History and Biographical Cyclopedia of Butler County Ohio</i> 1882, 543). Swine breeders credit Magie with helping to develop and popularize a superior, distinctly American, breed of hog, well suited in size and temperament to the expanding commercial trade in Cincinnati and other emerging meatpacking centers. As one historian notes, this “prototype of the “Poland China” (whose name is at least half correct) paved the way for the first major improved breed in America, and the one that would dominate the industrialization of the American pork production process” (White 2011, 101). </p>
      <p>By the 1860s, David Magie had moved from his farm to the village of Oxford where the offices of the Magie & Kumler firm were housed (<i>History and Biographical Cyclopedia of Butler County Ohio</i> 1882, 543). He lived in a stately house on North Beech Street (“David M. Magie Built Residence” 1953).<sup>8</sup>  He turned the daily farm operations over to a manager and shifted his attention to the business of pigs—marketing, sales, and shipping. His farm and swine operation continued to grow and prosper. 1880 census records show that he owned two lots in Section 14 (comprising 374 improved acres and 158 unimproved acres) valued at $15,000. He owned 10 horses, eight milk cows, eight other cattle, and 240 swine. In addition, he produced 1325 bushels of wheat, 2700 bushels of Indian corn, 200 bushels of oats, and 200 bushels of barley (U.S. Census, Nonpopulation Census, Agricultural Schedule, Oxford Township, Butler County, OH, 1880). In the 1890s, he transferred the northern half of his farm to his daughter Laura B. Kumler, who was married to Theophilus R. Kumler, Magie’s young business partner (McBride 1983, 44). Ten years later, in 1900, he died a wealthy man at the age of 89.<sup>9</sup>  He split his property and farm income between two daughters. Laura B. Kumler inherited the farm property in Oxford Township and his son-in-law and business partner, Theo. Kumler, was made executor of the estate.<sup>10</sup>  Although records documenting the Kumler’s ownership of the farm through the mid 1920s are conflicted, the farm and the hog business provided the basis for considerable wealth. In 1947, one observer remembered Mrs. Kumler, who ran the family business after her husband’s death in 1909, as “the only millionaire who ever lived in Oxford.”<sup>11</sup> Records also suggest that the mills remained in business through the first decade of the 20th century until the Great Flood of 1913 destroyed the operation. A short notice in the October 24, 1919 edition of the <i>Hamilton Evening Journal</i>, laments the passing of the landmark, noting that the mill buildings had recently been torn down, the timbers repurposed, and the race filled in. </p>
      <p>Aaron Austin and David M. Magie’s successful 19th century commercial enterprises explain the shared designation of the site on the National Register of Historic Places as the Austin-Magie Farm and Mill District. As one historian has noted, by the mid 19th-century the Miami Valley had emerged as “the most intensively developed corn and hog belt in the nation” with Cincinnati packing out one of every four hogs raised for the market across the West (Gordon 1981, 1 and 30). Promoters of agriculture celebrated the Miami Valley for its rich and fertile farmland. Simultaneously, an expanding transportation network of rivers, roads, canals, and railroads made the region a hub for commercial trade. Over the course of the 19th century, this farm was integral to an expanding supply chain that shipped products across the region, throughout the United States, and eventually around the world. </p>
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

export default injectSheet(styles)(AustinMagieFarmWithClasses);