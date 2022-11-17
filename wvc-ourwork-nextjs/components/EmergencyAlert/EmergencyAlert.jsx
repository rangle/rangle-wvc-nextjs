import React, { useState } from 'react'
import './EmergencyAlert.scss'
import ExclamationMark from '../../assets/icons/exclamation.svg'

const EmergencyAlert = ({ body, buttonLabel, url, title }) => {
  const [showAlert, setShowAlert] = useState(true)

  return (
    showAlert && (
      <div className='emergency-alert'>
        <div className='emergency-alert__content-container'>
          <div className='emergency-alert__icon-container'>
            <img src={ExclamationMark} alt='Exclamation mark icon' />
          </div>
          <div>
            <h4 className='emergency-alert__title'>{title}</h4>
            <p className='emergency-alert__body'>
              {body}
              {url && (
                <a target='_blank' className='emergency-alert__link' href={url}>
                  Learn more
                </a>
              )}
            </p>
          </div>
        </div>
        <button
          aria-label='Close alert'
          className='emergency-alert__button'
          onClick={() => setShowAlert(false)}
        >
          {buttonLabel}
        </button>
      </div>
    )
  )
}

export default EmergencyAlert
