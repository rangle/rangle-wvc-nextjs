import React, { useState } from 'react'
import './EmergencyAlert.scss'
import { ExclamationMark } from '../../icons/ExclamationMark'

export interface EmergencyAlertProps {
  title: string
  body: string
  buttonLabel: string
}

const EmergencyAlert = ({ title, body, buttonLabel }: EmergencyAlertProps) => {
  const [showAlert, setShowAlert] = useState(true)

  return (
    showAlert && (
      <div class='emergency-alert'>
        <div class='emergency-alert__content-container'>
          <div class='emergency-alert__icon-container'>
            <ExclamationMark />
          </div>
          <div>
            <h4 class='emergency-alert__title'>{title}</h4>
            <p class='emergency-alert__body'>{body}</p>
          </div>
        </div>
        <button
          aria-label='Close alert'
          class='emergency-alert__button'
          onClick={() => setShowAlert(false)}
        >
          {buttonLabel}
        </button>
      </div>
    )
  )
}

export default EmergencyAlert
