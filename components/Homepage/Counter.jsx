import styles from './Counter.module.scss'

import { animate, useInView } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'

const femaleSymbol = (
  <svg
    aria-hidden={true}
    xmlns='http://www.w3.org/2000/svg'
    width='186'
    height='157'
    fill='none'
  >
    <circle
      cx='110.29'
      cy='75.131'
      r='45'
      stroke='#E7600C'
      stroke-width='20'
      transform='rotate(150 110.29 75.131)'
    />
    <path
      stroke='#E7600C'
      stroke-width='20'
      d='m5.5 135.632 63.22-36.5M16.078 87.956l36.5 63.22'
    />
  </svg>
)

const maleSymbol = (
  <svg
    aria-hidden={true}
    width='207'
    height='183'
    viewBox='0 0 207 183'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='75.1313'
      cy='107.693'
      r='45'
      transform='rotate(150 75.1313 107.693)'
      stroke='#E7600C'
      stroke-width='20'
    />
    <line
      x1='113.003'
      y1='87.3134'
      x2='150.003'
      y2='66.8134'
      stroke='#E7600C'
      stroke-width='20'
    />
    <path
      d='M180.65 50.2102L159 87.7102L137.349 50.2102L180.65 50.2102Z'
      fill='#E7600C'
    />
  </svg>
)

export const CounterUtil = ({ total }) => {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef)

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(0, total, {
      duration: 1.5,
      onUpdate(value) {
        if (isInView) {
          node.textContent = value.toFixed(0)
        } else {
          node.textContent = 0
        }
      }
    })

    return () => controls.stop()
  }, [isInView, total])

  return <span ref={nodeRef} />
}

const Counter = ({ total }) => {
  return (
    <div className={styles['counter']}>
      <div className={styles['counter__intro']}>
        <p>
          <span className={styles['counter__intro-text']}>In 2021</span>
          <span className={styles['counter__intro-text']}>we reached</span>
          <span className={styles['counter__total']}>
            <CounterUtil total={total} />
          </span>
          <span className={styles['counter__highlight']}>million people</span>
        </p>
      </div>
      <div className={styles['counter__details']}>
        <div>
          <div>{femaleSymbol}</div>
          <p>
            <span>2,250,000</span> girls
          </p>
        </div>
        <div>
          <div>{maleSymbol}</div>
          <p>
            <span>2,250,000</span> boys
          </p>
        </div>
      </div>
    </div>
  )
}

export default Counter
