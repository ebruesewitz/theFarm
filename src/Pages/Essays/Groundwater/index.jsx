import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import FarmAndWells from './images/farmandwells.png';
import Figure2 from './images/figure2.png';
import Figure3 from './images/figure3.png';
import Figure4 from './images/figure4.png';
import Figure5 from './images/figure5.png';
import Table1 from './images/table1.png';
import Table2 from './images/table2.png';
import Equation from './images/equation.png';

const GroundwaterWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Assessment of Groundwater Flow and Quality at the Miami University Organic Farm'
      authorName='Jonathan Levy, Patrick Shanahan, Erin Pickford'
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/region"
      references={
        [
           <p>Bigelow, DP, A Borcher (2017) Major Uses of Land in the United States, 2012. EIB-178, U.S. Department of Agriculture, Economic Research Service, August 2017. </p>,
           <p>FAO (2017) Food and Agriculture Organization Statistical Database (food balance sheets): http://www.fao.org/faostat/en/#data/FBS [accessed 2017-07-18]</p>,
           <p>Ohio Environmental Protection Agency (2018) Ohio 2018 Integrated Water Quality Monitoring and Assessment Report, Division of Surface Water, Final Report, June 2018.</p>,
           <p>Wu, M, M Quirindongo, J Sass, A Wetzler (2009) Poisoning the Well: How the EPA is Ignoring Atrazine Contamination in Surface and Drinking Water in the Central United States, National Resources Defense Council, 33 pp.</p>,
           <p>Wu, M, M Quirindongo, J Sass, A Wetzler (2010) Still Poisoning the Well: Atrazine Continues to Contaminate Surface and Drinking Water in the United States, National Resources Defense Council, 32 pp.</p>,
           <p>Levy, J., Clayton, M. K, Chesters, G (1998). Using an approximation of the three-point Gauss-Hermite quadrature formula for model prediction and quantification of uncertainty. Hydrogeology Journal, 6: 457-468.</p>,
           <p>Levy, J., & Ludy, E. E. (2000). Uncertainty Quantification for Delineation of Wellhead Protection Areas Using the Gauss-Hermite Quadrature Approach. Ground Water, 38(1), 63-75. doi:10.1111/j.1745-6584.2000.tb00203.x</p>,
           <p>USDA (2012) Organic 101: What the USDA Organic Label Means, https://www.usda.gov/media/blog/2012/03/22/organic-101-what-usda-organic-label-means  [accessed 2017-07-18]</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://www.farmland.org/"><p>American Farmland Trust</p></a>,
        <a target="blank" href="https://www.3vct.org/"><p>Three Valley Conservation Trust</p></a>,
      ]}
    >
      <h3>Introduction</h3>
      <p>At the time of this writing, there are just over 7.637 billion people on the earth, but despite this massive population, the amount of food available per person has continued to increase worldwide at least since 1961 (FAO, 2017). This has been possible due, in part, to the so-called green revolution which has comprised development of high-yielding varieties of cereals, increased use of chemical fertilizers and pesticides, increased mechanization and increased irrigation through the building of dams and the drilling of groundwater extraction wells. While successful at increasing food production, all of these innovations result in some environmental degradation. Agricultural chemicals pose a threat to the quality of fresh water globally. Historically, we have treated our fresh water supply as if it were an infinite renewable resource. However, fresh water represents less than one percent of all of Earth’s water. Our growing population along with its waste disposal and use of potentially harmful chemicals, have forced us to recognize that fresh water is only potentially renewable. To maintain fresh water systems that are healthy for ecosystems and humans, we need to rethink many of our current practices.</p>
      <p>The vast majority of the more than 300 million acres of crops planted in the US in 2015 was traditionally cultivated, meaning that synthetic fertilizers and pesticides were applied (Bigelow and Borcher, 2017; USDA, 2017; USDA, 2012). Pesticide and fertilizer application associated with conventional farming has led to widespread nonpoint-source groundwater and surface-water contamination. The Ohio Environmental Protection Agency lists fertilizer applications as one of it “highest priority sources.” (OEPA, 2018) resulting in nitrate contamination. Almost half of Ohio’s residents derive their drinking water from groundwater aquifers (geologic formations capable of supply usable quantities of water) and about 3.2% of Ohio’s public water supply wells contained water with nitrate concentrations exceeding 5 mg/L, 50% of the US EPA’s maximum contaminant level (MCL), a level that triggers regulatory action. Of all the public water supply wells in Ohio’s sand-and-gravel aquifers, about 5.1% contained water with nitrate concentrations exceeding 5 mg/L. Pesticide application can also pose a threat to drinking-water quality. Atrazine is an herbicide widely used on corn, and water contaminated with atrazine has been associated with a higher risk of cancer along with hormonal, cardiovascular, kidney and lung problems. Atrazine has also been linked to sexual and hormonal abnormalities in amphibians, fish and reptiles (Wu et al., 2009). In a 2003-2004 study, atrazine was detected in > 90% of 14,000 water samples from 139 public water systems (Wu et al., 2009). From 2005-2008, 35,000 water samples were again taken from 153 public water systems 12 states including Ohio, and atrazine was detected in 80% of them. Two public water systems in Ohio had average concentrations in finished water greater than the 3 g/L MCL and peak concentrations greater than 35 g/L.</p>
      <p className={classes.pullQuote}>Our growing population along with its waste disposal and use of potentially harmful chemicals, have forced us to recognize that fresh water is only potentially renewable. To maintain fresh water systems that are healthy for ecosystems and humans, we need to rethink many of our current practices.</p>
      <p>Miami University’s Institute for Food (IF) Farm seeks to provide a model of sustainable food production, community engagement, and experiential learning for others to follow. Increasing the portion of cropland that is farmed without artificial fertilizers and pesticides would reduce the overall chemical load to our water systems, mitigate the risk such contamination poses to human and ecosystem health and potentially save money by reducing the final burden of contamination on residents and tax payers.</p>
      <p>The IF’s 35-acre sustainable farm is located about one mile northeast of the City of Oxford in southwest Ohio, by the intersection of Somerville Road and SR 732 (Figure 1). The farm sits above the Four Mile Creek buried valley aquifer, the source of about half of the City of Oxford’s drinking water supply. Before the Pleistocene epoch, the Four Mile Creek valley was carved into the underlying Ordovician bedrock and was about 180 ft deeper than the valley we see today. During the glacial advances and retreats of the Pleistocene, much of the valley was filled with alternating layers of sand-and-gravel outwash, clayey glacial till, and silty-clay lake sediment. Due to its high permeability and available pore space, the sand-and-gravel outwash, makes an excellent aquifer where deposits are thick enough. The much less-permeable glacial till and lake sediment layers act as confining units to groundwater movement. The IF farm is surrounded by traditionally-cultivated farmland, making it an excellent site to study the potential benefits to groundwater quality associated with abstaining from application of artificial fertilizer and pesticides.</p>

      <figure
        className={classes.figure}
      >
        <img src={FarmAndWells} className={classes.image} alt="Figure 1. The farm and monitoring wells."/>
        <figcaption>Figure 1. The farm and monitoring wells.</figcaption>
      </figure>
      <p>The objectives of this project were to:</p>
      <p>
        <ol>
          <li>Investigate the stratigraphy at the farm, including the depth and thickness of the aquifer.</li>
          <li>Determine the groundwater flow direction beneath the farm.</li>
          <li>Characterize the aquifer deposits in terms of hydraulic conductivity.</li>
          <li>Use measured groundwater gradients and hydraulic conductivities to estimate groundwater velocity throughout the site.</li>
          <li>Sample and analyze the groundwater for nitrates and nitrites. Relate those concentrations to well locations and groundwater travel times if possible.</li>
        </ol>
      </p>
      <h3>Site Description and Instrumentation</h3>
      <p>Because groundwater is largely hidden from view, the principal way in which we study it is to drill boreholes into the aquifers and install groundwater monitoring wells or piezometers. Piezometers are typically small diameter (1” to 2”) PVC pipes with a section on the bottom that is slotted (or screened) so that water can enter but sediment will be kept out. During the drilling, we are able to take sediment samples to learn about the stratigraphy (Figure 2). We then use the installed piezometers as windows into the geologic formations to measure water quality, the water’s energy and the permeability of the formations. Knowing the water’s energy and the formation permeability allows us to calculate which way the water is flowing and how fast. </p>
      <figure
        className={classes.figure}
      >
        <img src={Figure2} className={classes.image} alt="Figure 2. Using the Miami hollow-stem-auger drill rig to install piezometers and sample the sediments."/>
        <figcaption>Figure 2. Using the Miami hollow-stem-auger drill rig to install piezometers and sample the sediments.</figcaption>
      </figure>
      <p>In summer 2017, using our Miami University auguring drill rig (Figure 2), we installed seven piezometers around the perimeter of the farm (Figure 1). All of the piezometers comprised 2-inch diameter PVC pipe with a 5-ft long screen at the bottom. At three of the sites, MUF-1, MUF-3 and MUF-4, the wells were installed as nested pairs with a shallower well (B) screened at the water table and a deeper well (A) going to about 40 ft below the ground surface or to the till confining layer (Figure 3). MUF-2 was a single piezometer screened between 25 and 30 ft below the ground surface. The stratigraphy around the wells includes a broad range of sediments such as glacial till, clay, silt, and sand-and-gravel (Figure 3). These wells were used to measure hydraulic head, hydraulic conductivity and water quality.</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure3} className={classes.image} alt="Figure 3. Monitoring well as-built diagrams and site stratigraphy."/>
        <figcaption>Figure 3. Monitoring well as-built diagrams and site stratigraphy.</figcaption>
      </figure>
      <h3>Water Table Characterization</h3>
      <p>Groundwater in this area flows in a general south-southeasterly direction down valley and towards one of Oxford’s municipal production wells, PW1 (Figure 4). In March 2018, south of PW1, the water table rose to just above 781 ft above msl and then fell heading farther south. The slope of the water table varies, but across the farm it fell approximately 4 ft over 850 ft yielding a hydraulic gradient of approximately  0.0047. Based on additional water-table maps from July and November 2017, the gradient across the farm averaged about  0.0048 with a 95% confidence interval of  0.0038 to  0.0058.</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure4} className={classes.image} alt="Figure 4. Water-table map and groundwater flow directions"/>
        <figcaption>Figure 4. Water-table map and groundwater flow directions</figcaption>
      </figure>
      <h3>Hydraulic Conductivity</h3>
      <p>Hydraulic conductivity (K) is a measure the aquifer permeability and therefore the ease with which water can flow through the porous medium. Hydraulic conductivity is one of the main things measured in hydrogeologic investigations because it is a controlling factor for groundwater velocity, the amount of groundwater that can be extracted from a well and the potential for the spread of groundwater contamination. K can be measured in a set of piezometers located around a pumping well in an “aquifer pumping test”. Water is extracted from the pumping well and K is calculated based on the observed changes in groundwater levels in the surrounding piezometers. Alternatively, K can be measured in single piezometers using “slug tests.” In a slug test, the water level inside a piezometer is abruptly changed by dropping or removing a solid “slug” in the piezometer or a “slug” of water. Each slug tests yields a measure of K in the area immediately surrounding the piezometer screen.</p>
      <p>Slug tests were performed on each of our piezometers resulting in mean K values for the area immediately around each piezometer screen (Table 1). Values ranged from 0.75 to 170 ft/d. Assuming that the low value at MUF-3A was not representative of the glacial outwash, the geometric mean for the outwash was 65 ft/d with a 95% confidence interval of 20 to 210 ft/d.</p>
      <p>A 48-hour aquifer pumping was conducted for the area near the farm’s irrigation well between MUF-1 and MUF 2. Drawdown measurements at MUF-2 were analyzed using the Neumann (1974) method and indicated a horizontal K-value of about 68 ft/d, in close agreement with the slug test values. The pumping test indicated a much smaller vertical K-value of about 0.66 ft/d. </p>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={Table1} className={classes.image} alt=""/>
        <figcaption>Table 1. Average hydraulic conductivity for each piezometer. Values were calculated by averaging the results of three slug tests performed on each.</figcaption>
      </figure>
      <h3>Groundwater Flow Velocity</h3>
      <p>Groundwater velocity is calculated according to</p>
      <img src={Equation} alt="V=-(K/n) * (dh/dl)"/>
      <p>where V is velocity, K is hydraulic conductivity, n_e is effective porosity, and dh/dl is the hydraulic gradient. Effective porosity from previous work (Ludy and Levy, 2000) was estimated to be 0.15 with a 95% confidence interval of 0.071 to 0.34. Based on groundwater flow modeling of the Four Mile Creek aquifer, Levy and Ludy (2000) also concluded that a more reasonable mean K for the outwash on a farm field scale 505 ft/d, much higher than the small-scale measured values. The 95% confidence interval for this K estimate was 371 to 689 ft/d. </p>
      <p>The uncertainties associated with K, ne and the gradient were incorporated into an uncertainty analysis of velocity using an approximation of the three-point Gauss–Hermite quadrature approach (Levy et al., 1998) resulting in a best estimate and 95% confidence interval for groundwater velocity (Table 2). Using the groundwater velocities, the time for groundwater travel times from MUF-2A to MUF-4A was estimated to be 43 days with a 95% confidence interval of 23 to 314 days.</p>
      <figure
        className={classes.figure}
      >
        <img src={Table2} className={classes.image} alt=""/>
        <figcaption>Table 2. Estimation and uncertainty of groundwater travel times.</figcaption>
      </figure>
      <h3>Nitrate/Nitrite Concentrations</h3>
      <p>One full round of nitrate/nitrite sampling was completed on the farm piezometers in March 2018. Nitrite concentrations were negligible. Nitrate concentrations ranged from 2.29 to 6.04 mg/L. All concentrations were below the US EPA limit of 10 mg/L (Figure 5). We hypothesized that, due to the relatively short travel times, concentrations at the north end of the farm might be higher than the south because the water in piezometers to the south was more likely to be coming directly from the sustainable farm. We thought that this might be especially true in the shallow piezometers as their water is probably from areas closer to the piezometer compared to the deeper piezometers. However, there was no obvious spatial pattern to the contamination. Water with nitrate could be flowing onto the farm from the hill to the east or could be held up in the unsaturated/soil zone for long periods. It might take years of continual sampling and analysis to observe differences between the upgradient and downgradient ends of the sustainable farm.</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure5} className={classes.image} alt=""/>
        <figcaption>Figure 5. The concentration of nitrate in each piezometer at the farm.</figcaption>
      </figure>
      <h3>Discussion and Conclusions</h3>
      <p>It is difficult to determine where the water entering each piezometer comes from. Based on the direction of groundwater flow we believe that water sampled at MUF 2A and MUF 1A and 1B comes from the conventionally-farmed field to the north of Somerville Road. Water sampled in piezometers MUF 3A,B and 4A,B is more likely to come from the Sustainable farm and therefore might, over time, be lower in nitrate concentrations. We found no clear spatial pattern during the single sampling time of March 2018, but there are many possible explanations for this including water reaching the piezometers within one year from fields to the north, water infiltrating near MUF 4A,B after running overland from conventional fields to the east or simply long residence times of nitrate in the unsaturated zone. The information we gathered during drilling and piezometer installation indicates that the area’s stratigraphy includes heterogeneous sediments, ranging from highly permeable sand-and-gravel, to mostly impermeable glacial till. Each of these sediments has a significant presence in the area and groundwater flow paths to the piezometers may cross more than one sediment type. The uncertainty of parameter estimation for groundwater travel time is great, especially due to the uncertainty associated with estimation of hydraulic conductivity. We will continue our nitrate sampling to better discern the spatial patterns and perhaps observe the positive impact of sustainable farming on groundwater quality.  We also hope to expand our field work to include sampling and analysis for atrazine as well as nitrate.</p>
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

export default injectSheet(styles)(GroundwaterWithClasses);