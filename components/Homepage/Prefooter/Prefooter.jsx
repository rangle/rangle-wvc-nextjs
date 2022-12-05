import dynamic from 'next/dynamic'
import styles from './Prefooter.module.scss'
import MediaBlock from '../../MediaBlock/MediaBlock'
import AccordionGroup from '../../AccordionGroup/AccordionGroup'
import MediaCard from '../../MediaCard/MediaCard'
import ReportCardGrid from '../../ReportCardGrid/ReportCardGrid'
import ReportCard from '../../ReportCard/ReportCard'
import Table from '../Table/Table'

// The carousel is imported without SSR to ensure the id of the carousel matches on both client & server
const CarouselNoSSR = dynamic(() => import('../../Carousel/Carousel'), {
  ssr: false
})

const sampleAccordionItems = [
  {
    children: (
      <Table
        introText={`World Vision Canada is committed to wisely stewarding the resources at our disposal. These resources are not our own—they’ve been entrusted to us from God through our partners and donors, and we are responsible for managing them in a way that brings maximum benefit for the people we serve. Inviting accountability through financial transparency is an important part of our stewardship. We follow best practices by sharing our financial statements and donation breakdowns below. For external reviews of World Vision, visit Imagine Canada, Charity Intelligence Canada and the Canadian Centre for Christian Charities.`}
      />
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
  accordionItems = sampleAccordionItems,
  mediaBlockBackground,
  mediaBlockSrc,
  mediaBlockTitle,
  mediaCardData = sampleMediaCards,
  reportCardData = sampleReportCards,
  subtitle,
  title
}) => {
  const caseStudyCards = mediaCardData.map((card) => (
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
        title={mediaBlockTitle}
        videoSrc={mediaBlockSrc}
        videoBackgroundImage={mediaBlockBackground}
      />
      <div className={styles['prefooter-content']}>
        <h2 className={styles['prefooter-carousel-title']}>{title}</h2>
        <p className={styles['prefooter-carousel-subtitle']}>{subtitle}</p>
      </div>
      {caseStudyCards && caseStudyCards.length && (
        <div className={styles['carousel-container']}>
          <CarouselNoSSR cards={caseStudyCards} controlsTheme={'light'} />
        </div>
      )}
      <div
        className={`${styles['prefooter-content']} ${styles['prefooter-accordion']}`}
      >
        <AccordionGroup items={accordionItems} isDarkMode />
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
