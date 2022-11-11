import './Button.scss'

const Button = ({ label, disabled = false, url }) => {
  if (url) {
    return (
      <a
        className={`btn ${disabled ? 'btn-disabled' : 'btn-primary'}`}
        tabIndex={disabled ? -1 : 0}
        href={url}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      className={`btn ${disabled ? 'btn-disabled' : 'btn-primary'}`}
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </button>
  )
}

export default Button
