import AccordionItem from '../AccordionItem/AccordionItem'
import styles from './AccordionGroup.module.scss'

const AccordionGroup = ({ items, isDarkMode = false }) => {
  return (
    <div className={isDarkMode ? styles['accordion-group--dark'] : ''}>
      {items &&
        items.length &&
        items.map((item) => {
          return (
            <AccordionItem
              key={item.title}
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
