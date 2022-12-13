import CtaLink from '../CtaLink/CtaLink'
import { useState } from 'react'
import styles from './SubNavigation.module.scss'
import { SubMenuIcon, SubMenuOpenIcon } from './SubMenuIcons'
import { CountrySubMenuDesktop, CountrySubMenuMobile } from './CountrySubMenu'

const SubMenu = ({ activeRegion, data, openCloseSubMenu, setActiveRegion }) => {
  const activeRegionData = data?.find((item) => item?.name === activeRegion)

  return (
    <div className={styles['sub-navigation__sub-menu']}>
      {data[0]?.subMenu === 'Areas of Focus' && (
        <div className={styles['sub-navigation__sub-menu--container']}>
          {data?.map((item) => {
            return (
              <div
                className={styles['sub-navigation__sub-menu--areas-of-focus']}
                key={item?.name}
              >
                <div className={styles['sub-navigation__sub-menu-container']}>
                  <h3
                    className={styles['sub-navigation__sub-menu--sub-heading']}
                  >
                    {item?.name}
                  </h3>
                  <ul>
                    {item?.list?.map((link) => (
                      <li key={link?.label}>
                        <div
                          className={styles['sub-navigation__sub-menu-link']}
                        >
                          <CtaLink
                            onClick={() => openCloseSubMenu(link?.label, false)}
                            url={link?.url ? `/${link.url}` : '/our-work'}
                          >
                            {link?.label}
                          </CtaLink>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {activeRegionData?.subMenu === 'Countries' && (
        <div className={styles['sub-navigation__sub-menu--country']}>
          <CountrySubMenuDesktop
            activeRegion={activeRegion}
            countryList={activeRegionData.list}
            setActiveRegion={setActiveRegion}
            regions={data}
            openCloseSubMenu={openCloseSubMenu}
          />
          <CountrySubMenuMobile
            subMenuItems={data}
            openCloseSubMenu={openCloseSubMenu}
          />
        </div>
      )}

      <button
        role='button'
        tabIndex='0'
        className={styles['sub-navigation__close-button']}
        onClick={() => openCloseSubMenu('', false)}
      >
        Close X
      </button>
    </div>
  )
}

const SubNavItem = ({
  hasSubMenu,
  isLink,
  label,
  url,
  subMenuData,
  subMenuOpen,
  openCloseSubMenu,
  activeRegion,
  setActiveRegion
}) => {
  return (
    <div
      className={styles['sub-navigation__sub-nav-trigger']}
      onMouseOver={() => openCloseSubMenu(label, true)}
      onMouseLeave={() => openCloseSubMenu(label, false)}
    >
      <div className={styles['sub-navigation__nav-item-container']}>
        {isLink ? (
          <div className={styles['sub-navigation__nav-item-container']}>
            <CtaLink
              onMouseOver={() => openCloseSubMenu(label, false)}
              className={styles['sub-navigation__button']}
              url={`/${url}`}
              tabIndex={0}
            >
              {label}
            </CtaLink>
          </div>
        ) : (
          <button
            role='button'
            tabIndex='0'
            aria-label=''
            aria-haspopup='true'
            className={styles['sub-navigation__button']}
            onClick={() => openCloseSubMenu(label, false)}
          >
            {hasSubMenu && (
              <span className={styles['sub-navigation__category-icons']}>
                {subMenuOpen ? <SubMenuOpenIcon /> : <SubMenuIcon />}
              </span>
            )}
            <p>{label}</p>
          </button>
        )}
      </div>
      {hasSubMenu && subMenuOpen && (
        <SubMenu
          data={subMenuData}
          activeRegion={activeRegion}
          setActiveRegion={setActiveRegion}
          openCloseSubMenu={openCloseSubMenu}
        />
      )}
    </div>
  )
}

const SubNavigation = ({ navItems }) => {
  const [activeRegion, setActiveRegion] = useState('Africa')
  const [data, setData] = useState(navItems)

  function openCloseSubMenu(label, isOpen) {
    const newArr = data.map((el) => {
      if (el.label === label) {
        return { ...el, subMenuOpen: isOpen ? isOpen : !el?.subMenuOpen }
      } else return { ...el, subMenuOpen: false }
    })
    setData(newArr)
  }

  return (
    <nav
      className={styles['sub-navigation']}
      role='navigation'
      // TODO: translate
      aria-label='Secondary navigation'
    >
      <div className={styles['sub-navigation__items']}>
        {data &&
          data.length &&
          data.map((item) => (
            <SubNavItem
              key={item?.label}
              hasSubMenu={item?.hasSubMenu}
              isLink={item?.isLink}
              label={item?.label}
              url={item?.url}
              subMenuData={item?.subMenuData}
              subMenuOpen={item?.subMenuOpen}
              openCloseSubMenu={openCloseSubMenu}
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
            />
          ))}
      </div>
    </nav>
  )
}

export default SubNavigation
