import Link from 'next/link'
import { useEffect, useState } from 'react'
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
                      <li
                        className={styles['sub-navigation__sub-menu-link']}
                        key={link?.header_title}
                      >
                        <Link
                          href={
                            link?.current_URL ? link.current_URL : '/our-work'
                          }
                        >
                          <a>{link?.header_title}</a>
                        </Link>
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
          />
          <CountrySubMenuMobile subMenuItems={data} />
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
          <div
            onMouseOver={() => openCloseSubMenu(label, false)}
            className={styles['sub-navigation__nav-item-container']}
          >
            <Link href={url} passHref>
              <a className={styles['sub-navigation__button']} tabIndex={0}>
                {label}
              </a>
            </Link>
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
  const [activeRegion, setActiveRegion] = useState(undefined)
  const [data, setData] = useState([])

  useEffect(() => {
    if (navItems && navItems.length) {
      const shapedData = navItems.map((item) => {
        let subMenuData = []
        if (!!item?.subMenuItems) {
          const isAreasOfFocus = item?.subMenuItems?.areas_of_focus?.length > 0
          const isCountry = item?.subMenuItems?.countries?.length > 0

          if (isAreasOfFocus) {
            const focusSubMenuItems = item?.subMenuItems?.areas_of_focus
            const categories = [
              ...new Set(
                focusSubMenuItems?.map((menu) => menu.navigation_submenu)
              )
            ]
            const shapedData = categories.map((subMenuCategory) => {
              return {
                name: subMenuCategory,
                list: focusSubMenuItems.filter(
                  (item) => item.navigation_submenu === subMenuCategory
                ),
                subMenu: focusSubMenuItems[0].navigation_menu
              }
            })
            subMenuData = shapedData
          } else if (isCountry) {
            const countrySubMenuItems = item?.subMenuItems?.countries
            const categories = [
              ...new Set(
                countrySubMenuItems?.map((menu) => menu.navigation_regions)
              )
            ]
            const shapedData = categories.map((subMenuCategory) => {
              return {
                name: subMenuCategory,
                list: countrySubMenuItems.filter(
                  (item) => item.navigation_regions === subMenuCategory
                ),
                subMenu: countrySubMenuItems[0].navigation_menu
              }
            })
            setActiveRegion('Africa')
            subMenuData = shapedData
          }
        }

        return {
          label: item.label,
          hasSubMenu: !!item?.subMenuItems,
          isLink: !!item?.url,
          url: item?.url ? item.url : null,
          subMenuData: subMenuData,
          subMenuOpen: false
        }
      })
      setData(shapedData)
    }
  }, [navItems])

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
