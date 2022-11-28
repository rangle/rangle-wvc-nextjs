import styles from './Button.module.scss'

const Button = ({ label, disabled = false, url, buttonType, innerRef }) => {
  if (url) {
    return (
      <a
        className={`${styles['btn']} ${
          disabled
            ? styles['btn-disabled']
            : buttonType
            ? styles[`btn-${buttonType}`]
            : styles['btn-primary']
        }`}
        tabIndex={disabled ? -1 : 0}
        href={url}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      className={`${styles['btn']} ${
        disabled
          ? styles['btn-disabled']
          : buttonType
          ? styles[`btn-${buttonType}`]
          : styles['btn-primary']
      }`}
      tabIndex={disabled ? -1 : 0}
      ref={innerRef}
    >
      {label}
    </button>
  )
}

export default Button
