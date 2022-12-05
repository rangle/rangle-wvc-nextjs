import { useState } from 'react'
import { HomepageDoughnutChart } from '../../Charts/HomepageDoughnut/HomepageDoughnut'
import ContentModal from '../../ContentModal/ContentModal'
import Tooltip from '../../Tooltip/Tooltip'
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
    </div>
  )
}

export default SectorOverview
