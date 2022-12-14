import styles from './LogoBlock.module.scss'
import Image from 'next/image'

const ctaArrow = (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12'>
    <path
      fill-rule='evenodd'
      d='M4.823 6 0 1.487 1.589 0 8 6l-6.411 6L0 10.513 4.823 6Z'
      clip-rule='evenodd'
    />
  </svg>
)

const LogoBlock = ({ ctaLabel, ctaUrl, logos, title }) => {
  return (
    <div className={styles['logo-block']}>
      <div className={styles['logo-block__container']}>
        <h3 className={styles['logo-block__container__title']}>{title}</h3>
        <div className={styles['logo-block__container__logo-container']}>
          {logos.map((logo) => {
            return logo.src ? (
              <a
                key={logo.src}
                className={styles['logo-block__container__logo']}
                href={logo.url}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={styles['logo-block__container__logo--image']}
                  fill
                  objectFit={'contain'}
                />
              </a>
            ) : null
          })}
        </div>
        {ctaLabel && ctaUrl && (
          <div className={styles['logo-block__container__cta-container']}>
            <a className={styles['logo-block__container__cta']} href={ctaUrl}>
              {ctaLabel}
              {ctaArrow}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default LogoBlock
