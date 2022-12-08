import parse from 'html-react-parser'

import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import Tabs from '../../components/Tabs/Tabs'
import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import MediaCard from '../../components/MediaCard/MediaCard'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import LogoBlock from '../../components/LogoBlock/LogoBlock'
import { Goals } from '../../components/Goals/Goals'
import { BarChart } from '../../components/Charts/BarChart/BarChart'
import { DoughnutChart } from '../../components/Charts/DoughnutChart/DoughnutChart'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
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
          }))}
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
                cards={props.highlightedResults.map((result) => (
                  <StatisticCard
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
      {props.topGraphs && (
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
  return (
    <section id={props.sectionId}>
      {props.IMPACT_TITLE && props.IMPACT_BODY && (
        <div className={styles['impact-container-wrapper']}>
          <div className={styles['impact-container']}>
            <h3>{props.IMPACT_TITLE}</h3>
            <p className={styles['impact-intro']}>
              {parse(props.IMPACT_BODY || '')}
            </p>
          </div>
          {/* TODO: connect to snowflake, need columns */}
          <div className={styles['from-field-container']}>
            <Carousel
              cards={[
                <MediaCard
                  alt='Children running down a street smiling'
                  body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                  imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                  labels={['Health, Water']}
                  title='1. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                  url='http://worldvision.ca/our-work'
                />,
                <MediaCard
                  alt='Children running down a street smiling'
                  body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                  imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                  labels={['Health, Water']}
                  title='2. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                  url='http://worldvision.ca/our-work'
                />,
                <MediaCard
                  alt='Children running down a street smiling'
                  body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                  imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                  labels={['Health, Water']}
                  title='3. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                  url='http://worldvision.ca/our-work'
                />,
                <MediaCard
                  alt='Children running down a street smiling'
                  body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                  imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                  labels={['Health, Water']}
                  title='4. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                  url='http://worldvision.ca/our-work'
                />
              ]}
              title='From the field'
            />
          </div>
        </div>
      )}
    </section>
  )
}

const ChallengesSection = (props) => {
  return (
    <section id={props.sectionId}>
      {' '}
      <SectionContainer
        alt={props.CHALLENGES_ALT}
        src={props.CHALLENGES_URL}
        title={props.CHALLENGES_TITLE}
      >
        <div className={styles['challenges-content']}>
          <p>{props.CHALLENGES_SUMMARY}</p>
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
          <h3>Our Goal</h3>
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
  let numberOfGraphs = [
    ...new Set(
      props.expensesGraphs.map(
        (ea, idx) => props.expensesGraphs[idx].INDICATOR_CODE
      )
    )
  ]

  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.EXPENDITURE_IMAGE_ALT}
        src={props.EXPENDITURE_IMAGE_URL}
        title={props.EXPENDITURE_TITLE}
      >
        <p className={styles['expenditure-intro']}>
          {props.EXPENDITURE_DISCUSSION}
        </p>
        {props.expensesGraphs && (
          <div className={styles['expenditures-tabs']}>
            <Tabs>
              {numberOfGraphs.map((ea, idx) => (
                <Item title={props.expensesGraphs[idx].GRAPH_STATEMENT}>{getGraph(idx, props.expensesGraphs)}</Item>
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
          {props.changeGraphs && props.changeGraphs > 0 && (
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
        {/* TODO: connect to snowflake */}
        <Carousel
          cards={[
            <MediaCard
              alt='Children running down a street smiling'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
              labels={['Health, Water']}
              title='1. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
              url='http://worldvision.ca/our-work'
            />
          ]}
          title='Programs'
        />
      </div>
    </section>
  )
}

const StoriesSection = (props) => {
  // TODO: add story grid
  return <section id={props.sectionId}></section>
}

const ResourcesSection = (props) => {
  return (
    <section id={props.sectionId}>
      {props.resources.length > 0 && (
        <div className={styles['resource-container']}>
          <Carousel
            title={props.RESULTS_TITLE}
            cards={props.resources.map((resource) => (
              <MediaCard
                alt={resource.ICON_ALT}
                body={resource.RESOURCE_BODY}
                iconSrc={resource.ICON_URL}
                labels={[resource.RESOURCE_TYPE]}
                title={resource.RESOURCE_TITLE}
                url={resource.RESOURCE_URL}
              />
            ))}
          />
        </div>
      )}
    </section>
  )
}

const componentMap = {
  section_order_summary: OverviewSection,
  section_order_impact: ImpactSection,
  section_order_challenges: ChallengesSection,
  section_order_approach: ApproachSection,
  section_order_expenditure: ExpenditureSection,
  section_order_progress: ProgressSection,
  section_order_change: ChangeSection,
  section_order_programs: ProgramsSection,
  section_order_stories: StoriesSection,
  section_order_resources: ResourcesSection
}

export default function Sector(props) {
  const sectionsData = props.controls.filter((control) => control.VALUE)
  return (
    <div className={styles['sector-container']}>
      <TableOfContents
        contents={sectionsData.map((control) => control.TEXT)}
        ctaText={
          props.controls.find((control) => control.ITEM === 'donate_label').TEXT
        }
      />
      {sectionsData.map((section) => {
        if (componentMap[section.ITEM]) {
          const Component = componentMap[section.ITEM]
          return (
            <Component
              {...props}
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
      <LogoBlock
        logos={Array(5)
          .fill('')
          .map((val, index) => ({
            alt: props[`SDG_0${index + 1}_ALT`],
            src: props[`SDG_0${index + 1}_URL`],
            url: props[`SDG_0${index + 1}_LINK`]
          }))}
        title={props.SDG_TITLE}
      />
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
    sqlText: `select * from AREAS_OF_FOCUS order by HEADER_TITLE ASC`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
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

  const { rows: topGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and DATA_PANEL = 'top_graph'`
    // TODO: add the program ID and AREA_OF_FOCUS_ID = '${currentAreaOfFocus.AREA_ID}'
  })

  const { rows: expensesGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and DATA_PANEL = 'expenses_graph'`
    // TODO: add the program ID and AREA_OF_FOCUS_ID = '${currentAreaOfFocus.AREA_ID}'
  })

  const { rows: changeGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'areas_of_focus'
    and DATA_PANEL = 'change_graph'`
    // TODO: add the program ID and AREA_OF_FOCUS_ID = '${currentAreaOfFocus.AREA_ID}'
  })

  return {
    props: {
      ...currentAreaOfFocus,
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
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
      changeGraphs: [...changeGraphs]
    }
  }
}
