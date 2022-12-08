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
    title: 'Meet our partners',
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id,
        quia odit soluta nemo quisquam modi! Reprehenderit dolore enim
        temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam
        quod aut assumenda iste est eius aliquid perspiciatis laborum nisi
        ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis
        asperiores quisquam.
      </p>
    )
  },
  {
    title: 'Review our financials',
    children: (
      <Table
        introText={`World Vision Canada is committed to wisely stewarding the resources at our disposal. These resources are not our own—they’ve been entrusted to us from God through our partners and donors, and we are responsible for managing them in a way that brings maximum benefit for the people we serve. Inviting accountability through financial transparency is an important part of our stewardship. We follow best practices by sharing our financial statements and donation breakdowns below. For external reviews of World Vision, visit Imagine Canada, Charity Intelligence Canada and the Canadian Centre for Christian Charities.`}
      />
    )
  },
  {
    title: 'View our reports',
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id,
        quia odit soluta nemo quisquam modi! Reprehenderit dolore enim
        temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam
        quod aut assumenda iste est eius aliquid perspiciatis laborum nisi
        ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis
        asperiores quisquam.
      </p>
    )
  }
]

// Data provided by Monique
const hardcodedMediaCards = [
  {
    title: 'COVID-19',
    body: 'How the pandemic is changing the way we teach our Youth Ready curriculum',
    labels: ['Paper'],
    url: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/World-Vision-Canada-Annual-Results-Report-FY2021-LEARNING.pdf	',
    iconSrc: '/homepage/prefooter/Lessons-Learned-icon.jpg',
    alt: 'Lessons Learned icon'
  },
  {
    title: 'Gender Equality',
    body: 'Five key pillars for effective programming.',
    labels: ['Paper'],
    url: 'https://worldvision.ca/',
    iconSrc: '/homepage/prefooter/Lessons-Learned-icon.jpg',
    alt: 'Lessons Learned icon'
  },
  {
    title: 'Data Challenges',
    body: 'Lessons learned with sex-disaggregation.',
    labels: ['Paper'],
    url: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/World-Vision-Canada-Annual-Results-Report-FY2021-LEARNING.pdf	',
    iconSrc: '/homepage/prefooter/Lessons-Learned-icon.jpg',
    alt: 'Lessons Learned icon'
  },
  {
    title: 'Impact Measurement',
    body: 'What we’ve learned through World Vision’s Agile transformation.',
    labels: ['Paper'],
    url: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/World-Vision-Canada-Annual-Results-Report-FY2021-LEARNING.pdf',
    iconSrc: '/homepage/prefooter/Lessons-Learned-icon.jpg',
    alt: 'Lessons Learned icon'
  }
]

const Prefooter = ({
  accordionItems = sampleAccordionItems,
  mediaBlockBackground,
  mediaBlockSrc,
  mediaBlockTitle,
  mediaCardData = hardcodedMediaCards,
  reportCardData,
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
      key={card.title}
      title={card.title}
      url={card.url}
      imageSrc={card.imageSrc}
      alt={card.alt}
    />
  ))
  return (
    <div className={styles['prefooter']}>
      {mediaBlockSrc && (
        <MediaBlock
          title={mediaBlockTitle}
          videoSrc={mediaBlockSrc}
          videoBackgroundImage={mediaBlockBackground}
        />
      )}
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
