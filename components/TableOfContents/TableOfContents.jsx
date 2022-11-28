import styles from './TableOfContents.module.scss'
import Button from '../Button/Button'
import React, { useEffect, useState, useRef } from 'react'
import { getScreenWidth } from '../../utils/getScreenWidth'

export const TableOfContents = ({ toc, isMobile }) => {
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const screenWidth = getScreenWidth()

  const [isExpanded, setIsExpanded] = useState(false)
  const [smallScreen, setSmallScreen] = useState(isMobile || screenWidth < 768)

  useEffect(() => {

    const checkIfClickedOutside = (e) => {
        // if the button is clicked
        if (!!buttonRef.current && buttonRef.current.contains(e.target)) {
            setIsExpanded(!isExpanded)
        }
        // if you click outside the menu, close the toc menu
        if (!!menuRef.current && !menuRef.current.contains(e.target)) {
            setIsExpanded(false)
        }
    }

    document.addEventListener('click', checkIfClickedOutside)

    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [isExpanded])


  useEffect(() => {
    if (screenWidth < 768) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }, [screenWidth])

  return (
    <div
      className={[
        styles['table-of-contents-container'],
        smallScreen ? styles['small-screen'] : ''
      ].join(' ')}
    >
      {!(smallScreen && isExpanded) && (
        <Button
          innerRef={buttonRef}
          label='Jump to'
          buttonType='secondary'
        />
      )}

      {isExpanded && (
        <div className={styles['table-of-contents']}>
          <ul ref={menuRef}>
            {toc.map((item) => (
              <div
                key={item.id}
                className={styles['table-of-contents__list-item']}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </div>
            ))}
          </ul>
          <div className={styles['cta-btn']}>
            <Button label='Donate' />
          </div>
        </div>
      )}
    </div>
  )
}
