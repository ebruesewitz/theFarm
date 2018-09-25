import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground3.jpg';
import MagieWithSquash from './images/MagieWithSquash.jpg';
import DrewCharles from './images/DrewCharles.jpg';
import FarmPanorama from './images/FarmPanorama.jpg';
import Farm1 from './images/Farm1.jpg';
import Students1 from './images/Students1.jpg';
import Students2 from './images/Students2.jpg';
import StudentsHarvesting from './images/StudentsHarvesting.jpg';
import StudentsOnFarm from './images/StudentsOnFarm.jpg';
import PaigeAmyBokChoy from './images/PaigeAmyBokChoy.jpg';
import StudentInGreenhouse from './images/StudentInGreenhouse.jpg';
import Olivia from './images/Olivia.jpg';
import AbbyOlivia from './images/AbbyOlivia.jpg';

const StudentReflectionsWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Student Reflections 2016-2018'
      className={classes.essayOverrides}
      articleBackgroundImage={ArticleBackgroundImage}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/farm"
    >
      <div className={classes.figure}>
        <img src={MagieWithSquash} className={classes.image} alt="Magie With Squash"/>
      </div>
      <p>This past semester studying food systems and sustainable agriculture has revolutionized the way I think about each meal that ends up on my plate. Have you ever thought about where your food comes from? It's pretty crazy to think about what our food goes through to get to us.</p>
      <p>For example, let's imagine a carrot: That carrot started as a seed whose genes were meticulously selected through years of scientists and farmers understanding what makes the best carrot. Then that seed was planted in soil that took millions of years for the earth to create. The soil was plowed, tilled, fertilized, and watered by a farmer who tended to thousands of other carrots.</p>
      <p>After harvest, that carrot most likely travelled over 1000 miles, was sent through a factory where it was shaped, processed, and then trucked halfway across the United States (in some cases halfway around the world). Then while still somehow maintaining it's crisp, cool, freshness, it ended up in your grocery store, in the trunk of your car, and on to your plate.</p>
      <p>So in a nutshell, food systems are what make this world go round. We need people who want to learn about how we can be better at what humans have always been the best at: growing and eating <b>food</b>. I wanted to learn through hands-on experience where I worked in the soil, with passionate students and faculty who shared in my curiosity about the way food gets to our plates. I learned that collaboration amongst diverse individuals is crucial.</p>
      <p>You can't just grow food. You have to market and sell it, understand the laws that empower and inhibit sustainable production, and dig deep into the chemistry and biology behind <b>every… single…bite.</b></p>
      <p>   - Maggie 2017</p>
      <div className={classes.sectionDivider}/>
      <div className={classes.figure}>
        <img src={DrewCharles} className={classes.image} alt="Drew and Charles"/>
      </div>
      <p>In second grade my classmates and I received a small tree sapling that was grown in a milk carton for us to plant in celebration of Arbor Day. That summer my father helped me plant a small garden at the back of our yard and taught me all the things that needed to be done to make it successful. I always enjoyed science classes in school, and now in less than a year I will graduate with a degree in Botany and a minor in Marketing. Unfortunately, Miami University doesn’t condone gardening on dorm grounds, so I had to stick to filling my dorm with plants. Finding the Miami Institute for Food farm has allowed me to not only further my education but put into action the skills I have only seen on a projector slide. For a few hours every week I get my hands dirty, apply the knowledge I have learned in my courses, and correct real-life horticultural issues that occur on the farm. This independent study has only moved me closer to owning my own specialty farm and making myself more palatable in the workplace; for the knowledge I have gained cannot be learned in textbooks.</p>
      <p>Nature is something I have never been afraid of and I truly get excited around plants. Miami has allowed me to gain an in-depth understanding of the Biology around us, but until last year I did not know how much knowledge I hadn’t received. Being able to see and feel the parts of a plant I have only labeled on paper has helped me understand the vascular bundle orientation in dicots vs monocots and so many more things the usual person does not find interesting. The farm allows me to watch everything from the soil underground to the tip of a 10-foot sunflower above ground change, grow, and affect the environment around it. Learning about the insect activity common to certain plants and preventative measures to not only stop it on the farm but also to help keep invasive species out of our countries’ farms to prevent mass crop loss. Charles, Ian, and Stephanie bring differing viewpoints that cover all aspects of farming positives and negatives. Charles has helped me further my understanding of specific plants, their functions, their structure, and so many more in-depth biological specifics. Stephanie brings her local farming experience which helps understand the marketing side of what the locals want. Ian thinks of new more up-to-date farming methods and creative new ideas to try. All three have taught me important information and I have taken notes on most of it! Miami’s farm has helped me realize what I want to do with my life and it is far different than the pre-med course I was on.</p>
      <p>My goal in the future is to own my own specialty farm growing plant varieties like hops, cannabis, agave, and tobacco crops to make organic premium products. Tequila, specialty craft beers, quality tobacco products, and premium cannabis products are what I would focus on producing right from the products I grow. Just a small-sized farm like Miami’s is the size I’m hoping for. Being able to work in an environment so close to what I plan on doing in the future is such a valuable experience for me. When I am able to purchase land, I now have knowledge about things like farm planning, the labor force and tools needed to keep a farm this size working, the daily tasks that need to be done before all else and even how to read the gradient of land. Those and so many more pieces of insight are things that you may be able to read about, but having people there to guide you is a much more rewarding experience. I could not think of a more important internship that could suit my future goals than the Institute for Food farm. Even though owning my own farm in the near future is unlikely, the farm provides great horticultural experience as well.</p>
      <p>As that does sound like an ambitious plan, I know I won’t be able to purchase a farm right out of college. The farm is giving me so much valuable work experience that I will be able to take to a potential employer and show that I already have a year working on a fully functioning farm. When I look at most job postings I see that they always require job experience, it’s easy to get business experience, but farming, not so much! The farm is not only farming, it is great horticultural experience as well. Horticultural experience is what I will need to obtain a job in nurseries, landscape companies, National Parks, and horticulturalists jobs in local areas. Once again the farm helps get me closer to achieving my goal.  It gives me the opportunity to get a job out of college and work towards being able to purchase the land and equipment I will need for my own farm venture. </p>
      <p>My mom tells me all the time that she doesn’t picture me working on a farm, but I truly believe that owning my own farm is the goal I hope to achieve one day. The Miami Institute for Food farm is something that I would have never known about if it were not for my friend having an internship there prior to me having one. Since then I have been able to find out what direction I really want to take my life and the farm has made me realize that it is within reach. This internship provides a strong foundation for a job and eventually my own farm. My internship at the farm is what I considered one of the top learning experiences I have had at Miami. I think I will end on a tip from Charles that makes me laugh still sometimes: If you smack your hands together in just the right way it will imitate a predator and scare the deer away. Unfortunately, the deer just looked at Charles and I like the idiots we were being and continued to graze. The experience I have gained from the farm will stick with me forever, and hopefully the friends I have made will as well. </p>
      <p>   - Drew 2018</p>
      <div className={classes.sectionDivider}/>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={Farm1} className={classes.image} alt="Farm Panorama"/>
        </div>
        <div className={classes.figure}>
          <img src={FarmPanorama} className={classes.image} alt="Farm Panorama"/>
        </div>
      </div>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={Students1} className={classes.image} alt="Students with Potatoes"/>
        </div>
        <div className={classes.figure}>
          <img src={Students2} className={classes.image} alt="Students Harvesting"/>
        </div>
      </div>
      <p>This semester, I’ve been learning all about sustainable food!  The food system incorporates everything from the soil that provides nutrients for the seed, eventually the consumers that purchase and prepare the food, and ultimately the food waste disposal in a composting facility or landfill.  I’ve had the opportunity to explore these concepts through class discussions, by working on an organic farm, and by engaging with local farmers and experts.  I’ve learned a lot about the cultural and financial hurdles in overcoming the status quo food system, and how food is much more than an object: It’s an embodiment of nature, sustenance, culture, and values. I’ve been moved by an eagerness to foster positive environmental and social change, starting locally.</p>
      <p>Everything I learned through this experience has sparked further curiosities, which I know I will continue to pursue for the rest of my life. I’m especially eager to combine my sustainability insights with business insights throughout my career. This experience has given me a broader and deeper understanding of what sustainable food involves.</p>
      <p>   - Kayla 2016</p>
      <div className={classes.sectionDivider}/>
      <p>This past semester at Miami I took a food systems and food studies class. The course had a lab component where I spent a couple of hours per week on the university farm, learning sustainable farming practices first hand.</p>
      <p>The biggest takeaway I have from the experience is just how difficult it is to run a small farming operation of one acre.  There is always something that needs to be done, needs to be bought, needs to be harvested, etc.  This is only made more intense by using sustainable and organic farming practices.</p>
      <p>I’ve gained an appreciation for small-scale organic farming that I did not have before.  As I go on to a career in the public sector, working with policy on a daily basis, I will always recall the incredible experience of being able to experience the growth of a brand new, small-scale farm, first hand.</p>
      <p>   - Kyle 2016</p>
      <div className={classes.sectionDivider}/>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={StudentsHarvesting} className={classes.image} alt="Students Harvesting"/>
        </div>
        <div className={classes.figure}>
          <img src={StudentsOnFarm} className={classes.image} alt="Students On Farm"/>
        </div>
      </div>
      <p>Ever since I was a kid, I have considered myself to be a “girly girl”. I still consider myself one at heart, but since coming to college, I have made efforts to push myself out of my comfort zone. Working at the farm this summer was one of those efforts.  It forced me to channel my inner “tough girl” in order to balance my inner “girly girl”. Throughout my time at the farm, I learned a lot and became more well-rounded.  It was very challenging in some ways.  I never knew what to expect because every day was a little bit different than the last, but I loved how much I learned that way.  </p>
      <p>While working on the farm, I learned what it looks like to grow food from a seed and how to care for it so that it can feed someone else. Time spent in the greenhouse planting tiny seeds that would eventually become cauliflower or broccoli was extremely rewarding.  I would think about that feeling when I would help harvest large items like squash, cabbage, or tomatoes; how crazy it was that those food items once were tiny seeds.</p>
      <p> I learned how to eat a little dirt to try a new food like kohlrabi, something I never thought I would do. I remember Charles was watching me eat it with a smile on his face, wondering how I felt about it. I was surprised with myself that I actually liked this “cabbage apple” that had just been pulled from the fields. I think Charles was surprised too.</p>
      <p>I learned how to work with a team on a project bigger than myself that would produce a positive outcome for the community. I gained a totally new respect for farmers because it was the hardest work I have ever done, both mentally and physically. It was always reassuring to know that I had people with me with the same goals and appreciation for a team effort towards a goal. No matter how hot the sun was, we always had each other to talk with and support.</p>
      <p className={classes.pullQuote}>While working on the farm, I learned what it looks like to grow food from a seed and how to care for it so that it can feed someone else. Time spent in the greenhouse planting tiny seeds that would eventually become cauliflower or broccoli was extremely rewarding.  I would think about that feeling when I would help harvest large items like squash, cabbage, or tomatoes; how crazy it was that those food items once were tiny seeds</p>
      <p>I learned the importance of taking a rest when I felt dehydrated or exhausted.  This was an important lesson that Charles was very good at teaching. He showed us that it improves your performance when you allow yourself time to rest and drink water. This sounds like common sense, but when you are in the field working, it’s easy to forget to care for your body. Staying hydrated and taking breaks from the sun improves technique and allows you to accomplish more. In the beginning of the summer, I kept finding myself wanting to push through the back pain or the hand calluses. One time Charles could tell that my posture was falling forward, so he pulled me aside to tell me I needed to step away and take a break, then he explained why. That was an important moment for me because it made me more conscious of my body throughout the rest of the summer.</p>
      <p>My career choice for post-graduation is in nutrition, dietetics and wellness, so working on a farm that grows organic fruits and vegetables has been very fitting and applicable. Being able to see the first step of a food system is so valuable to my learning as a future dietitian. If I decide to pursue a career in food service or food science, I will already have a great understanding of the logistics of growing food: how long certain produce takes to grow, how long it lasts after harvesting, how much labor goes into certain crops, how much certain crops cost, etc. I will have more empathy if a crop fails and is not able to be purchased by my restaurant because I know that things happen and you can’t always control the conditions on a farm.  </p>
      <p>It is also good for me to know firsthand how much better produce tastes when it is truly fresh and organically grown. I have never tasted better tomatoes, green beans, watermelon, carrots, or beets in my life. I plan to emphasize this to future clients and encourage them to buy local when it comes to fruits and vegetables especially. Not only is it healthier to eat foods that haven’t been sprayed with chemicals, they are less beat up from transport and are naturally fresher because they do not have to be transported after harvest. There are so many reasons to eat local and now I understand why. This will be a part of my nutrition education in the future.</p>
      <p>Over the course of the summer, I had a lot of fun on this farm. I really enjoyed all the learning and all the hard work, the reward was always worth it. I would definitely do the internship again if I could do it over. This experience has given me the confidence to start my own garden once I am living on my own, I look forward to growing my own produce and educating others on the benefits of fresh organically grown food. I will take my lessons from the farm with me in my career and my life.</p>
      <p>   - Megan 2017</p>
      <div className={classes.sectionDivider}/>
      <div className={classes.figure}>
        <img src={PaigeAmyBokChoy} className={classes.image} alt="Paige and Amy with Bok Choy"/>
      </div>
      <p>I have learned a lot during my time at the Institute for Food farm this semester. Throughout this semester I was able to participate in harvesting, washing, and packaging produce for CSA pickup. My family has been part of a CSA before so it was interesting to see the work and weekly routine that happens on the farm side of a CSA. I worked on the farm mostly Tuesdays and Thursdays and the tasks varied depending on the day. Tuesdays were focused more on harvesting crops that last for longer periods of time. Thursdays there was more of a time crunch to finish the last of the harvesting and wash and pack CSA boxes. I was also able to experience the changes on the farm as the seasons progressed from fall to winter. I started the semester out in early fall, when tomatoes and peppers were still growing and ended the semester in potato and leek season. As a result, I was able to harvest a large variety of crops including some I had never worked with such as kohlrabi. </p>
      <p>Being out on the farm weekly has given me the opportunity to not only gain more farm experience, but to also reflect on how the farm work connects to my academics at Miami. I took BIO 131- Plants, Humanity, and the Environment this semester and found many parallels between what was taught in class and my work on the farm. While I was learning about sustainable farming practices and the negative effects of large scale industrial farming in class, I was able to put this into practice by working on a small-scale sustainable farm. I also was able to continue to put into practice what I had learned previously in my food studies and geography courses last semester.</p>
      <p>My time at the farm in addition to my classes has shown me how many challenges we face in the next fifty years in our food system. With the combination of what I have learned in my food studies, geography and BIO 131 classes, it is very clear that our food system is at a crucial turning point. We are at the peak production of many fossil fuels and many farming techniques used in large scale agriculture are unsustainable. There is a great need to find an alternative sustainable solution to our food system. Part of this solution will come from techniques used on small sustainable farms such as Miami’s.</p>
      <p>My time on Miami’s farm in addition to my classes has given me the opportunity to discover that my true interests lie in food studies. I hope to continue to pursue this passion in the future.</p>
      <p>   - Paige</p>
      <div className={classes.sectionDivider}/>
      <p>This summer, I am working on a project that assesses how the Institute for Food at Miami University (IF) can address and alleviate food insecurity in Oxford, Ohio, by providing low-income residents with fresh, local, sustainably-grown produce. Laid out in this way, it all sounds very concise, simple even. But the development of this project is perhaps the most organic endeavor I have ever undertaken.</p>
      <p>I have experience with sustainable agriculture and community-building through Community Supported Agriculture (CSA) programs and working on the IF farm. My initial idea was to create an IF CSA in connection with the Oxford Community Choice Pantry (OCCP) to meet the food needs of Oxford’s low-income residents. However, when I began to interview those invested in the food systems of the Greater Cincinnati region (OCCP board members and volunteers, IF faculty and staff, Our Harvest and Green Umbrella coordinators, sustainable-ag farmers), it became clear that I could not come into the Oxford community expecting my cookie-cutter CSA concept to be implemented successfully. My research questions shifted from how to make the Oxford community fit my mold to what are the IF and community resources at hand that can be utilized to meet community needs and connect Oxford’s food-insecure with a sustainable and thriving food system?</p>
      <p>My project is proving to me that the answers can be found in the food system itself. They lie in healthy food access and food justice. They manifest themselves through environmental and nutrition education and in the production of local foods from farmers and university initiatives alike. Sustainable food security is dependent upon community development to support local foods, and minimization of food waste occurs when individuals feel personally invested in their food systems. There are economic and agricultural components that are just as important as (and tightly tied to) community. To choose only one aspect of the food system when it is exactly that, a system, an organization of intricately interconnected components that cannot be easily separated from one another, would be a fruitless effort.</p>
      <p>Compartmentalizing environmental issues has been seen as a useful way to solve problems that are larger than any one individual. I believe, however, that systems-thinking is the only solution for an environmentally, economically, and socially sustainable future. If this is the case, then we cannot shy away from framing our food within the context of a system, no matter how large or daunting that task may be.</p>
      <p>I see the formation of an Oxford Food Policy Council (OFPC) as a holistic, systems-thinking approach to solving issues within the food system, to solving, in particular, the issue of food insecurity in Oxford. An OFPC would provide every community member with opportunities for passionate engagement and investment, be it through physical labor, monetary donations, or community support and education. Food is necessary for life and every individual deserves a say in their food system. That is why I do what I do and why I will continue to do this work for the rest of my life.</p>
      <p>   - Marla 2016</p>
      <div className={classes.sectionDivider}/>
      <div className={classes.figureContainer}>
        <div className={classes.figure}>
          <img src={StudentsHarvesting} className={classes.image} alt="Students Harvesting"/>
        </div>
        <div className={classes.figure}>
          <img src={Olivia} className={classes.image} alt="Olivia"/>
        </div>
      </div>
        <div className={classes.figure}>
          <img src={StudentInGreenhouse} className={classes.image} alt="Student In Greenhouse"/>
        </div>
      <p>The following  Q and A is from the November 2016 Institute for Food blog: <a target="blank" href="https://blogs.miamioh.edu/if-farm/">https://blogs.miamioh.edu/if-farm/</a></p>
      <p>Olivia, a senior at Miami University, began her agricultural adventure last spring with the Institute for Food as a member of the Food Studies Course, taught by Dr. Peggy Shaffer. As Olivia is quick to tell, the class truly changed her life. Olivia now serves as a Food Fellow for the Greater Cincinnati Regional Food Policy Council and continues to support this Institute for Food in this role. Read on to learn how Olivia is making a difference in the food world. </p>
      <p><b className={classes.orange}>Q : </b> <i>So tell me a little bit about the Food Fellowship. What made you interested in applying?</i></p>
      <p><b className={classes.orange}>A : </b> The Food Fellowship is a program initiated by the Greater Cincinnati Regional Food Policy Council. They chose one student from five different regional colleges that was passionate about making a difference in the food system. Their goal for us was to complete a project within the school year of our choosing, in conjunction with a Cincinnati organization to better one of the aspects of the food system that we were interested in. I personally was driven to apply because it gave me the opportunity to make a direct change in the food system, which I’ve been interested in since I was a freshman Environmental Science major and realized how destructive conventional agriculture is.</p>
      <p><b className={classes.orange}>Q : </b> <i>What does it mean to be a Food Fellow? What are your day-to-day duties?</i></p>
      <p><b className={classes.orange}>A : </b> So my position as a Fellow has a couple different aspects. As a Fellow, I am expected to have completed 300 hours of work for a Cincinnati organization by the end of the school year, which I will summarize into a tangible “product” and present to the Food Policy Council. My organization is the Ohio Valley Food Connection. It’s a company that is essentially an “online farmer’s market.” It picks up the produce from small-scale, local and organic farms to distribute to stores, households, and restaurants in the Cincinnati area devoted to sourcing ingredients locally. It has contributed largely to the Cincinnati food hub, something that the Institute definitely wants to tap into, but also something we can learn from to make our own more regional food hub. Additionally, the five Fellows and our supervisor meet once a month as a little check in.</p>
      <p>So, the actual duties of being a Fellow are pretty easy to complete, and the program, therefore, is absolutely what you make of it. For my project, I knew I wanted to help out the Institute for Food here at Miami in some way. Because they are in need of expanding their customer base, especially since they are tripling the acreage harvested this year, I was asked to contribute to developing their market. Through my partnership organization (the OVFC) where I am considered an intern, I help with deliveries, processing and grant writing. Not only will I sell the Institute’s food to this larger scale distributor, but my first-hand experience of food hub operations will lend valuable insight to the Institute for Food as they develop their market.</p>
      <p><b className={classes.orange}>Q : </b> <i>You took the Food Studies course with Dr. Shaffer last spring. What made you want to sign up for the class and how do you think it has impacted your personal outlook on food?</i></p>
      <p><b className={classes.orange}>A : </b> I had wanted to get involved in some sort of sustainable farming program, and had been looking into WWOOFing or volunteering at a nearby farm for a couple months when I received the application to apply to the Food Studies Workshop. Because you had to apply for the class, I knew that it would be full of motivated and dedicated individuals and was so excited to be accepted. Having taken the class, I now prioritize my personal choices surrounding food differently. I am lucky enough to have affordable access to fresh fruits and vegetables when so many others do not, so I make sure to be eating them! When grocery shopping, I make sure to buy at least organic when it comes to the Dirty Dozen, and to spend 50 more cents on a local pepper. When eating out, local restaurants are the pick instead of chains. The most important thing the class makes you realize is that little personal changes make a difference. Each dollar you spend on food is a vote for what you find important. “Voting” local is a vote for the local economy, sustainability and, more often than not, cleaner eating.</p>
      <p><b className={classes.orange}>Q : </b> <i>How has your involvement with food studies impacted your academic career? What do you hope to do in your future?</i></p>
      <p><b className={classes.orange}>A : </b> The Food Studies course, I honestly tell everyone, changed my life. I remember being in tears for a majority of the days we met. Many times I didn’t realize the gravity of the bee decline, soil degradation, etc., or was ignorant to how many Americans go to bed malnourished or obese because they don’t have access to fresh, healthy food. But more often than not, I was in tears because I felt so full and driven and inspired by the people involved in the course. Guest lecturers made it an incredibly interdisciplinary class; every issue of the broken food system was brought to light: the production, the politics, the social justice issues, the economics… AND we transformed an acre of an old historic farm into a vibrant green haven of herbs and veggies! Contributing to the Institute for Food has been the most empowering experience of my academic career, and I plan to continue creating change by serving in the Peace Corps as an environmental/agricultural volunteer following graduation. We’ll see where the wind takes me after that! My career goals are currently on rotation as a farmer, a professor, an agricultural researcher and an agro-forester. I’ve got time to figure it out, but it will definitely involve Food Studies because of the Institute for Food.</p>
      <p>   - Olivia 2016</p>
      <div className={classes.figure}>
        <img src={AbbyOlivia} className={classes.image} alt="Abby and Olivia"/>
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
      width: '90%',
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
      alignItems: 'center',
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
    orange: {
      color: '#F05A28',
      fontFamily: 'komu-b',
      fontSize: '1.5em',
      marginBottom: 0,
      lineHeight: 1,
    }
  }

export default injectSheet(styles)(StudentReflectionsWithClasses);