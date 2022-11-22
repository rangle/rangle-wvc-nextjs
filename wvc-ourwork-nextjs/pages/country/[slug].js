import AccordionGroup from '../../components/AccordionGroup/AccordionGroup'
import Carousel from '../../components/Carousel/Carousel'
import CtaBlock from '../../components/CtaBlock/CtaBlock'
import EmergencyAlert from '../../components/EmergencyAlert/EmergencyAlert'
import ExpandableTextBlock from '../../components/ExpandableTextBlock/ExpandableTextBlock'
import HeroBlock from '../../components/HeroBlock/HeroBlock'
import ImpactHighlightGrid from '../../components/ImpactHighlightGrid/ImpactHighlightGrid'
import MediaBlock from '../../components/MediaBlock/MediaBlock'
import MediaCard from '../../components/MediaCard/MediaCard'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import Tabs from '../../components/Tabs/Tabs'

import StatisticCardGrid, {
  StatisticCard
} from '../../components/StatisticCardGrid/StatisticCardGrid'
import { ChartContainer } from '../../components/ChartContainer/ChartContainer'
import { Item } from 'react-stately'

export default function Country() {
  return (
    <div>
      <EmergencyAlert
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        buttonLabel='Close'
        title='Important notice'
        url='https://www.worldvision.ca/'
      />
      <HeroBlock
        body='World Vision began emergency relief operations in Afghanistan in 2001, to address the urgent needs of children and families affected by natural disasters and decades of conflict. Today, programs have expanded to development sectors such as health, water and sanitation, child protection, education and empowering women to engage in civil and social change.'
        countryCode='AFG'
        ctaLabel='donate'
        ctaUrl='https://worldvision.ca'
        highlights={[
          {
            title: 'Partnering Since',
            value: '1975'
          },
          {
            title: 'Programs Supported',
            value: '10'
          },
          {
            title: 'Children Sponsored',
            value: '3,291'
          },
          {
            title: 'Level of Fragility',
            tooltip: 'Sample tooltip content',
            value: 'Very low developing'
          },
          {
            title: 'Gender Equality Rank',
            value: '115/144'
          }
        ]}
        page='country'
        title='Afghanistan'
      >
        <div>
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
        title='Country Details'
      >
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
          children, including unaccompanied children, who required humanitarian
          assistance.{' '}
        </p>
        <ExpandableTextBlock
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
          footnote='Lorem ipsum footnote'
          title='Early childhood development'
        />
      </SectionContainer>
      <SectionContainer
        alt='Children running down a street smiling'
        src='/SectorHeaderSample.png'
        title='Results'
        isDarkMode
      >
        <Tabs isDarkMode>
          <Item title='2021'>
            <AccordionGroup
              isDarkMode
              items={[
                {
                  children: (
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis id, quia odit soluta nemo quisquam modi!
                      Reprehenderit dolore enim temporibus porro earum hic
                      deserunt ducimus non eveniet, voluptatum nam quod aut
                      assumenda iste est eius aliquid perspiciatis laborum nisi
                      ratione, rem minima debitis? Aspernatur atque ut
                      distinctio veritatis asperiores quisquam.
                    </p>
                  ),
                  title: 'Item #1'
                },
                {
                  children: (
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis id, quia odit soluta nemo quisquam modi!
                      Reprehenderit dolore enim temporibus porro earum hic
                      deserunt ducimus non eveniet, voluptatum nam quod aut
                      assumenda iste est eius aliquid perspiciatis laborum nisi
                      ratione, rem minima debitis? Aspernatur atque ut
                      distinctio veritatis asperiores quisquam.
                    </p>
                  ),
                  title: 'Item #2'
                },
                {
                  children: (
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis id, quia odit soluta nemo quisquam modi!
                      Reprehenderit dolore enim temporibus porro earum hic
                      deserunt ducimus non eveniet, voluptatum nam quod aut
                      assumenda iste est eius aliquid perspiciatis laborum nisi
                      ratione, rem minima debitis? Aspernatur atque ut
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
      </SectionContainer>
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
          slug: 'afghanistan'
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
