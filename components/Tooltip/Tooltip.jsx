import Tippy from '@tippyjs/react'
import parse from 'html-react-parser'
import { QuestionMark } from './QuestionMark'

const Tooltip = ({ content }) => {
  return (
    <Tippy content={parse(content || '')} theme='info-light'>
      <span>
        <QuestionMark />
      </span>
    </Tippy>
  )
}

export default Tooltip
