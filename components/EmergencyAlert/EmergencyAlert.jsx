import parse from 'html-react-parser'
import styles from './EmergencyAlert.module.scss'
import { ExclamationMark } from './ExclamationMark'

const EmergencyAlert = ({ body, buttonLabel, url, title, setShowAlert }) => {
  return (
    <div className={styles['emergency-alert']}>
      <div className={styles['emergency-alert__content-container']}>
        <div className={styles['emergency-alert__icon-container']}>
          <ExclamationMark />
        </div>
        <div>
          <h4 className={styles['emergency-alert__title']}>{title}</h4>
          <span className={styles['emergency-alert__body']}>
            {parse(body || '')}
            {url && (
              <a
                target='_blank'
                className={styles['emergency-alert__link']}
                href={url}
              >
                Learn more
              </a>
            )}
          </span>
        </div>
      </div>
      <button
        aria-label='Close alert'
        className={styles['emergency-alert__button']}
        onClick={() => setShowAlert(false)}
      >
        {buttonLabel}
      </button>
    </div>
  )
}

export default EmergencyAlert
