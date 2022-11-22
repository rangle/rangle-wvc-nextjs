import { Chrono } from 'react-chrono'
import { useEffect, useState } from 'react'
import styles from './Timeline.module.scss'
// import filledCircleDot from '../../public/filledCircleDot.svg'

export const Timeline = ({ data, isMobile }) => {
  const [smallScreen, setSmallScreen] = useState(
    isMobile || window.innerWidth < 768
  )

  function handleWindowSizeChange() {
    setSmallScreen(window.innerWidth < 768 || isMobile)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])


  return (
    <div className={styles['timeline-container']}>
      <Chrono
        mode={smallScreen ? 'VERTICAL' : 'HORIZONTAL'}
        items={
          smallScreen
            ? data.map((ea) => ({
                ...ea,
                title: '',
                cardSubtitle: ea.title
              }))
            : data
        }
        showAllCardsHorizontal
        theme={{
          primary: '#E7600C'
        }}
        hideControls={smallScreen}
      >
        <div className='chrono-icons'>
          {data.map((ea) => (
            <img key={ea.title} src={'/filledCircleDot.svg'} alt={`Marker for ${ea.title}`} />
          ))}
        </div>
      </Chrono>
    </div>
  )
}
