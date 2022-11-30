import styles from './TableOfContents.module.scss'
import Button from '../Button/Button'
import React, { useEffect, useState, useRef } from 'react'
import { getScreenWidth } from '../../utils/getScreenWidth'
import { convertToKebabCase } from '../../utils/convertStrings'

export const TableOfContents = ({ contents, isMobile, ctaText }) => {
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
      // if you click outside the expanded menu, close the menu
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
    setSmallScreen(screenWidth < 768)
  }, [screenWidth])

  return (
    <div className={styles['table-of-contents-container']}>
      {!(smallScreen && isExpanded) && (
        <Button innerRef={buttonRef} label='Jump to' buttonType='secondary' />
      )}

      {isExpanded && (
        <div className={styles['table-of-contents']}>
          <ul ref={menuRef}>
            {contents.map((item) => (
              <div
                key={convertToKebabCase(item)}
                className={styles['table-of-contents__list-item']}
              >
                <a href={`#${convertToKebabCase(item)}`}>{item}</a>
              </div>
            ))}
          </ul>
          <div className={styles['cta-btn']}>
            <Button label={ctaText} />
          </div>
        </div>
      )}
    </div>
  )
}
