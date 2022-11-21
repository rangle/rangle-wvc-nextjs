import Tippy from '@tippyjs/react'
import { QuestionMark } from './QuestionMark'

const Tooltip = ({ content }) => {
  return (
    <Tippy content={content} theme='info-light'>
      <span>
        <QuestionMark />
      </span>
    </Tippy>
  )
}

export default Tooltip
