import { useState } from 'react'
import { HomepageDoughnutChart } from '../../Charts/HomepageDoughnut/HomepageDoughnut'
import ContentModal from '../../ContentModal/ContentModal'
import Tooltip from '../../Tooltip/Tooltip'
import { CounterUtil } from '../Counter/Counter'
import styles from './SectorOverview.module.scss'

const ChevronRight = () => {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.82258 6L0 1.48679L1.58871 0L8 6L1.58871 12L0 10.5132L4.82258 6Z'
        fill='white'
      />
    </svg>
  )
}

const HighlightData = [
  {
    name: 'Livelihoods',
    peopleReached: 4.1,
    invested: 226
  },
  {
    name: 'Health',
    peopleReached: 10.8,
    invested: 74
  },
  {
    name: 'Education',
    peopleReached: 1.4,
    invested: 42
  },
  {
    name: 'Child Protection & Participation',
    peopleReached: 1.7,
    invested: 35
  },
  {
    name: 'Water, Sanitation and Hygiene',
    peopleReached: 1.3,
    invested: 70
  },
  {
    name: 'Total',
    peopleReached: 18,
    invested: 384
  }
]

const SectorOverview = ({
  doughnutChartLabel = 'Doughnut chart for sector overview',
  sectorData,
  sectorHighlights,
  text1,
  text2
}) => {
  const colors = sectorData?.map((item) => item.color)
  const labels = sectorData?.map((item) => item.title)
  const data = sectorData?.map((item) => item.percentage)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalProps, setModalProps] = useState(undefined)

  const openModal = (itemName) => {
    const itemProps = sectorData.find((sector) => sector.title === itemName)
    setModalProps(itemProps)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalProps(undefined)
    setModalOpen(false)
  }

  const [peopleReached, setPeopleReached] = useState(18)
  const [invested, setInvested] = useState(384)

  // TODO: hook this up to the doughnut chart somehow
  const onChartHover = (itemName) => {
    const highlightInfo = HighlightData.find(
      (highlight) => highlight.name === itemName || highlight.name === 'Total'
    )
    setPeopleReached(highlightInfo.peopleReached)
    setInvested(highlightInfo.invested)
  }

  return (
    <div className={styles['sector-overview']}>
      <ContentModal
        modalIsOpen={modalOpen}
        closeModal={closeModal}
        {...modalProps}
      />
      <p className={styles['sector-overview-text']}>{text1}</p>
      <p className={styles['sector-overview-text']}>{text2}</p>
      <div className={styles['main-container']}>
        <div className={styles['chart-container']}>
          {sectorData && sectorData.length && (
            <HomepageDoughnutChart
              displayLegend={false}
              colors={colors}
              labels={labels}
              data={data}
              ariaLabel={doughnutChartLabel}
              openModal={openModal}
              onChartHover={onChartHover}
            />
          )}
        </div>
        <div className={styles['mobile-data-container']}>
          {sectorHighlights.slice(0, 2).map((highlight) => (
            <div key={highlight.value} className={styles['sector-highlight']}>
              <p className={styles['sector-highlight--value']}>
                {highlight.value}
              </p>
              <div className={styles['sector-highlight-title-row']}>
                <p className={styles['sector-highlight--title']}>
                  {highlight.title}
                </p>
                {highlight.tooltip && <Tooltip content={highlight.tooltip} />}
              </div>
            </div>
          ))}
        </div>
        <div className={styles['button-container']}>
          <ul>
            {sectorData.map((item) => (
              <li key={item.title}>
                <button onClick={() => openModal(item.title)}>
                  <div className={styles['button-content']}>
                    <div
                      className={styles['legend-color']}
                      style={{ backgroundColor: item.color }}
                    />
                    <p>
                      {item.title} {item.percentage * 100}%
                    </p>
                  </div>
                  <ChevronRight />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles['desktop-data-container']}>
        <div className={styles['sector-highlight']}>
          <p className={styles['sector-highlight--value']}>
            <CounterUtil total={peopleReached} /> million
          </p>
          <div className={styles['sector-highlight-title-row']}>
            <p className={styles['sector-highlight--title']}>people reached</p>
          </div>
        </div>
        <div className={styles['sector-highlight']}>
          <p className={styles['sector-highlight--value']}>
            $<CounterUtil total={invested} /> million
          </p>
          <div className={styles['sector-highlight-title-row']}>
            <p className={styles['sector-highlight--title']}>invested</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectorOverview
