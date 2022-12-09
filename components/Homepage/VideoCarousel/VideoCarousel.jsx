import dynamic from 'next/dynamic'
import Video from '../../Video/Video'
import styles from './VideoCarousel.module.scss'

// The carousel is imported without SSR to ensure the id of the carousel matches on both client & server
const HomepageCarouselNoSSR = dynamic(
  () => import('../../HomepageCarousel/HomepageCarousel'),
  {
    ssr: false
  }
)

const VideoCarousel = ({ videos }) => {
  const cards = videos.map((video) => (
    <div className={styles['video-container']}>
      <Video key={video.src} backgroundImage={video.img} src={video.src} />
    </div>
    
  ))

  return (
    <div className={styles['video-carousel']}>
      {cards && cards.length && (
        <div className={styles['slide-container']}>
          <HomepageCarouselNoSSR cards={cards} />
        </div>
      )}

      <div
        className={styles['background-img-container']}
        style={{
          backgroundImage: `url('/homepage/videoCarousel/video-gradient.png')`
        }}
      />
    </div>
  )
}

export default VideoCarousel
