import Head from 'next/head'

import Counter from '../components/Homepage/Counter/Counter'
import Hero from '../components/Homepage/Hero/Hero'
import SectorOverview from '../components/Homepage/SectorOverview/SectorOverview'
import RollingCredits from '../components/Homepage/RollingCredits/RollingCredits'
import VideoCarousel from '../components/Homepage/VideoCarousel/VideoCarousel'
import StickyCarousel from '../components/Homepage/StickyCarousel/StickyCarousel'
import styles from './Home.module.scss'
import MapHeaderContainer from '../components/MapChart/MapChartHeader/MapHeaderContainer'
import { COUNTRY_NAMES } from '../components/MapChart/MapConstants'
import RollingCreditsMap from '../components/Homepage/RollingCreditsMap/RollingCreditsMap'
import Prefooter from '../components/Homepage/Prefooter/Prefooter'

const featureCardData = (t, max) =>
  Array.from(Array(max).keys(), (_, index) => ({
    title: t[`did_know_title_0${index + 1}`],
    description: t[`did_know_body_0${index + 1}`],
    imgSrc: t[`did_know_image_url_0${index + 1}`],
    imgAlt: 'sample alt text'
  }))

const creditsData = (t) => [
  {
    pretext: t.highlights_text_01,
    highlight: t.highlights_value_01,
    subtext: t.highlights_text_02
  },
  {
    pretext: t.highlights_text_03,
    highlight: t.highlights_value_03,
    subtext: t.highlights_text_04
  },
  {
    pretext: t.highlights_text_05,
    highlight: t.highlights_value_05,
    subtext: t.highlights_text_06
  }
]

const HeroBackgroundDefault = '/homepage/hero/hero-background.png'

//FIXME should come from graph table but doesn't seem to be there
const sectorHighlights = () => [
  {
    value: '18 million',
    title: 'people reached'
  },
  {
    value: '$226 million',
    title: 'total spent'
  }
]

export default function Home({
  programData,
  countryData,
  translation: t,
  chartData
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Vision - Our Work</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={`${styles['section']} ${styles['section--hero']}`}>
          <Hero
            backgroundImage={HeroBackgroundDefault}
            heroText={t.text_01}
            highlightList={[
              t.highlight_top_01,
              t.highlight_top_02,
              t.highlight_top_03,
              t.highlight_top_04
            ]}
            linkLabel={t.label_01}
            subtitleText={t.text_02}
            url={t.url_label_01}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--counter']}`}
        >
          <Counter
            introLine1={t.people_text_01_first}
            introLine2={t.people_text_01_last}
            animatedTotal={parseInt(t.people_value)}
            totalDescriptor={t.people_text_02}
            detailValue1={t.people_girls_value}
            detailDescriptor1={t.people_girls_label}
            detailValue2={t.people_boys_value}
            detailDescriptor2={t.people_boys_label}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--sticky-carousel']}`}
        >
          <StickyCarousel
            pretext={t.text_03}
            subtext={t.text_04}
            backgroundImage={t.highlight_mid_background_image_url}
            content={[
              {
                image: t.highlight_mid_01_image_url,
                text: t.highlight_mid_01
              },
              {
                image: t.highlight_mid_02_image_url,
                text: t.highlight_mid_02
              },
              {
                image: t.highlight_mid_03_image_url,
                text: t.highlight_mid_03
              }
            ]}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--video-carousel']}`}
        >
          <VideoCarousel
            videos={[
              {
                img: t.main_video_01_img,
                src: t.main_video_01_url
              },
              {
                img: t.main_video_02_img,
                src: t.main_video_02_url
              },
              {
                img: t.main_video_03_img,
                src: t.main_video_03_url
              }
            ]}
          />
        </section>
        <section className={`${styles['section']} ${styles['section--map']}`}>
          <RollingCreditsMap
            imageSrc={t.map_background_01_url}
            mapCreditsData={[t.map_text_01]}
          />
          <RollingCreditsMap
            imageSrc={t.map_background_02_url}
            mapCreditsData={[t.map_text_02]}
          />
          {/*FIXME ish very very big*/}
          <MapHeaderContainer
            duration={1000}
            isDark
            legendText={t.map_title}
            padding={40}
            countryDropdownLabel={t.map_country_label}
            programDropdownLabel={t.map_program_type_label}
            yearDropdownLabel='Year'
            programData={programData}
            countryData={countryData}
            showHeaderControls
            showMarkers
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--sector-overview']}`}
        >
          <SectorOverview
            sectorData={chartData}
            sectorHighlights={sectorHighlights(t)}
            text1={t.sector_text_01}
            text2={t.sector_text_02}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--rolling-credits']}`}
        >
          <RollingCredits
            title={t.did_you_know_header}
            credits={creditsData(t)}
            imageSrc={'/homepage/rollingCredits/rolling-credits-background.jpg'}
            featureCardData={featureCardData(t, 5)}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--pre-footer']}`}
        >
          <Prefooter
            title={
              'Commitment to learning, and sharing what we’ve learned, keep us accountable.'
            }
            subtitle={'Four case studies of wisdom gained in 2021:'}
            mediaBlockTitle={
              "As we partner with communities, we're focused on creating real impact."
            }
            mediaBlockSrc={'https://www.youtube.com/watch?v=RYTFzGkb-5A'}
            mediaBlockBackground={
              'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
            }
          />
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const {
    getSnowflakeData,
    transformNavigationData
  } = require('../utils/snowflake')
  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by HEADER_TITLE ASC`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'navigation'`
  })

  const { rows: mapData } = await getSnowflakeData({
    sqlText: 'SELECT * FROM STAGE.MAP'
  })

  const { rows: mainPage } = await getSnowflakeData({
    sqlText: 'SELECT * FROM STAGE.MAIN_PAGE'
  })

  const { rows: graphData } = await getSnowflakeData({
    sqlText:
      "SELECT * FROM STAGE.GRAPHS WHERE LEVEL='main_page' AND CHART_TYPE='pie_chart' AND GRAPH_STATEMENT='Program expenditures by Sector' AND UNIT_OF_MEASUREMENT='percentage'"
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const programData = getProgramData(mapData)
  const countryData = getCountryData(mapData, programData)
  const translation = translateOrFallback(mainPage[0])
  const chartData = sectorData(translation, graphData)

  return {
    props: {
      programData,
      countryData,
      translation,
      chartData,
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      disclaimer: disclaimerData[0].TEXT
    }
  }
}

function translateOrFallback(t) {
  const obj = Object.keys(t).reduce((acc, key) => {
    acc[key.toLowerCase()] = t[key]
    return acc
  }, {})

  // Show a warning in the console for all the keys that are untranslated
  Object.entries(t).forEach(([key, val]) => {
    if (val === null) {
      console.warn(`${key} is not translated`)
    }
  })

  // Fallback for known untranslated keys and probable values
  obj.highlight_mid_01_image_url =
    obj.highlight_mid_01_image_url ||
    '/homepage/stickyCarousel/default-kid-1.png'
  obj.highlight_mid_02_image_url =
    obj.highlight_mid_02_image_url ||
    '/homepage/stickyCarousel/default-kid-2.png'
  obj.highlight_mid_03_image_url =
    obj.highlight_mid_03_image_url ||
    '/homepage/stickyCarousel/default-kid-3.png'
  obj.highlight_mid_background_image_url =
    obj.highlight_mid_background_image_url ||
    '/homepage/stickyCarousel/background-default.png'
  obj.sector_text_02 =
    obj.sector_text_02 ||
    'World Vision integrates projects across 5 main sectors:'
  obj.sector_text_01 =
    obj.sector_text_01 ||
    'We partner with communities to address the root causes of poverty using holistic approaches across 5 main sectors. See our 2021 investments and results.'

  //FIXME this needs to match the value from the graph table
  // the '&' sign and the word 'and' is different between tables
  obj.sector_04_title = 'Child Protection & Participation'

  //FIXME these keys do not exist in DB but were filled in on the frontend,
  // could be expected values, could be very wrong
  obj.main_video_01_img =
    obj.main_video_01_img ||
    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
  obj.main_video_02_img =
    obj.main_video_02_img ||
    'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/wvc-homepage-supporting-banner-gift-impact-three-frames-chickens.jpg'
  obj.main_video_03_img =
    obj.main_video_03_img ||
    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
  obj.map_background_01_url =
    obj.map_background_01_url ||
    '/homepage/rollingCredits/rolling-credits-background.jpg'
  obj.map_background_02_url =
    obj.map_background_02_url ||
    '/homepage/rollingCredits/rolling-credits-background.jpg'
  obj.sector_01_modal_aria_label =
    obj.sector_01_modal_aria_label ||
    'This aria label will describe the modal contents.'
  obj.sector_02_modal_aria_label =
    obj.sector_02_modal_aria_label ||
    'This aria label will describe the modal contents.'
  obj.sector_03_modal_aria_label =
    obj.sector_03_modal_aria_label ||
    'This aria label will describe the modal contents.'
  obj.sector_04_modal_aria_label =
    obj.sector_04_modal_aria_label ||
    'This aria label will describe the modal contents.'
  obj.sector_05_modal_aria_label =
    obj.sector_05_modal_aria_label ||
    'This aria label will describe the modal contents.'
  obj.sector_01_img_src = obj.sector_01_img_src || '/modalImage.jpg'
  obj.sector_02_img_src = obj.sector_02_img_src || '/modalImage.jpg'
  obj.sector_03_img_src = obj.sector_03_img_src || '/modalImage.jpg'
  obj.sector_04_img_src = obj.sector_04_img_src || '/modalImage.jpg'
  obj.sector_05_img_src = obj.sector_05_img_src || '/modalImage.jpg'
  obj.sector_01_img_alt = obj.sector_01_img_alt || 'image'
  obj.sector_02_img_alt = obj.sector_02_img_alt || 'image'
  obj.sector_03_img_alt = obj.sector_03_img_alt || 'image'
  obj.sector_04_img_alt = obj.sector_04_img_alt || 'image'
  obj.sector_05_img_alt = obj.sector_05_img_alt || 'image'
  obj.sector_01_color = obj.sector_01_color || '#E7600C'
  obj.sector_02_color = obj.sector_02_color || '#9054A1'
  obj.sector_03_color = obj.sector_03_color || '#006661'
  obj.sector_04_color = obj.sector_04_color || '#FDD25F'
  obj.sector_05_color = obj.sector_05_color || '#0C6699'

  //FIXME in the design `people_text_01` is two lines, but in DB single line
  // solving in stupid way for now
  const spaces = obj.people_text_01.split(' ')
  obj.people_text_01_first = `${spaces[0]} ${spaces[1]}`
  obj.people_text_01_last = `${spaces[2]} ${spaces[3]}`

  return obj
}

//FIXME super inefficient but if it works... then for now during build time...
// at least while a better solution is in the works
const sectorData = (t, chartData) => {
  const arr = []
  for (let i = 0; i < chartData.length; i++) {
    for (let j = 1; j <= 5; j++) {
      const title = t[`sector_0${j}_title`]
      const dissagregation = chartData[i]['DISAGGREGATION']
      if (dissagregation === title) {
        arr.push({
          title: t[`sector_0${j}_title`],
          percentage: chartData[i]['VALUE'],
          color: t[`sector_0${j}_color`],
          ctaLabel: t[`sector_0${j}_link_label`],
          ctaShortLabel: 'Learn more',
          ctaUrl: t[`sector_0${j}_link_url`],
          imgSrc: t[`sector_0${j}_img_src`],
          imgAlt: t[`sector_0${j}_img_alt`],
          label1: t[`sector_0${j}_statement_intro_01`],
          label2: t[`sector_0${j}_statement_01`],
          label3: t[`sector_0${j}_statement_02`],
          label4: t[`sector_0${j}_statement_03`],
          highlight1: t[`sector_0${j}_value_01`],
          highlight2: t[`sector_0${j}_value_02`],
          highlight3: t[`sector_0${j}_value_03`],
          modalAriaLabel: t[`sector_0${j}_modal_aria_label`],
          videoSrc: t[`sector_0${j}_video_url`]
        })
      }
    }
  }
  return arr
}

const getCountryData = (mapData, programData) => {
  return mapData
    .filter((n) => n['LEVEL'] === 'countries')
    .map((item) => {
      return {
        ...item,
        country_code: COUNTRY_NAMES[item['NAME']]
          ? COUNTRY_NAMES[item['NAME']]
          : 'undefined',
        programs: programData.filter(
          (program) => program['COUNTRY'] === item['NAME']
        )
      }
    })
}

const getProgramData = (mapData) => {
  return mapData.filter((n) => n['LEVEL'] === 'programs')
}
