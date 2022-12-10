import parse from 'html-react-parser'
const {
  getSnowflakeData,
  transformResultsData,
  transformNavigationData
} = require('../../utils/snowflake')

import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import EmergencyAlert from '../../components/EmergencyAlert/EmergencyAlert'
import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import ImpactHighlightGrid from '../../components/ImpactHighlightGrid/ImpactHighlightGrid'
import MediaCard from '../../components/MediaCard/MediaCard'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import Tabs from '../../components/Tabs/Tabs'
import { TableOfContents } from '../../components/TableOfContents/TableOfContents'
import { convertToKebabCase } from '../../utils/convertStrings'
import StoryCardGrid, {
  StoryCard
} from '../../components/StoryCardGrid/StoryCardGrid'
import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { Item } from 'react-stately'

import styles from './country.module.scss'

const OverviewSection = (props) => {
  return (
    <section id={props.sectionId}>
      <HeroBlock
        body={props.HEADER_BODY}
        countryCode={props.COUNTRY_CODE}
        ctaLabel={props.HEADER_CTA_LABEL}
        ctaUrl={props.HEADER_CTA_URL}
        highlights={Array(5)
          .fill('')
          .map(
            (val, index) =>
              props[`SUMMARY_0${index + 1}_LABEL`] &&
              props[`SUMMARY_0${index + 1}_VALUE`] && {
                title: props[`SUMMARY_0${index + 1}_LABEL`],
                value: props[`SUMMARY_0${index + 1}_VALUE`],
                tooltip: props[`SUMMARY_0${index + 1}_INFO`]
              }
          )
          .filter((summary) => summary)}
        markerCoordinates={props.mapData.map((l) => [
          Number(l.CENTRAL_LONG),
          Number(l.CENTRAL_LAT)
        ])}
        page='country'
        title={props.HEADER_TITLE}
      >
        <div className={styles['summary-content-container']}>
          {props.PANEL_MID01_TITLE && (
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
          )}
          {props.highlightedResults.length > 0 && (
            <div
              style={{
                marginTop: '6rem'
              }}
            >
              <StatisticCardGrid
                cards={props.highlightedResults.slice(0, 3).map((result) => (
                  <StatisticCard
                    key={result.STATEMENT_WITHOUT_VALUE}
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
      {props.topGraphs && props.topGraphs.length > 0 && (
        <ChartContainer
          chartData={props.topGraphs}
          chartType='line'
          controlTitle={props.GRAPHBOX_TITLE}
        />
      )}
    </section>
  )
}

const DetailsSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.DETAILS_IMAGE_ALT}
        src={props.DETAILS_IMAGE_URL}
        title={props.DETAILS_TITLE}
      >
        <div className={styles['details-content']}>
          <span className={styles['details-content__intro']}>
            {parse(props.DETAILS_SUMMARY || '')}
          </span>
          {props.DETAILS_SUBTITLE_01 && props.DETAILS_BODY_01 && (
            <div className={styles['details-content__section']}>
              <ExpandableTextBlock
                body={props.DETAILS_BODY_01}
                footnote={props.DETAILS_FOOTNOTE_01}
                title={props.DETAILS_SUBTITLE_01}
              />
            </div>
          )}

          {props.DETAILS_SUBTITLE_02 && props.DETAILS_BODY_02 && (
            <div className={styles['details-content__section']}>
              <ExpandableTextBlock
                body={props.DETAILS_BODY_02}
                footnote={props.DETAILS_FOOTNOTE_02}
                title={props.DETAILS_SUBTITLE_02}
              />
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  )
}

const ResultsSection = (props) => {
  return props.results.length > 0 ? (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        <div className={styles['results-content']}>
          <Tabs isDarkMode>
            {props.results.map((result) => (
              <Item title={result.year} key={result.year}>
                <AccordionGroup
                  key={result.year}
                  isDarkMode
                  items={Object.keys(result.areasOfFocus).map(
                    (areaOfFocusTitle) => ({
                      title: areaOfFocusTitle,
                      children: (
                        <p>
                          <ul>
                            {result.areasOfFocus[areaOfFocusTitle].map(
                              (areaOfFocus) => (
                                <li key={areaOfFocus.FULL_STATEMENT}>
                                  {areaOfFocus.FULL_STATEMENT}
                                </li>
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
      </SectionContainer>
    </section>
  ) : null
}

const ProgramsSection = (props) => {
  return props.programs.length > 0 ? (
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
  ) : null
}

const StoriesSection = (props) => {
  const hasStories =
    props[`STORY_URL_01`] || props[`STORY_URL_02`] || props[`STORY_URL_03`]
  return hasStories ? (
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
        // TODO: add to snowflake
        title='Stories'
      />
    </section>
  ) : null
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
  section_order_details: DetailsSection,
  section_order_results: ResultsSection,
  section_order_programs: ProgramsSection,
  section_order_stories: StoriesSection,
  section_order_resources: ResourcesSection
}

export default function Country(props) {
  const sectionsData = props.controls.filter((control) => control.VALUE)
  return (
    <div className={styles['country-container']}>
      {props.EMERGENCY_BANNER_BODY && (
        <EmergencyAlert
          body={props.EMERGENCY_BANNER_BODY}
          // TODO: need to add to snowflake table
          buttonLabel='Close'
          url={props.EMERGENCY_BANNER_URL}
        />
      )}
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
        imageUrlAlt={props.CTA_IMAGE_ALT}
        title={props.CTA_TITLE}
      />
    </div>
  )
}

export async function getStaticPaths() {
  const { getSnowflakeData } = require('../../utils/snowflake')
  const { rows } = await getSnowflakeData({
    sqlText: `select URL from COUNTRIES where URL is not null`
  })

  return {
    paths: rows
      .map((country) => {
        if (country.URL) {
          return {
            params: {
              countrySlug: country.URL
            }
          }
        }
      })
      .filter((path) => path),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by NAVIGATION_ORDER`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const currentCountry = countriesData.find(
    (country) => country.URL === params.countrySlug
  )

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'countries' or LEVEL = 'navigation' order by VALUE ASC`
  })

  const { rows: resultsData } = await getSnowflakeData({
    sqlText: `select * from STATEMENTS where LEVEL = 'countries' and ID_COUNTRY = '${currentCountry.COUNTRY_CODE}'`
  })

  const { rows: programsData } = await getSnowflakeData({
    sqlText: `select * from MAP INNER JOIN PROGRAMS on MAP.IVS_PROGRAM_CODE=PROGRAMS.IVS_PROGRAM_CODE where LEVEL = 'programs' and COUNTRYCODE = '${currentCountry.COUNTRY_CODE}' ORDER BY PRIORITY LIMIT 12`
  })

  const { rows: mapData } = await getSnowflakeData({
    sqlText: `select * from STAGE.MAP where COUNTRYCODE = '${currentCountry.COUNTRY_CODE}' AND LEVEL = 'programs'`
  })

  const { rows: resourcesData } = await getSnowflakeData({
    sqlText: `select * from RESOURCES where ${Array(4)
      .fill('')
      .map((val, index) => {
        const resourceId = currentCountry[`RESOURCEID_0${index + 1}`]
        return `RESOURCEID = '${resourceId}'`
      })
      .join(' or ')}`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const { rows: topGraphs } = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where level = 'countries'
    and DATA_PANEL = 'top_graph'
    and ID_COUNTRY = '${currentCountry.COUNTRY_CODE}'`
  })

  return {
    props: {
      ...currentCountry,
      results: transformResultsData(resultsData),
      mapData: mapData,
      controls:
        controlData.filter((control) => control.LEVEL === 'countries') || [],
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      highlightedResults:
        resultsData.filter((result) => result.DATA_PANEL === 'yes') || [],
      resources: resourcesData || [],
      disclaimer: disclaimerData[0].TEXT,
      topGraphs: [...topGraphs],
      programs: programsData || []
    }
  }
}
