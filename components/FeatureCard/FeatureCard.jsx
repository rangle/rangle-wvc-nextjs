import styles from './FeatureCard.module.scss'

const FeatureCard = ({ description, imgAlt, imgSrc, title }) => {
  return (
    <div className={styles['feature-card']}>
      <div className={styles['feature-card__content-container']}>
        <p className={styles['feature-card__title']}>{title}</p>
        <p className={styles['feature-card__description']}>{description}</p>
      </div>
      <div className={styles['feature-card__img-container']}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  )
}

export default FeatureCard
