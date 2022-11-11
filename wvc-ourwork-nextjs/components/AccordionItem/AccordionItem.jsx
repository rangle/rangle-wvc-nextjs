import { useState } from 'react'
import './AccordionItem.scss'

const Chevron = () => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.53366 7.44804L0.193175 2.10753C-0.0643917 1.84997 -0.0643917 1.43239 0.193175 1.17485L0.816057 0.551964C1.07318 0.294837 1.48991 0.294342 1.74765 0.550865L6.00001 4.78331L10.2524 0.550865C10.5101 0.294342 10.9268 0.294837 11.1839 0.551964L11.8068 1.17485C12.0644 1.43241 12.0644 1.84999 11.8068 2.10753L6.46637 7.44804C6.2088 7.70558 5.79122 7.70558 5.53366 7.44804Z'
        fill={'#FFF'}
      />
    </svg>
  )
}

const AccordionItem = ({ children, isDarkMode = false, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`accordion-item-container ${
        isDarkMode ? 'accordion-item-container--dark' : ''
      } ${isOpen ? 'accordion-item-container--open' : ''}`}
    >
      <button
        className='accordion-title-container'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5>{title}</h5>
        <Chevron />
      </button>
      {/* TODO: Extend to support RTE when CMS is decided */}
      {isOpen && (
        <div className='accordion-item-content-container'>{children}</div>
      )}
    </div>
  )
}

export default AccordionItem
