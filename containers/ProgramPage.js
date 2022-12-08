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
import { getGraph } from '../utils/getGraphs'
import { Item } from 'react-stately'

import styles from './program.module.scss'

export default function ProgramPage(props) {
  const sectionsData = props.controls.filter((control) => control.VALUE)
  return (
    <div className={styles['program-container']}>
      {props.EMERGENCY_BANNER_BODY && (
        <EmergencyAlert
          body={props.EMERGENCY_BANNER_BODY}
          // TODO: need to add to snowflake table
          buttonLabel='Close'
        />
      )}
      <TableOfContents
        contents={sectionsData.map((control) => control.TEXT)}
        ctaText={
          props.controls.find((control) => control.ITEM === 'donate_label').TEXT
        }
      />
      <HeroBlock
        ctaLabel={props.HEADER_CTABUTTON_LABEL}
        ctaUrl={props.HEADER_CTABUTTON_URL}
        highlights={[
          ...Array(8)
            .fill('')
            .map((val, index) => {
              let value = props[`SUMMARY_0${index + 1}_VALUE`]
              if (index + 1 === 3) {
                value = props.mapData
                  .map((location) => location.COUNTRY)
                  .join(' | ')
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
        ]}
        markerCoordinates={props.mapData.map((location) => [
          Number(location.CENTRAL_LONG),
          Number(location.CENTRAL_LAT)
        ])}
        page='program'
        summaryDirection='vertical'
        title={props.HEADER_TITLE}
      >
        <div>
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
            data={Array(5)
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
          {props.highlightedResults.length > 0 && (
            <div className={styles['summary-statistic-container']}>
              <StatisticCardGrid
                cards={props.highlightedResults.map((result) => (
                  <StatisticCard
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
      <MediaBlock
        videoSrc={props.FEATURED_VIDEO_URL}
        // TODO: where does this come from?
        videoBackgroundImage='/MediaBlockBackground.png'
        title={props.FEATURED_TITLE}
        body={props.FEATURED_BODY}
      />
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
        {/* TODO: connect to snowflake */}
        <div className={styles['details-from-field-container']}>
          <Carousel
            cards={[
              <MediaCard
                alt='Children running down a street smiling'
                body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                labels={['Health, Water']}
                title='1. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                url='http://worldvision.ca/our-work'
              />,
              <MediaCard
                alt='Children running down a street smiling'
                body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                labels={['Health, Water']}
                title='2. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                url='http://worldvision.ca/our-work'
              />,
              <MediaCard
                alt='Children running down a street smiling'
                body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                labels={['Health, Water']}
                title='3. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                url='http://worldvision.ca/our-work'
              />,
              <MediaCard
                alt='Children running down a street smiling'
                body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                labels={['Health, Water']}
                title='4. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                url='http://worldvision.ca/our-work'
              />
            ]}
            title='From the field'
          />
        </div>
      </SectionContainer>

      <SectionContainer
        alt={props.RESULTS_IMAGE_ALT}
        src={props.RESULTS_IMAGE_URL}
        title={props.RESULTS_TITLE}
        isDarkMode
      >
        {props.results.length > 0 && (
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
        )}
      </SectionContainer>
      {props.resources.length > 0 && (
        <div className={styles['resource-container']}>
          <Carousel
            title={props.RESULTS_TITLE}
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
      )}
      <CtaBlock
        body={props.CTA_BODY}
        buttonLabel={props.CTA_BUTTON_LABEL}
        buttonUrl={props.CTA_BUTTON_URL}
        imageUrl={props.CTA_IMAGE_URL}
        imageUrlAlt={props.CTA_IMAGE_URL_ALT}
        title={props.CTA_TITLE}
      />
      <LogoBlock
        // TODO: connect to control table
        title='Our Partners'
        logos={props.partners.map((partner) => ({
          alt: partner.DONOR_LOGO_ALT,
          url: partner.DONOR_LINK,
          src: partner.DONOR_LOGO_URL
        }))}
      />
    </div>
  )
}
