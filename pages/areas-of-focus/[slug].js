import parse from 'html-react-parser'

import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import Tabs from '../../components/Tabs/Tabs'
import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import MediaCard from '../../components/MediaCard/MediaCard'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import LogoBlock from '../../components/LogoBlock/LogoBlock'
import Video from '../../components/Video/Video'
import { Goals } from '../../components/Goals/Goals'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import StoryCardGrid, {
  StoryCard
} from '../../components/StoryCardGrid/StoryCardGrid'
import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import ImpactHighlightGrid from '../../components/ImpactHighlightGrid/ImpactHighlightGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { TableOfContents } from '../../components/TableOfContents/TableOfContents'
import { Item } from 'react-stately'
import { convertToKebabCase } from '../../utils/convertStrings'
import { getGraph } from '../../utils/getGraphs'

import styles from './sector.module.scss'

const OverviewSection = (props) => {
  return (
    <section id={props.sectionId}>
      <HeroBlock
        sectorImgSrc={props.HEADER_IMAGE_URL}
        body={props.HEADER_BODY}
        ctaLabel={props.HEADER_CTABUTTON_LABEL}
        ctaUrl={props.HEADER_CTABUTTON_URL}
        highlights={Array(3)
          .fill('')
          .map((val, index) => ({
            title: props[`PANEL_TOP0${index + 1}_VALUE`],
            value: props[`PANEL_TOP0${index + 1}_LABEL`]
          }))
          .filter((highlight) => highlight.title)}
        page='sector'
        title={props.HEADER_TITLE}
      >
        <div className={styles['summary-content-container']}>
          <ImpactHighlightGrid
            impactHighlights={[
              {
                firstLabel: props.PANEL_MID01_FIRST_LABEL,
                highlight: props.PANEL_MID01_VALUE,
                secondLabel: props.PANEL_MID01_SECOND_LABEL,
                title: props.PANEL_MID01_TITLE,
                year: props.PANEL_MID01_YEAR
              },
              {
                firstLabel: props.PANEL_MID02_FIRST_LABEL,
                highlight: props.PANEL_MID02_VALUE,
                secondLabel: props.PANEL_MID02_SECOND_LABEL,
                title: props.PANEL_MID02_TITLE,
                year: props.PANEL_MID02_YEAR
              }
            ]}
          />
          {props.highlightedResults.length > 0 && (
            <div
              style={{
                marginTop: '6rem'
              }}
            >
              <StatisticCardGrid
                cards={props.highlightedResults.slice(0, 3).map((result) => (
                  <StatisticCard
                    key={result.STATEMENT_WITHOUT_VALUE + result.VALUE}
                    body={result.STATEMENT_WITHOUT_VALUE}
                    statistic={result.VALUE}
                    title={props.PROGRESS_CARD_LABEL}
                  />
                ))}
              />
            </div>
          )}
        </div>
      </HeroBlock>
      <LogoBlock
        ctaLabel={props.SDG_LINK_LABEL}
        ctaUrl={props.SDG_LINK_URL}
        logos={Array(5)
          .fill('')
          .map((val, index) => ({
            alt: props[`SDG_0${index + 1}_ALT`],
            src: props[`SDG_0${index + 1}_URL`],
            url: props[`SDG_0${index + 1}_LINK`]
          }))}
        title={props.SDG_TITLE}
      />
      {props.topGraphs && props.topGraphs.length > 0 && (
        <ChartContainer
          chartData={props.topGraphs}
          controlTitle={props.GRAPHBOX_TITLE}
          footnote='Date as of footnote'
        />
      )}
    </section>
  )
}

const ImpactSection = (props) => {
  const videos = Array(3)
    .fill('')
    .map((val, index) =>
      props[`VIDEO_TOP_0${index + 1}_URL`] ? (
        <div className={styles['from-field-container__video']}>
          <Video src={props[`VIDEO_TOP_0${index + 1}_URL`]}></Video>
        </div>
      ) : null
    )
    .filter((video) => video)

  return (
    <section id={props.sectionId}>
      <div className={styles['impact-container-wrapper']}>
        {props.IMPACT_TITLE && (
          <div className={styles['impact-container']}>
            <h3>{props.IMPACT_TITLE}</h3>
            <p className={styles['impact-intro']}>
              {parse(props.IMPACT_BODY || '')}
            </p>
          </div>
        )}
        {props.VIDEO_TITLE && videos.length > 0 && (
          <div className={styles['from-field-container']}>
            <Carousel cards={videos} title={props.VIDEO_TITLE} />
          </div>
        )}
      </div>
    </section>
  )
}

const ChallengesSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.CHALLENGES_ALT}
        src={props.CHALLENGES_URL}
        title={props.CHALLENGES_TITLE}
      >
        <div className={styles['challenges-content']}>
          <p>{parse(props.CHALLENGES_SUMMARY || '')}</p>
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return props[`CHALLENGES_SUBSECTOR_${index + 1}_TITLE`] ? (
                <div className={styles['challenges-content__section']}>
                  <ExpandableTextBlock
                    body={props[`CHALLENGES_SUBSECTOR_${index + 1}_BODY`]}
                    footnote={
                      props[`CHALLENGES_SUBSECTOR_${index + 1}_FOOTNOTE`]
                    }
                    title={props[`CHALLENGES_SUBSECTOR_${index + 1}_TITLE`]}
                  />
                </div>
              ) : null
            })}
        </div>
      </SectionContainer>
    </section>
  )
}

const ApproachSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.APPROACHES_IMAGE_ALT}
        src={props.APPROACHES_IMAGE_URL}
        title={props.APPROACH_TITLE}
      >
        <div className={styles['approach-diagram']}>
          <h3>{props.APPROACH_GOAL_LABEL}</h3>
          <h4 className={styles['approach-diagram__subheading']}>
            {props.APPROACH_GOAL}
          </h4>
          <div className={styles['approach-diagram__goals']}>
            <Goals
              data={Array(5)
                .fill('')
                .map((val, index) => props[`APPROACH_STEP_${index + 1}`])
                .filter((goal) => goal)}
            />
          </div>
        </div>
        <div className={styles['approach-section']}>
          <ExpandableTextBlock body={props.APPROACH_BODY} />
        </div>
      </SectionContainer>
    </section>
  )
}

const ExpenditureSection = (props) => {
  let chartsToPlot = []
  props.expensesGraphs?.filter((row) => {
    let i = chartsToPlot.findIndex(
      (x) => x.INDICATOR_CODE === row.INDICATOR_CODE
    )
    if (i <= -1) {
      chartsToPlot.push(row)
    }
    return null
  })

  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.EXPENDITURE_IMAGE_ALT}
        src={props.EXPENDITURE_IMAGE_URL}
        title={props.EXPENDITURE_TITLE}
      >
        <p className={styles['expenditure-intro']}>
          {parse(props.EXPENDITURE_DISCUSSION || '')}
        </p>
        {props.expensesGraphs && props.expensesGraphs.length > 0 && (
          <div className={styles['expenditures-tabs']}>
            <Tabs>
              {chartsToPlot.map((ea, idx) => (
                <Item title={chartsToPlot[idx].GRAPH_STATEMENT}>
                  {getGraph(idx, props.expensesGraphs)}
                </Item>
              ))}
            </Tabs>
          </div>
        )}
        <div className={styles['expenditures-section']}>
          <ExpandableTextBlock body={props.EXPENDITURE_PLANS} />
        </div>
      </SectionContainer>
    </section>
  )
}

const ProgressSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        {props.results.length > 0 && (
          <div className={styles['progress-content']}>
            <Tabs isDarkMode>
              {props.results.map((result) => (
                <Item title={result.year}>
                  <AccordionGroup
                    isDarkMode
                    items={Object.keys(result.areasOfFocus).map(
                      (areaOfFocusTitle) => ({
                        title: areaOfFocusTitle,
                        children: (
                          <p>
                            <ul>
                              {result.areasOfFocus[areaOfFocusTitle].map(
                                (areaOfFocus) => (
                                  <li>{areaOfFocus.FULL_STATEMENT}</li>
                                )
                              )}
                            </ul>
                          </p>
                        )
                      })
                    )}
                  />
                </Item>
              ))}
            </Tabs>
          </div>
        )}
      </SectionContainer>
    </section>
  )
}

const ChangeSection = (props) => {
  return (
    <section id={props.sectionId}>
      <div className={styles['change-container-wrapper']}>
        <div className={styles['change-container']}>
          <h2>{props.CHANGE_TITLE}</h2>
          <p className={styles['change-intro']}>
            {parse(props.CHANGE_BODY || '')}
          </p>
          {props.changeGraphs && props.changeGraphs.length > 0 && (
            <div className={styles['change-container__chart-container']}>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                {getGraph(0, props.changeGraphs)}
              </div>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                {props.changeGraphs.length > 1 &&
                  getGraph(1, props.changeGraphs)}
              </div>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                {props.changeGraphs.length > 2 &&
                  getGraph(2, props.changeGraphs)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const ProgramsSection = (props) => {
  return (
    <section id={props.sectionId}>
      <div className={styles['program-container']}>
        <Carousel
          cards={props.programs.map((program) => (
            <MediaCard
              // TODO: add this to Snowflake
              alt='Children running down a street smiling'
              body={program.CARD_BODY}
              imageSrc={program.CARD_IMAGE_URL}
              title={program.HEADER_TITLE}
              url={`/${program.URL}`}
            />
          ))}
          // TODO: add this to Snowflake
          title='Programs'
        />
      </div>
    </section>
  )
}

const StoriesSection = (props) => {
  return (
    <section className={styles['stories-container']} id={props.sectionId}>
      <StoryCardGrid
        cards={Array(3)
          .fill('')
          .map((val, index) =>
            props[`STORY_URL_0${index + 1}`] ? (
              <StoryCard
                body={props[`STORY_BLURB_0${index + 1}`]}
                imgAlt={props[`STORY_IMAGE_ALT_0${index + 1}`]}
                imgSrc={props[`STORY_IMAGE_URL_0${index + 1}`]}
                // TODO: add to snowflake
                linkLabel='Read more'
                linkUrl={props[`STORY_URL_0${index + 1}`]}
              />
            ) : null
          )
          .filter((story) => story)}
        title={props.STORIES_TITLE}
      />
    </section>
  )
}

const ResourcesSection = (props) => {
  return (
    <section id={props.sectionId}>
      <div className={styles['resource-container']}>
        <Carousel
          title={props.RESOURCES_TITLE}
          cards={props.resources.map((resource) => (
            <MediaCard
              alt={resource.ICON_ALT}
              body={resource.RESOURCE_BODY}
              iconSrc={resource.ICON_URL}
              labels={[resource.RESOURCE_TYPE]}
              title={resource.RESOURCE_TITLE}
              url={`/${resource.RESOURCE_URL}`}
            />
          ))}
        />
      </div>
    </section>
  )
}

export default function Sector(props) {
  const hasStories =
    props[`STORY_URL_01`] || props[`STORY_URL_02`] || props[`STORY_URL_03`]
  const componentMap = {
    section_order_summary: {
      component: OverviewSection,
      isShown: true
    },
    section_order_impact: {
      component: ImpactSection,
      isShown: !!(props.IMPACT_TITLE || props.VIDEO_TITLE)
    },
    section_order_challenges: {
      component: ChallengesSection,
      isShown: !!props.CHALLENGES_TITLE
    },
    section_order_approach: {
      component: ApproachSection,
      isShown: !!props.APPROACH_TITLE
    },
    section_order_expenditure: {
      component: ExpenditureSection,
      isShown: !!props.EXPENDITURE_TITLE
    },
    section_order_progress: {
      component: ProgressSection,
      isShown: !!props.RESULTS_TITLE
    },
    section_order_change: {
      component: ChangeSection,
      isShown: !!(
        props.CHANGE_TITLE &&
        props.changeGraphs &&
        props.changeGraphs.length > 0
      )
    },
    section_order_programs: {
      component: ProgramsSection,
      isShown: !!(props.PROGRAMS_TITLE && props.programs?.length > 0)
    },
    section_order_stories: {
      component: StoriesSection,
      isShown: !!(hasStories && props.STORIES_TITLE)
    },
    section_order_resources: {
      component: ResourcesSection,
      isShown: !!(props.resources.length > 0 && props.RESOURCES_TITLE)
    }
  }
  const sectionsData = props.controls.filter((control) => control.VALUE)
  return (
    <div className={styles['sector-container']}>
      <TableOfContents
        contents={sectionsData
          .filter(
            (section) =>
              componentMap[section.ITEM] && componentMap[section.ITEM].isShown
          )
          .map((control) => control.TEXT)}
        ctaText={
          props.controls.find((control) => control.ITEM === 'donate_label').TEXT
        }
        ctaUrl={
          props.controls.find((control) => control.ITEM === 'donate_url').URL
        }
      />
      {sectionsData.map((section) => {
        if (componentMap[section.ITEM] && componentMap[section.ITEM].isShown) {
          const Component = componentMap[section.ITEM].component
          return (
            <Component
              {...props}
              key={convertToKebabCase(section.TEXT)}
              sectionId={convertToKebabCase(section.TEXT)}
            />
          )
        }
        return null
      })}
      <CtaBlock
        body={props.CTA_BODY}
        buttonLabel={props.CTA_BUTTON_LABEL}
        buttonUrl={props.CTA_BUTTON_URL}
        imageUrl={props.CTA_IMAGE_URL}
        imageUrlAlt={props.CTA_IMAGE_URL_ALT}
        title={props.CTA_TITLE}
      />
      {/* TODO: connect to snowflake data */}
      {props.PARTNERS_TITLE && (
        <LogoBlock
          title={props.PARTNERS_TITLE}
          logos={props.partners.map((partner) => ({
            alt: partner.DONOR_LOGO_ALT,
            url: partner.DONOR_LINK,
            src: partner.DONOR_LOGO_URL
          }))}
        />
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const { getSnowflakeData } = require('../../utils/snowflake')
  const { rows } = await getSnowflakeData({
    sqlText: `select CURRENT_URL from AREAS_OF_FOCUS where CURRENT_URL is not null`
  })

  return {
    paths: rows
      .map((areaOfFocus) => {
        if (areaOfFocus.CURRENT_URL) {
          return {
            params: {
              slug: areaOfFocus.CURRENT_URL.split('areas-of-focus/')[1]
            }
          }
        }
      })
      .filter((path) => path),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const {
    getSnowflakeData,
    transformResultsData,
    transformNavigationData
  } = require('../../utils/snowflake')
  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by NAVIGATION_ORDER`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select HEADER_TITLE, URL, NAVIGATION_REGIONS from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const currentAreaOfFocus = areasOfFocusData.find(
    (areaOfFocus) => areaOfFocus.CURRENT_URL === `areas-of-focus/${params.slug}`
  )

  const { rows: resultsData } = await getSnowflakeData({
    sqlText: `select * from STATEMENTS where LEVEL = 'areas_of_focus' and ID_AREAOFFOCUS = '${currentAreaOfFocus.AREA_ID}'`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'areas_of_focus' or LEVEL = 'navigation' order by VALUE ASC`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const { rows: resourcesData } = await getSnowflakeData({
    sqlText: `select * from RESOURCES where ${Array(4)
      .fill('')
      .map((val, index) => {
        const resourceId = currentAreaOfFocus[`RESOURCEID_0${index + 1}`]
        return `RESOURCEID = '${resourceId}'`
      })
      .join(' or ')}`
  })

  const { rows: programsData } = await getSnowflakeData({
    sqlText: `select * from PROGRAMS where AREA_OF_FOCUS_CODE_01 = '${currentAreaOfFocus.AREA_ID}' or AREA_OF_FOCUS_CODE_02 = '${currentAreaOfFocus.AREA_ID}' ORDER BY PRIORITY LIMIT 12`
  })

  const { rows: partnershipsData } = await getSnowflakeData({
    sqlText: `select * from PARTNERS where AREAS_OF_FOCUS = '${currentAreaOfFocus.AREA_ID}'`
  })

  const { rows: topGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and ID_AREAOFFOCUS = '${currentAreaOfFocus.AREA_ID}'
    and DATA_PANEL = 'top_graph'`
  })

  const { rows: expensesGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and ID_AREAOFFOCUS = '${currentAreaOfFocus.AREA_ID}'
    and DATA_PANEL = 'expenses_graph'`
  })

  const { rows: changeGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and ID_AREAOFFOCUS = '${currentAreaOfFocus.AREA_ID}'
    and DATA_PANEL = 'change_graph'`
  })

  return {
    props: {
      ...currentAreaOfFocus,
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      programs: programsData || [],
      results: transformResultsData(resultsData),
      controls:
        controlData.filter((control) => control.LEVEL === 'areas_of_focus') ||
        [],
      highlightedResults:
        resultsData.filter((result) => result.DATA_PANEL === 'yes') || [],
      resources: resourcesData || [],
      disclaimer: disclaimerData[0].TEXT,
      topGraphs: [...topGraphs],
      expensesGraphs: [...expensesGraphs],
      changeGraphs: [...changeGraphs],
      partners: partnershipsData || []
    }
  }
}
