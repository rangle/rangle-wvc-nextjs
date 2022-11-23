import styles from './Goals.module.scss'

export const Goals = ({ data, isDarkMode }) => {
  return (
    <div className={styles['goals-container']}>
      {data.map((goal, idx) => (
        <div
          className={[styles['goal'], isDarkMode ? styles['goal--dark'] : '' ].join(' ')}
          key={idx}
        >
          <div className={styles['goal-box']}>
            <div>{goal}</div>
          </div>
          <div
            className={
              styles[
                `${idx !== data.length - 1 ? 'connecting-line' : ''}`
              ]
            }
          ></div>
        </div>
      ))}
    </div>
  )
}
