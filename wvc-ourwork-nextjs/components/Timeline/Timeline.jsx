import { Chrono } from 'react-chrono'
import { useEffect, useState } from 'react'
import './Timeline.scss'
import filledCircleDot from '../../assets/icons/filledCircleDot.svg'

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
    <div className='timeline-container'>
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
            <img key={ea.title} src={filledCircleDot} alt='circle-dot' />
          ))}
        </div>
      </Chrono>
    </div>
  )
}
