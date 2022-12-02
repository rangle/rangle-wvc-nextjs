import dynamic from 'next/dynamic'
import styles from './Prefooter.module.scss'
import MediaBlock from '../../MediaBlock/MediaBlock'
import AccordionGroup from '../../AccordionGroup/AccordionGroup'
import Carousel from '../../Carousel/Carousel'
import MediaCard from '../../MediaCard/MediaCard'
import ReportCardGrid from '../../ReportCardGrid/ReportCardGrid'
import ReportCard from '../../ReportCard/ReportCard'

// The carousel is imported without SSR to ensure the id of the carousel matches on both client & server
const CarouselNoSSR = dynamic(() => import('../../Carousel/Carousel'), {
  ssr: false
})

const sampleItems = [
  {
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id,
        quia odit soluta nemo quisquam modi! Reprehenderit dolore enim
        temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam
        quod aut assumenda iste est eius aliquid perspiciatis laborum nisi
        ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis
        asperiores quisquam.
      </p>
    ),
    title: 'Meet our partners'
  },
  {
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id,
        quia odit soluta nemo quisquam modi! Reprehenderit dolore enim
        temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam
        quod aut assumenda iste est eius aliquid perspiciatis laborum nisi
        ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis
        asperiores quisquam.
      </p>
    ),
    title: 'Review our financials'
  },
  {
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id,
        quia odit soluta nemo quisquam modi! Reprehenderit dolore enim
        temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam
        quod aut assumenda iste est eius aliquid perspiciatis laborum nisi
        ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis
        asperiores quisquam.
      </p>
    ),
    title: 'View our reports'
  }
]

const sampleMediaCards = [
  {
    title: 'COVID-19',
    body: 'How the pandemic is changing the way we teach our youth ready curriculum',
    labels: ['Paper'],
    url: 'https://worldvision.ca/',
    iconSrc: '/conference.svg',
    alt: 'sample alt text'
  },
  {
    title: 'Gender Equality',
    body: 'Five key pillars for effective programming.',
    labels: ['Paper'],
    url: 'https://worldvision.ca/',
    iconSrc: '/conference.svg',
    alt: 'sample alt text'
  },
  {
    title: 'Data Challenges',
    body: 'Lessons learned with sex-disaggregation.',
    labels: ['Paper'],
    url: 'https://worldvision.ca/',
    iconSrc: '/conference.svg',
    alt: 'sample alt text'
  },
  {
    title: 'Impact Measurement',
    body: 'What we’ve learned through World Vision’s Agile transformation.',
    labels: ['Paper'],
    url: 'https://worldvision.ca/',
    iconSrc: '/conference.svg',
    alt: 'sample alt text'
  }
]

const sampleReportCards = [
  {
    title: 'Report',
    url: 'https://worldvision.ca/',
    imageSrc:
      'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
    alt: 'My image alt text.'
  },
  {
    title: 'Report',
    url: 'https://worldvision.ca/',
    imageSrc:
      'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
    alt: 'My image alt text.'
  }
]

const Prefooter = ({
  cards = sampleMediaCards,
  reportCardData = sampleReportCards
}) => {
  const caseStudyCards = cards.map((card) => (
    <MediaCard
      key={card.title}
      title={card.title}
      body={card.body}
      labels={card.labels}
      url={card.url}
      iconSrc={card.iconSrc}
      alt={card.alt}
    />
  ))

  // must use index as key as all other props may be the same on multiple cards
  const reportCards = reportCardData.map((card, i) => (
    <ReportCard
      key={i}
      title={card.title}
      url={card.url}
      imageSrc={card.imageSrc}
      alt={card.alt}
    />
  ))
  return (
    <div className={styles['prefooter']}>
      <div>
        <img
          src={'./homepage/prefooter/background.png'}
          alt=''
          aria-hidden
          className={styles['prefooter-background']}
        />
      </div>
      <MediaBlock
        title={
          'As we partner with communities, we’re focused on creating real impact.'
        }
        videoSrc={'https://www.youtube.com/watch?v=RYTFzGkb-5A'}
        videoBackgroundImage={
          'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
        }
      />
      <div className={styles['prefooter-content']}>
        <h2 className={styles['prefooter-carousel-title']}>
          Commitment to learning, and sharing what we’ve learned, keep us
          accountable.
        </h2>
        <p className={styles['prefooter-carousel-subtitle']}>
          Four case studies of wisdom gained in 2021:
        </p>
      </div>
      {caseStudyCards && caseStudyCards.length && (
        <div className={styles['carousel-container']}>
          <CarouselNoSSR cards={caseStudyCards} controlsTheme={'light'} />
        </div>
      )}
      <div
        className={`${styles['prefooter-content']} ${styles['prefooter-accordion']}`}
      >
        <AccordionGroup items={sampleItems} isDarkMode />
      </div>
      <div
        className={`${styles['prefooter-content']} ${styles['prefooter-report-cards']}`}
      >
        <ReportCardGrid cards={reportCards} />
      </div>
    </div>
  )
}

export default Prefooter
