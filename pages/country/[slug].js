import parse from 'html-react-parser'
import { titleCase } from 'title-case'

import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import EmergencyAlert from '../../components/EmergencyAlert/EmergencyAlert'
import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import ImpactHighlightGrid from '../../components/ImpactHighlightGrid/ImpactHighlightGrid'
import MediaBlock from '../../components/MediaBlock/MediaBlock'
import MediaCard from '../../components/MediaCard/MediaCard'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import Tabs from '../../components/Tabs/Tabs'

import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { Item } from 'react-stately'

import styles from './country.module.scss'

export default function Country(props) {
  return (
    <div className={styles['country-container']}>
      {props.EMERGENCY_BANNER_BODY && (
        <EmergencyAlert
          body={props.EMERGENCY_BANNER_BODY}
          // TODO: need to add to snowflake table
          buttonLabel='Close'
          title='Important notice'
          url={props.EMERGENCY_BANNER_URL}
        />
      )}
      <HeroBlock
        body={props.HEADER_BODY}
        // TODO: need to add to snowflake table
        countryCode='PSE'
        ctaLabel={props.HEADER_CTA_LABEL}
        ctaUrl={props.HEADER_CTA_URL}
        highlights={[
          props.SUMMARY_01_LABEL &&
            props.SUMMARY_01_VALUE && {
              title: props.SUMMARY_01_LABEL,
              value: props.SUMMARY_01_VALUE
            },
          props.SUMMARY_02_LABEL &&
            props.SUMMARY_02_VALUE && {
              title: props.SUMMARY_02_LABEL,
              value: props.SUMMARY_02_VALUE
            },
          props.SUMMARY_03_LABEL &&
            props.SUMMARY_03_VALUE && {
              title: props.SUMMARY_03_LABEL,
              value: props.SUMMARY_03_VALUE
            },
          props.SUMMARY_04_LABEL &&
            props.SUMMARY_04_VALUE && {
              title: props.SUMMARY_04_LABEL,
              value: props.SUMMARY_04_VALUE
            },
          props.SUMMARY_05_LABEL &&
            props.SUMMARY_05_VALUE && {
              title: props.SUMMARY_05_LABEL,
              value: props.SUMMARY_05_VALUE
            }
        ].filter((summary) => summary)}
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
                  // TODO: need to add to snowflake
                  title='Progress'
                />
              ))}
            />
          </div>
        </div>
      </HeroBlock>
      {/* TODO: connect to snowflake */}
      <ChartContainer
        chartType='line'
        controlTitle={props.GRAPHBOX_TITLE}
        footnote='Date as of footnote'
      />
      {/* TODO: connect to snowflake */}
      <MediaBlock
        videoSrc='https://www.youtube.com/watch?v=RYTFzGkb-5A'
        videoBackgroundImage='/MediaBlockBackground.png'
        title='This community is graduating'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, turpis et hendrerit pulvinar, odio purus lacinia felis, a semper eros turpis quis turpis. Curabitur sodales velit at fusce.'
      />
      <SectionContainer
        alt={props.DETAILS_IMAGE_ALT}
        src={props.DETAILS_IMAGE_URL}
        title={props.DETAILS_TITLE}
      >
        <div className={styles['details-content']}>
          <p className={styles['details-content__intro']}>
            {parse(props.DETAILS_SUMMARY)}
          </p>
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
      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        <div className={styles['results-content']}>
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
      </SectionContainer>
      {/* TODO: connect to snowflake */}
      <div className={styles['program-container']}>
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
          title='Programs'
        />
      </div>
      {/* TODO: add story grid */}
      <div className={styles['resource-container']}>
        <Carousel
          title={props.RESULTS_TITLE}
          // TODO: connect to snowflake
          cards={[
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='1 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='2 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='3 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='4 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />
          ]}
        />
      </div>
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
    sqlText: 'select URL from COUNTRIES'
  })

  return {
    paths: rows
      .map((country) => {
        if (country.URL) {
          return {
            params: {
              // TODO: update when table gets updated
              slug: country.URL.split('https://www.worldvision.ca/our-work/')[1]
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
    transformResultsData
  } = require('../../utils/snowflake')
  const { rows } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL = 'https://www.worldvision.ca/our-work/${params.slug}'`
  })

  const { rows: resultsData } = await getSnowflakeData({
    sqlText: `select * from STATEMENTS where LEVEL = 'countries' and COUNTRY = '${titleCase(
      params.slug
    )}'`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'countries'`
  })

  return {
    props: {
      ...rows[0],
      results: transformResultsData(resultsData),
      control: controlData,
      highlightedResults: resultsData.filter(
        (result) => result.DATA_PANEL === 'yes'
      )
    }
  }
}
