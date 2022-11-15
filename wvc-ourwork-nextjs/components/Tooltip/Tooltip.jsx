import './Tooltip.scss'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { QuestionMark } from '../../icons/QuestionMark'

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
