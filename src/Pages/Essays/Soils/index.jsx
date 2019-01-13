import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import GlacialOhio from './images/glacialohio.png';
import SoilsMap from './images/soilsmap.png';

const SoilsWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Soils of Four Mile Creek, Ohio, and the Austin-Magie Farm'
      authorName='Jason A. Rech'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/region"
      references={
        [
          <p>Jenny, H. 1941. Factors of Soil Formation. A System of Quantitative Pedology. New York: McGraw-Hill Book Company, Inc.</p>,
          <p>Montgomery, D. R.. 2007a. Dirt: The Erosion of Civilizations. Berkeley and Los Angeles: University of California Press.</p>,
          <p>Montgomery, D. R.. 2007b. Is Agriculture Eroding Civilization’s Foundation?,” GSA Today 17(10):4-9.</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://www.farmland.org/"><p>American Farmland Trust</p></a>,
        <a target="blank" href="https://www.butlerswcd.org/"><p>Butler County Soil and Water Conservation District</p></a>,
        <a target="blank" href="https://www.3vct.org/"><p>Three Valley Conservation Trust</p></a>,
      ]}
    >
      <p>Soils are the foundation of modern society, yet most people don’t think twice about what makes a good soil, or if we are doing enough to preserve this natural resource. As David Montgomery put it, we treat soil like ‘dirt’ (Montgomery, 2007a), when in fact it is far more valuable to us than gold. It is fascinating that humans turned to this valuable resource and agriculture at about the same time all over the world!  Around ten thousand years ago people in the Middle East, China, and South America all transitioned from hunter-gatherer to agrarian societies, independently. Why? There is only one good reason for this transition occurring separately at around the same time; human populations exceeded the carrying capacity of the land for hunter-gatherer societies and humans were forced to agriculture (Montgomery, 2007a). Now, after societies all over the world have turned to agriculture, we can’t go back, as the only way to support the large global population of today is through widespread agriculture</p>
      <p>The archaeological and historic records, however, also allow us to examine the relationship between societies and how they treat their soil. Time and time again societies started farming in fertile, flat floodplains and then transitioned to farming hillslopes and uplands when populations increased. Rapid rates of soil erosion then stripped a society of its agricultural base, leading Montgomery to suggest the average lifetime of a society of ~ 1,000 years is largely a consequence of this boom and bust agricultural cycle (Montgomery, 2007a).</p>
      <p>To date, the U.S. has largely repeated this cycle. With European occupation of North America, forests were cleared, wetlands were drained, and soils were plowed for agriculture. Increased industrialization and mechanization of the farming industry in the 20th century led to the rapid expansion of agriculture and continued plowing of almost all arable land. The key problem with large-scale industrialized agriculture is quite simple; agricultural soil erosion rates are orders of magnitude higher than soil production rates. Global soil production rates are ~0.06 to 0.08 mm/yr., whereas average erosion rates with ‘good’ agricultural practices are about ten times higher at ~0.6 mm/yr. (Montgomery, 2007b). Bad agricultural practices can easily produce soil erosion rates a hundred or a thousand times greater than soil production rates, undermining the agricultural base of a society. In other words, modern farming is unsustainable. Many have argued that the best way to break this boom and bust cycle of agriculture is to switch from large-scale industrialized agriculture to small family-owned organic farms and community supported agriculture (CSA) (e.g., Montgomery, 2007b).</p>
      <p className={classes.pullQuote}>Bad agricultural practices can easily produce soil erosion rates a hundred or a thousand times greater than soil production rates, undermining the agricultural base of a society.</p>
      <p>In 2016 the Institute for Food at Miami University opened a small 8-acre CSA on the floodplains of Four Mile Creek on part of the historic Austin-Magie 30-acre farmstead. So why was this location chosen, and why are the soils here so good for agriculture? To answer these questions it is important to understand that soils are a product of their environment, with climate, organisms, topographic relief, parent material, and time being the dominant environmental factors (Jenny, 1941). </p>
      <figure
        className={classes.figure}
      >
        <img src={GlacialOhio} className={classes.image} alt="Glacial Map of Ohio, Ohio Division of Geological Survey, 2005."/>
        <figcaption>Glacial Map of Ohio, Ohio Division of Geological Survey, 2005.</figcaption>
      </figure>
      <p>Soils in Southwest Ohio are relatively young, geologically speaking, as this region of Ohio was covered by a massive glacier just 24,000 years ago. This glacier excavated bedrock and soils in Canada and Northern Ohio, and deposited these chemically unaltered sediments at the surface hundreds to thousands of miles from where they were excavated. When you cross the Ohio River to the south, which is the southern limit that the glaciers extended in Southwest Ohio over the last million years or so, take a look at the soils. The deep red color of Kentucky soils is the consequence of intense chemical weathering over millions of years and the subsequent accumulation of iron oxides and loss of nutrients. Another characteristic of the last glacial period is that the atmosphere was much dustier than today. After the glaciers left Southwestern Ohio, this fine-grained dust, called loess, accumulated on the landscape up to a depth of two or three feet in some locations. Loess is the perfect particle size for agriculture – forming loam soils – as this particle size holds enough water for plants (unlike sand that dries out too fast) but not too much like clay, which does not drain well and can hold water too tightly so that plants can’t use it.</p>
      <p>The dumping of young, mostly unweathered, sediments by the glaciers and the accumulation of glacial dust allowed for the development of fertile soils in Southwestern Ohio, but the Four Mile Creek floodplain is especially fertile. Floodplains are great for agriculture because silt-sized particles eroded from the uplands are deposited during flood events along with decomposed soil organic matter. The silt is ideal for soil permeability and water retention, and there is no better sponge for soil nutrients than soil organic matter. The floodplain of Four Mile Creek is also massive compared to the size of the modern creek, something that geologists call an ‘underfit’ stream, as this floodplain formed as the result of tremendous amounts of meltwater discharge coming off of the glacier.</p>
      <figure
        className={classes.figure}
      >
        <img src={SoilsMap} className={classes.image} alt="Soils Map of the Institute for Food Farm at Miami University in the Four Mile Creek Valley, Ohio. Background is a LiDAR digital elevation map of the valley. (courtesy of Jason Rech)"/>
        <figcaption>Soils Map of the Institute for Food Farm at Miami University in the Four Mile Creek Valley, Ohio. Background is a LiDAR digital elevation map of the valley. (courtesy of Jason Rech)</figcaption>
      </figure>
      <p>{`In general, the soils on the Four Mile Creek floodplain have been mapped as the soil orders Entisols, Mollisols, and Alfisols. There are 12 soil orders, which are the highest level of classification, in the U.S. Soil Taxonomic system. Entisols are associated mostly with young stream floodplain sediments and are characterized by thick soil profiles yet little alteration or soil development due to the relatively young age of the soils (i.e. < 2,000 years or so). Mollisols are the most fertile of the 12 soil orders and are characterized by thick horizons with high concentrations of decomposed soil organic matter (soil humus). These soils are generally associated with grasslands, as about 50% of the biomass of grasses are in their root systems. The Mollisols on the Four Mile Creek floodplain are likely more associated with topographic lows and the moist floodplain environment, where organic matter has concentrated, than grasslands. The Mollisols in Four Mile Creek are associated with the older floodplain deposits that are on the order of 10,000 to 20,000 years old. Alfisols – the state soil of Ohio – are found on the edge of the valley near the uplands and in the topographic highs. These soils, also quite fertile but with lower concentrations of organic matter, are generally associated with deciduous forests.`}</p>
      <p>There is also a surprising amount of variability in the soils on the 8-acre plot of the Austin-Magie farmstead that is being cultivated by the Institute for Food, which is extremely beneficial for a small farm. Soils in the southwestern portion of the property have formed in the topographic low of an old stream channel. This is good in the sense that this low position on the landscape has allowed for a lot of organic matter to accumulate in the soils, but these soils are also prone to flooding. On other portions of the farm there are high terraces that demark the floodplain at the end of last glacial. These soils are associated with clay-rich soil horizons from weathering, yet are underlain by sands and gravels. These soils are good for agriculture in that they are high on the landscape and drain during wet periods, yet do not dry out too quickly due to the clayey soil horizons. As you get closer to the uplands to the northeast the soils get thicker as material has eroded from the hillslopes. These soils are known as ‘cumulic’ soils as sediments have been continually added to them. </p>
      <p>This great variety of soils in the 8-acre plot of the Austin-Magie farm is ideal in that all soils are fertile, but the differences in particle size and landscape position allows for productive crops in some locations on the farm no matter if it is a very dry or wet summer. Therefore, the diversity in soils and landscape position allows the farm to be resilient to climate variability. This is an important factor as we confront unprecedented changes in the climate system. This diversity in soils and resilience to climate variability was also no doubt taken into account by the Austin-Magie farm and in part allowed for the success of this farm.</p>
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
      width: 'calc(70% - 100px)',
      '@media (max-width: 500px)': {
        width: '75%',
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

export default injectSheet(styles)(SoilsWithClasses);