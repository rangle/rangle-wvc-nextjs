import ShowMoreText from 'react-show-more-text'
import './ExpandableTextBlock.scss'

const ExpandableTextBlock = ({
  body,
  footnote,
  showLessText = 'Show less',
  showMoreText = 'Show more',
  title
}) => {
  return (
    <div className='expandable-text-block'>
      {title && <h5 className='expandable-text-block__title'>{title}</h5>}
      <ShowMoreText
        lines={2}
        more={
          <div className='expandable-text-block__button'>{showMoreText}</div>
        }
        less={
          <div className='expandable-text-block__button'>{showLessText}</div>
        }
        className='expandable-text-block__body expandable-text-block__body--closed'
      >
        <p className='expandable-text-block__body'>{body}</p>
        {footnote && (
          <p className='expandable-text-block__footnote'>{footnote}</p>
        )}
      </ShowMoreText>
    </div>
  )
}

export default ExpandableTextBlock
