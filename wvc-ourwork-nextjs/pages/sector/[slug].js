import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import Tabs from '../../components/Tabs/Tabs'
import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import MediaCard from '../../components/MediaCard/MediaCard'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import LogoBlock from '../../components/LogoBlock/LogoBlock'
import { Goals } from '../../components/Goals/Goals'
import { BarChart } from '../../components/Charts/BarChart/BarChart'
import { DoughnutChart } from '../../components/Charts/DoughnutChart/DoughnutChart'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import ImpactHighlightGrid from '../../components/ImpactHighlightGrid/ImpactHighlightGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { Item } from 'react-stately'

import styles from './sector.module.scss'

export default function Sector() {
  return (
    <div className={styles['sector-container']}>
      <HeroBlock
        sectorImgSrc='/SectorHeaderSample.png'
        body='World Vision began emergency relief operations in Afghanistan in 2001, to address the urgent needs of children and families affected by natural disasters and decades of conflict. Today, programs have expanded to development sectors such as health, water and sanitation, child protection, education and empowering women to engage in civil and social change.'
        countryCode='AFG'
        ctaLabel='donate'
        ctaUrl='https://worldvision.ca'
        highlights={[
          {
            title: 'Invested',
            value: '$74 Million'
          },
          {
            title: 'Focused on health',
            value: '112 Programs'
          },
          {
            title: 'People reached',
            value: '10,817,381'
          }
        ]}
        page='sector'
        title='Health'
      >
        <div className={styles['summary-content-container']}>
          <ImpactHighlightGrid
            impactHighlights={[
              {
                firstLabel: '',
                highlight: '1,024',
                secondLabel:
                  'deaths were prevented through the ENRICH program ',
                title: 'Impact',
                year: '2016-2021'
              },
              {
                firstLabel:
                  'In Ethiopia, women holding leadership positions on health committees increased from',
                highlight: '15% to 56%',
                secondLabel: '',
                title: 'Change',
                year: '2016-2021'
              }
            ]}
          />
          <div
            style={{
              marginTop: '6rem'
            }}
          >
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
        </div>
      </HeroBlock>
      <LogoBlock
        ctaLabel='Learn more about our focus to achieve UN’s Sustainable Development Goals'
        ctaUrl='https://www.worldvision.ca'
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
          }
        ]}
        title='Connnected Sustainable Development Goals'
      />
      <ChartContainer
        chartType='line'
        controlTitle='Explore our investments and results'
        footnote='Date as of footnote'
      />
      <div className={styles['impact-container-wrapper']}>
        <div className={styles['impact-container']}>
          <h3>Impact</h3>
          <p className={styles['impact-intro']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
            nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non
            adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl
            pellentesque elementum tortor massa sit. Tellus arcu facilisis
            turpis fermentum libero vulputate mauris amet sit. Ac tortor
            suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi
            nisl id et. Sed interdum eget lacus interdum tincidunt duis orci
            enim.
          </p>
        </div>
        <div className={styles['from-field-container']}>
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
      </div>

      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Global Challenges'
      >
        <div className={styles['challenges-content']}>
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
          <div className={styles['challenges-content__section']}>
            <ExpandableTextBlock
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
              footnote='Lorem ipsum footnote'
              title='Early childhood development'
            />
          </div>
          <div className={styles['challenges-content__section']}>
            <ExpandableTextBlock
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
              footnote='Lorem ipsum footnote'
              title='Early childhood development'
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Our Approach'
      >
        <div className={styles['approach-diagram']}>
          <h3>Our Goal</h3>
          <h4 className={styles['approach-diagram__subheading']}>
            Girls and boys have the knowledge and skills to lead fulfilling,
            productive lives.
          </h4>
          <div className={styles['approach-diagram__goals']}>
            <Goals
              data={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
                'Diam quis enim lobortis scelerisque fermentum',
                'Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.',
                'Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat',
                'Quisque egestas diam dolor in arcu cursus euismod quis viverra nibh et dolore magna aliqua.'
              ]}
            />
          </div>
        </div>
        <div className={styles['approach-section']}>
          <ExpandableTextBlock
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
            footnote='Lorem ipsum footnote'
          />
        </div>
      </SectionContainer>
      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Breaking Down Expenditures'
      >
        <p className={styles['expenditure-intro']}>
          We invest in and provide access to quality education for millions of
          girls and boys—including the most vulnerable, hardest to reach and
          those with disabilities—in safe and nurturing learning environments.
        </p>
        <div className={styles['expenditures-tabs']}>
          <Tabs>
            <Item title='Programming Type'>
              <div className={styles['expenditures-tabs__content']}>
                <DoughnutChart
                  ariaLabel='Doughnut chart for development program'
                  aspectRatio={2}
                  colours={[
                    'rgb(231, 96, 12)',
                    'rgb(255, 166, 102)',
                    'rgb(255, 195, 153)',
                    'rgb(231, 96, 12)'
                  ]}
                  cutout={90}
                  data={['90%', '6%', '4%']}
                  displayLegend
                  labels={[
                    'Development Programming',
                    'Protected Emergencies & Fragile Contexts',
                    'Emergencies Response I-III'
                  ]}
                  legendPosition='right'
                  title=''
                  titlePosition='top'
                />
              </div>
            </Item>
            <Item title='Level of Fragility'>
              <div className={styles['expenditures-tabs__content']}>
                Senatus Populusque Romanus.
              </div>
            </Item>
          </Tabs>
        </div>
        <div className={styles['expenditures-section']}>
          <ExpandableTextBlock
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
            footnote='Lorem ipsum footnote'
          />
        </div>
      </SectionContainer>
      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Progress'
        isDarkMode
      >
        <div className={styles['progress-content']}>
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
      <div className={styles['change-container-wrapper']}>
        <div className={styles['change-container']}>
          <h2>Change</h2>
          <p className={styles['change-intro']}>
            Efforts put in by schools, families and communities over the past
            several years have contributed to measurable positive change. Here
            are some education examples we gathered in 2021.
          </p>
          <div className={styles['change-container__chart-container']}>
            <div className={styles['change-container__chart-container__chart']}>
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                withAxes={false}
                aspectRatio={0.8}
                colours={[
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
            <div className={styles['change-container__chart-container__chart']}>
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                withAxes={false}
                aspectRatio={0.8}
                colours={[
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
            <div className={styles['change-container__chart-container__chart']}>
              <BarChart
                ariaLabel='Bar Chart Reading Comprehension'
                aspectRatio={0.8}
                withAxes={false}
                colours={[
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

      <div className={styles['program-container']}>
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
          title='Programs'
        />
      </div>
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
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'health'
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  }
}
