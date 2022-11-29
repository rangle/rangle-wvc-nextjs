import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Hero.module.scss'

const variants = {
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
}

const TextLoop = ({ list }) => {
  if (!list || !list.length) {
    return
  }

  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1
      if (next === list.length) {
        next = 0
      }
      setIndex(next)
    }, 2500)
  }, [index, setIndex])

  return (
    <AnimatePresence>
      <motion.h1
        style={{ position: 'absolute' }}
        className={styles['hero-title']}
        variants={variants}
        key={index}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          y: { type: 'spring', stiffness: 300, damping: 200 },
          opacity: { duration: 1.5 },
          duration: 2
        }}
      >
        {list[index]}
      </motion.h1>
    </AnimatePresence>
  )
}

export default TextLoop
