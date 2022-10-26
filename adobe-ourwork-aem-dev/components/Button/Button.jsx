import './Button.scss'

const Button = ({ label, disabled = false }) => {
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
