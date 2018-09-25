import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import Webelievepopup from './images/Webelievepopup.jpg';
import Charette1 from './images/Charette1.jpg';
import Charette2 from './images/Charette2.jpg';
import Groupdrawingwithfood1 from './images/Groupdrawingwithfood1.jpg';
import Groupdrawingwithfood2 from './images/Groupdrawingwithfood2.jpg';
import Drawingtools1 from './images/Drawingtools1.jpg';
import Drawingtools2 from './images/Drawingtools2.jpg';
import Drawingtools3 from './images/Drawingtools3.jpg';
import EmanueleBragadancingwithastudent from './images/EmanueleBragadancingwithastudent.jpg';
import IFpilotsiteplan from './images/IFpilotsiteplan.jpg';
import Shippingcontainersouth from './images/Shippingcontainersouth.jpg';
import AustinMagieHouse from './images/AustinMagieHouse.jpg';
import Deerfence from './images/Deerfence.jpg';
import Finalprojects from './images/Finalprojects.jpg';
import InstituteforFoodsymposium from './images/InstituteforFoodsymposium.jpg';
import ClaireAnderson from './images/ClaireAnderson.jpg';
import ReimagingWalking from './images/ReimagingWalking.pdf';
import TransformativeIdeaUtopianIdeal from './images/TransformativeIdeaUtopianIdeal.pdf';

const BreakingGroundWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Breaking Ground'
      authorName='Ben Jacks'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/farm"
      references={
        [
          <p>Jacks, Ben. 2004. “Reimagining Walking: Four Practices,” Journal of Architectural Education, (Boston: MIT Press for the Association of Collegiate Schools of Architecture) 57:3, February: 5-9.</p>,
          <p>Coleman, Eliot. 1995. The New Organic Grower: A Master’s Manual of Tools and Techniques for the Home and Market Gardener. 2nd ed. White River Junction, VT: Chelsea Green Publishing.</p>,
          <p>Coleman, Eliot. 1999. Four Season Harvest: Organic Vegetables from your Home and Garden all Year Long. 2nd ed. White River Junction, VT: Chelsea Green Publishing.</p>,
        ]
      }
      resources={[
        <p>News Item: College of Creative Arts, February 5, 2016 <a href="http://miamioh.edu/cca/news/2016/02/fi-design-charette.html">CCA Students engage in Institute for Food Design Charrette</a></p>,
        <p>News Item: Campus News, February 11, 2016 by Jeanne Harmeyer, College of Creative Arts <a href="http://miamioh.edu/news/campus-news/2016/02/food-institute-charrette.html">Miamians envision a better food future with new institute</a></p>,
        <p>News Item: College of Creative Arts, April 15, 2016 <a href="http://miamioh.edu/cca/news/2016/04/spring-break-austin-magie-farm.html">Students Learn Preservation at the Austin-Magie Farm</a></p>,
        <p>News Item: College of Creative Arts, May 6, 2016 <a href="http://miamioh.edu/cca/news/2016/05/if-winners.html">How eight student teams envision the transformative Institute for Food</a></p>,
        <p>News Item: College of Creative Arts May 13, 2016 <a href="http://miamioh.edu/cca/news/2016/05/if-graphic-design.html">Graphic design student focuses on Institute for Food</a></p>,
        <a target="blank" href="https://www.youtube.com/watch?v=T3J7wqFxBWo&app=desktop"><p>IF Site Fly Through</p></a>,
        <a target="blank" href="https://www.youtube.com/watch?v=L2_ldb2zUHE&app=desktop"><p>IF Farm Pavilion</p></a>,
        <a target="blank" href="https://www.youtube.com/watch?v=eizh2g6HYU0&app=desktop"><p>IF Farm Living Learning Community</p></a>,
        <a target="blank" href="https://www.youtube.com/watch?v=MdlwShgzMqo&app=desktop"><p>IF Farm Restaurant</p></a>,
        <a target="blank" href={ReimagingWalking}><p>Ben Jacks: Reimagining Walking</p></a>,
        <a target="blank" href={TransformativeIdeaUtopianIdeal}><p>Ben Jacks: Transformative Idea/ Utopian Ideal</p></a>,
      ]}
    >
      <p>In the Spring semester of 2016 the Institute for Food at Miami University asked the Multidisciplinary Design Studio in the College of Creative Arts to envision a range of projects for the Institute for Food farm (IF). IF had a set of ideas about food, environment, sustainability, and experiential education. The Multidisciplinary Design Studio had the tools of landscape architecture and interior, architectural, graphic design, and an applied pedagogical approach that fit well with the, as yet, undefined needs of IF.</p>
      <h3>Pedagogy</h3>
      <p>Worthwhile teaching and learning involves risk. Despite sales pitches to prospective students and their anxious parents that suggest there is a safe path to a surefire career, authentic and experiential education proposes something different. “Leap and the net will appear,” proposed the 19th century American naturalist John Burroughs. To learn have faith that you will uncover something significant if you are fearless.</p>
      <p>Unfortunately, at the university level, many of us professional teacher-scholars still use the term <i>pedagogy</i>, instead of the more accurate <i>andragogy</i>. Embedded in the history of the word pedagogy is the idea of a slave who would generally take care of children and lead them around the city. Pedagogy thus contains within it a double dismissal of the body and the teacher’s stance toward freedom on the one hand, and the mind and maturity of the student on the other.</p>
      <p>When the performance of teaching and learning is at its apogee—a distant, rare, mysterious, invisible point of orbit—something has happened between the mind and its surrounding atmosphere that allows one to “break through” in intellectual freedom. As every decent teacher knows, the job is to set up conditions for just such moments, and then to let go. Leaping and falling are better than pre-packaged, content-driven scripts. Control is not an option.</p>
      <div className={classes.sectionDivider} />
      <p>As a matter of style, falling is better than leaping, because it is better for students to feel, in the words of the <i>Tao te Ching</i>, that “we did it, all by ourselves” than to think that as students they have been sent on a mission by an all-seeing master, or worse, badgered into good performance. By definition, however, falling is failing, and that is a frightening thing to contemplate for student and teacher alike.</p>
      <p>The conditions for such moments in the design studio include trust, words and ideas, materials, locations, and practices. The conditions of thought in design education are physical, mental, emotional, verbal, and visual. Discerning the proper relationship between these diverse ways of thinking and doing is the main task for everyone involved. Responsibility does not rest exclusively with the teacher. Indeed, engaging with questions leading to discernment is where the main work of the studio gets done, even when the answers are far from clear. </p>
      <p>It can become very uncomfortable to encounter authentic moments in education. When self-satisfaction is not the goal, one’s assumptions must be questioned and complicated feelings must be acknowledged. In such moments you often discover mainly that there is much more work to do. Or you realize that in accidents and breakdowns you learn the best lessons.</p>
      <p>Design studio education is feeling your way in the dark; it is open-minded and open-ended, in the best senses of these terms. The best design studio education honors falling and failing.</p>
      <h3>Design Charrette</h3>
      <p>We initiated the Multidisciplinary Design Studio in January 2016 with a design charrette—an intensive weekend brainstorming and drawing session involving 65 students, community members, and teachers. We “walked the land.” Walking affords the opportunity for a designer to get to know a place. </p>
      <p>We had an afternoon session to hear from a variety of food, history, and design experts. Staff farmer Lauren Wulker had the idea to ask everyone in the room to complete the statement “We believe the Institute for Food farm (fill in the blank).” Meant to prime the pump for the work of the Saturday charrette the collected “we believe” statements ran on for six pages in typescript, from the silly (“a petting zoo with goats!”) to the sublime (“We believe community is not anonymous.”). </p>
      <p>Our first instance of walking the land with architecture and interior design students had turned into a spontaneous service project. The students had picked up trash, which gathered in profusion near the entrance to the IF plots and now sat reeking in the studio, awaiting a purpose. The trash, together with the “we believe” statements, inspired the students to create a pop-up exhibition. The exhibit was an implicit critique as well as hope for a cure for the ills of the industrialized food system. It was both a display of the environmental nightmare and a beautiful dream.</p>
      <figure
        className={classes.figure}
      >
        <img src={Webelievepopup} className={classes.image} alt="“We believe” pop-up exhibition (Ben Jacks photo)"/>
        <figcaption>“We believe” pop-up exhibition (Ben Jacks photo)</figcaption>
      </figure>
      <p>The next day we formed 10 teams. The charrette was designed to let students interact with one another in a sociable way, to try on teamwork, and to get acquainted with the elements of the anticipated program. The projected program was a pie-in-the-sky fantasy, a what-if accounting of future potential, and what might happen if we achieved something beyond our wildest dreams, if everything about food at Miami University became something wonderful.</p>
      <figure
        className={classes.figure}
      >
        <img src={Charette1} className={classes.image} alt="Design Charette, Alumni Hall (Ben Jacks photo)"/>
        <figcaption>Design Charette, Alumni Hall (Ben Jacks photo)</figcaption>
      </figure>
      <p>Our farming inspirations came mostly from the books of Eliot Coleman, neighbor and protégé of legendary back-to-the-land socialists Helen and Scott Nearing. Coleman, in a storied career, has proven beyond doubt that it is possible for the small-scale vegetable farmer to earn a living farming even the poorest of soils. Among other things, Coleman is known for demonstrating how poor soils may be improved by careful tending, and how seasons may be extended by use of unheated greenhouses. Together with Barbara Damrosch, a highly accomplished organic gardener, Coleman operates Four Seasons Farm in Cape Rosier, Maine—an unforgiving climate for vegetable production (Coleman 1995 and Coleman 1999). Maine is a long way from Ohio, to be sure, but by comparison we knew we would have it easy. In a community where we anticipated the academic year as defining the main seasons of consumption, it seemed important to model the farm on season extension.</p>
      <p>We followed Coleman’s field planning scheme, proposing that fields be divided into 100’ x 200’ (half-acre) sections, with equipment and travel pathways. We anticipated rolling greenhouses to facilitate season extension, and we anticipated with fear the herds of ravenous deer.</p>
      <p>We plugged fun things into the initial program for the IF farm, too, such as Coleman’s designs for “chicksaws”—rolling carts for housing chickens that if managed correctly would provide several benefits at once to vegetable growing beds—among them fertilizing and reducing populations of unwanted seeds and insects. We suggested a brick pizza oven, and the communal space surrounding it.</p>
      <p>We conceived of the farm as a place to bring different kinds of communities together: students studying food, community members, farmers, volunteers. Young and older, from Oxford and far away, the Institute for Food farm would be a place to bring people together around food, the most vital human common cause.</p>
      <figure
        className={classes.figure}
      >
        <img src={Charette2} className={classes.image} alt="Student presenting at Design Charette, Alumni Hall (Ben Jacks photo)"/>
        <figcaption>Student presenting at Design Charette, Alumni Hall (Ben Jacks photo)</figcaption>
      </figure>
      <p>For the purposes of the initial design charrette we kept the architectural and landscape program modest: just the field layouts and a few open-ended amenities on the original eight acres of land we had already been allocated, but for the semester’s work we decided to go big. We imagined a complete rehabilitation of the historically significant Austin-Magie Farm—the origin of the fabled Poland-China hog that made Porkopolis possible. We imagined a restoration of the 1841 Austin-Magie farmhouse, a fine example of the German I-house type. We thought about interpreting the archeological remains of the vanished pioneer structures and the Native American mounds that were identified on Historic American Building survey documents. We considered the nearby Black Covered Bridge, and the sawmill, now long gone, and the remains of the mile-long millrace that once powered the mill. We imagined a rich, neglected historical landscape.</p>
      <p>We also envisioned a new 50-bed living-learning community—a specialized dormitory with shared kitchen and common areas at its heart—a place where Miami students committed to the study of the myriad implications of food and food systems could spend a significant part of their four years.</p>
      <p>Attuned to contemporary desires we imagined food carts that would sell soup, red and white Miami popcorn, and salads from produce grown by the Institute for Food. We imagined a storefront restaurant in university-managed commercial space on Maple Street that would feature foods made from the produce grown just a couple of miles away.</p>
      <p>All of these dreams of delicious production and consumption would comprise a comprehensive vision for growing the Institute for Food. Using this architectural program, we designed it quickly, during the one-day charrette, and more slowly, over a period of about eight weeks during the latter half of the semester, when students from our three design disciplines worked together on teams.</p>
      <p>In the interim we engaged in the real work of feeling in the dark. This was challenging work for the students. Using techniques developed by my colleague Afsaneh Ardehali we asked the students to draw what they were feeling and thinking about the subjects of food, health, and farm, rather than simply explain those thoughts and feelings with words. We asked the students not to produce a finished result, but to make a truthful drawing of an idea. The key insight of this work is that everyone involved, students and teachers alike—teachers are but perennial students—can see if a visual two- or three-dimensional object is truthful. Armed with a visual truth the student has a halfway decent chance of creating a truthful and authentic three-dimensional spatial structure such as a building.</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={Groupdrawingwithfood1} className={classes.image} alt="Drawing with food (Ben Jacks photo)"/>
          <figcaption>Drawing with food (Ben Jacks photo)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Groupdrawingwithfood2} className={classes.image} alt="Drawing with food (Ben Jacks photo)"/>
          <figcaption>Drawing with food (Ben Jacks photo)</figcaption>
        </figure>
      </div>
      <p>We also asked the students to make strangely: we posited the idea that farm tools and drawing tools had more in common than one might initially think. Both were future-oriented and designed to make marks. Both were concerned with geometry. We recalled, for example, the ancient Roman town foundation ritual of driving a pair of oxen pulling a furrow in a circle to mark the center of the town, a ritual that encompasses both drawing and farming. In response the students made hybrid tools—farm tools that could draw—and then they drew with them, demonstrating their particular or peculiar action.</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={Drawingtools1} className={classes.image} alt="Drawing/farming tools (Ben Jacks photo)"/>
          <figcaption>Drawing/farming tools (Ben Jacks photo)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={Drawingtools3} className={classes.image} alt="Drawing/farming tools (Ben Jacks photo)"/>
          <figcaption>Drawing/farming tools (Ben Jacks photo)</figcaption>
        </figure>
      </div>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={Drawingtools2} className={classes.image} alt="Drawing/farming tools (Ben Jacks photo)"/>
        <figcaption>Drawing/farming tools (Ben Jacks photo)</figcaption>
      </figure>
      <p>As late winter gave way to early spring we wanted to get back out on the land in a meaningful way. We brought Elisa Serra and Emanuele Braga from Germany and Italy to lecture and work with the students on the land in order to explore the idea of “walking the land” as a form of knowledge production. Artists, scholars, and writers have explored walking from a variety of perspectives, and Elisa and Emanuele have extended the notion of bodily movement in radical ways (see Landscape Choreography icon).</p>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={EmanueleBragadancingwithastudent} className={classes.image} alt="Choreographer and activist Emanuele Braga dancing with a student (Ben Jacks photo)"/>
        <figcaption>Choreographer and activist Emanuele Braga dancing with a student (Ben Jacks photo)</figcaption>
      </figure>
      <p>As I have theorized elsewhere (see link below), walking practices for landscape and architectural design include <i>sighting, measuring, reading, and merging</i>. These are human practices and understandings that are so basic that they tend to be overlooked. <i>Sighting</i> is the process through which people make sense of geometric alignments and arrangements. <i>Measuring</i> describes the bodily basis for understanding the experience of distance between things. <i>Reading</i> captures the multiple ways in which we overlay landscapes with interpretation and narrative. <i>Merging</i> describes a complete experience of union with atmospheres. These four walking practices are important to design education because all too often the beginning design student gets lost in a world of abstraction and fails to see the implications of his decisions in terms of human scale and on the ground, real world perceptions. Walking the land—sighting, measuring, reading, and merging—serves as an excellent antidote to digital design that fails to hold us in meaningful place. Walking creates important knowledge.</p>
      <p>Since we had a set of half-acre farm plots to lay out, in order for the IF farmers to get started on their first planting, we had an excellent opportunity to practice <i>sighting</i> and <i>measuring</i>. Armed with a feeble transit, a measuring wheel, a 100 foot tape and a 500 foot roll of string, we started to lay out the first fields. We would mark each corner with a four-foot steel stake, which would be visible but removable so as not to interfere with machinery, and a short length of PVC pipe set flush with the ground that would serve as a more permanent marker.</p>
      <p className={classes.pullQuote}>" Walking the land—sighting, measuring, reading, and merging—serves as an excellent antidote to digital design that fails to hold us in meaningful place. Walking creates important knowledge. "</p>
      <p>In experiential education, process is often the best teacher, and planning is sometimes the enemy of a good outcome. I learned that if you sharpen a short length of PVC with a 45-degree angle in order to drive it into the ground it will not drive straight. It is humbling to have cut 50 pieces like this, struggle to drive them all straight only to find that the couple of odd pieces in the box without sharpened ends drive straight and true. A blunt end works better.</p>
      <p>We also learned that a slight breeze will bow out a string line, no matter how much it is stretched. Our feeble transit was useless, but we soon realized how accurately we could sight a straight line over a long distance. We practiced measuring, aiming for 33 or 34 paces over 100 feet, and soon came to understand the accuracy possible with our bodies, though we relied on the tape measure for even greater accuracy. Applied, sighting and measuring yielded a practical result: a set of workable farm plots and intermediate work pathways positioned with an eye toward good orientation and drainage.</p>
      <figure
        className={classes.figure}
      >
        <img src={IFpilotsiteplan} className={classes.image} alt="IF pilot site plan (Ben Jacks drawing)"/>
        <figcaption>IF pilot site plan (Ben Jacks drawing)</figcaption>
      </figure>
      <p>In addition to the Multidisciplinary Design Studio there were two additional design studios that spun off to tackle special projects. Architecture professor Murali Paranandi worked with a small studio group to fit out and modify a shipping container to serve as tool storage and wash line. During Spring Break, I conducted a historic preservation workshop focusing on the Austin-Magie farm house. Historic preservation specialist Steve McQuillin and McGuffey Museum curator Steve Gordon guest lectured on preservation issues and techniques, and the students learned how to develop a set of documentary drawings.</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={Shippingcontainersouth} className={classes.image} alt="Shipping container tool shed (Ben Jacks photo)"/>
          <figcaption>Shipping container tool shed (Ben Jacks photo)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={AustinMagieHouse} className={classes.image} alt="Austin-Magie farm house historic preservation workshop (Ben Jacks photo)"/>
          <figcaption>Austin-Magie farm house historic preservation workshop (Ben Jacks photo)</figcaption>
        </figure>
      </div>
      <p>It was a busy Spring semester. There were volunteer opportunities to manage relative to breaking ground and getting the farm up and running, not the least of which was installing deer fencing around the first acre plot. Again, the intersection of abstract planning on paper and the reality of direct experience on the land came to the fore. Students and faculty alike found joy as they remembered what it meant to get out of their heads and play on the land.</p>
      <figure
        className={classes.figure}
      >
        <img src={Deerfence} className={classes.image} alt="Deer fence around the first acre (Ben Jacks photo)"/>
        <figcaption>Deer fence around the first acre (Ben Jacks photo)</figcaption>
      </figure>
      <p>As the semester came to a close we tried to take stock of what we had accomplished, but it was overwhelming. There had been an initial design charrette. We had conducted several radical experiments in experiential education on the land. We had made farm tools that drew. We had painted with food, and asked hard questions about what we really felt about food, health, well-being, and justice. We had walked and danced on the land. We had laid out the initial farm plots and helped erect hundreds of feet of deer fencing. We had built a tool shed. We had learned about historic preservation and documented an architectural gem. We had designed restaurants and food carts and products and logos. We had envisioned the Institute for Food at Miami University as it could be in the best of all possible worlds.</p>
      <figure
        className={classes.figure}
      >
        <img src={Finalprojects} className={classes.image} alt="Final student projects in the Multidisciplinary Design Studio (Ben Jacks photo)"/>
        <figcaption>Final student projects in the Multidisciplinary Design Studio (Ben Jacks photo)</figcaption>
      </figure>
      <p>As studio teaching and learning experiences go, breaking ground for the Institute for Food generated some student pushback and complaint. It was far from an easy, happy experience for more than a few students. Why?</p>
      <p>There is much that could be said about different aspects of this question, but one thing stood out above all as productive of discord and that was the immensity of the undertaking. We were only at the very early days of a project that deserves and demands to have a life measured in generations. Some students, blind to the timescale of growth seasons, wanted to see immediate results in terms of “building the IF Farm,” whatever that might mean. Some wanted to believe that there were faculty who knew exactly where the project was going, that the faculty “knew everything,” but were withholding answers. Some students believed faculty and staff new too little about radical agroecology. Some students gave voice to these concerns and spoke up prepared for discussion and dialog.</p>
      <p>A simple truth emerged about this process of breaking ground on the Institute for Food Farm: it involved more than a hundred students, faculty, and community members working on various things, in the classroom and out in the field—it was bigger than any of us, larger than all of us put together. It was not a project in which any one ego could be easily gratified, although it is in the nature of ego to try. Rather, everyone involved needed to have a certain amount of faith in the value of the project and know that whatever their area of expertise or arena of participation, no matter how tangential their contribution seemed to be, that all of it mattered, and matters still, to the beginning of a project of inherent, sustainable value. The whole experience reminded me of some lines from the Tao te Ching, “Do your work, then step back./ The only path to serenity.”</p>
      <p>Two separate events concluded the Spring semester of 2016 that together summarize the relationship between the group and the individual with respect to the Institute for Food. IF organized a symposium about resilient food systems with invited presentations by national experts and Miami students. The Multidisciplinary Design Studio presented highlights of the final student projects. But the greater power of the Institute for Food project was to inspire individuals to create their own work. In the College of Creative Arts Gallery at Miami, senior graphic design major Claire Anderson presented her BFA capstone project, A Platform for Perspective, developed as an independent study, exploring the interdisciplinary, open-ended nature of the Institute for Food. A project like IF, which is greater than the individuals and the group engaged with it, inspires this kind of individual and collective action.</p>
      <div className={classes.figureContainer}>
        <figure
          className={classes.figure}
        >
          <img src={InstituteforFoodsymposium} className={classes.image} alt="Institute for Food Symposium, Armstrong Student Center, Spring 2016 (Ben Jacks photo)"/>
          <figcaption>Institute for Food Symposium, Armstrong Student Center, Spring 2016 (Ben Jacks photo)</figcaption>
        </figure>
        <figure
          className={classes.figure}
        >
          <img src={ClaireAnderson} className={classes.image} alt="Claire Anderson, A Platform for Perspective, BFA Capstone Project, Hiestand Gallery (Ben Jacks photo)"/>
          <figcaption>Claire Anderson, A Platform for Perspective, BFA Capstone Project, Hiestand Gallery (Ben Jacks photo)</figcaption>
        </figure>
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

export default injectSheet(styles)(BreakingGroundWithClasses);