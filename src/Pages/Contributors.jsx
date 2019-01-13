import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../Components/EssayPage';
import Footer from '../Components/Footer';

const ContributorsWithClasses = ({
  classes
}) => (
    <React.Fragment>
      <EssayPage
        articleTitle='Our Supporters'
        className={classes.essayOverrides}
      >
          <p>This website is supported by a grant from Ohio Humanities.</p>
          <p>The American Studies Program, the Institute for Food, the Department of Architecture and Interior Design, and the College of Creative Arts at Miami University provided additional funding.</p>
          <p><i>Educating from the Ground Up</i> is part of a larger curriculum initiative in food systems and food studies at Miami University, which is supported by a capacity building grant [#2017-70001-25988] from the USDA National Institute of Food and Agriculture.</p>
          <p className={classes.paragraphOverride}>Ohio Humanities is a state affiliate of the National Endowment for the Humanities. Any views, findings, conclusions or recommendations expressed in this publication do not necessarily represent those of the National Endowment for the Humanities.</p>
          <Footer className={classes.footerOverrides}/>
          <div className={classes.sectionDivider}/>
          <h3>Special Thank You</h3>
          <p>We would also like to thank the Smith Library of Regional History at The Lane Library in Oxford, Ohio, and our community partners, Oxford Farmer’s Market Uptown and MOON Co-Op.</p>
          <h3>Production Team</h3>
          <p>Project Director: Ben Jacks</p>
          <p>Conceived, produced, and edited by Ben Jacks.</p>
          <p>Designed by Vanessa Cannon and Ben Kolde, with programming by Elisabeth Bruesewitz.</p>
          <h4>Ben Jacks, M.Arch, MFA</h4>
          <p>Ben Jacks is an Associate Professor in the Department of Architecture and Interior Design, Miami University, where he teaches architecture to non-majors and beginning design students, as well as teaching at the advanced undergraduate and graduate levels. He focuses on aesthetics and perception in architecture and landscape. His journal publications include: “Reimagining Walking: Four Practices,” <i>Journal of Architectural Education</i>, (2004); “Walking the City: Manhattan Projects,” <i>Places: A Forum of Environmental Design</i> (2006); “Walking and Reading in Landscape,” <i>Landscape Journal</i> (2007); “Atmospheres, Expressed,” <i>Journal of Interior Design</i>, (2018); and “Photographs and Spiritual Atmospheres,” <i>Journal of Interior Design</i>, (2019). His books include <i>The Architect’s Tour: Notes for the Design Traveler</i>, (Culicidae Architectural Press, 2014), and <i>A House and its Atmosphere</i>, (Culicidae Architectural Press, 2017). He holds degrees from the University of Southern Maine (MFA), the University of Pennsylvania (M.Arch), and the University of Chicago (BA).</p>
          
          <h4>Vanessa Cannon</h4>
          <p>Vanessa Cannon is an instructor in the Armstrong Center for Interactive Media Studies at Miami University, Oxford, Ohio. She earned a Bachelor of Science degree from Ohio University in Visual Communication. Before joining Miami, she worked as an art director and lead graphic designer. Vanessa also operates a free-lance design firm which has built projects for clients such as Proctor and Gamble, Community First Solutions, Neyer Industries, Miami University, Ohio University, Butler Tech, Butler County Department of Environmental Services, City of Hamilton, West Chester Township, and Ohio Township Association.</p>
          
          <h4>Ben Kolde</h4>
          <p>Ben Kolde is an honors student at Miami University with experience in design and development for websites and branding including  UI/UX and photography. He has been a designer and developer for Curology, Barefoot Design, Gainful, and the Brandery.</p>

          <h4>Elisabeth Bruesewitz</h4>
          <p>Elisabeth Bruesewitz is a computer science honors student at the University of Cincinnati, with experience in front end design and development, marketing, and entrepreneurship. She is passionate about bridging the gap between developers and designers. She has been a developer for the Brandery, Kroger Technology, and has done freelance work for multiple startups over the past two years.</p>
          <div className={classes.sectionDivider}/>
          <h3>Contributors</h3>
          
          <h4>Timothy G. Anderson, Ph.D</h4>
          <p>Timothy G. Anderson, Department of Geography, Ohio University, is a historical geographer with research interests in the historical settlement geography of the United States, especially with regard to the historical production of regional cultural landscapes and identities; the historical settlement geography of Ohio during the early National period, with an emphasis on sub-regional cultural landscape formation; and the production of cultural landscapes associated with Germanic Diasporas, especially in North America and Europe. Dr. Anderson received his Ph.D from Texas A & M University in 1994.</p>
          
          <h4>Adam Ebert, Ph.D</h4>
          <p>Adam Ebert is an Associate Professor of History at Mount Mercy University in Cedar Rapids, Iowa. Ebert is currently doing research pertaining to the history of science and agriculture in the British Isles during 1600-1900. The research is contributing to his book, <i>Hive Society: The Popularization of Science and Beekeeping in the British Isles, 1609 –1913</i>, which is based on his dissertation research. During his studies at Iowa State Ebert received the Roswell Garst Dissertation Fellowship award for the 2007-2008 academic year, which enabled him to travel throughout the United Kingdom and conduct research. Ebert's family has a beekeeping business in central Iowa.</p>
          
          <h4>Robert Gioielli, Ph.D</h4>
          <p>Robert Gioielli is a historian whose work focuses on environmental activism, reform and politics, and the intersections between environmental change and major developments in modern American history. He is currently an Assistant Professor of history at the University of Cincinnati Blue Ash College. He has also taught at Towson University and was a fellow at the Rachel Carson Center for Environment and Society in Munich, Germany. His work has appeared in the Journal of Urban History and the Radical History Review, and he is co-editor of Ohio Valley History.</p>
          
          <h4>Stephen Gordon, MS</h4>
          <p>Steve Gordon holds undergraduate and graduate degrees in history from Miami University in Oxford, Ohio.  Since 1976, Steve has worked for the Miami Purchase Association for Historic Preservation, the Kentucky Heritage Council, the State Historic Preservation Office of the Ohio Historical Society, where he oversaw the Ohio Historic Inventory and National Register of Historic Places programs, and most recently, the McGuffey Museum at Miami University, the Three Valley Conservation Trust and MetroParks of Butler County. A native of Ohio, Steve’s research interests include local and regional architecture, cultural landscapes, craft and building technology, especially vernacular buildings and barns and the study of regional material culture. His publications include <i>How to Complete the Ohio Historic Inventory</i> (1992), as well as articles on the U.S. Grant Birthplace, 19th century prefabricated housing, women architects, Cincinnati’s meat packing industry, maple sugar production in southwest Ohio, and Spring Grove Cemetery. Steve has written and co-authored over fifty nominations to the National Register of Historic Places.</p>
          
          <h4>Charles Griffin</h4>
          <p>Charles Griffin serves as the Director of Operations and Production on the Institute for Food farm at Miami University.  He oversees the Institute for Food Community Supported Agriculture Program (CSA), manages the farm and teaches farm labs at Miami. He is a seasoned organic farmer. Over his 20-year career, he has built, managed, and inspected organic farms, consulted for sustainable farm projects and community initiatives, and educated students and staff on the practice and business of sustainable farming. He has completed graduate work in Agroecology at the University of California Davis and has served as an instructor in sustainable agriculture at Cincinnati State.</p>
          
          <h4>Jonathan Levy, Ph.D</h4>
          <p>Jonathan Levy is the Director of the Institute for the Environment and Sustainability and an Associate Professor in the Department of Geology and Environmental Earth Science at Miami University. He specializes in groundwater hydrology with research interests that include groundwater/surface-water interaction and the transport and fate of groundwater contaminants including pesticides, pharmaceuticals and bacteria. Levy is dedicated to international education.  He served a two-year teaching assignment in Luxembourg (2002-2004) and was a Fulbright scholar in South Africa (2009-2010) teaching and conducting research at the University of the Western Cape in Cape Town. He has led Miami workshops through Europe (2002), Kenya (2007) and Zambia (2013, 2014 and 2016) and his students are co-authors on papers regarding his research projects in Nepal, Kenya and Malawi. His current work in Zambia involves an examination of water use in relation to access, attitudes and cost as well as the degree of contamination and proximity to potential pollution sources.</p>
          
          <h4>Kim Medley, Ph.D</h4>
          <p>Dr. Kim Medley is a professor of Geography and an affiliate in Biology, the Institute for the Environment and Sustainability, and the Women, Gender, and Sexuality Studies Program. She studies why forests vary geographically in their structure, composition, and dynamics, and how an understanding of this variation may be best applied to resource conservation in temperate and tropical localities. Of particular interest are environmental versus human influences on local patterns of forest diversity and how woody plants are used and support local livelihoods. Her teaching contributes to physical-environmental studies in geography, human-environment relations, and strategic peacebuilding.</p>
          
          <h4>Beth Miller, Ph.D</h4>
          <p>Dr. Beth Miller focuses broadly on enhancing community nutrition and health, particularly in low-income communities where large health disparities and high rates of obesity and food insecurity exist. As a member of the Institute for Food, she is working to connect the produce from Miami’s organic farm to the local food pantry, as well as increase the capacity of pantry clients to access food through gardening. She conducts research related to obesity prevention in Head Start and sugar-sweetened beverage reduction with ethnically diverse families. She utilizes her expertise in weight management on research related to diet & skeletal muscle inflammation.</p>
          
          <h4>Jason Rech, Ph.D</h4>
          <p>Jason Rech is a geomorphologist and geologist and a Professor in the Department of Geology & Environmental Earth Science at Miami University. His research focuses on the interaction of climate and climate change on surficial processes and human societies. Much of his work is on arid lands, understanding the impact of climate change on water resources in the Middle East and in the Atacama Desert in northern Chile. Rech is also interested in how human societies have impacted their natural environment and deciphering ways to restore these systems to more natural conditions.</p>
          
          <h4>James Rubenstein, Ph.D</h4>
          <p>James Rubenstein is Professor Emeritus of Geography at Miami University in Oxford, Ohio. He is author or co-author of The Cultural Landscape, the best-selling textbook for college and high school human geography. He is also author or co-author of six other books—<i>Contemporary Human Geography, Introduction to Contemporary Geography, The Changing U.S. Auto Industry, Making and Selling Cars, A Profile of the Automobile and Motor Vehicle Industry,</i> and <i>Who Really Made Your Car?</i> Since 2013, he has written a weekly column on local food for <i>The Oxford Press</i>. He is a member of the Board of MOON Co-op Grocery.</p>
          
          <h4>Marguerite S. Shaffer, Ph.D</h4>
          <p>Marguerite S. Shaffer teaches history and environmental studies at Miami University. She is an environmental historian whose research focuses on the intersections of American and environmental studies, engaging issues of popular environmentalism, consumer culture, and public culture. She is co-editor of <i>Rendering Nature: Animals, Bodies, Places, Politics</i> (2015), editor of <i>Public Culture: Diversity, Democracy, and Community in the United States</i> (2008), and the author of <i>See America First: Tourism and National Identity, 1880-1940</i> (2001). Shaffer is the coordinator for the Institute for Food at Miami University.  She serves as series editor of the Nature and Culture Series for the University of Pennsylvania Press, and she is a member of the Greater Cincinnati Regional Food Policy Council. Her current research focuses on the public's perception and consumption of nature and "the natural".</p>
          
          <h4>Cameron Shriver, Ph.D</h4>
          <p>Cameron Shriver is a historian of early America. He researches colonialism, and Native limits to it, in the American Great Lakes, and is a student of Myaamia (Miami Indian) language and culture. His projects include a collaborative historical mapping project detailing Myaamia land transactions, and a study of intelligence-gathering between Native communities and empires in the eighteenth-century Midwest. He teaches American history and, most recently, "Introduction to the Miami Tribe" at Miami University.</p>

          <h4>Kathleen R. Smythe, Ph.D</h4>
          <p>Kathleen R. Smythe teaches at Xavier University. She is an African historian with years of fieldwork experience in Tanzania, East Africa. She is the author of Fipa Families (2006), and a series of related articles about how Fipa integrated and made sense of European Catholic missionaries and their values during the colonial period. For a decade or more, she has taught and researched at the intersection of globalization, economic development, and histories of agriculture. A second book, Africa’s Past, Our Future, came out in 2015 with Indiana University Press and highlights ideas and institutions in African history and culture that broaden our imagination about what is possible socially, politically, and economically. She is at work on a third manuscript titled Mind-Body- History-Earth that proposes a new sustainability framework based on long-term human interdependencies on earth and its ecosystems. The framework is built on an understanding of the losses that have occurred to human well-being with more recent historical developments in agriculture and technology.</p>
          
          <h4>R. Alan Wight, Ph.D</h4>
          <p>R. Alan Wight is an environmental sociologist and educator, and Service Learning Coordinator at The Christ College of Nursing and Health Sciences, Cincinnati. Alan’s research and advocacy agenda focuses on raising people’s food and ecological consciousness by dialoguing about the personal health, economic, and larger environmental implications of our food system. He works communities and schools to plant edible forest gardens. His recent publications and community asset maps include: Who is Training Farmers in the CORV Foodshed, Camp Washington Art and Mobile Produce, and Ecology, Energy, and Alternative Agriculture: A New Synthesis. His dissertation examines the types of learning and education that occur within the context of Community Supported Agriculture Programs.</p>
      </ EssayPage>
      </React.Fragment>
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
    },
    '& h4': {
        fontFamily: 'komu-b',
        fontSize: '1.5em',
    },
  },
  paragraphOverride: {
    fontSize: '.7em',
  },
  footerOverrides: {
    margin: '40px 0px 20px 0px',
    justifyContent: 'space-around',
    height: 90,
    width: '50vw',
    padding: 0,
    '@media (max-width: 760px)': {
      height: 80,
      padding: '25px 0px',
      backgroundColor: 'unset',
      margin: '40px auto',
      '& img': {
        margin: '0px 15px',
      }
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

export default injectSheet(styles)(ContributorsWithClasses);