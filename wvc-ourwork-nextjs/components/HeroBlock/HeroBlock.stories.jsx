import React from 'react'

import HeroBlock from './HeroBlock'
import ImpactHighlightGrid from '../ImpactHighlightGrid/ImpactHighlightGrid'
import StatisticCardGrid, {
  StatisticCard
} from '../StatisticCardGrid/StatisticCardGrid'
import SectorHeaderSample from '../../assets/SectorHeaderSample.png'

export default {
  title: 'Example/HeroBlock',
  component: HeroBlock
}

const Template = (args) => <HeroBlock {...args} />

const impactHighlights = [
  {
    title: 'Impact',
    firstLabel: '',
    secondLabel: 'deaths were prevented through the ENRICH program ',
    highlight: '1,024',
    year: '2016-2021'
  },
  {
    title: 'Change',
    firstLabel:
      'In Ethiopia, women holding leadership positions on health committees increased from',
    secondLabel: '',
    highlight: '15% to 56%',
    year: '2016-2021'
  }
]

const statisticCards = [
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

export const Sector = Template.bind({})
Sector.args = {
  page: 'sector',
  sectorImgSrc: SectorHeaderSample,
  title: 'Health',
  body: 'World Vision began emergency relief operations in Afghanistan in 2001, to address the urgent needs of children and families affected by natural disasters and decades of conflict. Today, programs have expanded to development sectors such as health, water and sanitation, child protection, education and empowering women to engage in civil and social change.',
  ctaLabel: 'donate',
  ctaUrl: 'https://worldvision.ca',
  highlights: [
    {
      value: '$74 Million',
      title: 'Invested'
    },
    {
      value: '112 Programs',
      title: 'Focused on health'
    },
    {
      value: '10,817,381',
      title: 'People reached'
    }
  ],
  children: (
    <div>
      <ImpactHighlightGrid impactHighlights={impactHighlights} />
      <div style={{ marginTop: '6rem' }}>
        <StatisticCardGrid cards={statisticCards} />
      </div>
    </div>
  )
}

export const Country = Template.bind({})
Country.args = {
  page: 'country',
  title: 'Afghanistan',
  body: 'World Vision began emergency relief operations in Afghanistan in 2001, to address the urgent needs of children and families affected by natural disasters and decades of conflict. Today, programs have expanded to development sectors such as health, water and sanitation, child protection, education and empowering women to engage in civil and social change.',
  ctaLabel: 'donate',
  ctaUrl: 'https://worldvision.ca',
  highlights: [
    {
      value: '1975',
      title: 'Partnering Since'
    },
    {
      value: '10',
      title: 'Programs Supported'
    },
    {
      value: '3,291',
      title: 'Children Sponsored'
    },
    {
      value: 'Very low developing',
      title: 'Level of Fragility',
      tooltip: 'Sample tooltip content'
    },
    {
      value: '115/144',
      title: 'Gender Equality Rank'
    }
  ],
  countryCode: 'AFG',
  children: (
    <div>
      <ImpactHighlightGrid impactHighlights={impactHighlights} />
      <div style={{ marginTop: '6rem' }}>
        <StatisticCardGrid cards={statisticCards} />
      </div>
    </div>
  )
}

export const Program = Template.bind({})
Program.args = {
  page: 'program',
  title: "Equality for Girls' Access to Learning (EGAL)",
  ctaLabel: 'donate',
  ctaUrl: 'https://worldvision.ca',
  highlights: [
    {
      value: 'Development',
      title: 'Program Type'
    },
    {
      value: 'January 2020 - March 2023',
      title: 'Timing'
    },
    {
      value: 'Democratic Republic of the Congo | Myanmar',
      title: 'Location'
    },
    {
      value: 'Education | Gender Equality and Social Inclusion',
      title: 'Areas of focus'
    },
    {
      value: '$432,231.76',
      title: 'Total Program Cost'
    },
    {
      value: 'World Vision Canada',
      title: 'Lead Agency'
    },
    {
      value: 'Global Affairs Canada',
      title: 'Funding Partners'
    },
    {
      value: 'University of Toronto',
      title: 'Implementing Partners'
    }
  ],
  summaryDirection: 'vertical',
  children: (
    <div>
      <StatisticCardGrid cards={statisticCards} />
    </div>
  )
}
