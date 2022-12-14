import { Chrono } from 'react-chrono'
import styles from './Timeline.module.scss'
import { getScreenWidth } from '../../utils/getScreenWidth'

export const Timeline = ({ data, isMobile }) => {
  const screenWidth = getScreenWidth()
  const smallScreen = isMobile || screenWidth < 768

  return (
    <div className={styles['timeline-container']}>
      <Chrono
        mode={smallScreen ? 'VERTICAL' : 'HORIZONTAL'}
        items={data.map((item) => ({
          ...item,
          cardSubtitle: item.title
        }))}
        showAllCardsHorizontal
        theme={{
          primary: '#E7600C'
        }}
        hideControls={smallScreen}
        cardHeight={160}
      >
        <div className='chrono-icons'>
          {data.map((ea) => (
            <img
              key={ea.title}
              src={'/filledCircleDot.svg'}
              alt={`Marker for ${ea.title}`}
            />
          ))}
        </div>
      </Chrono>
    </div>
  )
}
