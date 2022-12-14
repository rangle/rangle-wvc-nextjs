import parse from 'html-react-parser'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { useInView, AnimatePresence, motion } from 'framer-motion'

import Counter from '../components/Homepage/Counter/Counter'
import Hero from '../components/Homepage/Hero/Hero'
import SectorOverview from '../components/Homepage/SectorOverview/SectorOverview'
import RollingCredits from '../components/Homepage/RollingCredits/RollingCredits'
import VideoCarousel from '../components/Homepage/VideoCarousel/VideoCarousel'
import StickyCarousel from '../components/Homepage/StickyCarousel/StickyCarousel'
import styles from './Home.module.scss'
import { COUNTRY_NAMES } from '../components/MapChart/MapConstants'
import RollingCreditsMap from '../components/Homepage/RollingCreditsMap/RollingCreditsMap'
import Prefooter from '../components/Homepage/Prefooter/Prefooter'
import Table from '../components/Homepage/Table/Table'
import MapChartHeader from '../components/MapChart/MapChartHeader/MapChartHeader'
import { getScreenWidth } from '../utils/getScreenWidth'

const featureCardData = (t, max) =>
  Array.from(Array(max).keys(), (_, index) => ({
    title: t[`did_know_title_0${index + 1}`],
    description: t[`did_know_body_0${index + 1}`],
    imgSrc: t[`did_know_image_url_0${index + 1}`],
    imgAlt: t[`did_know_image_alt_0${index + 1}`]
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

const HeroBackgroundDefault = '/homepage/hero/hero-background.jpg'

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
  chartData,
  tableData
}) {
  const pageRef = useRef(null)
  const lightSectionRef = useRef(null)
  const heroSectionRef = useRef(null)
  const reachSectionRef = useRef(null)
  const mapSectionRef = useRef(null)
  const sectorSectionRef = useRef(null)
  const rollingCreditSectionRef = useRef(null)
  const mapOverlayRef = useRef(null)
  const mapTextSectionRef = useRef(null)
  const mapSpacerRef = useRef(null)
  const isMapSpacerInView = useInView(mapSpacerRef, { amount: 0 })
  const isPageInView = useInView(pageRef, { amount: 0 })
  const isLightSectionInView = useInView(lightSectionRef, { amount: 0 })
  const isHeroSectionInView = useInView(heroSectionRef, { amount: 0 })
  const isReachSectionInView = useInView(reachSectionRef, { amount: 0 })
  const isMapSectionInView = useInView(mapSectionRef, { amount: 0 })
  const isSectorSectionInView = useInView(sectorSectionRef, { amount: 0 })
  const isRollingCreditSectionInView = useInView(rollingCreditSectionRef, {
    amount: 0
  })
  const isMapOverlayInView = useInView(mapOverlayRef, { amount: 0 })
  const isMapTextInView = useInView(mapTextSectionRef, { amount: 0.2 })

  const screenWidth = getScreenWidth()
  const [isDesktop, setIsDesktop] = useState()

  useEffect(() => {
    if (screenWidth > 1023) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [screenWidth])

  const getBackgroundColor = () => {
    if (isLightSectionInView || !isPageInView) {
      return '#fffbf4'
    }

    if (isRollingCreditSectionInView) {
      return 'rgba(0, 0, 0, 0.45)'
    }

    return '#333333'
  }

  const getBackgroundImage = () => {
    if (isHeroSectionInView) {
      return HeroBackgroundDefault
    }

    if (isRollingCreditSectionInView) {
      return '/homepage/rollingCredits/rolling-credits-background.jpg'
    }

    if (isMapTextInView && !isDesktop) {
      return 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/our-work-images/Community-development-facilitator-Doris.jpg'
    }
  }

  return (
    <div
      ref={pageRef}
      className={styles.container}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <main className={styles.main}>
        <div className={styles['background-image-container']}>
          <div
            style={{
              backgroundColor:
                isRollingCreditSectionInView || isMapSectionInView
                  ? `rgba(0, 0, 0, 0.45)`
                  : 'transparent'
            }}
            className={styles['background-overlay']}
          ></div>
          <AnimatePresence>
            {!isReachSectionInView &&
              (isHeroSectionInView ||
                (isRollingCreditSectionInView && !isSectorSectionInView) ||
                isMapTextInView) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={getBackgroundImage()}
                    alt=''
                    className={styles['background-image']}
                    fill
                    priority
                    objectFit='cover'
                  />
                </motion.div>
              )}
          </AnimatePresence>
        </div>
        <div ref={lightSectionRef}>
          <section
            ref={heroSectionRef}
            style={{ opacity: !isReachSectionInView ? 1 : 0 }}
            className={`${styles['section']} ${styles['section--hero']}`}
          >
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
            ref={reachSectionRef}
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
        </div>
        <section
          ref={mapSectionRef}
          className={`${styles['section']} ${styles['section--map']}`}
        >
          <div ref={mapTextSectionRef}>
            <RollingCreditsMap
              imageSrc={t.map_background_01_url}
              mapCreditsData={[t.map_text_01]}
            />
            <RollingCreditsMap
              imageSrc={t.map_background_02_url}
              mapCreditsData={[t.map_text_02]}
            />
          </div>

          <div ref={mapOverlayRef} className={styles['map-overlay']} />
          <div
            className={styles['map']}
            style={{
              opacity: isMapSectionInView ? 1 : 0,
              pointerEvents:
                isMapOverlayInView && !isMapTextInView && !isMapSpacerInView
                  ? 'auto'
                  : 'none'
            }}
          >
            <MapChartHeader
              showHeaderControls={
                isDesktop
                  ? isMapOverlayInView && !isMapTextInView && !isMapSpacerInView
                  : true
              }
              showMarkers={
                isDesktop
                  ? isMapOverlayInView && !isMapTextInView && !isMapSpacerInView
                  : true
              }
              labels={{
                legend: t.map_title,
                country: t.map_country_label,
                program: t.map_program_type_label,
                year: 'year',
                people: t.map_people_label,
                invested: t.map_invested_label,
                programs: t.map_program_label,
                reach_tooltip: t.reach_tooltip,
                investment_tooltip: t.investment_tooltip,
                programs_tooltip: t.programs_tooltip
              }}
              programData={programData}
              countryData={countryData}
            />
          </div>
          <div ref={mapSpacerRef} className={styles['map-spacer']} />
        </section>
        <section
          ref={sectorSectionRef}
          className={`${styles['section']} ${styles['section--sector-overview']}`}
        >
          <SectorOverview
            sectorData={chartData}
            sectorHighlights={sectorHighlights(t)}
            text1={t.sectors_text_01}
            text2={t.sectors_text_02}
          />
        </section>
        <section
          ref={rollingCreditSectionRef}
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
            title={t.learning_title}
            subtitle={t.learning_subtitle}
            mediaBlockTitle={
              "As we partner with communities, we're focused on creating real impact."
            }
            mediaBlockSrc={t.learning_video}
            reportCardData={[
              {
                title: 'Report',
                url: t.report_button_url,
                imageSrc: t.report_image_url,
                alt: t.report_image_alt,
                key: 1
              },
              {
                title: 'Report',
                url: t.strategy_button_url,
                imageSrc: t.strategy_image_url,
                alt: t.strategy_image_alt,
                key: 2
              }
            ]}
            accordionItems={[
              {
                title: t.accordion_title_01,
                children: parse(t.accordion_body_01)
              },
              {
                title: t.accordion_title_02,
                children: (
                  <div>
                    {parse(t.accordion_body_02)}
                    <Table data={tableData} />
                  </div>
                )
              },
              {
                title: t.accordion_title_03,
                children: parse(t.accordion_body_03)
              }
            ]}
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
    sqlText: `select * from AREAS_OF_FOCUS order by NAVIGATION_ORDER`
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

  const tableData = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'main_page'
    and DATA_PANEL = 'financial_table'`
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
      tableData: tableData.rows,
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
    '/homepage/stickyCarousel/option-kid-1.png'
  obj.highlight_mid_02_image_url =
    obj.highlight_mid_02_image_url ||
    '/homepage/stickyCarousel/option-kid-2.png'
  obj.highlight_mid_03_image_url =
    obj.highlight_mid_03_image_url ||
    '/homepage/stickyCarousel/option-kid-3.png'
  obj.highlight_mid_background_image_url =
    obj.highlight_mid_background_image_url ||
    '/homepage/stickyCarousel/background-option.png'
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
  obj.sector_01_img_src =
    obj.sector_01_img_src || '/homepage/modal/livelihoods.jpg'
  obj.sector_02_img_src = obj.sector_02_img_src || '/homepage/modal/Health.jpg'
  obj.sector_03_img_src =
    obj.sector_03_img_src || '/homepage/modal/Education.jpg'
  obj.sector_04_img_src =
    obj.sector_04_img_src || '/homepage/modal/childprotection.jpg'
  obj.sector_05_img_src = obj.sector_05_img_src || '/homepage/modal/WASH.jpg'
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
    .filter((n) => n.LEVEL === 'countries' || n.LEVEL === 'ALL')
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
