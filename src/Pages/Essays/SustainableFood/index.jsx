import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import Picture1 from './images/picture1.png';
import Picture2 from './images/picture2.png';
import Picture3 from './images/picture3.png';
import CORVGuide201819 from './images/CORVGuide201819.pdf';

const SustainableFoodWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Defining Sustainable Local Agriculture: Converging Paths, Permaculture Principles, and Cities within Civic Concentric Circles'
      authorName='Alan Wight (with Charlie Gonzalez and Braden Trauth)'
      references={
        [
          <p>Alonso, W. 1964. Location and land use. Toward a general theory of land rent. <i>Location and land use. Toward a general theory of land rent.</i></p>,
          <p>Brundtland, G., Mansour K., Susanna A, et al. 1987. Our Common Future (The Brundtland Report). Available at: http://www.un-documents.net/our-common-future.pdf</p>,
          <p>Christaller, W. 1966. <i>Central places in southern Germany</i>. Prentice-Hall.</p>,
          <p>Dunlap R. E., Beus, C. E., Howell, R. E., &amp; Waud, J. 1993. What is sustainable agriculture? An empirical examination of faculty and farmer definitions. <i>Journal of Sustainable Agriculture</i>, 3(1), 5-41.</p>,
          <p>Elkington, J. 1997. <i>Cannibals with Forks: the Triple Bottom Line of 21st Century Business.</i></p>,
          <p>Food and Agriculture Organization. 2011. Save and Grow. A policymaker’s guide to the sustainable intensification of smallholder crop production. Rome. Available at: http://www.fao.org/fileadmin/templates/agphome/documents/scpi/PerennialPolicyBrief.pdf</p>,
          <p>Fukuoka, M. 1978. The one-straw revolution: an introduction to natural farming [Japan].</p>,
          <p>Glover, J. 2003. Characteristics of Annual vs Perennial Systems, Presented at: Sod Based Cropping System Conference, University of Florida's Institute of Food and Agricultural Sciences, Quincy, Florida, February 20-21, 2003. Available at: https://landinstitute.org/wp-content/uploads/2003/02/Glover-FL-Speech-2003.pdf</p>,
          <p>Greenhorns 2014. Von Thünen’s Concentric Ring Model of Agricultural Land Rents. Figure 1 downloaded from: https://thegreenhorns.files.wordpress.com/2014/08/berglee-fig04_008.jpg</p>,
          <p>Gold, M. 2007. United States Department of Agriculture, Sustainable Agriculture: Definitions and Terms. Special Reference Briefs Series no. SRB 99-02, Updates SRB 94-05, September 1999; revised August 2007, Available at: https://www.nal.usda.gov/afsic/sustainable-agriculture-definitions-and-terms</p>,
          <p>Hemenway, T. 2015. <i>The permaculture city: Regenerative design for urban, suburban, and town resilience</i>. Chelsea Green Publishing.</p>,
          <p>Howard, E. 1902. Garden Cities of To-morrow. S. Sonnenschein &amp; Company, London.</p>,
          <p>Ikerd, J. E. 1993. The need for a system approach to sustainable agriculture. <i>Agriculture, Ecosystems &amp; Environment</i>, 46(1-4), 147-160.</p>,
          <p>Ikerd, J. E. 2005. <i>The New American Farmer: Profiles of Agricultural Innovation</i>, 2nd ed. USDA, Sustainable Agriculture Research and Education.</p>,
          <p>Jacke, D., &amp; Toensmeier, E. 2005. <i>Edible Forest Gardens, Volume I and II: Ecological Design And Practice for Temperate-Climate Permaculture</i>. Chelsea Green Publishing.</p>,
          <p>Jackson, Wes. 1978. Toward a Sustainable Agriculture, <i>Not Man Apart</i>, p. 4-6. Friends of the Earth.</p>,
          <p>Lynch, K. 1984. <i>Good city form</i>. MIT press.</p>,
          <p>Lyson, T. A., &amp; Guptill, A. 2004. Commodity agriculture, civic agriculture and the future of US farming. <i>Rural sociology</i>, 69(3), 370-385.</p>,
          <p>Lyson, T. A. 2000. Moving toward civic agriculture. <i>Choices. The Magazine of Food, Farm, and Resources Issues</i>, (3), 42-45.</p>,
          <p>Mollison, B., &amp; Holmgren, D. 1978. <i>Permaculture one: a perennial agriculture for human settlements</i>. Tagari Publications, Australia.</p>,
          <p>Mollison, B., &amp; Holmgren, D. 1980. <i>Permaculture Two: Practical Design for Town and Country in Permanent Agriculture</i>. Tagari Publications, Australia.</p>,
          <p>Muler, F. 2016. Permaculture’s Zones of Activity. Figure 2 downloaded from: https://i.pinimg.com/736x/37/21/5d/37215dd1417f735ef3e4a1e82c50231f--permaculture-design-permaculture-zones.jpg</p>,
          <p>Odum, H. T. 1971. <i>Environment, power and society</i>. New York, USA, Wiley-Interscience.</p>,
          <p>Roland, E. 2009. Permaculture Principals. Appleseed Permaculture. Available at: http://farm3.static.flickr.com/2479/3654636392_3a04052777_b.jpg</p>,
          <p>Shepard, M. 2013. <i>Restoration agriculture</i>. Texas, US: Acres, 2013.</p>,
          <p>Smith, J. R. 1929. <i>Tree crops: A permanent agriculture</i>. Harcourt Brace, New York.</p>,
          <p>Smith, A., &amp; MacKinnon, J.B. 2009. The 100-Mile Diet: A Year of Local Eating. Random House, Canada, Toronto.</p>,
          <p>United States Farm Bill. 1990. Food, Agriculture, Conservation, and Trade Act of 1990 (FACTA), Public Law 101-624, Title XVI, Subtitle A, Section 1603 (Government Printing Office, Washington, DC, 1990) NAL Call # KF1692.A31 1990]</p>,
          <p>Von Thünen, J. H., &amp; Hall, P. G. (1826). 1966. <i>Isolated state: an English edition of Der isolierte Staat</i>. Pergamon.</p>,
          <p>Wight, R. A. &amp; Trauth, B. 2016. Ecology, Energy, and Alternative Agriculture: A New Synthesis. The Central Ohio River Valley Local Food Guide. Talk Local Article Series. Available at: https://static1.squarespace.com/static/5314fdefe4b0f6aa70872c9f/t/578ffb14e3df2837879d7fe3/1469053716870/Ecology%2C+Energy%2C+and+Agriculture+-+New+Synthesis+Final.pdf</p>,
          <p>Weber, A. 1929. <i>Theory of the Location of Industries</i>. The University of Chicago Press.</p>,
          <p>Weber, Max. 1949. The Methodology of the Social Sciences. Edited and translated by Shils E., Finch H. Glencoe, IL: Free Press.</p>,
          <p>Yeomans, P. A. 1954. The Keyline plan. <i>The Keyline plan</i>.</p>,
        ]
      }
      footNotes={[
        <p><sup>1</sup>Defined as a medically valuable compound produced from agricultural crops or animals.</p>,
        <p><sup>2</sup>To their credit, the USDA does have an Agroforestry Division, and recognizes the potential of this kind of production system.</p>,
        <p><sup>3</sup>For a comprehensive list of benefits regarding perennials vs. annuals, see Glover (2003) and the Food and Agriculture Organization of the United Nations (2011).</p>,
        <p><sup>4</sup>Von Thünen’s Model is the origin of location theory, and inspired the work of Walter Christaller (Central Place Theory, 1933), Alfred Weber (Least Cost Theory of Industrial Location, 1929), August Lösch (The Spatial Order of the Economy, 1940), William Alonso (<i>Location and Land Use: Towards General Theory of Land Rent</i>, 1964) and other Economic Geographers.</p>,
        <p><sup>5</sup>Permaculture also examines some of these concepts in depth.</p>,
      ]}
      resources={[
        <a target="blank" href="https://www.eatlocalcorv.org/"><p>Central Ohio River Valley Local Food Guide</p></a>,
        <a target="blank" href="https://www.edibleohiovalley.com/eov"><p>Edible Ohio Valley</p></a>,
        <a target="blank" href="http://gormanfarm.org/"><p>Gorman Heritage Farm</p></a>,
        <a target="blank" href="https://greenumbrella.org/food-policy"><p>Greater Cincinnati Regional Food Policy Council</p></a>,
        <a target="blank" href="https://www.green-acres.org/"><p>Greenacres Foundation</p></a>,
        <a target="blank" href="http://miamioh.edu/cas/academics/centers/iff/index.html"><p>Institute for Food</p></a>,
        <a target="blank" href="http://turnerfarm.org/"><p>Turner Farm</p></a>,
        <a target="blank" href={CORVGuide201819}><p>CORV Local Food Guide 2018-2019</p></a>,
      ]}
    >
      <p>There are many paths leading towards sustainable agriculture. In 1978, Wes Jackson argued that our farming practices should emulate natural ecosystems, given that these have stood the test of time. The past 40 years has seen incredible growth in the number of conversations, definitions, and practices around sustainable practices. Different groups approach this debate from varying historical, cultural, geographical (including climate and biological factors), and epistemological perspectives. The majority of agronomists, including John Elkington (1997), John Ikerd (1993), and Thomas Lyson (2000), have built their definitions on the pillars of ecology (environment), economics, and social well-being. These pillars provide a starting point for exploring sustainable agriculture’s definitions. Yet, as Ikerd (2005) has pointed out, it is the real stories and practices of farmers developing sustainable agriculture systems that matter. These stories root agriculture in the microclimate and soils of local settings. This essay argues that we are at a convergence in our definitions of sustainable agriculture and just need to incorporate Permaculture. Second, this essay advances the sustainable agriculture conversation by revisiting Johann Heinrich von Thünen’s (1826 (1966)) city planning model and Ebenezer Howard’s <i>Garden Cities of To-morrow</i> (1902), as we define <i>Sustainable Local Agriculture</i> (SLA) within this current discussion.</p>
      <p>Scholars and practitioners across disciplines debate what kinds of agriculture get included in the sustainable agriculture definition, often with words such as <i>industrial, global, chemical, conventional</i>, and <i>commodity</i> on one side, and <i>sustainable, local, ecological, regenerative, alternative</i>, and <i>civic</i> on the other (Dunlap, Beus, Howell, &amp; Waud, 1993; Ikerd, 1993; Lyson 2000). The conventional side is associated with agribusiness, green revolution technologies, petrochemical inputs (synthetic fertilizers and pesticides), Genetically Modified Organisms (GMOs), large-scale tillage, erosion, eutrophication, and monocultures. The sustainable side is associated with biodynamics; certified naturally grown; holistic management, low-input; no till or precision agriculture; agroecology; integrated pest management (IPM), Permaculture, and the historic definition of organic agriculture. Sustainable agriculture emphasizes closed-loop farm systems that restore and enhance biodiversity and soil health (structure, carbon content, microbial and fungal life). While these ideal types (Weber, 1949) are helpful, they are also divisive. It is best to think about agriculture on a continuum, as a range of practices, rather than distinct sides. Simply put, we need aspects from the entire spectrum as we seek to “meet the needs of the present without compromising the ability of future generations to meet their own needs” (Brundtland Report, 1987, 1.). </p>
      <p>In looking across the approximately 43 existing characterizations, explanations, and definitions of sustainable agriculture as catalogued by the United States Department of Agriculture (Gold, 2007), there are far more similarities than differences. Under U.S. law (United States Farm Bill, 1990), the term <i>sustainable agriculture</i> refers to an integrated system of plant and animal production practices that:</p>
      <p>
        <ul>
          <li>satisfies human food and fiber needs;</li>
          <li>enhances environmental quality and the natural resource base upon which the agricultural economy depends;</li>
          <li>makes the most efficient use of nonrenewable resources and on-farm resources and integrates, where appropriate, natural biological cycles and controls;</li>
          <li>sustains the economic viability of farm operations; and</li>
          <li>enhances the quality of life for farmers and society as a whole.</li>
        </ul>
      </p>
      <p>These tenets represent a convergence of 43 sustainable agriculture definitions and practices. This integration of perspectives is impressive, but Permaculture, one of the more important pieces, is largely absent. This is the missing link. We view Permaculture and its principles as foundational to any sustainable agriculture definition. Furthermore, Permaculture is inherently tied to the biogeography of a region, bringing the local to the forefront of the sustainable agriculture conversation.</p>
      <p>Permaculture was developed and coined by Australians Bill Mollison and David Holmgren in 1974 (four years before Wes Jackson began talking/writing about SA). In developing this paradigm, Mollison and Holmgren (1978, 1980) drew inspiration from J. Russell Smith (1929), P.A. Yeoman (1954), Buckminster Fuller, Victor Papinek, J.I. Rodale, and Howard Odum (1971). The developing science of Ecology also informed their work and there were critical corollaries such as Masanobu Fukuoka (1978), Sepp Holzer, and Wes Jackson. Permaculture is a design science, a total way of approaching the human-earth relationship that focuses on building ecological human habitats and community food-production systems that harmoniously integrate dwellings, settlements, energy production, plants, animals, soils, and water into stable productive communities. These design practices focus on creating permanent, resilient, and regenerative systems that replicate or exist as part of natural ecosystems in culturally and bio-regionally appropriate ways. Permaculture is based on three guiding principles—Earth Care, Fair Share, and People Care—similar to the ecological, economic, and social pillars of sustainable agriculture. Depending upon the Permaculture lineage, teachers, and handbooks referenced, there are a multitude of additional steps, tenets, and guidelines from practitioners around the world, including Mollison, Holmgren, P.A. Yeomans, David Jackie, Geoff Lawton, Eric Toensmeier, Ben Falk, Peter Bane, Mars Ross, Toby Hemenway, Darren Doherty, Mark Sheppard, Graham Bell, and others (see Roland, 2009).</p>
      <p>While there are strong overlaps between the USDA’s sustainable agriculture definition and Permaculture, the latter is a more comprehensive approach to managing interdependent complex systems. Permaculture as a design science is holistic in its approach, considering earth and water management techniques, and energy and resources flows. In addition to food and fiber production, Permaculture is also concerned with fuel, fodder, fertilizers, and “farmaceuticals<sup>1</sup>,” – all of which are forms of energy (Jacke &amp; Toensmeier, 2005). Moreover, Permaculture is based on perennial polycultures, companion plantings, and edible forest gardens, as opposed to annual monocultures. As J.R. Smith (1929), Mollison and Holmgren (1978, 1980) and contemporaries such as Sheppard (2013) have argued, perennial plants are the true foundation of an ecologically sustainable agrifood system. Forest architecture captures and stores more of the suns energy, sequesters carbon, retains water, and builds healthier soils than annual tillage agriculture (Wight &amp; Trauth, 2016). </p>
      <p>The second contribution of this essay is the revisiting of Johann Heinrich von Thünen’s (1826) city planning and agricultural rent model and Ebenezer Howard’s <i>Garden Cities of To-morrow</i> (1902) as they relate to Permaculture’s Zones of Activity (Mollison &amp; Holmgren, 1978) and a definition of <i>Sustainable Local Agriculture</i> (SLA). Von Thünen was interested in land use (intensive and extensive production), rents (price), and transportation of agricultural goods in relation to central markets, i.e. cities (see figure 1). </p>
      <figure
        className={classes.figure}
      >
        <img src={Picture1} className={classes.image} alt="Figure 1: Von Thünen’s Concentric Ring Model of Agricultural Land Rents (Greenhorns, 2014)"/>
        <figcaption>Figure 1: Von Thünen’s Concentric Ring Model of Agricultural Land Rents (Greenhorns, 2014)</figcaption>
      </figure>
      <p>While the model has several flaws (assumes geographical, climatic, and soil uniformity; that people are rational, cities exist in isolation, etc., and was developed before the internal combustion engine and refrigeration), this was the first serious western attempt to quantify the relationship between economics, place, and agricultural production. Von Thünen’s work, coupled with Howards (1902) ideas of aesthetically integrating gardens, farms, industry, recreation, etc. into cities, set the stage for planners and now food movement scholars who promote notions such as locavore, the 100-mile diet, foodsheds, food-webs, food-miles, food circles, and ecological footprints. The Thünen Rings and Howards’s ideas are the basis for these for agrifood system localization concepts. </p>
      <figure
        className={classes.figure}
      >
        <img src={Picture2} className={classes.image} alt="Figure 2: Howard’s (1902) Garden City Design"/>
        <figcaption>Figure 2: Howard’s (1902) Garden City Design</figcaption>
      </figure>
      <p>Interestingly, Permaculture also uses the concentric ring model to explain their Zones of Activities (see figure 2). The major difference between these models is scale, where Von Thünen (and Howard) referenced cities, Mollison et al. focuses on small scale communities and homesteads. In Permaculture, these activity zones organize and manage the design and application process. The zone approach guides the positioning of important elements (water, trees, animals, human settlement, transportation paths, etc.) in designing the whole system. Similar to Thünen’s Rings, as one moves away from the center to the edge of the model, the agricultural activities decrease in intensity and required labor, while also increasing in scale (larger farms).</p>
      <figure
        className={classes.figure}
      >
        <img src={Picture3} className={classes.image} alt="Figure 3: Permaculture’s Zones of Activity (Muller, 2016)"/>
        <figcaption>Figure 3: Permaculture’s Zones of Activity (Muller, 2016)</figcaption>
      </figure>
      <p>It is with the addition of Permaculture with these concentric circle and garden city models that we turn to exploring what we mean by Sustainable <i>Local</i> Agriculture. The real question is about energy, distance, and the quantification of local. The commercial food industry considers local to be anything within a day’s drive (between 400 and 600 miles). Locavores and food movement scholar-activists settle on a much smaller farm-to-plate radius, usually under 100 miles (Smith &amp; MacKinnon, 2009). We agree with the 100 miles, but as we press forward with defining SLA, there are two additional considerations that inform this conversation: <i>Civic Agriculture</i> and <i>City Elements</i>. </p>
      <p>Developed by Thomas Lyson (2000), <i>Civic Agriculture</i> is composed of small(er) farms; community-supported agriculture programs; community, school, and backyard gardens and orchards; food cooperatives; food hubs; communally shared food-production practices; farmers markets; and other agrifood organizations that are focused on, and rooted in a geographic place. Civic Agriculture is local production, distribution, consumption, and composting (nutrient management), based on best ecological, social, economic and bioregion practices, that are by the people, and for the people in that community/region (Lyson, 2000; Lyson &amp; Guptil, 2004). Second, Lynch’s (1984) work on city elements, specifically: nodes, paths, edges, districts, and landmarks, combined with an understanding of geographic size and development composition (urban, suburban, and exurban), total population, population density, and existing food system infrastructure—leads us to conclude that SLA will be different for different settlements.</p>
      <p>By applying permaculture principles to city contexts, we outline appropriate agricultural practices for the urban-rural transect. Toby Hemenway’s (2015) recent book, <i>The Permaculture City</i>, broadly applies Permaculture methodologies to our existing urban systems. This work also highlights the significant overlap between Lynch’s (1984) city elements and those identified within Permaculture design, providing a valuable opportunity to superimpose agriculture upon our existing urban design frameworks at the metropolitan/regional scale. Hemenway identifies “local” with the extent to which the influence of one’s voice can be heard, where one is still a person rather than a demographic. This definition associates “local” with the leverage to build resilience through community participation, which also relates to Lyson’s (2000) emphasis on civic participation in one’s local agrifood system. </p>
      <p>By emphasizing local and context-driven appropriateness as core tenets of SLA, we tie agricultural production to each unique metropolis and the bioregion it is embedded within. This strengthens local economies, builds social capital, and restores the connection between people and their environment. With the recent surge in urban agriculture, and the continuing consumption of farmland by sprawling development, it is essential to develop policies and economies of scale that balance local needs, bioregional contexts, and our global ecological footprint. As we theorize on the convergence of definitions regarding SLA, we argue it is time to incorporate the emerging practices of intensive suburban and urban agriculture, and forge an equitable relationship between urban markets and rural communities, all within the context of Permaculture and bioregional ecologies.</p>
      <p>In closing, we offer a definition of SLA, based on the USDA’s language, with an integration of Permaculture principals, and the goal of incorporating cities within civic concentric circles. Sustainable Local Agriculture is an integrated system of plant and animal production practices that:</p>
      <p>
        <ul>
          <li>satisfy human food, fiber, fuel, fodder, fertilizer, and farmacutical needs;</li>
          <li>enhance ecosystem services and the natural resource base upon which all of life depends (including the agricultural economy).</li>
          <li>make the most efficient use of nonrenewable resources and on-farm resources and integrates natural biological cycles and controls;</li>
          <li>sustains the economic viability of small farm operations;</li>
          <li>enhances the quality of life for farmers and society as a whole;</li>
          <li>emphasizes local (within 100 miles) production and consumption, as appropriate</li>
          <li>aligns all activities with the community and bioregional identity</li>
        </ul>
      </p>
    </ EssayPage>
  );

const styles = {
  blockQuote: {
    width: '75%',
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: '15px 0px'
  },
  figure: {
    margin: '50px 0px',
  },
}

export default injectSheet(styles)(SustainableFoodWithClasses);