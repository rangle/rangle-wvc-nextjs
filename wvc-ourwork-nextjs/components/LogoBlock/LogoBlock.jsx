import styles from './LogoBlock.module.scss'

const LogoBlock = ({ ctaLabel, ctaUrl, logos, title }) => {
  const ctaArrow = (
    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12'>
      <path
        fill-rule='evenodd'
        d='M4.823 6 0 1.487 1.589 0 8 6l-6.411 6L0 10.513 4.823 6Z'
        clip-rule='evenodd'
      />
    </svg>
  )

  return (
    <div className={styles['logo-block']}>
      <h3 className={styles['logo-block__title']}>{title}</h3>
      <div className={styles['logo-block__logo-container']}>
        {logos.map((logo) => {
          return (
            <div key={logo.src}>
              <a href={logo.url}>
                <img
                  className={styles['logo-block__logo']}
                  src={logo.src}
                  alt={logo.alt}
                />
              </a>
            </div>
          )
        })}
      </div>
      {ctaLabel && ctaUrl && (
        <div className={styles['logo-block__cta-container']}>
          <a className={styles['logo-block__cta']} href={ctaUrl}>
            {ctaLabel}
            {ctaArrow}
          </a>
        </div>
      )}
    </div>
  )
}

export default LogoBlock
