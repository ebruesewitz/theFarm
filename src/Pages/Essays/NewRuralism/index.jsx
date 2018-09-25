import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground5.jpg';
import PrinterofPlates from './images/printerofplates.jpg';
import DowntownCincinnati from './images/downtowncincinnati.jpg';

const NewRuralismWithClasses = ({
  classes
}) => (
  <EssayPage 
    articleTitle='Education for Healing the Rural-Urban Divide'
    authorName="Kathleen R. Smythe"
    articleBackgroundImage={ArticleBackgroundImage}
    className={classes.essayOverrides}
    headerClassName={classes.headerOverride}
    mapPageLink="/explore/unitedstates"
    references={[
      <p>Florida, Richard L. 2008. <i>Who's Your City?: How the Creative Economy is Making Where to Live the Most important Decision of your Life</i>. New York: Basic Books.</p>,
      <p>Fryman, John Felix. 1971. <i>From the Mountains to the Valley</i>. Oxford, OH: Oxford Press.</p>,
      <p>Lambert, Kelly. 2008 <i>Lifting Depression: A neuroscientist's Hands-on Approach to Activating your Brain's Healing Power</i>. New York: Basic Books.</p>,
      <p>Malabar Farm State Park website. http://www.malabarfarm.org/</p>,
      <p>Mazoyer, Marcel and Laurence Roudart. 2006. <i>A History of World Agriculture: From the Neolithic Age to the Current Crisis</i>. New York: Monthly Review Press.</p>,
      <p>Orr, David W. 2011. <i>Hope is an Imperative: The Essential David Orr</i>. Washington, DC: Island Press.</p>,
      <p>Selhub, Eva M. and Logan, Alan C. 2012. <i>Your Brain on Nature: The Science of Nature’s Influence on your Health, Happiness, and Vitality</i>. Ontario, Canada: John Wiley &amp; Sons. </p>,
    ]}
  >
    <figure
      className={classes.figure}
    >
      <img src={PrinterofPlates} className={classes.image} alt="Klauprech and Menzel, Printer of Plates, Cincinnati in 1841" />
        <figcaption>Klauprech and Menzel, Printer of Plates, <i>Cincinnati in 1841</i></figcaption>
    </figure>
    <figure
      className={classes.figure}
    >
        <img src={DowntownCincinnati} className={classes.image} alt="Downtown Cincinnati, 2010 (photo by Kevin D. Hartnell)." />
        <figcaption>Downtown Cincinnati, 2010 (photo by Kevin D. Hartnell).</figcaption>
    </figure>
      <p>As a transplant to Ohio, a resident of Cincinnati, an African historian who has worked at the nexus of sustainability, globalization, and agriculture for some time, and an educator at Xavier University where students come from urban, suburban and rural backgrounds, I see the rural-urban divide as a global phenomenon that requires urgent attention. It is likely going to be one of a handful of essential sociocultural divides of the 21st century.</p>
      <p>Within the United States, after the election of 2016 it is obvious that the rural-urban divide is real and has significant political implications. Analyses in <i>The Washington Post, The New York Times</i> and elsewhere in October and November after the election described the increasing polarization of urban and rural areas, noting the magnitude of loss for Hillary Clinton in low-density areas and for Donald Trump in high-density areas, a trend that has been evident since at least 2004. Katherine Cramer, a political science professor at the University of Wisconsin-Madison, emphasized that people in rural places and small communities felt ignored, disrespected and overlooked. In the general election, I would posit that what became clear, among many other things, was that in a very real sense, rural areas are being left behind.</p>
      <h3>Austin-Magie Farm and creation of the divide</h3>
      <p>This divide has been a long time in the making and the trajectory of the Austin-Magie Farm reflects the larger trajectory beautifully. Aaron Austin was part of the first waves of settlers in Ohio who found the area north of the Ohio River perfect for subsistence farming. The combination of forests, rich soils, game animals, abundant rivers and creeks was attractive for the Revolutionary War veterans and others who crossed the Appalachian Mountains in search of a new life in the late 1700s and early 1800s.  Felix Fryman’s declaration more than a century and a half later that the farm located on Four Mile Creek “was one of the most beautiful farms” he had ever seen with large fields and fertile bottom land reflects earlier sentiments well (Fryman 1971, 78). Austin’s estate was clearly established to provide both subsistence as well as a source of income to his family and aid in the development of the region in the form of the mill complex and millrace.</p>
      <p>The 1800s was marked in Europe, Australia, and the United States as a time of agricultural transition. Due to the mechanization of equipment, agricultural productivity doubled in areas with access to the capital to buy the new tilling, sowing, and harvesting equipment. For the century between 1850 and 1950, farms increased in size, employment on farms began to decline, and due to improvements in transportation, food grown in one part of the country could be sold in another part. With the increase in transport of goods, many farmers began to specialize as we see David Magie doing. With demand for pork increasing, and transport relatively convenient, particularly with the construction of canals and then railroads, farmers often chose to become producers of one or a small handful of products and to exchange multifaceted subsistence production for increased engagement in the marketplace.</p>
      <div className={classes.sectionDivider}/>
      <p>After World War II, the use of fossil fuels in farming led to productivity increases from 50 to 100 times previous levels. The same dynamic of decreasing rural agricultural labor, large-scale farming, and increasing urban settlement continued. Small-scale subsistence farms with a large number of outbuildings and some kind of production onsite, like milling, slowly disappeared. This disappearance is lamented in a number of works, particularly those by Wendell Berry but also our own Ohio writer and farmer Louis Bromfield whose Malabar Farm was a holdout of organic and sustainable farming methods as other families were being driven to ruin by the rapidly changing economy. Felix Fryman, who owned the farm in the 1930s, was a businessman and farmer. He grew corn, wheat, oats, soybeans, and hay and had a herd of dairy cattle. He also owned a general store for a while and began to buy up farms in the area, around 200 acres or so in size. Fryman’s participation in the aggregation of farmland is one of the key dynamics of the post-1950 era. As equipment and inputs became more and more expensive, farmers either had to keep up with the changes or sell their land to someone who could. The scale of efficient farming continued to increase in size with more powerful tractors, combines, etc. Historians Marcel Mazoyer and Laurence Roudart note in <i>A History of World Agriculture</i> (2006) that globally farmers abandon the profession when an unskilled urban job earns them the same if not more revenue than farming.	</p>
      <p>Those who were squeezed out, the used-to-be family farmers, moved to the cities and after the 1950s to suburban areas to look for work and other opportunities there. In little more than a hundred years, the United States went from a country with a majority of its population engaged in direct food production to less than two percent farmers. </p>
      <h3>The dominance of urban areas by the late 20th century</h3>
      <p>A stark sign of how far this trend has gone is the work of popular social analyst Richard Florida. One of his recent books, <i>Who’s Your City?</i> takes his work about the creative class to another level, arguing that young professionals should choose where they want to live first and foremost as that will dictate their lifetime earning potential, marriage partners, etc. The mostly unstated assumption behind Florida’s argument is the idea that rural areas are no longer worthy of career/lifestyle consideration. This work builds on earlier work, noting the concentration of creativity, wealth, and technology in certain key cities around the world. For Florida, this clustering of talent and economic assets over physical labor (generally in cities vs. rural areas) is among the most disruptive transformations in recorded history. Yet, he sees little way forward but to exacerbate it. </p>
      <p>Chronicling this rural exodus, rather than proscribing it, are two sociologists who spent a year in a small town in Iowa and learned that parents, teachers and schools administrators were all contributing to the death of their towns by encouraging the best and the brightest to leave home after high school and to seek opportunities elsewhere. These are two perspectives on the problem; drug abuse, poverty rates, educational attainment, and obesity would be other ways to measure the decline of rural communities, most of which make headlines on a regular basis. And the role that this divide and the dissatisfaction with it, at least from those in rural areas, as evidenced in the 2016 election is another.</p>
      <h3>What role might the Institute for Food at Miami University play?</h3>
      <p>If there are reasons to seek to bridge the rural-urban divide and perhaps to restore employment and health to rural areas, and I will argue there are, then Miami University’s Institute for Food and the Austin-Magie Farm have an important role to play. The vast majority of our food still comes from rural areas and the small towns and landscapes that support the farmers who live there. These folks are generally resilient, they care for the land, and they often have family members who work in nearby urban areas in white collar or service jobs. They are an essential part of our national fabric but their traditions, knowledge and contributions are increasingly marginalized in an urban-centric America.</p>
      <p>An historical and working farm at Miami University has the potential to go far beyond teaching students more about food production, health, etc. but to contribute to a national project of significant importance: rural revitalization. And since the Midwest has been chronicled as the prime place where significant political transition is taking place, Miami University’s efforts then lie at the heart of this national conversation on our political, and educational future.</p>
      <p>Higher education is by its nature urban-centric. If you think about the core disciplines that universities have inherited from the Middle Ages—philosophy and history, for example—they are largely urban-centric in their inherited orientation—philosophers from the cities of ancient Greece and Rome, histories of urban civilizations built on the agricultural surplus of rural areas. If there is any merit in seeking to bridge a growing rural-urban divide, then certainly one place to start would be at places like Miami University. For students who come from rural areas, active engagement with their history and contributions is an essential corrective to the education that we have inherited. Miami University’s Institute for Food and the Austin-Magie working farm have the opportunity to demonstrate how the rural/urban, white collar/intellectual vs. blue collar/manual labor divide are spent ideologies in need of replacement by a more holistic approach to both food production and individual engagement with subsistence needs. But there are many other reasons to embrace the Austin-Magie Farm. </p>
      <p className={classes.pullQuote}>An historical and working farm at Miami University has the potential to go far beyond teaching students more about food production, health, etc. but to contribute to a national project of significant importance: rural revitalization.</p>
      <p>Education about farming and rural areas offers a wide variety of opportunities and messages for both rural and urban based students about rural history:</p>
      <p>
        <ol>
          <li>Bringing rural histories, experiences, culture and labors more decidedly into the curriculum so that all students, whether they take a course in it or major in it, see rural histories, traditions, and economies as an important part of the curriculum.</li>
          <li>Offering students from either urban or rural areas a chance to explore course work and potential career opportunities within the area of food systems. </li>
          <li>Re-connecting all students not only with where their food comes from but also with the role of physical labor in food production.</li>
        </ol>
      </p>
      <p>But there are also a set of ideas that can come from curricula that integrates tours and work on the farm that are essential for educating our students for a sustainable future grounded in their own personal sustainability. The first is a connection to the earth. Selhub and Logan in their book, <i>Your Brain on Nature: The Science of Nature’s Influence on your Health, Happiness, and Vitality</i>, marshal the neuroscientific and other evidence that clearly demonstrates that we think more clearly, are physically healthier and less depressed when we spend time outdoors A second is a need for physical labor. All time outdoors is not created equal. Forest bathing, as the Japanese call it, results in better physiological measurements than a walk in the city. And Kelly Lambert has shown that using our hands for subsistence labor—things like farming, sewing, carpentry—all release dopamine and other chemicals in a reward circuit in our brains. The lack of such activity results in depression, an increasing problem in our wider population and among our students. Third, our students are smart enough to know that recycling is not going to solve global climate change, but they are also overwhelmed by what it will take to solve global climate change. The problems that lay before them are enormous and multiple and many are very skeptical of their ability to do anything to help. Therefore, it is incumbent upon us as educators, as David Orr taught me years ago, to provide our students with small-scale examples of effective change, essentially to provide our students with hope. Our universities are the perfect place to start, as is this farm. If it can provide food to families in the area, to the dining hall or some combination thereof; if it can restore soil fertility and build it; attract birds and butterflies; give students a sense of rebuilding an essential subsistence skill and a landscape at the same time; remind them of the rural peoples and histories of which they and we are all inheritors, then it will be offering an effective small-scale solution to global problems.</p>
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
  sectionDivider: {
    width: '30%',
    borderBottom: '4px solid #F05A28',
    margin: '50px auto'
  },
}

export default injectSheet(styles)(NewRuralismWithClasses);