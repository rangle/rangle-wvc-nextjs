import React, { useState } from 'react'
import Link from 'next/link'
import styles from './SubNavigation.module.scss'
import { RegionImage } from './SubMenuIcons'
import CtaLink from '../CtaLink/CtaLink'

export const CountrySubMenuDesktop = ({
  activeRegion,
  countryList,
  setActiveRegion,
  regions,
  openCloseSubMenu
}) => {
  return (
    <>
      <div className={styles['sub-navigation__region-selector']}>
        {regions.map((region) => {
          return (
            <button
              className={`${
                styles['sub-navigation__region-selector--region']
              } ${
                region.name === activeRegion
                  ? styles['sub-navigation__region-selector--active']
                  : ''
              }`}
              onClick={() => setActiveRegion(region.name)}
              key={region.name}
            >
              <RegionImage name={region.name} />
              {region.name}
            </button>
          )
        })}
      </div>
      <div
        className={`${styles['sub-navigation__sub-menu-link-container']} ${styles['sub-navigation__sub-menu-link-container--country']}`}
      >
        <ul>
          {countryList.map((country) => {
            return (
              <li key={country?.label}>
                <div className={styles['sub-navigation__sub-menu-link']}>
                  <CtaLink
                    onClick={() => openCloseSubMenu(country?.label, false)}
                    url={country?.url ? `/${country?.url}` : `/`}
                  >
                    {country?.label}
                  </CtaLink>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export const CountrySubMenuMobile = ({ subMenuItems, openCloseSubMenu }) => {
  const [mobileCountryList, setMobileCountryList] = useState([
    { name: 'Africa', open: false },
    { name: 'Asia and Pacific', open: false },
    { name: 'Latin America', open: false },
    { name: 'Middle East and Eastern Europe', open: false }
  ])

  function toggleMobileCountryList(name) {
    const newArr = mobileCountryList.map((el) => {
      if (el.name === name) {
        return { ...el, open: !el?.open }
      } else return { ...el }
    })
    setMobileCountryList(newArr)
  }
  return (
    <>
      {subMenuItems && subMenuItems.length && (
        <>
          <div className={styles['sub-navigation__region-accordion']}>
            {subMenuItems.map((menuItem) => {
              const openCountryList = mobileCountryList?.find(
                (region) => region.name === menuItem.name
              )?.open

              return (
                <React.Fragment key={menuItem.name}>
                  <button
                    className={
                      styles['sub-navigation__region-accordion--button']
                    }
                    onClick={() => toggleMobileCountryList(menuItem.name)}
                  >
                    <span>{menuItem.name}</span>
                    <img
                      src={'/ChevronDown.png'}
                      alt=''
                      aria-hidden
                      className={`${
                        styles['sub-navigation__region-accordion-icon']
                      } ${
                        openCountryList
                          ? styles[
                              'sub-navigation__region-accordion-icon--flip'
                            ]
                          : ''
                      }`}
                    />
                  </button>

                  {openCountryList && (
                    <ul>
                      {menuItem?.list?.map((country) => {
                        return (
                          <li key={country?.label}>
                            <div
                              className={
                                styles['sub-navigation__sub-menu-link']
                              }
                            >
                              <CtaLink
                                onClick={() =>
                                  openCloseSubMenu(country?.label, false)
                                }
                                url={
                                  country?.url
                                    ? `/${country?.url} `
                                    : `/our-work`
                                }
                              >
                                {country?.label}
                              </CtaLink>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
