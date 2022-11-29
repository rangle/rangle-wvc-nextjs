import Head from 'next/head'

import Counter from '../components/Homepage/Counter/Counter'
import Hero from '../components/HomepageComponents/Hero'
import styles from './Home.module.scss'

const HeroBackgroundDefault = '/homepage/hero/hero-background.png'

export default function Home() {
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
            heroText={'World Vision works alongside'}
            highlightList={[
              'communities',
              'supporters',
              'partners',
              'government'
            ]}
            linkLabel={'Download the 2021 Annual Results Report'}
            subtitleText={
              'to change the way the world works for children - impacting lives for generations to come.'
            }
            url={
              'https://www.worldvision.ca/WorldVisionCanada/media/annual-report-pdfs/World-Vision-Canada-Annual-Results-Report-FY2021-220509_AODA.pdf'
            }
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--counter']}`}
        >
          <Counter
            introLine1='In 2021'
            introLine2='we reached'
            animatedTotal={18}
            totalDescriptor='million people'
            detailValue1='2,250,000'
            detailDescriptor1='girls'
            detailValue2='2,250,000'
            detailDescriptor2='boys'
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--sticky-carousel']}`}
        >
          <h2>Sticky Carousel</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--video-carousel']}`}
        >
          <h2>Video Carousel</h2>
        </section>
        <section className={`${styles['section']} ${styles['section--map']}`}>
          <h2>Map</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--sector-overview']}`}
        >
          <h2>Sector Overview w modal</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--rolling-credits']}`}
        >
          <h2>Rolling Credits</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--did-you-know']}`}
        >
          <h2>Did you know carousel</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--pre-footer']}`}
        >
          <h2>Pre footer catchall</h2>
        </section>
      </main>
    </div>
  )
}
