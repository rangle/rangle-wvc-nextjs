import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import styles from './StickyCarousel.module.scss'

const fadeIn = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  initial: ['hidden'],
  whileInView: ['visible'],
  exit: ['hidden'],
  viewport: { amount: 0.4 },
  transition: { type: 'spring', duration: 0.4, bounce: 0 }
}

const slideIn = {
  variants: {
    enter: {
      y: 30,
      opacity: 0,
      duration: 1.5
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: {
      zIndex: 1,
      opacity: 0
    }
  },
  initial: ['enter'],
  animate: ['center'],
  exit: ['exit'],
  transition: {
    type: 'spring',
    duration: 0.1
  }
}

const StickyCarousel = ({ backgroundImage, content, pretext, subtext }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll()
  const ref = useRef(null)

  const middleSection = (end - start) / 3

  scrollYProgress.onChange((y) => {
    if (y > start + 2 * middleSection) {
      setIndex(2)
    } else if (y > start + middleSection) {
      setIndex(1)
    } else {
      setIndex(0)
    }
  })

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop - window.innerHeight

    const documentHeight = document.body.clientHeight - window.innerHeight

    setStart(offsetTop / documentHeight)
    setEnd((offsetTop + window.innerHeight + rect.height) / documentHeight)
  }, [ref])

  return (
    <AnimatePresence>
      <div ref={ref} className={styles['container']}>
        <div className={styles['sticky-wrapper']}>
          <motion.div
            {...slideIn}
            className={styles['rolling-text']}
            key={index}
          >
            <div className={styles['hidden-desktop']}>
              <p className={styles['pretext']}>{pretext}</p>
              <motion.h3 {...fadeIn}>{content[index].text}</motion.h3>
            </div>
            <div className={styles['image-container']}>
              <motion.img {...fadeIn} src={content[index].image} />
            </div>
            <div className={styles['hidden-mobile']}>
              <p className={styles['pretext']}>{pretext}</p>
              <motion.h3 {...fadeIn}>{content[index].text}</motion.h3>
            </div>
            <p className={styles['subtext']}>{subtext}</p>
          </motion.div>
          <motion.img
            {...fadeIn}
            className={styles['background-image']}
            src={backgroundImage}
          />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StickyCarousel
