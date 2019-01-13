import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import ArticleBackgroundImage from '../../../images/EssayBackground1.jpg';
import Picture1 from './images/Picture1.jpg';
import Picture2 from './images/Picture2.jpg';
import Picture3 from './images/Picture3.jpg';
import Picture4 from './images/Picture4.jpg';
import Picture5 from './images/Picture5.jpg';
import HominySoupRecipe from './images/HominySoupRecipe.pdf';

const MyaamiakiAndMyaamionkiWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Myaamiaki and Myaamionki'
      authorName='Cameron Shriver'
      articleBackgroundImage={ArticleBackgroundImage}
      className={classes.essayOverrides}
      mapPageLink="/explore/ohiorivervalley"
      references={
        [
          <p><sup>1</sup>Charles Scott, “To the Various Tribes of the Piankeshaws…,” June 4, 1791, in <i>American State Papers, Indian Affairs</i> 1: 133.</p>,
          <p><sup>2</sup>Knox to Washington, Dec 10 1790, in Clarence Edward Carter, ed., <i>The Territorial Papers of the United</i></p>,
          <p><sup>3</sup>George Ironstrack, “meekaalankwiki mihši-maalhsa – mikaalitioni kiihkayonki The Mihši-maalhsa Wars – Part II – The Battle of Kiihkayonki,” Aacimotaatiiyankwi: A Myaamia Community Blog <a href="https://aacimotaatiiyankwi.org/2014/03/31/the-mihsi-maalhsa-wars-part-ii/">https://aacimotaatiiyankwi.org/2014/03/31/the-mihsi-maalhsa-wars-part-ii</a></p>,
          <p><sup>4</sup>Ebenezer Denny, <i>A Military Journal of Major Ebenezer Denny</i> (Philadelphia, 1859), 145.</p>,
          <p><sup>5</sup>Wiley Sword, <i>President Washington’s Indian War</i> (Norman: 1985), 140-41.</p>,
          <p><sup>6</sup>Entry for Sept. 17, 1794, Anthony Wayne Orderly Book, Am.6592 vol. 2, Historical Society of Pennsylvania.</p>,
          <p><sup>7</sup>Quoted in Wallace A. Brice, <i>History of Fort Wayne</i>, (Fort Wayne: 1868) 23.</p>,
          <p><sup>8</sup>Boyer, <i>A Journal of Wayne’s Campaign</i> (Cincinnati: 1866), 320.</p>,
          <p><sup>9</sup>George Ironstrack and Cameron Shriver, “We Have Not Seen the End: The Battle of Mississinewa and the War of 1812 in Miami Indian Country,” <i>Outdoor Indiana</i>, (July/August 2018): 30-37.</p>,
          <p><sup>10</sup>Letter of Sabrevois ca, 1718, in Wisconsin Historical Collections, 16: 372-75.</p>,
          <p><sup>11</sup>Jake Long, “Myaamia Miincipi: Genetic Relationships and Preservation,” Myaamiaki Conference, Oxford, OH, 2012.</p>,
          <p><sup>12</sup>Michael P. Gonella, “Myaamia Ethnobotany,” (PhD Diss., Miami University, 2007), 90-95, 116.</p>,
          <p><sup>13</sup>George Ironstrack and Karen Baldwin, “aapooši eensiwatwaanki ansiwataakana ‘Again We Plant Seeds,’” aatotankiki myaamiaki 13, no. 1 (2015).</p>,
          <p><sup>14</sup>ibid.</p>,
        ]
      }
      resources={[
        <p><a target="blank" href={HominySoupRecipe}></a>Karen’s hominy recipe. Courtesy Karen L. Baldwin</p>,
        <p><a target="blank" href="https://archive.org/details/americanpioneerm01cinc/page/318">Daily Journal of Wayne’s Campaign, pp. 317-321</a></p>,
      ]}
    >
      <h3>Myaamiaki ‘Miami Indians’ in the Miami Valley</h3>
      <p>The Austin-Magie farm sits on the southeastern edges of Myaamionki—the heritage homelands of the Myaamia ‘Miami’ people. The land now known as the Austin-Magie farm has been sustaining communities for as long as we can remember. The farm, like Myaamia Mihši- nipwaantikaani ‘Miami University,’ was built on land watered by the Ahsenisiipi siipiiwi ‘Great Miami River.’ (In Myaamia, the name literally means “Rock River.”) Both the Great and Little Miami Rivers acquired their English names from other Native communities because they led, from the south, toward the Myaamia people, whose primary communities were historically in the Wabash and Maumee River valleys.</p>
      <p>While it is unknown when Myaamia families first began living in what became Southwestern Ohio, Myaamia ancestors almost certainly spent time with the communities that archaeologists call “Fort Ancient” in the Miami River basin before Europeans. In the eighteenth century, one of the most famous Myaamia cities was called Pinkwaawilenionki. Built in the late 1740s in order to gain easier access to their eastern relatives, and to British manufactures such as blue cloth and ribbons, the town quickly reached a community of about 2,000 residents, the largest in thevalley. Another, smaller Myaamia town was on the lower Little Miami River at the same time. In the second half of the eighteenth century, Shawnee communities, and eventually Delawares, moved to this area, and Miamis, Shawnees, and Delawares shared the region around Oxford.</p>
      <figure
        className={classes.figure}
      >
        <img src={Picture1} className={classes.image}/>
        <figcaption>John Patten, “A Trader’s Map of the Ohio country before 1753,” courtesy Library of Congress Geography and Map Division.</figcaption>
      </figure>
      <p>The Myaamia, along with their relatives the Wyandots, Delawares, Shawnees, Ottawas, Potawatomis, Ojibwes, Kickapoos, Piankeshaws, Weas, and Kaskaskias, relinquished their ownership of much of Ohio, including the land between the Miami Rivers, by signing the 1795 Treaty of Greenville.</p>
      <h3>Food Wars</h3>
      <p>That treaty resulted after a long, bitter, and costly war in which food took a central role. Between the American Revolution (1783) and the Treaty of Greenville (1795), the United States repeatedly sought to pressure, and eventually force, the Myaamia and their Indigenous relatives to surrender their rights to the Ohio River valley. What had been a Myaamia place became a launching point for campaigns to destroy Myaamia corn.</p>
      <p>Some U.S. speeches proclaimed the central role that food would play in the conquest of Myaamionki. When General Charles Scott’s militia destroyed towns on the Wabash River and took 41 women and children as prisoners, he asked them to push for peace. “The United States have no desire to destroy the red people,” Scott proclaimed to the Weas, “but, should you decline this invitation, and pursue your unprovoked hostilities…your warriors will be slaughtered, your towns and villages ransacked and destroyed, your wives and children carried into captivity,” and the Indian nations pushed West of the Great Lakes. <sup>1</sup> Secretary of War Henry Knox, while arguing that his motivation was punishment of Native belligerents, also acknowledged that his government should attack “as a terror to warn other tribes,” and further asserted that the Native communities should sharply feel their hunger. “It would have an absurd appearance,” he wrote to President George Washington in 1790, “to raise an army at great expence to destroy the Indian’s corn, and upon the object’s being effected, to replace the corn which had been so destroyed.” <sup>2</sup></p>
      <p>Scorched-earth campaigns targeted Myaamia food to force them to the treaty table. <sup>3</sup> In 1790, a United States army burned “vast fields of corn” spread “in almost every direction,” perhaps twenty thousand bushels in all. <sup>4</sup> Although Miami, Delaware, and Shawnee men routed the U.S. army, they did so only after days of destruction. Suffering through a hungry winter and spring, in 1791, two more American expeditions burned Myaamia and Wea towns along the Wabash River in preparation for the full army in late summer. <sup>5</sup> That year, confederated Miami, Delaware, and Shawnee men won a decisive battle over American forces before they reached their homes and cornfields.</p>
      <figure
        className={classes.figure}
      >
        <img src={Picture2} className={classes.image}/>
        <figcaption>Depiction of the Kiihkayonki region in 1790, as depicted in Ebenezer Denny, “View of the Maumee Towns” Military Journal of Major Ebenezer Denny (Philadelphia, 1859), 146-47.</figcaption>
      </figure>
      <p>Nearly all was rebuilt, but at great cost. By 1794, when another American army arrived to re-burn the region, one soldier noted 500 contiguous acres under cultivation. <sup>6</sup> Cornfields, interspersed with beans, continued from the Kiihkayonki metropolitan area down the Maumee to Fort Miamis near modern-day Toledo. General Anthony Wayne reported that he had never seen “such immense fields of corn in any part of America from Canada to Florida.” <sup>7</sup> The legion marched across Myaamionki, “burning and destroying all the houses and corn on their route,” a soldier wrote. <sup>8</sup> After the entire Maumee River valley lay in ashes, the Indian nations agreed to sign the Treaty of Greenville, yielding most of the Ohio Territory to the United States.</p>
      <p>Unfortunately for Myaamia people, even their relinquishment of vast tracts of Ohio and Indiana Territory—or, the Myaamia homeland—did not ensure their continued safety. As the War of 1812 crescendoed in the region, white suspicion of all Indians and their racial attitudes toward them contributed to another round of crop-burning. Despite their professions of peace and rejection of militants such as Tecumseh, nearly all of the major Myaamia towns lay in ashes by the end of 1812. <sup>9</sup>  Still, the Myaamia communities saved their seeds to rebuild.</p>
      <h3>Myaamia Miincipi</h3>
      <p>In significant ways, then, the long war for the region that includes Oxford involved Myaamia miincipi ‘Miami corn.’ Communities needed this nourishing staple crop, while American villagers and armies recognized that destroying Native agriculture would cripple them and force them to surrender land. The fact that Myaamia foodways survived and are being revitalized in the current generation is remarkable.</p>
      <p>Unlike modern maize production, Indigenous corns display a dizzying variation in appearance, nutrition, growing cycle, and adaptations to environment and cultivation practices. Myaamia miincipi was one such variation, which based on archaeological evidence, may have been developed by about 1000 CE. In 1718 a French soldier, Jacques Charles de Sabrevois, remarked that the Myaamia “raise a kind of Indian corn which is unlike that of our tribes at Detroit. Their corn is white, of the same size as the other, with much finer husks and much whiter flour.” <sup>10</sup></p>
      <p className={classes.pullQuote}>Unlike modern maize production, Indigenous corns display a dizzying variation in appearance, nutrition, growing cycle, and adaptations to environment and cultivation practices.</p>
      <p>While Myaamia families grew many different varieties of corn in their fields, this white flour corn became associated with the Myaamia Nation, and is the surviving heirloom variety. <sup>11</sup> In the past, Miami White Corn produced two or three crops annually. It was cultivated, protected, and prepared by women, who dropped a half dozen seeds in a hole, and as the plants grew, “hilled up” the stalks to support them. Both men and women, depending on need, would harvest. The cobs are long and thin, grow eight or ten rows of kernels, and serves well as a flour or hominy. After being roasted, shelled, and dried in the sun, Myaamia communities tried to preserve as much as they could as a cache for the leaner winter months and a seedbank for future seasons. <sup>12</sup></p>
      <figure
        className={classes.figure}
      >
        <img src={Picture3} className={classes.image}/>
        <figcaption>Photo of Myaamia Miincipi, a traditional white, 8 row flour corn. Grown and harvested in 2016 at Ecological Research Center at Miami University. Photo by Karen L. Baldwin</figcaption>
      </figure>
      <p>Miami White Corn continued to be grown through two forced removals (to eastern Kansas, and then to northeastern Oklahoma). In the post-World War II generation, and for unknown reasons, Myaamia families put corn on the shelf. <sup>13</sup> Since the 1990s, however, Miami White Corn has re-entered the earth and grows every spring and summer.</p>
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={Picture4} className={classes.image}/>
        <figcaption>Various stages of Myaamia Miincipi processing. From whole kernels to flour, miincipi was a flexible food source with many uses. Photo by Karen L. Baldwin</figcaption>
      </figure>
      <p>Against this historical context, the modern Myaamia community’s planting of their seeds is a form of sovereignty; of re-claiming the power of Myaamia food in Myaamionki ‘the Miami homeland.’</p>
      <p>Myaamia miincipi recently returned to the Austin-Magie farm itself. In 2016, tribal member and Miami University senior Riley Theobald completed her senior independent field study by growing a Myaamia miincipi crop. In addition to learning more about the growing cycle and cultivation of miincipi in Oxford, the crop allowed the Myaamia community to build its seed bank.</p>
      <figure
        className={classes.figure}
      >
        <img src={Picture5} className={classes.image}/>
        <figcaption>Riley Theobald, Myaamia student, growing Myaamia Miincipi for her senior independent field study at Miami University in 2016. Photo by Jeff Sabo</figcaption>
      </figure>
      <p>In tandem with the growing interest in revitalizing Myaamia foodways and other aspects of tribal culture, Myaamia families are now re-creating or inventing new noolintia ‘hominy,’ and kitasaakani ‘parched corn.’ Recipes involving miincipi. As George Ironstrack and Karen Baldwin recently commented: “Community gatherings serve up Myaamia dishes, like mahtohkatoopowi ‘cracked corn soup,’ and during summer youth programs, tribal youth plant, harvest and prepare Myaamia miicioni ‘Miami foods.’ Myaamiaataweenki ‘the Miami language’ and miicioni are returning together. As a result, we continue to become stronger and healthier as a community as we feed our bodies and our spirits.” <sup>14</sup></p>
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
  pullQuote: {
    color: '#F05A28',
    width: '75%',
    margin: '50px auto',
    fontSize: '2em',
    fontFamily: 'komu-b',
    textAlign: 'justify',
    lineHeight: '1.5em',

  },
  figureOverride: {
    width: 'calc(50% - 100px)',
    '@media (max-width: 500px)': {
      width: '75%',
    }
  },
}

export default injectSheet(styles)(MyaamiakiAndMyaamionkiWithClasses);