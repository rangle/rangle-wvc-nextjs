import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

import ExpandableTextBlock from '../components/ExpandableTextBlock/ExpandableTextBlock'
import Tabs from '../components/Tabs/Tabs'
import AccordionGroup from '../components/AccordionGroup/AccordionGroup'
import Carousel from '../components/Carousel/Carousel'
import MediaCard from '../components/MediaCard/MediaCard'
import MediaBlock from '../components/MediaBlock/MediaBlock'
import CtaBlock from '../components/CtaBlock/CtaBlock'
import SectionContainer from '../components/SectionContainer/SectionContainer'
import EmergencyAlert from '../components/EmergencyAlert/EmergencyAlert'
import HeroBlock from '../components/HeroBlock/HeroBlock'
import LogoBlock from '../components/LogoBlock/LogoBlock'
import { Timeline } from '../components/Timeline/Timeline'
import StatisticCardGrid, {
  StatisticCard
} from '../components/StatisticCardGrid/StatisticCardGrid'
import { ChartContainer } from '../components/ChartContainer/ChartContainer'
import { TableOfContents } from '../components/TableOfContents/TableOfContents'
import Video from '../components/Video/Video'
import { getGraph } from '../utils/getGraphs'
import { Item } from 'react-stately'
import { convertToKebabCase } from '../utils/convertStrings'
import StoryCardGrid, {
  StoryCard
} from '../components/StoryCardGrid/StoryCardGrid'

import styles from './program.module.scss'

const OverviewSection = (props) => {
  return (
    <section id={props.sectionId}>
      <HeroBlock
        ctaLabel={props.HEADER_CTABUTTON_LABEL}
        ctaUrl={props.HEADER_CTABUTTON_URL}
        highlights={[
          ...Array(8)
            .fill('')
            .map((val, index) => {
              if (!props[`SUMMARY_0${index + 1}_LABEL`]) {
                return null
              }

              let value = props[`SUMMARY_0${index + 1}_VALUE`]
              if (index + 1 === 3) {
                value = [
                  ...new Set(props.mapData.map((location) => location.COUNTRY))
                ].join(' | ')
              }

              if (index + 1 === 4) {
                const firstValue = props[`SUMMARY_04_VALUE_01`]
                const secondValue = props[`SUMMARY_04_VALUE_02`]
                value = `${firstValue}${secondValue ? ` | ${secondValue}` : ''}`
              }

              if (index + 1 === 7) {
                value = props.partners
                  .filter(
                    (partner) => partner.PARTNER_TYPE === 'Funding Partner'
                  )
                  .map((partner) => partner.PARTNER_NAME)
                  .join('<br/>')
              }

              if (index + 1 === 8) {
                value = props.partners
                  .filter(
                    (partner) => partner.PARTNER_TYPE === 'Implementing Partner'
                  )
                  .map((partner) => partner.PARTNER_NAME)
                  .join('<br/>')
              }
              return {
                title: props[`SUMMARY_0${index + 1}_LABEL`],
                value,
                tooltip: props[`SUMMARY_0${index + 1}_INFO`]
              }
            })
            .filter((highlight) => highlight)
        ]}
        markerCoordinates={props.mapData.map((location) => [
          Number(location.CENTRAL_LONG),
          Number(location.CENTRAL_LAT)
        ])}
        page='program'
        summaryDirection='vertical'
        title={props.HEADER_TITLE}
      >
        {props.PROGRAM_STATUS_LABLE && (
          <>
            {' '}
            <div className={styles['timeline-heading']}>
              <h3>{props.PROGRAM_STATUS_LABLE}</h3>
              <p className={styles['timeline-heading__subtitle']}>
                {props.PROGRAM_STATUS}{' '}
                <span className={styles['timeline-heading__subtitle__status']}>
                  {props.PROGRAM_STATUS_VALUE}
                </span>
              </p>
            </div>
            <Timeline
              data={Array(10)
                .fill('')
                .map((val, index) => {
                  const cardNum = index + 1
                  const text =
                    props[`TIMELINE_BODY_${cardNum < 10 ? '0' : ''}${cardNum}`]

                  const title =
                    props[`TIMELINE_TITLE_${cardNum < 10 ? '0' : ''}${cardNum}`]

                  const tag =
                    props[`TIMELINE_TAG_${cardNum < 10 ? '0' : ''}${cardNum}`]
                  if (title && tag) {
                    return {
                      cardDetailedText: text,
                      cardTitle: title,
                      title: tag
                    }
                  }
                })
                .filter((card) => card)}
            />
          </>
        )}
        <div>
          {props.highlightedResults.length > 0 && (
            <div className={styles['summary-statistic-container']}>
              <StatisticCardGrid
                cards={props.highlightedResults.slice(0, 3).map((result) => (
                  <StatisticCard
                    key={result.STATEMENT_WITHOUT_VALUE + result.VALUE}
                    body={result.STATEMENT_WITHOUT_VALUE}
                    statistic={result.VALUE}
                    title={props.PROGRESS_CARD_LABEL}
                  />
                ))}
              />
            </div>
          )}
          {props.changeGraphs.length > 0 && (
            <div className={styles['change-container']}>
              <h2>Change</h2>
              <div className={styles['change-container__chart-container']}>
                <div
                  className={styles['change-container__chart-container__chart']}
                >
                  {getGraph(0, props.changeGraphs)}
                </div>
                <div
                  className={styles['change-container__chart-container__chart']}
                >
                  {props.changeGraphs.length > 1 &&
                    getGraph(1, props.changeGraphs)}
                </div>
                <div
                  className={styles['change-container__chart-container__chart']}
                >
                  {props.changeGraphs.length > 2 &&
                    getGraph(2, props.changeGraphs)}
                </div>
              </div>
            </div>
          )}
        </div>
      </HeroBlock>
      {props.topGraphs && props.topGraphs.length > 0 && (
        <ChartContainer
          chartType='stackedBar'
          controlTitle='Explore our investments and results'
          chartData={props.topGraphs}
        />
      )}
      {props.FEATURED_VIDEO_URL && (
        <MediaBlock
          videoSrc={props.FEATURED_VIDEO_URL}
          // TODO: where does this come from?
          videoBackgroundImage='/MediaBlockBackground.png'
          title={props.FEATURED_TITLE}
          body={props.FEATURED_BODY}
        />
      )}
    </section>
  )
}

const DetailsSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.DETAILS_IMAGE_ALT}
        src={props.DETAILS_IMAGE_URL}
        title={props.DETAILS_TITE}
      >
        <div className={styles['details-content']}>
          <p>{parse(props.DETAILS_INTRO || '')}</p>
          {Array(3)
            .fill('')
            .map((val, index) =>
              props.DETAILS_BODY_01 ? (
                <div className={styles['details-content__section']}>
                  <ExpandableTextBlock
                    body={props[`DETAILS_BODY_0${index + 1}`]}
                    title={props[`DETAILS_SUBTITLE_0${index + 1}`]}
                    footnote={props[`DETAILS_FOOTNOTE_0${index + 1}`]}
                  />
                </div>
              ) : null
            )}
        </div>
        {props.imageGallery.length > 0 && (
          <div className={styles['details-from-field-container']}>
            <Carousel
              cards={props.imageGallery.map((media) => (
                <div
                  className={
                    styles['details-from-field-container__image-container']
                  }
                >
                  {media.mediaType === 'image' ? (
                    <img
                      className={
                        styles[
                          'details-from-field-container__image-container__image'
                        ]
                      }
                      src={media.url}
                      alt={media.alt}
                    />
                  ) : (
                    <Video
                      src={media.url}
                      alt={media.alt}
                      backgroundImage={media.backgroundImage}
                    />
                  )}
                </div>
              ))}
              // TODO: connect to snowflake
              title='From the field'
            />
          </div>
        )}
      </SectionContainer>
    </section>
  )
}

const ResultsSection = (props) => {
  return (
    <section id={props.sectionId}>
      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        <div className={styles['results-content']}>
          <Tabs isDarkMode>
            {props.results.map((result) => (
              <Item title={result.year}>
                <AccordionGroup
                  isDarkMode
                  items={Object.keys(result.areasOfFocus).map(
                    (areaOfFocusTitle) => ({
                      title: areaOfFocusTitle,
                      children: (
                        <p>
                          <ul>
                            {result.areasOfFocus[areaOfFocusTitle].map(
                              (areaOfFocus) => (
                                <li>{areaOfFocus.FULL_STATEMENT}</li>
                              )
                            )}
                          </ul>
                        </p>
                      )
                    })
                  )}
                />
              </Item>
            ))}
          </Tabs>
        </div>
      </SectionContainer>
    </section>
  )
}

const StoriesSection = (props) => {
  return (
    <section className={styles['stories-container']} id={props.sectionId}>
      <StoryCardGrid
        cards={Array(3)
          .fill('')
          .map((val, index) =>
            props[`STORY_URL_0${index + 1}`] ? (
              <StoryCard
                body={props[`STORY_BLURB_0${index + 1}`]}
                imgAlt={props[`STORY_IMAGE_ALT_0${index + 1}`]}
                imgSrc={props[`STORY_IMAGE_URL_0${index + 1}`]}
                // TODO: add to snowflake
                linkLabel='Read more'
                linkUrl={props[`STORY_URL_0${index + 1}`]}
              />
            ) : null
          )
          .filter((story) => story)}
        // TODO: add to snowflake
        title='Stories'
      />
    </section>
  )
}

const ResourcesSection = (props) => {
  return (
    <section id={props.sectionId}>
      <div className={styles['resource-container']}>
        <Carousel
          // TODO: add to snowflake
          title='Resources'
          cards={props.resources.map((resource) => (
            <MediaCard
              alt={resource.ICON_ALT}
              body={resource.RESOURCE_BODY}
              iconSrc={resource.ICON_URL}
              labels={[resource.RESOURCE_TYPE]}
              title={resource.RESOURCE_TITLE}
              url={resource.RESOURCE_URL}
            />
          ))}
        />
      </div>
    </section>
  )
}

const PartnersSection = (props) => {
  return (
    <section id={props.sectionId}>
      <LogoBlock
        // TODO: connect to control table
        title='Our Partners'
        logos={props.partners.map((partner) => ({
          alt: partner.DONOR_LOGO_ALT,
          url: partner.DONOR_LINK,
          src: partner.DONOR_LOGO_URL
        }))}
      />
    </section>
  )
}

export default function ProgramPage(props) {
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    setShowAlert(true)
  }, [props.URL])

  const hasStories =
    props[`STORY_URL_01`] || props[`STORY_URL_02`] || props[`STORY_URL_03`]
  const componentMap = {
    section_order_summary: { component: OverviewSection, isShown: true },
    section_order_details: {
      component: DetailsSection,
      isShown: !!props.DETAILS_TITE
    },
    section_order_results: {
      component: ResultsSection,
      isShown: !!(props.RESULTS_TITLE && props.results.length > 0)
    },
    section_order_stories: { component: StoriesSection, isShown: !!hasStories },
    section_order_resources: {
      component: ResourcesSection,
      isShown: !!(props.resources.length > 0)
    },
    section_order_partners: {
      component: PartnersSection,
      isShown: !!(props.partners.length > 0)
    }
  }
  const sectionsData = props.controls.filter((control) => control.VALUE)
  return (
    <div className={styles['program-container']}>
      {showAlert && props.EMERGENCY_BANNER_BODY && (
        <EmergencyAlert
          body={props.EMERGENCY_BANNER_BODY}
          // TODO: need to add to snowflake table
          buttonLabel='Close'
        />
      )}
      <TableOfContents
        contents={sectionsData
          .filter(
            (section) =>
              componentMap[section.ITEM] && componentMap[section.ITEM].isShown
          )
          .map((control) => control.TEXT)}
        ctaText={
          props.controls.find((control) => control.ITEM === 'donate_label').TEXT
        }
        ctaUrl={
          props.controls.find((control) => control.ITEM === 'donate_url').URL
        }
      />
      {sectionsData.map((section) => {
        if (componentMap[section.ITEM] && componentMap[section.ITEM].isShown) {
          const Component = componentMap[section.ITEM].component
          return (
            <Component
              {...props}
              key={convertToKebabCase(section.TEXT)}
              sectionId={convertToKebabCase(section.TEXT)}
            />
          )
        }
        return null
      })}
      {props.CTA_TITLE && (
        <CtaBlock
          body={props.CTA_BODY}
          buttonLabel={props.CTA_BUTTON_LABEL}
          buttonUrl={props.CTA_BUTTON_URL}
          imageUrl={props.CTA_IMAGE_URL}
          imageUrlAlt={props.CTA_IMAGE_URL_ALT}
          title={props.CTA_TITLE}
        />
      )}
    </div>
  )
}
