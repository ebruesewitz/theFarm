import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground5.jpg';
import InstituteforFood from './images/InstituteforFood.jpg';
import LoadedTruck from './images/LoadedTruck.jpg';
import CSABoxNov from './images/CSABoxNov.jpg';
import CarrotsPeppers from './images/CarrotsPeppers.jpg';
import ConstructingHoopHouse from './images/ConstructingHoopHouse.jpg';
import lettucerows from './images/lettucerows.jpg';
import Harvest from './images/Harvest.jpg';
import carrotsinsoil from './images/carrotsinsoil.jpg';
import StudentSalsaSale from './images/StudentSalsaSale.jpg';
import ChineseCabbage from './images/ChineseCabbage.jpg';
import IFinterns from './images/IFinterns.jpg';

const InstituteForFoodWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='The Institute for Food: IF Miami'
      authorName='Marguerite S. Shaffer'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/farm"
      references={
        [
          <p>Dusselier, Jane. 2009. “Understanding Food as Culture.” Environmental History, 14, no. 2, April: 331-338.</p>,
        ]
      }
      resources={[
        <a target="blank" href="http://miamioh.edu/cas/academics/centers/iff/index.html"><p>Institute for Food</p></a>,
      ]}
    >
      <div className={classes.figure}>
        <img src={InstituteforFood} alt="" className={classes.image}/>
      </div>
      <p>The Institute for Food at Miami University emerged in response to a question: Are we effectively educating undergraduate students in the liberal arts to understand and address the complex environmental issues confronting our planet? In the fall of 2014, the provost at Miami announced the creation of an Interdisciplinary Innovation Fund, inviting proposals for the development of broad teaching, learning, or research-related projects that involved faculty from multiple academic departments and programs across the university to engage issues that were interdisciplinary in scope and innovative in concept. A diverse group of faculty from a range of fields and disciplines, including anthropology, architecture, biology, environmental science, geography, global and intercultural studies, English, history, and nutrition and health, all of whom shared an interest in sustainability, came together to respond to the provost’s invitation. As we discussed potential projects new questions emerged: Are our students environmentally literate? Do they understand and can they communicate and act on basic principles of environmental science? Do we offer opportunities to engage systems thinking? How do we best help students translate theoretical approaches to sustainability into real-world problem solving skills? How do we make sustainability, in principle and in practice, central to the liberal arts experience? How do we support students in imagining and creating the communities they wish to inhabit in the future? Our Answer: Food.</p>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={CSABoxNov} alt="" className={classes.image}/>
        </div>
        <div className={classes.figure}>
          <img src={CarrotsPeppers} alt="" className={classes.image}/>
        </div>
      </div>
      <div className={[classes.figure, classes.figureOverride].join(" ")}>
        <img src={LoadedTruck} alt="" className={classes.image}/>
      </div>
      <p>Food is elemental to our lives; it is also a topic of serious concern as we confront how to feed a world projected to reach nine billion people by 2050; no less how to address a public health crisis precipitated by our dependence on cheap, sugar-laden, processed foods. As a basic biological necessity, a critical economic and political product, and a potent cultural agent, food defines our relationship to particular places and links people across the table and across the globe. As such, food offers an ideal focus for collaborative interdisciplinary study. From soil to plate, every meal is embedded with layered individual, local, national, and global meaning. Issues of food reach back into history and connect diverse people in the present through complex commodity and energy chains, which have wide-ranging implications for the future. With every bite we cut across social, political, economic, geographical, technological, cultural, chemical, and biological contexts. Food is as much about survival and health as it is about politics and identity. It speaks to issues of abundance and poverty as well as issues of sustainability and national security. As environmental historian Jane Dusselier argues, food and cuisines “reveal and shape social relations and connect the past with present concerns and future possibilities” (Dusselier 2009, 334). Fusing multiple, diverse perspectives, food provides a compelling framework for critical exploration of the complex connections that link the local and the global, ecology and economy, individual and community—all issues that are central to imagining a sustainable future.</p>
      <div className={classes.figure}>
        <img src={ConstructingHoopHouse} alt="" className={classes.image}/>
      </div>
      <p>{`With a three-year seed grant of $200,000 from the Provost Interdisciplinary Innovation Fund, Miami University launched the Institute for Food (IF Miami) in August 2015. Our faculty cohort began the work of establishing a self-sustaining, interdisciplinary, and experiential institute centered on three objectives: 1) to facilitate engaged student learning around a wide range of issues related to food and sustainable agriculture; 2) to support faculty research, collaboration, and community outreach about food systems and food studies broadly defined; and 3) to house a working organic farm and experiential education center, all with the goal of supporting greater awareness of the centrality of food in relation to individual and community health, economic development, global exchange and engagement, social identity, and environmental sustainability`}</p>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={lettucerows} alt="" className={classes.image}/>
        </div>
        <div className={classes.figure}>
          <img src={Harvest} alt="" className={classes.image}/>
        </div>
      </div>
      <p>During our first year, we worked to facilitate a campus-wide conversation about food and the challenges of creating a resilient local food system that supports agricultural sustainability, community health, and economic opportunity. Specifically, we wanted to engage in place making and to support the rural communities that surround and sustain the university. We hosted noted food policy and food studies scholars Marion Nestle and Jennifer 8 Lee. We piloted a multidisciplinary, team-taught course integrating food systems and food studies. We sponsored a series of public forums with local foods organizations as well as community, business, and educational partners. And we began to conceptualize and build a pilot, one-acre, intensive vegetable garden with the goal of having students supply the Miami community with seasonal, sustainably-grown, local produce and establishing a locus for experiential learning and applied research. We also began to imagine a long-term future for the Institute for Food articulated by our mission to foster healthy food, healthy eating, healthy communities, and a healthy planet.</p>
      <div className={classes.figure}>
        <img src={carrotsinsoil} alt="" className={classes.image}/>
      </div>
      <p>At year three, with the support of a USDA National Institute for Food and Agriculture Capacity Building Grant, funding from the Gross-Hutton Family Foundation, and a gift from Miami Alumni Cathy and Clark Foy, we have laid the foundations for educating students from the ground up. We have developed an interdisciplinary introductory course in food systems and food studies that offers a farm lab where students learn applied environmental science in the context of practicing sustainable agriculture. We have drafted a co-major in food systems and food studies designed to supplement a traditional major in an established field or discipline. The co-major combines courses in environmental sciences, health, and the humanities to help students integrate the fundamentals of sustainable agriculture with information about nutrition and health, and an understanding of food cultures. This interdisciplinary curriculum seeks to explore the complex path food follows from farm to fork and beyond with the goal of helping students develop a broad understanding of food from a systems perspective. We are working with community partners including the Oxford Choice Food Pantry and the Oxford Farmer’s Market to support food access and equity. We are fostering faculty and student research on a range of projects including vermiculture, organic nutrients, hydrologic cycles, and the use of solar power and geospatial analysis in small-scale agriculture. And we are building a sustainable, mid-sized, intensive vegetable farm located on part of the Austin-Magie Farm.</p>
      <p className={classes.pullQuote}>As a basic biological necessity, a critical economic and political product, and a potent cultural agent, food defines our relationship to particular places and links people across the table and across the globe.</p>
      <p>The Austin-Magie Farm is the heart of Miami’s Institute for Food; it provides a research and learning laboratory and a functioning business within the university where students, faculty, and community members can come together to explore and understand food as it moves from the soil to the plate and forge new connections between food and farming, health and wellness, and environmental and economic sustainability. This is where students explore and learn the science of organic farming, the business of sustainable agriculture, the practices of building resilient food systems, and the history and culture of food and cuisine. Conceived as a production farm, the long-term goal is for it to be a fully operational business, which will play an important role in training students to imagine and enact a better food future. </p>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={ChineseCabbage} alt="" className={classes.image}/>
        </div>
        <div className={classes.figure}>
          <img src={CSABoxNov} alt="" className={classes.image}/>
        </div>
      </div>
      <div className={classes.figure}>
        <img src={StudentSalsaSale} alt="" className={classes.image}/>
      </div>
      <p>As part of the Institute for the Environment and Sustainability at Miami University (IES), whose mission is to promote a more sustainable society, the Institute for Food follows John Elkington’s integrated model for supporting people, profits, and the planet. We believe local food systems offer a comprehensive framework for building more sustainable communities. Food links individuals in a series of concentric circles starting with families and communities, extending to local and regional economies, and expanding to watersheds, natural habitats, and ecosystems. Fresh nutritional food impacts individual health. Local farms along with farmer’s markets, Community Supported Agriculture programs (CSA), farm-to-table restaurants, and local food businesses and coops offer opportunities for local entrepreneurship. Sustainably grown food provides ecosystem services that promote biodiversity, pollinator habitat, healthy soil, clean water, and carbon sequestration. In this way, sustainable local food has the capacity to impact a range of issues from health care to rural economic development to energy use and natural resource conservation. This informs our vision for the Institute for Food. Just as a seed is nourished by water, soil, and sun to flourish, we envision the Institute for Food as a framework to encourage students to imagine and enact a more sustainable future.</p>
      <p>As one of the students first involved in this project put it, “We believe in an Institute for Food that promotes passionate education, sustainable agriculture, and a future for people on our planet.”</p>
      <div className={classes.figure}>
        <img src={IFinterns} alt="" className={classes.image}/>
      </div>
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
    width: '80%',
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

export default injectSheet(styles)(InstituteForFoodWithClasses);