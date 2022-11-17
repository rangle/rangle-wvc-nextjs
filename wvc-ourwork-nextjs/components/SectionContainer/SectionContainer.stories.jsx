import React from 'react'

import SectionContainer from './SectionContainer'
import imageFile from '../../assets/images/sectioncontainerimage.png'

export default {
  title: 'Example/SectionContainer',
  parameters: {
    layout: 'fullscreen'
  },
  component: SectionContainer
}

// This image demonstrates the ratio best suited for this component
const image = {
  src: imageFile,
  alt: 'Children running down a street smiling'
}

const Template = (args) => <SectionContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Country Details',
  alt: image.alt,
  src: image.src,
  content:
    'The humanitarian situation in Kasai Central province, in the Democratic Republic of the Congo (DRC), has been characterized by massive population movements. The Angolan government had forced over 650,000 Congolese nationals who had been living there for year to repatriate. While the Kamuina Nsapu refugees were not affected, the forced return ensured that the situation in Kasai province remained increasingly complex. There were over 57,000 forced returnees, including almost 15,000 children, who were registered at various borders, and almost 13,000 spontaneous refugees were identified by UNHCR in the community.An estimated 30% of these returnees were children, including unaccompanied children, who required humanitarian assistance.  '
}
