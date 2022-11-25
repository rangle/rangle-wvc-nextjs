import React from 'react'

import Carousel from './Carousel'
import MediaCard from '../MediaCard/MediaCard'
import { StatisticCard } from '../StatisticCardGrid/StatisticCardGrid'

export default {
  title: 'Example/Carousel',
  component: Carousel
}

const icon = {
  src: '/conference.svg',
  alt: 'My icon alt text.'
}

const Template = (args) => <Carousel {...args} />

export const MediaCardsWithTitle = Template.bind({})
MediaCardsWithTitle.args = {
  title: 'Programs',
  cards: [
    <MediaCard
      title='1. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Health, Water']}
      url='http://worldvision.ca/our-work'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='Children running down a street smiling'
    />,
    <MediaCard
      title='2. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Health, Water']}
      url='http://worldvision.ca/our-work'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='Children running down a street smiling'
    />,
    <MediaCard
      title='3. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Health, Water']}
      url='http://worldvision.ca/our-work'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='Children running down a street smiling'
    />,
    <MediaCard
      title='4. Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Health, Water']}
      url='http://worldvision.ca/our-work'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='Children running down a street smiling'
    />
  ]
}

export const MediaCardsWithIcon = Template.bind({})
MediaCardsWithIcon.args = {
  title: 'Resources',
  cards: [
    <MediaCard
      title='1 Vision for Vulnerable Youth Initiative'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Conference']}
      url='https://worldvision.ca/'
      iconSrc={icon.src}
      imageSrc=''
      alt={icon.src}
    />,
    <MediaCard
      title='2 Vision for Vulnerable Youth Initiative'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Conference']}
      url='https://worldvision.ca/'
      iconSrc={icon.src}
      imageSrc=''
      alt={icon.src}
    />,
    <MediaCard
      title='3 Vision for Vulnerable Youth Initiative'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Conference']}
      url='https://worldvision.ca/'
      iconSrc={icon.src}
      imageSrc=''
      alt={icon.src}
    />,
    <MediaCard
      title='4 Vision for Vulnerable Youth Initiative'
      body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
      labels={['Conference']}
      url='https://worldvision.ca/'
      iconSrc={icon.src}
      imageSrc=''
      alt={icon.src}
    />
  ]
}

export const StatisticCardsNoTitle = Template.bind({})
StatisticCardsNoTitle.args = {
  cards: [
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
  ]
}
