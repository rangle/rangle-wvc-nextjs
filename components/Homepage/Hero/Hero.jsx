import { motion, useScroll, useTransform } from 'framer-motion'
import TextLoop from './TextLoop'
import styles from './Hero.module.scss'
import CtaLink from '../../CtaLink/CtaLink'

const Hero = ({
  backgroundImage,
  heroText,
  highlightList,
  linkLabel,
  subtitleText,
  url
}) => {
  const { scrollYProgress } = useScroll()
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 8])
  const x1 = useTransform(scrollYProgress, [0, 0.1], [70, -700])
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const scale2 = useTransform(scrollYProgress, [0, 0.2], [1, 6])
  const x2 = useTransform(scrollYProgress, [0, 0.2], [70, 1200])
  const opacity2 = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <div
      className={styles['hero-wrapper']}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles['hero-floating-images']}>
        <motion.img
          src='/homepage/hero/hero-kid-default-left.png'
          className={styles['hero-image1']}
          style={{
            scale: scale1,
            x: x1,
            opacity: opacity1
          }}
        />
        <motion.img
          src='/homepage/hero/hero-kid-default-right.png'
          className={styles['hero-image2']}
          style={{
            scale: scale2,
            x: x2,
            opacity: opacity2
          }}
        />
      </div>
      <div className={styles['hero-content-container']}>
        <p className={styles['hero-text']}>{heroText}</p>
        <div className={styles['looped-list']}>
          <TextLoop list={highlightList} />
        </div>
        <div className={styles['centered-column']}>
          <div
            className={`${styles['centered-column']} ${styles['subtitle-container']}`}
          >
            <p className={styles['hero-text']}>{subtitleText}</p>
            <CtaLink className={styles['hero-text']} url={url}>
              {linkLabel}
            </CtaLink>
          </div>
          <div className={styles['desktop-scroll-icon']} aria-hidden>
            <div className={styles['mouse']}>
              <div className={styles['scroller']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
