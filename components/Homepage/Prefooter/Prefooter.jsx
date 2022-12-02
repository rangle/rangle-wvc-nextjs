import styles from './Prefooter.module.scss'
import MediaBlock from '../../MediaBlock/MediaBlock'
import AccordionGroup from '../../AccordionGroup/AccordionGroup'
import AccordionItem from '../../AccordionItem/AccordionItem'

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

const Prefooter = () => {
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
      <div className={styles['prefooter-content']}>
        <AccordionGroup items={sampleItems} isDarkMode />
      </div>
    </div>
  )
}

export default Prefooter
