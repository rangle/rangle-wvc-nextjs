import styles from './TableOfContents.module.scss'
import Button from '../Button/Button'
import React, { useEffect, useState, useRef } from 'react'
import { getScreenWidth } from '../../utils/getScreenWidth'
import { convertToKebabCase } from '../../utils/convertStrings'

const exitIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none'>
    <path
      fill='#333'
      d='M2.3 19.1.9 17.7 8.6 10 .9 2.3 2.3.9 10 8.6 17.7.9l1.4 1.4-7.7 7.7 7.7 7.7-1.4 1.4-7.7-7.7-7.7 7.7Z'
    />
  </svg>
)

export const TableOfContents = ({ contents, isMobile, ctaUrl, ctaText }) => {
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

  const closeModal = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (smallScreen) {
      if (isExpanded) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isExpanded])

  return (
    <div
      style={isExpanded ? { zIndex: '9999' } : { zIndex: '100' }}
      className={styles['table-of-contents-container']}
    >
      <Button innerRef={buttonRef} label='Jump to' buttonType='secondary' />

      {isExpanded && (
        <div
          className={styles['table-of-contents']}
          style={smallScreen ? { top: '0' } : { top: '' }}
          ref={menuRef}
        >
          <div className={styles['table-of-contents__content-container']}>
            <div className={styles['table-of-contents__exit-button-container']}>
              <button
                onClick={closeModal}
                className={styles['table-of-contents__exit-button']}
              >
                {exitIcon}
              </button>
            </div>
            <ul>
              {contents.map((item) => (
                <li
                  key={convertToKebabCase(item)}
                  className={styles['table-of-contents__list-item']}
                >
                  <a onClick={closeModal} href={`#${convertToKebabCase(item)}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['cta-btn']}>
            <Button url={ctaUrl} label={ctaText} />
          </div>
        </div>
      )}
    </div>
  )
}
