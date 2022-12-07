import styles from './Counter.module.scss'

import { animate, useInView } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'
import { femaleSymbol, maleSymbol } from './symbols'

export const CounterUtil = ({ total }) => {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef)

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(0, total, {
      duration: 1,
      delay: 0.5,
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

const Counter = ({
  introLine1,
  introLine2,
  animatedTotal,
  totalDescriptor,
  detailDescriptor1,
  detailDescriptor2,
  detailValue1,
  detailValue2
}) => {
  return (
    <div className={styles['counter']}>
      <div>
        <div className={styles['counter__intro']}>
          <p>
            <span className={styles['counter__intro-text']}>{introLine1}</span>
            <span className={styles['counter__intro-text']}>{introLine2}</span>
            <span className={styles['counter__total']}>
              <CounterUtil total={animatedTotal} />
            </span>
            <span className={styles['counter__total-descriptor']}>
              {totalDescriptor}
            </span>
          </p>
        </div>
        <div className={styles['counter__details']}>
          <div>
            <div>{femaleSymbol}</div>
            <p>
              <span>{detailValue1}</span> {detailDescriptor1}
            </p>
          </div>
          <div>
            <div>{maleSymbol}</div>
            <p>
              <span>{detailValue2}</span> {detailDescriptor2}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
