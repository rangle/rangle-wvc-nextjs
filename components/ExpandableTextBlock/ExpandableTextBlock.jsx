import ShowMoreText from 'react-show-more-text'
import parse from 'html-react-parser'

import styles from './ExpandableTextBlock.module.scss'

const ExpandableTextBlock = ({
  body,
  footnote,
  // TODO: need to be translated
  showLessText = 'Show less',
  showMoreText = 'Show more',
  title
}) => {
  return (
    <div className={styles['expandable-text-block']}>
      {title && <h5 className={styles['expandable-text-block__title']}>{title}</h5>}
      <ShowMoreText
        lines={2}
        more={
          <button tabIndex={1} className={styles['expandable-text-block__button']}>{showMoreText}</button>
        }
        less={
          <button tabIndex={1} className={styles['expandable-text-block__button']}>{showLessText}</button>
        }
        className={`${styles['expandable-text-block__body']} ${styles['expandable-text-block__body--closed']}`}
      >
        <span className={styles['expandable-text-block__body']}>{parse(body || '')}</span>
        {footnote && (
          <p className={styles['expandable-text-block__footnote']}>{parse(footnote)}</p>
        )}
      </ShowMoreText>
    </div>
  )
}

export default ExpandableTextBlock
