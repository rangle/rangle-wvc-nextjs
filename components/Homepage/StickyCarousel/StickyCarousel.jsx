import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import styles from './StickyCarousel.module.scss'

const content = [
  {
    image: '/homepage/stickyCarousel/default-kid-1.png',
    text: 'Talent',
    subtext: 'ghaosne;rgubw'
  },
  {
    image: '/homepage/stickyCarousel/default-kid-2.png',
    text: 'Intelligence',
    subtext: 'qlubqerug;qureg'
  },
  {
    image: '/homepage/stickyCarousel/default-kid-3.png',
    text: 'Spirit',
    subtext: 'oppwrubpwuwbpu'
  }
]

const fadeIn = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  initial: ['hidden'],
  whileInView: ['visible'],
  exit: ['hidden'],
  viewport: { amount: 0.4 },
  transition: { type: 'spring', duration: 1.5, bounce: 0 }
}

const slideIn = {
  variants: {
    enter: {
      y: 30,
      opacity: 0
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
    duration: 2
  }
}

const StickyCarousel = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const middleSection = (end - start) / 3
  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const { scrollYProgress } = useScroll()

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
      <div
        ref={ref}
        className={styles['container']}
        style={{ height: '400vh' }}
      >
        <div className={styles['sticky-wrapper']}>
          <motion.div
            {...slideIn}
            style={{ position: 'absolute' }}
            className={styles['rolling-text']}
            key={index}
          >
            <motion.img
              {...fadeIn}
              style={{ display: 'block', margin: 'auto', width: '30%' }}
              src={content[index].image}
            />
            <motion.h1 {...fadeIn} style={{ display: 'block', margin: 'auto' }}>
              {content[index].text}
            </motion.h1>
            <motion.p
              {...fadeIn}
              style={{ margin: 'auto', textAlign: 'center' }}
            >
              {content[index].subtext}
            </motion.p>
          </motion.div>
          <motion.img
            {...fadeIn}
            style={{ width: '50%', margin: '4px auto' }}
            src='https://i.pinimg.com/474x/30/cf/21/30cf21f2a0005d74b9595c92292a3540.jpg'
          />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StickyCarousel
