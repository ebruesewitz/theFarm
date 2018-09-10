import React from 'react';
import injectSheet from 'react-jss';
import EssayPage from '../../../Components/EssayPage';
import Figure1 from './images/figure1.png';
import PopulationCensus from './images/1850populationcensus.png';
import Figure3 from './images/figure3.png';
import Figure4 from './images/figure4.png';
import Figure5 from './images/figure5.png';
import Figure6 from './images/figure6.png';
import Figure7 from './images/figure7.png';
import Figure8 from './images/figure8.png';

const MigrationAndSettlementWithClasses = ({
  classes
}) => (
    <EssayPage
      articleTitle='Early Anglo-American Settlement in the Miami Valley'
      authorName='Timothy G. Anderson'
      className={classes.essayOverrides}
      headerClassName={classes.headerOverride}
      mapPageLink="/explore/ohiorivervalley"
      references={
        [
          <p>Crane, John. 1855. “Map of Butler County Ohio.”. Butler County Historical Society: <a href="http://bchistoricalsociety.com/main/wp-content/uploads/2015/06/1-Oxford-f.jpg" target="blank" >http://bchistoricalsociety.com/main/wp-content/uploads/2015/06/1-Oxford-f.jpg</a></p>,
          <p>Government Land Office Records, Bureau of Land Management: <a href="https://glorecords.blm.gov/details/patent/default.aspx?accession=0006-009&docClass=CV&sid=rnzbv3to.4gd" target="blank" >https://glorecords.blm.gov/details/patent/default.aspx?accession=0006-009&docClass=CV&sid=rnzbv3to.4gd</a></p>,
          <p>The Miami River Survey. 1798.</p>,
          <p>U.S. Census. 1850. Agricultural Manuscript Census Schedules.</p>,
          <p>U.S. Census. 1850. Federal Population Census Schedules</p>,
          <p>U.S. Census. 1850. Population Manuscript Census Schedules.</p>,
        ]
      }
      resources={[
        <a target="blank" href="https://www.lanepl.org/research/smith-library/"><p>Smith Library of Regional History</p></a>,
        <a target="blank" href="https://oxfordmuseumassociation.com/"><p>Oxford Museum Association</p></a>,
      ]}
    >
      <p>During the Early National Era (roughly 1790-1840), thousands of migrants from the American East Coast, as well as large numbers of immigrants from Europe, flooded into the Ohio Country via routes such as the National Road and the Ohio River. Data from the 1850 federal population census schedules reveal that the population of the state had already reached nearly two million by that date, reflecting both heavy in-migration into the state and relatively high birth rates (Fig. 1).</p>
      <div className={classes.figure}>
        <img src={Figure1} className={classes.image} alt="Figure 1: Ohio Nativity in 1850"/>
      </div>
      <p>In 1850 just over 66% of Ohio’s population had been born in the state. Those who were not born in Ohio hailed from three primary areas: the Mid-Atlantic Region, the Upland South and New England. Just over 7% of the state’s population consisted of recent immigrants from outside the country, primarily the German lands and Ireland. Further, when these nativity data are mapped at the civil township level it is clear that early Anglo-American migration into Ohio was not geographically random (Fig. 2).</p>
      <figure
        className={classes.figure}
      >
        <img src={PopulationCensus} className={classes.image} alt=""/>
        <figcaption>Figure 2: Regional Origins of Ohio’s Migrant Population in 1850 (1850 Manuscript Population Census Schedules)</figcaption>
      </figure>
      <p>That is, early migrants from specific cultural regions on the Eastern Seaboard and the incipient Upland South tended to settle in distinctive regions in Ohio, re-creating regional subculture regions in the state. Such patterns were likely the result of the unique circumstances influencing the early settlement of the Northwest Territory. For example, both Connecticut and Virginia agreed to cede land claimed in the interior of the continent to the federal government in exchange for the cancellation of war debts stemming from the Revolution, but brokered agreements in which parcels of land were retained in the Ohio Country in order to repatriate Revolutionary War veterans in kind through land warrants. Figure 2 clearly illustrates the resultant patterns of migration, as New Englanders tended to settle in the Connecticut Western Reserve and Virginians tended to settle in the Virginia Military District.</p>
      <p>Migrants from Pennsylvania accounted for just under 10% of the state’s population in 1850, and thus we can assume that a significant portion of the state’s native-born population was of Pennsylvanian parentage. Moreover, when genealogical records and county histories are examined it is clear that a majority of these Pennsylvanians hailed from the southeastern and southern portions of the state and were of Pennsylvania-German heritage. Pennsylvanians settled on so-called Congress Lands in four primary regions of early Ohio: between Columbus and Cleveland, a tier of counties along the Indiana border, just south and east of Columbus, and in the Miami Valley north of Cincinnati (Fig. 3).</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure3} className={classes.image} alt=""/>
        <figcaption>Figure 3: Regional Settlement Patterns of Pennsylvanians in 1850 (1850 Population Manuscript Census Schedules)</figcaption>
      </figure>
      <p>It is within this context, then, that we can begin to understand the nature of the early Anglo population in Butler County. The 1850 census reveals that Pennsylvanians figured prominently in the early settlement of the county: out of a total population of 30,780, 64% of the population not born in Ohio in that year had been born in Pennsylvania (Fig. 4).</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure4} className={classes.image} alt=""/>
        <figcaption>Figure 4: Migrant Nativity by Township, Butler County, 1850 (1850 Population Manuscript Census Schedules)</figcaption>
      </figure>
      <p>These migrants from southeastern Pennsylvania and adjacent regions of the Mid-Atlantic brought with them a distinctive regional subculture, characterized most readily by a commercially-oriented and diversified agricultural economy focused on both crop production and livestock rearing. This system was distinguished from the small-scale subsistence based agricultural system in New England and the plantation-based, monoculture cropping system in Virginia and Maryland. The 1850 agricultural census for Butler County reveals this diversified system, with a focus on corn and hogs, and as such Butler County’s early agricultural system was a good example of the Corn Belt system that would come to be common in western Ohio, Indiana and Illinois in the nineteenth century (Fig. 5).</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure5} className={classes.image} alt=""/>
        <figcaption>Fig. 5: 1850 Agricultural Census Data, Butler County (1850 Agricultural Manuscript Census Schedules)</figcaption>
      </figure>
      <p>As a result of the cession of indigenous tribal lands to the federal government in the Greenville Treaty of 1795, Butler County became part of the federal “Public Domain” (also known as Congress Lands) in 1796. Two years later Butler County lands were surveyed under the auspices of the Public Lands Survey System employing a rectilinear “township and range” survey system. Most of what is now Butler County was surveyed under the so-called “Miami River Survey” beginning in 1798 (Fig. 6).</p> 
      <figure
        className={[classes.figure, classes.figureOverride].join(" ")}
      >
        <img src={Figure6} className={classes.image} alt=""/>
        <figcaption>Fig. 6: The Miami River Survey (1798)</figcaption>
      </figure>
      <p>Most early settlers in Butler County purchased land either directly from the federal government or from a previous land owner through a process known as assigning. Assigning a patent entailed the original entrant of a land claim transferring their claim to a second party, the assignee, who then completed payment on the transferred aliquot to own it outright once the government issued a patent. This method of land transfer was employed in the case of the land upon which the Austin-Magie site is located (Fig. 7).</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure7} className={classes.image} alt=""/>
        <figcaption>Fig. 7: Original Land Patent, Section 14, Township 5 North, Range 1 East, Miami River Survey (Government Land Office Records, Bureau of Land Management: https://glorecords.blm.gov/details/patent/default.aspx?accession=0006-009&docClass=CV&sid=rnzbv3to.4gd)</figcaption>
      </figure>
      <p>On June 7, 1808 the original land owner, Matthew Hueston, assigned an entire half section of land (320 acres) to one John Miller, after which it can be assumed that Miller assumed payments to the government under the terms of a credit system introduced by the federal government in 1800 that allowed buyers five years to complete the purchase of their chosen lot.</p>
      <p className={classes.pullQuote}>These migrants from southeastern Pennsylvania and adjacent regions of the Mid-Atlantic brought with them a distinctive regional subculture, characterized most readily by a commercially-oriented and diversified agricultural economy focused on both crop production and livestock rearing.</p>
      <p>The southwest quarter (160 acres) of Section 14, the present location of the Austin- Magie site, was eventually purchased by Aaron Austin in 1845. This land was bordered on the north by land owned by John and D. Magie (probably David Magie) and to the east by a quarter section owned by David Magie, one of Ohio’s most prominent early swine breeders (Fig. 8).</p>
      <figure
        className={classes.figure}
      >
        <img src={Figure8} className={[classes.figure, classes.figureOverride].join(" ")} alt=""/>
        <figcaption>Fig. 8: Detail of Section 14, Township 5 North, Range 1 East of the Miami River Survey, 1855 (John Crane, “Map of Butler County Ohio”, 1855 Butler County Historical Society: http://bchistoricalsociety.com/main/wp- content/uploads/2015/06/1-Oxford-f.jpg)</figcaption>
      </figure>
      <p>Crane’s 1855 map clearly shows the flour and saw mills and the accompanying mile-long millrace just northeast of Oxford. Together with the extant 1841 federal-style brick farmhouse, the story of the Austin-Magie site embodies a number of important themes with regard to the early settlement of Ohio and the Corn Belt, and indeed of the Midwest itself.</p>
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

export default injectSheet(styles)(MigrationAndSettlementWithClasses);