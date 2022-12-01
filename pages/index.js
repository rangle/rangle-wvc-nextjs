import Head from 'next/head'

import Counter from '../components/Homepage/Counter/Counter'
import Hero from '../components/Homepage/Hero/Hero'
import RollingCredits from '../components/Homepage/RollingCredits/RollingCredits'
import VideoCarousel from '../components/Homepage/VideoCarousel/VideoCarousel'
import StickyCarousel from '../components/Homepage/StickyCarousel/StickyCarousel'
import styles from './Home.module.scss'

const videoData = [
  {
    img: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
    src: 'https://www.youtube.com/watch?v=RYTFzGkb-5A'
  },
  {
    img: 'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/wvc-homepage-supporting-banner-gift-impact-three-frames-chickens.jpg',
    src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
  },
  {
    img: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
    src: 'https://www.youtube.com/watch?v=RYTFzGkb-5A'
  }
]

const featureCardData = [
  {
    title: `Our Christian faith is an essential part of World Vision's holistic approach.`,
    description: `84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups.`,
    imgSrc:
      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg',
    imgAlt: 'sample alt text'
  },
  {
    title: `Our Christian faith is an essential part of World Vision's holistic approach.`,
    description: `84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups.`,
    imgSrc:
      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg',
    imgAlt: 'sample alt text'
  },
  {
    title: `Our Christian faith is an essential part of World Vision's holistic approach.`,
    description: `84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups.`,
    imgSrc:
      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg',
    imgAlt: 'sample alt text'
  }
]

const creditsData = [
  {
    pretext: 'In 2021, we invested',
    highlight: '43%',
    subtext:
      'of our program funding in the most fragile countries -- up from 34% in the previous year, as we shift our priority to helping the most vulnerable children'
  },
  {
    pretext: 'Responded to',
    highlight: '25 emergencies',
    subtext:
      'including fragile contexts, in 25 countries, reaching over 6.6 million people'
  },
  {
    pretext: 'Implemented over',
    highlight: '$70 million',
    subtext: 'in grant funding from government and institutional partners'
  }
]

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
          <StickyCarousel
            pretext={'In all their'}
            subtext={
              'along with the families, communities and structures that affect their lives'
            }
            backgroundImage={'/homepage/stickyCarousel/background-default.png'}
            content={[
              {
                image: '/homepage/stickyCarousel/default-kid-1.png',
                text: 'Talent'
              },
              {
                image: '/homepage/stickyCarousel/default-kid-2.png',
                text: 'Strength'
              },
              {
                image: '/homepage/stickyCarousel/default-kid-3.png',
                text: 'Spirit'
              }
            ]}
          />
        </section>
        <section
          className={`${styles['section']} ${styles['section--video-carousel']}`}
        >
          <VideoCarousel videos={videoData} />
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
          <RollingCredits
            title={'Did you know?'}
            credits={creditsData}
            imageSrc={'/homepage/rollingCredits/rolling-credits-background.jpg'}
            featureCardData={featureCardData}
          />
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
