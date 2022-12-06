import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import Tabs from '../../components/Tabs/Tabs'
import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import MediaCard from '../../components/MediaCard/MediaCard'
import MediaBlock from '../../components/MediaBlock/MediaBlock'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import EmergencyAlert from '../../components/EmergencyAlert/EmergencyAlert'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import LogoBlock from '../../components/LogoBlock/LogoBlock'
import { Timeline } from '../../components/Timeline/Timeline'
import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { BarChart } from '../../components/Charts/BarChart/BarChart'
import { TableOfContents } from '../../components/TableOfContents/TableOfContents'
import { Item } from 'react-stately'

import styles from './program.module.scss'

export default function Program() {
  return (
    <div className={styles['program-container']}>
      <EmergencyAlert
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        buttonLabel='Close'
      />
      <TableOfContents
        contents={[
          'Overview',
          'Program Details',
          'From the Field',
          'Results',
          'Stories',
          'Resources'
        ]}
        ctaText='Donate'
      />
      <HeroBlock
        ctaLabel='donate'
        ctaUrl='https://worldvision.ca'
        highlights={[
          {
            title: 'Program Type',
            value: 'Development'
          },
          {
            title: 'Timing',
            value: 'January 2020 - March 2023'
          },
          {
            title: 'Location',
            value: 'Democratic Republic of the Congo | Myanmar'
          },
          {
            title: 'Areas of focus',
            value: 'Education | Gender Equality and Social Inclusion'
          },
          {
            title: 'Total Program Cost',
            value: '$432,231.76'
          },
          {
            title: 'Lead Agency',
            value: 'World Vision Canada'
          },
          {
            title: 'Funding Partners',
            value: 'Global Affairs Canada'
          },
          {
            title: 'Implementing Partners',
            value: 'University of Toronto'
          }
        ]}
        markerCoordinates={[[15.307045, -4.322447]]}
        page='program'
        summaryDirection='vertical'
        title="Equality for Girls' Access to Learning (EGAL)"
      >
        <div>
          <Timeline
            data={[
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet goes here lkasjdjk asdlkasdjj',
                cardTitle: 'This Title',
                title: 'July 20 2008'
              },
              {
                cardDetailedText: 'More text goes here',
                cardTitle:
                  'A very, very long title, to test how it looks like with a very, very long title',
                title: 'Aug 20 2012'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardTitle:
                  'A very, very long title, to test how it looks like with a very, very long title',
                title: 'July 20 2013'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '7 December 1941'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle:
                  'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '15 February 1942'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '4 June 1942'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '25 October 1942'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: 'February 1943'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '6 June 1944'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: 'February 1945'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '13/14 February 1945'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '8 May 1945'
              },
              {
                cardDetailedText:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                cardSubtitle: 'Lorem ipsum dolor sit amet',
                cardTitle: 'Lorem ipsum dolor sit amet',
                title: '9 August 1945'
              }
            ]}
          />
          <div className={styles['summary-statistic-container']}>
            <StatisticCardGrid
              cards={[
                <StatisticCard
                  body='people learned how to protect themselves against COVID-19'
                  statistic='4,940,488'
                  title='Progress'
                />,
                <StatisticCard
                  body='malnourished children were admitted to nutrition programs'
                  statistic='1,020'
                  title='Progress'
                />,
                <StatisticCard
                  body='communities updated their disaster preparedness plans to provide guidance during emergencies'
                  statistic='242'
                  title='Progress'
                />
              ]}
            />
          </div>
          <div className={styles['change-container']}>
            <h2>Change</h2>
            <div className={styles['change-container__chart-container']}>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                <BarChart
                  ariaLabel='Bar Chart Reading Comprehension'
                  withAxes={false}
                  aspectRatio={0.8}
                  colors={[
                    'rgb(231, 96, 12)',
                    'rgb(255, 166, 102)',
                    'rgb(255, 225, 204)'
                  ]}
                  data={['83.5%', '74.1%']}
                  labels={['2021', '2013']}
                  showTopBarLabels
                  subTitle='Eravur Pattu, Sri Lanka'
                  title='Reading Comprehension'
                  titlePosition='bottom'
                  yStepSize={10}
                />
              </div>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                <BarChart
                  ariaLabel='Bar Chart Reading Comprehension'
                  withAxes={false}
                  aspectRatio={0.8}
                  colors={[
                    'rgb(231, 96, 12)',
                    'rgb(255, 166, 102)',
                    'rgb(255, 225, 204)'
                  ]}
                  data={['83.5%', '74.1%']}
                  labels={['2021', '2013']}
                  showTopBarLabels
                  subTitle='Eravur Pattu, Sri Lanka'
                  title='Reading Comprehension'
                  titlePosition='bottom'
                  yStepSize={10}
                />
              </div>
              <div
                className={styles['change-container__chart-container__chart']}
              >
                <BarChart
                  ariaLabel='Bar Chart Reading Comprehension'
                  aspectRatio={0.8}
                  withAxes={false}
                  colors={[
                    'rgb(231, 96, 12)',
                    'rgb(255, 166, 102)',
                    'rgb(255, 225, 204)'
                  ]}
                  data={['83.5%', '74.1%']}
                  labels={['2021', '2013']}
                  showTopBarLabels
                  subTitle='Eravur Pattu, Sri Lanka'
                  title='Reading Comprehension'
                  titlePosition='bottom'
                  yStepSize={10}
                />
              </div>
            </div>
          </div>
        </div>
      </HeroBlock>
      <ChartContainer
        chartType='line'
        controlTitle='Explore our investments and results'
        footnote='Date as of footnote'
      />
      <MediaBlock
        videoSrc='https://www.youtube.com/watch?v=RYTFzGkb-5A'
        videoBackgroundImage='/MediaBlockBackground.png'
        title='This community is graduating'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, turpis et hendrerit pulvinar, odio purus lacinia felis, a semper eros turpis quis turpis. Curabitur sodales velit at fusce.'
      />
      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Program Details'
      >
        <div className={styles['details-content']}>
          <p>
            The humanitarian situation in Kasai Central province, in the
            Democratic Republic of the Congo (DRC), has been characterized by
            massive population movements. The Angolan government had forced over
            650,000 Congolese nationals who had been living there for year to
            repatriate. While the Kamuina Nsapu refugees were not affected, the
            forced return ensured that the situation in Kasai province remained
            increasingly complex. There were over 57,000 forced returnees,
            including almost 15,000 children, who were registered at various
            borders, and almost 13,000 spontaneous refugees were identified by
            UNHCR in the community.An estimated 30% of these returnees were
            children, including unaccompanied children, who required
            humanitarian assistance.{' '}
          </p>
          <div className={styles['details-content__section']}>
            <ExpandableTextBlock
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
              footnote='Lorem ipsum footnote'
              title='Early childhood development'
            />
          </div>
          <div className={styles['details-content__section']}>
            <ExpandableTextBlock
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
              footnote='Lorem ipsum footnote'
              title='Early childhood development'
            />
          </div>
          <div className={styles['details-content__section']}>
            <ExpandableTextBlock
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
              footnote='Lorem ipsum footnote'
              title='Early childhood development'
            />
          </div>
        </div>
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
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Results'
        isDarkMode
      >
        <div className={styles['results-content']}>
          <Tabs isDarkMode>
            <Item title='2021'>
              <AccordionGroup
                isDarkMode
                items={[
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #1'
                  },
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #2'
                  },
                  {
                    children: (
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis id, quia odit soluta nemo quisquam
                        modi! Reprehenderit dolore enim temporibus porro earum
                        hic deserunt ducimus non eveniet, voluptatum nam quod
                        aut assumenda iste est eius aliquid perspiciatis laborum
                        nisi ratione, rem minima debitis? Aspernatur atque ut
                        distinctio veritatis asperiores quisquam.
                      </p>
                    ),
                    title: 'Item #3'
                  }
                ]}
              />
            </Item>
            <Item title='2022'>Senatus Populusque Romanus.</Item>
            <Item title='2023'>Alea jacta est.</Item>
          </Tabs>
        </div>
      </SectionContainer>
      <div className={styles['resource-container']}>
        <Carousel
          cards={[
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='1 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='2 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='3 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />,
            <MediaCard
              alt='/conference.svg'
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
              iconSrc='/conference.svg'
              imageSrc=''
              labels={['Conference']}
              title='4 Vision for Vulnerable Youth Initiative'
              url='https://worldvision.ca/'
            />
          ]}
          title='Resources'
        />
      </div>
      <CtaBlock
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, viverra eget interdum porttitor pretium purus imperdiet interdum massa. Sit blandit ullamcorper ipsum arcu. Ac eu ut enim pharetra tincidunt eu morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, viverra eget interdum porttitor pretium purus imperdiet interdum massa.'
        buttonLabel='Sponsor a child'
        buttonUrl='http://worldvision.ca'
        imageUrl='https://www.worldvision.ca/WorldVisionCanada/media/stories/child-rights-boy-writing-on-chalkboard.jpg'
        imageUrlAlt='Boy writing on a chalkboard'
        title='Building Sustainable Futures Together'
      />
      <LogoBlock
        title='Our Partners'
        logos={[
          {
            alt: 'Logo alt text',
            src: '/logo1.svg',
            url: 'https://www.worldvision.ca'
          },
          {
            alt: 'Logo alt text',
            src: '/logo2.svg',
            url: 'https://www.worldvision.ca'
          },
          {
            alt: 'Logo alt text',
            src: '/logo3.svg',
            url: 'https://www.worldvision.ca'
          },
          {
            alt: 'Logo alt text',
            src: '/logo4.svg',
            url: 'https://www.worldvision.ca'
          }
        ]}
      />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'egal'
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const {
    getSnowflakeData,
    transformResultsData,
    transformNavigationData
  } = require('../../utils/snowflake')
  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by HEADER_TITLE ASC`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'countries' or LEVEL = 'navigation'`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  return {
    props: {
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      disclaimer: disclaimerData[0].TEXT
    }
  }
}
