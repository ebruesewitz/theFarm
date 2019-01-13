import React from 'react';
import injectSheet from 'react-jss';
import Forestsfigure1 from './images/Forestsfigure1.JPG'
import Forestsfigure2 from './images/Forestsfigure2.JPG'
import Forestsfigure3 from './images/Forestsfigure3.JPG'
import Forestsfigure4 from './images/Forestsfigure4.JPG'
import Forestsfigure5 from './images/Forestsfigure5.JPG'
import EssayPage from '../../../Components/EssayPage';

const FloraAndFaunaWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Gaining a Sense of Place through the Interpretation of Vegetation Patterns'
      authorName='Kimberly E. Medley'
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      references={
        [
          <p>Barbour, M.G., &amp; Billings, W.D. (Eds.) (2007). <i>North American Terrestrial Vegetation</i>. New York, NY: Cambridge University Press. </p>,
          <p>Braun, E.L. (1950). <i>Deciduous Forests of Eastern North America</i>. Philadelphia, PA: The Bakiston Company.</p>,
          <p>Dyer, J.M. (2006). Revisiting the deciduous forests of eastern North America. <i>BioScience</i> 56(4): 341-352. </p>,
          <p>Gordon, R.B. (1969). The Natural Vegetation of Ohio in Pioneer Days. <i>Bulletin of the Ohio Biological Survey</i> 3(2).</p>,
          <p>Lucas, M., &amp; Medley, K.E. (2002). Landscape structure and its relationships with nutrient budgets in an agricultural watershed, Southwest Ohio. <i>Ohio Journal of Science</i> 102(2): 15-23</p>,
          <p>Means, J.L., &amp; Medley, K.E. (2011). Old regrowth forest patches as habitat for the conservation of avian diversity in a Southwest Ohio landscape. <i>Ohio Journal of Science</i> 110(4): 86-93</p>,
          <p>Medley, K.E., &amp; Gramlich-Kaufman, L.M. (2001). A landscape guide in environmental education. <i>Journal of Geography</i> 100: 69-77.</p>,
          <p>Medley, K.E., &amp; Krisko, B. (2007). Physical site conditions and land use history as factors influencing the conservation of regrowth forests in a Southwest Ohio nature reserve. <i>Natural Areas Journal</i> 27(1): 31-40.</p>,
          <p>Medley, K.E., Okey, B.W., Barrett, G.W. et al. (1995). Landscape change with agricultural intensification in a rural watershed, southwestern Ohio, U.S.A. <i>Landscape Ecology</i> 10 (3): 161-176.</p>,
          <p>Medley, K.E., Pobocik, C.M., &amp; Okey, B.W. (2003). Historical changes in forest cover and land ownership in a Midwestern U.S. landscape. <i>Annals of the Association of American Geographers</i> 93(1): 104-120.</p>,
          <p>Ricketts, T.H., Dinerstein, E., Olson, D.M. et al. (1999). <i>Terrestrial Ecoregions of North America. A Conservation Assessment</i>. Washington, DC: Island Press. </p>,
          <p>Wang, D.H., &amp; Medley, K.E. (2004). Land use model for carbon conservation across a Midwestern USA landscape. <i>Landscape and Urban Planning</i> 69(4): 451-465</p>,
        ]
      }
      resources={[
        <a target="blank" href="http://www.cityofoxford.org/departments/service-engineering/urban-forestry"><p>City of Oxford Urban Forestry</p></a>,
        <a target="blank" href="http://parks.ohiodnr.gov/huestonwoods"><p>Hueston Woods State Park</p></a>,
        <a target="blank" href="http://www.dnr.state.oh.us/"><p>Ohio Department of Natural Resources</p></a>,
      ]}
      footNotes={[
        <p><sup>1</sup>The distribution map is adapted from Barbour &amp; Billings (2007). You can go online for the data used to compile the <a href="https://commons.wikimedia.org/wiki/File:Klimadiagramm-metrisch-deutsch-Cincinnati-USA.png" target="blank">climate diagram</a> and better understand its <a href="http://www.zoolex.org/walter.html" target="blank">interpretation</a>.</p>,
        <p><sup>2</sup>The color map of “Braun’s Forest Regions” is adapted from Dyer (2006).</p>,
        <p><sup>3</sup>Gordon’s map may be downloaded as a GIS data set from <a href="https://www.arcgis.com/apps/MapSeries/index.html?appid=9053165d102b4cf3a56e5b803d39b66c" target="blank">Ohio State University</a></p>,
        <p><sup>4</sup>Forest cover statistics for the state are available from the <a href="https://www.fs.fed.us/nrs/pubs/ru/ru_fs139.pdf" target="blank">USDA Forest Service</a>. For reviews of landscape and forest cover change in Southwest Ohio see Medley et al. (1995) and Medley et al (2003).</p>,
        <p><sup>5</sup>See for example: Medley &amp; Krisko (2007) and research on invasive species by MU botanist <a href="https://miamioh.edu/cas/academics/departments/biology/about/faculty/gorchov/index.html">David Gorchov</a> and his students. </p>,
        <p><sup>6</sup>See also: <a href="https://www.worldwildlife.org/ecoregions/na0414" target="blank">https://www.worldwildlife.org/ecoregions/na0414</a>.</p>,
      ]}
      mapPageLink="/explore/region"
    >
      <p>The <i>biogeographic</i> distribution of vegetation types and their <i>ecological</i> composition and structure provide important interpretative clues to a place. Patterns of vegetation diversity, from the wild to the most managed settings, are an expression of the unique physical-environmental conditions of climate, topography and underlying soils, and they offer clues to human-historical processes that modify land-cover change and vegetation dynamics over time. How you interpret vegetation characteristics and the factors explaining their patterns of diversity depend on the scale of your lens or perspective from global to local, and accordingly by the resolution or clarity by which those patterns are described. </p>
      <div className={classes.figure}>
        <img src={Forestsfigure1} className={classes.image}/>
      </div>
      <div className={classes.figure}>
        <img src={Forestsfigure2} className={classes.image}/>
      </div>
      <p>Located in Southwest Ohio, the Austin-Magie (MU Institute for Food) Farm occurs in the Temperate Deciduous Forest of Eastern North America (Figure 1 <sup>1</sup>). <span className={classes.underline}>First</span>, climate attributes of temperature as it becomes cooler from south to north, and available moisture as it decreases to the west best explain the boundaries of the forest region. Temperate deciduous forest predominates where there is at least one month with the mean temperature below freezing, restricting broad-leaved evergreen trees, but also at least a three month growing season without a frost that allows broad-leaved deciduous trees to dominate over needle-leaved conifers to the north. Humid conditions decrease to the west, especially characterized by late summer drought and fires that support grasslands over forests. <span className={classes.underline}>Second</span>, Temperate Deciduous Forest may be characterized by its ecological structure (Figure 2). A mature forest stand of at least 100 years typically shows four vegetation layers: a) a closed forest <i>canopy</i> of trees up to 100 feet in height; b) an open <i>sub-canopy</i> of smaller trees at about 10-50 feet; c) an open shrub and sapling layer; and, d) an herb layer that varies seasonally in its density. While broad-leaved trees that synchronously change colors and lose their leaves in the fall make up most of the vegetation cover, most of the plant diversity occurs in spring wildflowers that capture the sunlight before the leaves of forest trees emerge. The Temperate Deciduous Forest of Eastern North America is among the most diverse and productive forest types on Earth and of critical importance to humans as a source of hardwood timber resources and for the storage of carbon in long-lived trees that can offset fossil fuel emissions.</p>
      <p className={classes.pullQuote}>The Temperate Deciduous Forest of Eastern North America is among the most diverse and productive forest types on Earth and of critical importance to humans as a source of hardwood timber resources and for the storage of carbon in long-lived trees that can offset fossil fuel emissions.</p>
      <p>Dr. Emma Lucy Braun (1889-1971) was a Ph.D. botanist from the University of Cincinnati who traveled all over eastern North America, taking extensive field notes, compiling records of the flora, and measuring the ecological structure of different forest stands. She is best known for her classic book <i>Deciduous Forests of Eastern North America</i> (Braun 1950) that maps out and provides an interpretation of different forest types or associations within the region (Figure 3)<sup>2</sup>. Changes in climatic conditions best explain the transition toward the oak-pine forests of the southeastern U.S., the hemlock-hardwood forests to the north and oak-hickory stands toward the west, but the other forest types show geographic distributions that correspond to the topography of the Appalachian Mountains and the influence of glaciation particularly around the Great Lakes. Southwest Ohio, at the Wisconsin glacial boundary, occurs near the mapped boundary between the Beech-maple forest association, north of the glacial boundary, and the Western mesophytic forest to the south (Figure 3). Mature native forests in this region exemplify that transition with beech and sugar maple dominated forests on moist uplands and forests of a more mixed composition, with oaks and hickories, on the slopes. See for example the Big Woods at Hueston Woods State Park and some of the old regrowth stands mapped in the Miami University Natural Areas (Means &amp; Medley 2011).</p>
      <div className={classes.figure}>
        <img src={Forestsfigure3} className={classes.image}/>
      </div>
      <div className={classes.figure}>
        <img src={Forestsfigure4} className={classes.image}/>
      </div>
      <p>While Lucy Braun mapped forest types based on what should probably occur based on regional climate and landforms, Robert Gordon (1969), working at Ohio State University, compiled a vegetation map of Ohio based on the trees recorded while mapping townships and sections during the original land survey for the state in the 1800s (Figure 3 <sup>3</sup>). His map of pre-settlement vegetation further highlights the importance of glaciation to the distribution of beech-maple forests and the occurrence of mixed forest types at the boundary (oak-sugar maple and mixed mesophytic). The map also shows, at a finer resolution, locally unique vegetation for poorly-drained swamps and riparian zones (elm-ash forests), and identifies a few mapped prairies in the state. Both maps focus on vegetation patterns predicted in the absence of the long and complicated history of European-American settlement.</p>
      <div className={classes.sectionDivider}/>
      <p>When the settlers arrived to Southwest Ohio, they began the arduous work of transforming a forested landscape to develop the very productive <i>Corn Belt</i> agricultural region of the United States (Figure 4 <sup>4</sup>). Forest-cover statistics for Ohio show massive clearing from over 90% forested in 1788, to a low of {`<`}10% by 1940, and then a rise to a current forest cover of about 30%. In the agricultural Corn Belt region, however, forest cover remains very fragmented and restricted to riverine corridors and small woodlots. Moreover, the composition and structure of forests reflect land use legacies and time since release as influences on vegetation succession, their relative resistance to non-native invasive plants like Amur honeysuckle, and resilience to pests like the Emerald Ash borer<sup>5</sup>. According to a conservation assessment by the World Wildlife Fund, the forests of the Eastern Corn Belt are among the “most heavily impacted by human activities on the continent” (Ricketts et al. 1999, 165-166)<sup>6</sup>. </p>
      <div className={classes.figure}>
        <img src={Forestsfigure5} className={classes.image}/>
      </div>
      <p>Forest regrowth on lands surrounding the Austin-Magie (Institute for Food) farm occurs, however, on some of the most productive soils on the continent. Under conservation management, research by Miami University faculty and students show that regrowth forest stands should grow productively to support carbon sequestration (Wang &amp; Medley 2004), protect watersheds (Lucas &amp; Medley 2002), harbor significant plant diversity (Medley &amp; Krisko 2007), and conserve native plants and animals across highly modified landscapes (e.g., Means &amp; Medley 2011 for birds). They also offer a unique perspective for landscape interpretation and environmental education that effectively integrates the influence of physical-environmental site conditions with the legacies of human-cultural activities (Medley &amp; Gramlich-Kaufmann 2001). For example, Figure 5 provides a Google Map satellite image of the landscape surrounding the Austin-Magie (Institute for Food) farm location on Somerville Road. From the farm, you can see a mid-successional forest on a hillslope to the east that shows a mixed composition of trees that are less shade tolerant, like the now dead white ash, black cherry, and honey locust, and distinctively along the road corridor a planted fence row of Osage orange trees. Old regrowth floodplain forest occurs along the new bike path that goes east from the Black Covered Bridge with distinctive large sycamore and cottonwood trees. Both settings, under protection, conserve the natural diversity and cultural heritage of the local forests, providing support for ‘New Ruralism’ in Southwest Ohio.</p>
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

export default injectSheet(styles)(FloraAndFaunaWithClasses);