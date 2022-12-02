import { titleCase } from 'title-case'

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
import { Item } from 'react-stately'
// import { getSnowflakeData, transformResultsData } from '../../utils/snowflake'

import styles from './sector.module.scss'

export default function Sector(props) {
  return (
    <div className={styles['sector-container']}>
      <HeroBlock
        sectorImgSrc={props.HEADER_IMAGE_URL}
        body={props.HEADER_BODY}
        ctaLabel={props.HEADER_CTABUTTON_LABEL}
        ctaUrl={props.HEADER_CTABUTTON_URL}
        highlights={[
          {
            title: props.PANEL_TOP01_VALUE,
            value: props.PANEL_TOP01_LABEL
          },
          {
            title: props.PANEL_TOP02_VALUE,
            value: props.PANEL_TOP02_LABEL
          },
          {
            title: props.PANEL_TOP03_VALUE,
            value: props.PANEL_TOP03_LABEL
          }
        ]}
        page='sector'
        title={props.HEADER_TITLE}
      >
        <div className={styles['summary-content-container']}>
          <ImpactHighlightGrid
            impactHighlights={[
              {
                firstLabel: props.PANEL_TOP04_FIRST_LABEL,
                highlight: props.PANEL_TOP04_VALUE,
                secondLabel: props.PANEL_TOP04_SECOND_LABEL,
                title: props.PANEL_TOP04_TITLE,
                year: props.PANEL_TOP04_YEAR
              },
              {
                firstLabel: props.PANEL_TOP05_FIRST_LABEL,
                highlight: props.PANEL_TOP05_VALUE,
                secondLabel: props.PANEL_TOP05_SECOND_LABEL,
                title: props.PANEL_TOP05_TITLE,
                year: props.PANEL_TOP05_YEAR
              }
            ]}
          />
          {/* TODO: connect to snowflake */}
          <div
            style={{
              marginTop: '6rem'
            }}
          >
            <StatisticCardGrid
              cards={[
                <StatisticCard
                  body='people learned how to protect themselves against COVID-19'
                  statistic='4,940,488'
                  title='Progress'
                />,
                <StatisticCard
                  body='malnourished children were admitted to nutrition programs'
                  statistic='1,020'
                  title='Progress'
                />,
                <StatisticCard
                  body='communities updated their disaster preparedness plans to provide guidance during emergencies'
                  statistic='242'
                  title='Progress'
                />
              ]}
            />
          </div>
        </div>
      </HeroBlock>
      <LogoBlock
        ctaLabel={props.SDG_LINK_LABEL}
        ctaUrl={props.SDG_LINK_URL}
        logos={[
          {
            alt: 'Logo alt text',
            src: props.SDG_01_URL,
            url: props.SDG_01_LINK
          },
          {
            alt: 'Logo alt text',
            src: props.SDG_02_URL,
            url: props.SDG_02_LINK
          },
          {
            alt: 'Logo alt text',
            src: props.SDG_03_URL,
            url: props.SDG_03_LINK
          },
          {
            alt: 'Logo alt text',
            src: props.SDG_04_URL,
            url: props.SDG_04_LINK
          },
          {
            alt: 'Logo alt text',
            src: props.SDG_05_URL,
            url: props.SDG_05_LINK
          }
        ]}
        title={props.SDG_TITLE}
      />
      <ChartContainer
        chartType='line'
        controlTitle={props.GRAPHBOX_TITLE}
        footnote='Date as of footnote'
      />
      {props.IMPACT_TITLE && props.IMPACT_BODY && (
        <div className={styles['impact-container-wrapper']}>
          <div className={styles['impact-container']}>
            <h3>{props.IMPACT_TITLE}</h3>
            <p className={styles['impact-intro']}>{props.IMPACT_BODY}</p>
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
              data={[
                props.APPROACH_STEP_1,
                props.APPROACH_STEP_2,
                props.APPROACH_STEP_3,
                props.APPROACH_STEP_4,
                props.APPROACH_STEP_5
              ].filter((goal) => goal)}
            />
          </div>
        </div>
        <div className={styles['approach-section']}>
          <ExpandableTextBlock body={props.APPROACH_BODY} />
        </div>
      </SectionContainer>
      <SectionContainer
        alt={props.EXPENDITURE_IMAGE_ALT}
        src={props.EXPENDITURE_IMAGE_URL}
        title={props.EXPENDITURE_TITLE}
      >
        <p className={styles['expenditure-intro']}>
          {props.EXPENDITURE_DISCUSSION}
        </p>
        <div className={styles['expenditures-tabs']}>
          {/* TODO: connect to snowflake API */}
          <Tabs>
            <Item title='Programming Type'>
              <div className={styles['expenditures-tabs__content']}>
                <DoughnutChart
                  ariaLabel='Doughnut chart for development program'
                  aspectRatio={2}
                  colours={[
                    'rgb(231, 96, 12)',
                    'rgb(255, 166, 102)',
                    'rgb(255, 195, 153)',
                    'rgb(231, 96, 12)'
                  ]}
                  cutout={90}
                  data={['90%', '6%', '4%']}
                  displayLegend
                  labels={[
                    'Development Programming',
                    'Protected Emergencies & Fragile Contexts',
                    'Emergencies Response I-III'
                  ]}
                  legendPosition='right'
                  title=''
                  titlePosition='top'
                />
              </div>
            </Item>
            <Item title='Level of Fragility'>
              <div className={styles['expenditures-tabs__content']}>
                Senatus Populusque Romanus.
              </div>
            </Item>
          </Tabs>
        </div>
        <div className={styles['expenditures-section']}>
          <ExpandableTextBlock body={props.EXPENDITURE_PLANS} />
        </div>
      </SectionContainer>
      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        {/* TODO: connect to snowflake */}
        <div className={styles['progress-content']}>
          <Tabs isDarkMode>
            <Item title='2021'>
              <AccordionGroup
                isDarkMode
                items={[
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #1'
                  },
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #2'
                  },
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #3'
                  }
                ]}
              />
            </Item>
            <Item title='2022'>Senatus Populusque Romanus.</Item>
            <Item title='2023'>Alea jacta est.</Item>
          </Tabs>
        </div>
      </SectionContainer>
      <div className={styles['change-container-wrapper']}>
        <div className={styles['change-container']}>
          <h2>{props.CHANGE_TITLE}</h2>
          <p className={styles['change-intro']}>{props.CHANGE_BODY}</p>
          <div className={styles['change-container__chart-container']}>
            <div className={styles['change-container__chart-container__chart']}>
              {/* TODO: connect to snowflake */}
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                withAxes={false}
                aspectRatio={0.8}
                colours={[
                  'rgb(231, 96, 12)',
                  'rgb(255, 166, 102)',
                  'rgb(255, 225, 204)'
                ]}
                data={['83.5%', '74.1%']}
                labels={['2021', '2013']}
                showTopBarLabels
                subTitle='Eravur Pattu, Sri Lanka'
                title='Reading Comprehension'
                titlePosition='bottom'
                yStepSize={10}
              />
            </div>
            <div className={styles['change-container__chart-container__chart']}>
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                withAxes={false}
                aspectRatio={0.8}
                colours={[
                  'rgb(231, 96, 12)',
                  'rgb(255, 166, 102)',
                  'rgb(255, 225, 204)'
                ]}
                data={['83.5%', '74.1%']}
                labels={['2021', '2013']}
                showTopBarLabels
                subTitle='Eravur Pattu, Sri Lanka'
                title='Reading Comprehension'
                titlePosition='bottom'
                yStepSize={10}
              />
            </div>
            <div className={styles['change-container__chart-container__chart']}>
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                aspectRatio={0.8}
                withAxes={false}
                colours={[
                  'rgb(231, 96, 12)',
                  'rgb(255, 166, 102)',
                  'rgb(255, 225, 204)'
                ]}
                data={['83.5%', '74.1%']}
                labels={['2021', '2013']}
                showTopBarLabels
                subTitle='Eravur Pattu, Sri Lanka'
                title='Reading Comprehension'
                titlePosition='bottom'
                yStepSize={10}
              />
            </div>
          </div>
        </div>
      </div>

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
      <div className={styles['resource-container']}>
        {/* TODO: connect to snowflake */}
        <Carousel
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
          title='Resources'
        />
      </div>
      <CtaBlock
        body={props.CTA_BODY}
        buttonLabel={props.CTA_BUTTON_LABEL}
        buttonUrl={props.CTA_BUTTON_URL}
        imageUrl={props.CTA_IMAGE_URL}
        imageUrlAlt={props.CTA_IMAGE_URL_ALT}
        title={props.CTA_TITLE}
      />
    </div>
  )
}

export async function getStaticPaths() {
  const { getSnowflakeData } = require('../../utils/snowflake')
  const { rows } = await getSnowflakeData({
    sqlText: 'select CURRENT_URL from AREAS_OF_FOCUS'
  })

  return {
    paths: rows
      .map((areaOfFocus) => {
        if (areaOfFocus.CURRENT_URL) {
          return {
            params: {
              // TODO: update when table gets updated
              slug: areaOfFocus.CURRENT_URL.split(
                'https://www.worldvision.ca/our-work/'
              )[1]
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
    sqlText: `select * from AREAS_OF_FOCUS where CURRENT_URL = 'https://www.worldvision.ca/our-work/${params.slug}'`
  })

  // TODO: statement table doesn't match url
  // const { rows: resultsData } = await getSnowflakeData({
  //   sqlText: `select * from STATEMENTS where LEVEL = 'areas_of_focus' and AREA_OF_FOCUS = '${titleCase(
  //     params.slug
  //   )}'`
  // })

  // const { rows: controlData } = await getSnowflakeData({
  //   sqlText: `select * from CONTROL where LEVEL = 'countries'`
  // })

  return {
    props: {
      ...rows[0]
      // results: transformResultsData(resultsData),
      // control: controlData,
      // highlightedResults: resultsData.filter(
      //   (result) => result.DATA_PANEL === 'yes'
      // )
    }
  }
}
