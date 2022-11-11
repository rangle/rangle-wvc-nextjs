import AccordionItem from '../AccordionItem/AccordionItem'
import './AccordionGroup.scss'

const AccordionGroup = ({ items, isDarkMode = false }) => {
  return (
    <div className={isDarkMode ? 'accordion-group--dark' : ''}>
      {items &&
        items.length &&
        items.map((item) => {
          return (
            <AccordionItem
              title={item.title}
              children={item.children}
              isDarkMode={isDarkMode}
            />
          )
        })}
    </div>
  )
}

export default AccordionGroup
