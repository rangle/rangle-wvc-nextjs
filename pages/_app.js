import '../styles/globals.scss'
import SubNavigation from '../components/SubNavigation/SubNavigation'
import { TableOfContents } from '../components/TableOfContents/TableOfContents'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SubNavigation
        navItems={[
          {
            label: 'Areas of focus',
            subMenuItems: {
              areas_of_focus: [
                {
                  approach_body:
                    '<p><b>World Vision’s livelihoods work is founded on our deep commitment to the world’s most\nvulnerable girls and boys. Using holistic, evidence-based approaches, we help families in dire\nneed to affirm their dignity and become economically self-reliant, with the means to provide\nfor their own children—both now and in the future.\n</b</p><p><b>At the household level,</b> we equip parents to provide for their children, with a specific focus on\nwomen’s economic empowerment. With training in small business skills, savings through savings groups\nand adapted practices for livestock and agriculture, families can both increase and diversify their incomes.\nThis strengthens their resilience to disasters so that their lives and livelihoods are less disrupted by future\nshocks and stresses. During emergencies and hunger crisis situations, providing food assistance to families\nis a critical, life-saving part of our response. In settings that are politically and environmentally precarious\nand exposed to disasters and climate risks, we focus where the need is greatest, building resilience and\nadaptability through temporary provisions of food and cash. This gives families a safety net and helps\nthem manage without slipping further into extreme poverty.\n</p><p><b>At the community level,</b> we work with local groups and organizations to become more economically\nproductive, with access to markets and financial services like savings, credit and cash where\nappropriate and needed. We support communities in becoming more resilient to shocks, stewarding\ntheir environments in ways that increase agricultural sustainability and reduce the risks of disaster.\n</p><p><b>At the systemic level,</b> we influence structural changes to promote sustainable employment\nopportunities, inclusive market systems and positive social and gender norms, creating pathways for\nwomen’s economic empowerment. In hazard-prone areas, we support the development of early warning\nsystems and action plans for times of crisis, so that authorities are equipped with knowledge, skills and\nresources for effective disaster management.</p>\n<p><b>How we’ve adapted in the\nface of COVID-19</p></b>\n<ul><li>Cash and voucher programming have\nhelped to protect people’s livelihoods and\ndecrease their reliance on harmful coping\nmechanisms—especially for women, girls\nand people with disabilities.\n</li><li>Savings groups have received support to\ncontinue functioning while prioritizing\nmembers’ health and safety. Now, longterm measures are being instituted to\ndigitize savings group ledgers, enabling\nmobile money linkages and minimizing\nhandling of cash.</li></ul>',
                  approach_goal:
                    'Families become economically self-reliant with the ability to provide for their children—both now and in the future',
                  approach_step_1:
                    'Equip families and individuals with resources and training, focusing on women’s economic empowerment',
                  approach_step_2:
                    'Join forces at the community level to build sustainability and resilience',
                  approach_step_3:
                    'Strengthen gender-responsive food and market systems to support the most vulnerable',
                  approach_title: 'Approach and Strategy',
                  approaches_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  challenges_subsector_1_body:
                    '<p>Our world is in the midst of a global hunger crisis. With conflict, climate change and the enduring economic\nimpacts of COVID-19, families are struggling to access enough safe, nutritious food for basic human health\nand development. </p>\n<p> In 2021, 41 million4 people—approximately half of them girls and boys—were at risk of starvation in 43 countries, with 584,000 people enduring famine-like conditions in Ethiopia, Madagascar, South Sudan and Yemen. This\nis a crisis that often goes unnoticed, because much of the worsening hunger is concentrated in the world’s\nhardest to reach, most dangerous places where humanitarian access is difficult.</p>\n<p>We know from past emergencies, such as the 2011 Somalia famine in which 258,000 people are estimated\nto have died, that approximately half had already perished by the time a declaration of famine was made,\nand that half of all those who died were children younger than five years old. </p>\n<p>The vulnerability of agriculture to natural hazards and disasters is a major driver of hunger and food\ninsecurity. Between 2008 and 2018, approximately $108.5 billion US was lost because of declines in crop and\nlivestock production in both least developed and lower- and middle-income countries following disasters.\nOver that period, Asia was the hardest hit region, followed by Africa, then Latin America and the Caribbean.</p>\n<p>Women continue to be the face of food insecurity, with moderate or severe food insecurity being 10%\nhigher among women than men in 2020, a 4% increase from 2019. With high levels of income inequality and\nfood costs, consuming a healthy diet was out of reach for approximately 3 billion people in 2019, particularly\nthe poor. That number is now expected to have increased—according to FAO’s Food Price Index,\n global\nfood prices were 31.4% higher in October 2021 compared to October 2020.</p>\n<p>Large-scale food and nutrition crises can and should be a thing of the past—to make this a reality, we need\nstrong collective leadership, political will and the right financing, with short-term emergency responses and\nlonger-term commitments that address the underlying issues driving hunger. These efforts must all support\nhuman rights, peaceful resolutions to conflict and the transformation of food systems to become inclusive,\nsustainable and more resilient.</p>',
                  challenges_subsector_1_title: 'Food security',
                  challenges_subsector_2_body:
                    '<p>The world has seen a decline in global poverty, especially since 1998. However, the rate of that decline has\nbeen slowing, driven largely by armed conflicts and climate change.\n</p><p>In June 2021, the World Bank noted that growth in 90% of advanced economies was expected to regain\npre-pandemic per capita income levels by 2022—yet only a third of emerging markets and developing\neconomies would make the same recovery. The pandemic’s severe outbreaks and increasingly transmissible\nvirus strains is hurting economic growth, especially in low-income countries where vaccine access remains\nlow. In sub-Saharan Africa, per capita income growth is forecast to remain subdued, averaging 0.4% a year\nin 2021 and 2022, following a 5% decline in 2020. Meanwhile, income inequality continues to increase,\nworsened by COVID-19.\n</p><p>Financial services are a tool that can help people rise out of poverty, providing access to credit and savings,\nthe ability to invest in education or businesses, and safety nets to weather financial emergencies. However,\nmany living in poverty lack services like bank accounts that can help in these ways. As of 2017, 1.7 billion adults\nwere “unbanked” around the world, most of them from developing economies. Women are over-represented,\naccounting for 56% of all unbanked adults, and 30% are young adults with lower education levels.\n</p><p>Education is an important factor in future economic success, yet there were 267 million young people\nnot involved in employment, education or training even before the pandemic, with young women\nthree times more likely than their male counterparts to be unemployed or out of school. In 2020, UNESCO\nestimated that 24 million children and youth were at risk of dropping out of school for financial reasons\nbecause of the pandemic.</p>',
                  challenges_subsector_2_title: 'Economic Empowerment',
                  challenges_subsector_3_body:
                    '<p>Between climate change, urbanization and an overall lack of disaster preparedness worldwide, natural\nhazards like earthquakes and tsunamis are becoming increasingly catastrophic, causing death and economic\nlosses. Children are often disproportionately affected in these events, and the risk of disasters caused by\nnatural hazards is rising.\n</p><p>The year 2020 rivalled 2016 as the world’s hottest year on record. It was dominated by climate-related\ndisasters that were largely responsible for 389 recorded events, resulting in more than 15,000 deaths and\n$171.3 million US in economic losses. In 2020 there were 26% more storms and 23% more floods than\nprevious annual averages. In Africa, floods affected seven million people and droughts were most heavily\nexperienced in the Sahel region, affecting 13.4 million people in Burkina Faso, Mali and Niger.\n</p><p>The practice of “disaster risk reduction” reduces vulnerability to disasters by identifying risks and making\ncommunity-based and systemic changes that mitigate them. This work is vital to prevent needless deaths\nand to ensure the development work of organizations like World Vision is sustainable.\n</p><p>The 2030 Agenda for Sustainable Development affirms the need to reduce the risks and effects of disasters.\nBy doing so, there are opportunities to achieve the Sustainable Development Goals (SDGs) through reducing\nvulnerability among the poor and building resilient infrastructure.</p>',
                  challenges_subsector_3_footnote:
                    'Full list or references can be seen in our Annual Results Report',
                  challenges_subsector_3_title: 'Disaster Risk Reduction',
                  challenges_title: 'Global challenges',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  change_body:
                    'Efforts put in by families and communities over the past several years have contributed to measurable positive change. Here are some livelihoods examples we gathered in 2021.',
                  change_title: 'Change',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/collections/agriculture',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL: 'https://www.worldvision.ca/our-work/food',
                  expenditure_discussion:
                    'In 2021, $226 million was invested in 192 projects that focused primarily on livelihoods approaches, reaching 1,212,499 girls, 1,162,914 boys, 966,675 women and 793,249 men. These investments went largely toward projects in most fragile countries (53%), followed by very low developing countries (25%). The vast majority of our livelihoods portfolio (77%) involves humanitarian relief work in small to large-scale emergencies, protracted emergencies and fragile contexts—this is largely because people in unstable and dire situations have pressing, large-scale food security needs. Our economic empowerment work, most concentrated in long-term development settings, is an important step in breaking cycles of poverty and seeing sustainable economic improvements.',
                  expenditure_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/international-development-facts-girl-sits-in-a-classroom-while-writing-on-a-notebook.png',
                  expenditure_plans:
                    'Going forward, we expect our focus on food security to continue as a main driver in the livelihoods sector, led by our partnership with the United Nations World Food Programme. Complementing this work, we anticipate World Vision’s agricultural training and distribution of farming and livestock resources will continue to strengthen food systems and increase family food security across our project areas. ',
                  expenditure_subtitle:
                    'Every year we collect, analyse and report our results and investments to confirm we are going in the right direction and make adjustments if necessary',
                  expenditure_title: 'Results and Investments',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'Child hunger is a thief. It robs children of their one chance to grow up healthy. It steals their energy and sabotages their school days. And it gives disease the upper hand. Together, we partner with families to claim back healthy childhoods, providing emergency food today and securing food sources for the future\nMore than 700 million people worldwide are living on less than two dollars a day. When you’re that far behind, it’s hard to get ahead. Economic empowerment helps people break into their local markets and out of poverty. Whether they’re farmers or entrepreneurs, approaches like microfinance and savings groups help parents do more for their children. In time, it can lift an entire community.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/collections/agriculture',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/child-hunger-our-work-girl-with-vegetable.jpg',
                  header_title: 'Livelihoods',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Sectors',
                  panel_mid01_first_label:
                    'In Kenya, farmers knowing the benefits of biofortified crops increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '40% to 84%',
                  panel_mid01_year: 'Elegeyo Marakawit|2017-2021',
                  panel_mid02_first_label:
                    'In Mongolia, families with enough food increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '53% to 74%',
                  panel_mid02_year: 'Chingeltei|2013-2020',
                  panel_top01_label: 'invested',
                  panel_top01_value: '$226 million',
                  panel_top02_label: 'focused on Livelihoods',
                  panel_top02_value: '192 projects',
                  panel_top03_label: 'people reached',
                  panel_top03_value: 4135337,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Progress',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 1,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 2,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 5,
                  sdg_04_link: 'https://unstats.un.org/sdgs/',
                  sdg_04_url: 13,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  approach_body:
                    '<p><b>World Vision’s health and nutrition work is particularly focused on young children, infants,\nand women and girls of reproductive age. We build on scientific, evidence-based program\napproaches,34 leveraging our strong community presence to foster positive changes in health,\nnutrition and hygiene behaviour; our responsiveness to save lives during humanitarian\nemergencies and in fragile contexts; and our strategic partnerships to reach more children.\n</p><p>Within communities, we:</b></p>\n<ul><li>Equip health workers and volunteers to 1) reach families in their homes with health and nutrition\neducation, and 2) teach caregivers the skills to rehabilitate their children from malnutrition while\nsupporting their long-term health.\n</li><li>Work with schools and youth groups to ensure adolescents—especially girls—are learning about\nnutrition and health, including their own sexual and reproductive health and rights, so they can\nmake informed choices for the future.\n</li><li>Promote women and adolescent girls’ active involvement in community matters that affect their\nhealth and wellbeing.\n</li><li>Empower communities to improve the availability, quality and accountability of their health care\nservices through strong relationships between community groups, health workers and facilities, and\nconstructive advocacy to (and alongside) service providers.\n</li></ul>\n<p><b>Within health systems, we:</b></p>\n<ul><li>Collaborate with district, provincial and regional health management teams, running joint campaigns\nand outreaches, supporting the health workforce with training and building administrative capacities\nin planning, budgeting and management of health data systems.\n</li><li>Equip and refurbish health facilities—especially in fragile contexts—so they can provide effective\nhealth and nutrition care.\n</li><li>Lead and participate in strategic alliances with our peers in the humanitarian and development sectors,\nadvancing health and nutrition movements35 that influence national policies and accountability</li></ul>\n<p><b>How we’ve adapted in the\nface of COVID-19</b></p>\n<ul><li>Mobile devices and technology have\nallowed health providers to access COVID-19\ninformation and technical resources.\n</li><li>Health workers have received training and\nprotective equipment, and community\neducation campaigns have dispelled myths\nand misinformation about COVID-19 while\npromoting prevention and response methods.\n</li><li>To lay the groundwork for COVID-19\nvaccine readiness in rural communities,\nWorld Vision contributed to behavioural\nscience research, identifying key factors for\nvaccine acceptance.36 These findings will\nhelp formulate messages to encourage\nvaccine uptake when they become more\navailable in the countries where we work.\n</li></ul>',
                  approach_goal:
                    'Children, adolescent girls and women of reproductive age live full and healthy lives',
                  approach_step_1:
                    'Engage families with essential knowledge and skills',
                  approach_step_2:
                    'Empower communities to take ownership of their collective health and address existing gender barriers',
                  approach_step_3:
                    'Partner with health systems to strengthen and support',
                  approach_step_4:
                    'Influence governments for policies that protect the most vulnerable, particularly women and girls',
                  approach_title: 'Approach and Strategy',
                  approaches_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  challenges_subsector_1_body:
                    '<p>Poor nutrition is a frequent culprit in this crisis, hurting women and children at every stage of their\ndevelopment. Malnutrition contributes to an estimated 45% of child deaths worldwide—in 2019, that was\n2.3 million girls and boys under age five. For children who survive, the long-term effects are significant: by\nage three, 80% of a child’s brain is formed—during this critical period, good health, nutrition and nurturing\ncare are all foundational for children’s development, future learning and abilities to achieve their potential. </p>\nSo it’s sobering that an estimated 149 million young children in lower- and middle-income countries are\nstill chronically malnourished—known as “stunted”—a condition that restricts both physical growth and\nbrain development, especially in the first 1,000 days of life. A staggering 45 million young children also\nsuffer from wasting malnutrition with low weight for their height; this failure to gain weight often results\nfrom insufficient quantity and quality of food or infections that cause weight loss, and those with the\nmost severe cases of wasting are nine times more likely to die. With the combined economic and health\nsystem impacts of COVID-19, an additional 6.7 million children are now estimated to suffer from wasting\nmalnutrition, with South Asia and sub-Saharan Africa bearing the bulk of the burden.</p>\n<p>Stunting and wasting are not the only threats to girls and boys’ good nutrition. Even before the pandemic,\ntwo out of five children suffered from anemia in lower- and middle-income countries, making them\nvulnerable to infections and inhibiting their ability to learn. Iron deficiency anemia affects almost a third\nof girls and women of reproductive age, a condition that saps the energy they need to live full and\nproductive lives and hinders their capacity for learning. A recent review of data collected by the World\nHealth Organization (WHO) from 29 countries across five regions suggests that during pregnancy, severe\nanemia doubles the risk of women dying during and after childbirth.</p>',
                  challenges_subsector_1_title:
                    "Nutrition: Foundational for children's development",
                  challenges_subsector_2_body:
                    '<p>Every day, more than 800 women die from severe bleeding, infections and high blood pressure related\nto pregnancy and childbirth, with higher risks of complications among adolescent mothers than other\nwomen. A startling 94% of preventable maternal deaths happen in developing countries (sub-Saharan\nAfrica and South Asia accounted for approximately 86% of global maternity deaths in 2017), where more\nthan 200 million women and girls of reproductive age would like to delay or prevent pregnancy, but can’t\naccess contraception because of limited availability or social and cultural barriers. This unmet need is\nexpected to rise in light of pandemic-related lockdowns that led to increases in early and forced marriage,\nwhile 44% of lower- and middle-income countries surveyed reported pandemic-related disruptions to\nfamily planning and contraception services in 2021.\n</p><p>It’s important to note that mental health challenges currently contribute to 14% of the global burden of\ndisease worldwide—and 81% of this burden is hitting families in low- and middle-income countries\nwhere access to mental health and psychosocial support services are limited or non-existent. COVID-19\nhas led to an alarming rise in anxiety and major depression worldwide–53 million and 76 million additional\ncases respectively—with twice as many women and girls affected than their male counterparts.</p>',
                  challenges_subsector_2_title:
                    'Disproportionate health challenges for women and adolescent girls',
                  challenges_subsector_3_body:
                    '<p>In fragile contexts and countries experiencing conflict, the health and nutrition situation exacerbated by the pandemic is worse. These settings account for: </p><ul><li>More than 70% of cases of epidemic-prone diseases, such as cholera, measles and meningitis; \n</li><li>60% of preventable maternal deaths; \n</li><li>53% of deaths in children under five; and \n</li><li>45% of infant deaths. \n</li></ul><p>By 2030, 80% of the world’s extreme poor will live in fragile contexts, and the majority will be children. Women, children and youth are uniquely and disproportionately affected by conflict and fragility, whether by gender-based violence, lack of adequate nutrition, broken state-societal relations or insurmountable barriers to basic quality health services. </p><p>In addition to the urgent action needed to save lives and address immediate nutritional, physical and mental health needs—now more than ever, the world’s health systems must be strengthened to reach communities in ways that are effective and durable, while addressing the factors that drive fragility itself.</p>',
                  challenges_subsector_3_footnote:
                    'Full list of references can be seen in our Annual Results Report',
                  challenges_subsector_3_title:
                    'Health and nutrition in fragile contexts',
                  challenges_title: 'Global challenges',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  change_body:
                    'Efforts put in by families and communities over the past several years have contributed to measurable positive change. Here are some health examples we gathered in 2021.',
                  change_title: 'Change',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/collections/health-nutrition',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL: 'https://www.worldvision.ca/our-work/health',
                  expenditure_discussion:
                    'In 2021, $74 million was invested in 122 projects that focused primarily on health approaches, reaching 3,172,291 girls, 3,047,477 boys, 2,357,639 women and\n2,239,974 men. Of these investments, 67% went toward work in the most fragile and very low developing countries, with an emphasis on development\nprograms (71%).',
                  expenditure_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/international-development-facts-girl-sits-in-a-classroom-while-writing-on-a-notebook.png',
                  expenditure_plans:
                    '<p>In the health sector, World Vision places particular emphasis on nutrition interventions in our work with children and families across countries in all levels\nof fragility. In 2021, we continued to lead the coalition of Canadian development partners on the Gender Transformative Nutrition Framework—a new\nevidence-informed, holistic approach to understanding the relationship between gender and nutrition—so that we can address the rising nutritional\nchallenges that disproportionately affect women and girls and are being compounded by the COVID-19 pandemic.\n</p><p>We also applied our expertise as thought leaders in the global community of health and nutrition practice, where we are well-positioned to rally with\nfaith-based actors to overcome misinformation and harmful attitudes that create barriers for children, adolescents and women to access life-saving health\nservices—such as immunizations. </p>',
                  expenditure_subtitle:
                    'Every year we collect, analyse and report our results and investments to confirm we are going in the right direction and make adjustments if necessary',
                  expenditure_title: 'Results and Investments',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'Improving child health is a critical part of our work. More than 15,000 children under five are still dying every day— many from illnesses that would be so easy to prevent: pneumonia, malaria – even diarrhea. We’re working to nourish children and mothers, educate communities, and help protect the most vulnerable from everyday illness.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/collections/health-nutrition',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/improving-child-health-our-work-child-arm-measured.jpg',
                  header_title: 'Health',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Sectors',
                  panel_mid01_second_label:
                    'deaths were averted through the ENRICH program',
                  panel_mid01_title: 'Impact',
                  panel_mid01_value: 1024,
                  panel_mid01_year: '2016-2021',
                  panel_mid02_first_label:
                    'In Ethiopia, women holding leadership positions on health committees increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '15% to 56%',
                  panel_mid02_year: 'Amhara region|2016-2021',
                  panel_top01_label: 'invested',
                  panel_top01_value: '$74 million',
                  panel_top02_label: 'focused on Health',
                  panel_top02_value: '122 projects',
                  panel_top03_label: 'people reached',
                  panel_top03_value: 10817381,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Progress',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 2,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 3,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 5,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  approach_body:
                    '<p><b>Educating girls and boys for life is the heart of World Vision’s approach to education. We\ninvest in and provide access to quality education for millions of girls and boys—including the\nmost vulnerable, hardest to reach and those with disabilities—in safe and nurturing learning\nenvironments.\n</p></b><ul><li>We provide early childhood education from infancy, working with parents and caregivers to\nstimulate children’s early brain development and establish the foundations for learning.\n</li><li>Our pre-school programming focuses on pre-literacy, pre-numeracy and early social skills, preparing\nchildren for formal schooling.\n</li><li>In the early primary grades, we prioritize girls’ and boys’ reading comprehension skills.\n</li><li>With adolescents and youth, we cultivate abilities in entrepreneurship, employability and life skills\nthat empower them in their future life planning and decisions.\n</li></ul><p>While we’re focused on ensuring girls and boys are enrolled and staying in school, we use approaches\nthat reach both in-school and out-of-school children with quality learning opportunities. Meanwhile,\nour gender-responsive community interventions address girls’ right to access education and reduce\nbarriers such as early marriage and pregnancy, household poverty, gender-based violence and harmful\ntraditional practices and beliefs.\n</p><p>Using research and impact evidence from our education projects, we advocate to national\ngovernments and policy makers for improved, gender-responsive and inclusive education services\nfor girls and boys. Where formal education systems have been weakened or eroded by crisis, World\nVision supports national ministries of education, strengthens the systems to respond to the needs of\nvulnerable children, adolescents and youth, and encourages resilience by preparing communities for\nfuture shocks to their education services. \n</p><p><b>How we’ve adapted in the\nface of COVID-19\n</p></b><ul><li>The pandemic has significantly impacted\nthe way World Vision conducts education\nprogramming—in both long-term\ndevelopment settings and during\nemergency responses – from methods of\nstudent instruction and teacher training to\nin-school safety protocols.\n</li><li>Innovative no-tech, low-tech and hi-tech\napproaches including at-home learning,\nremote radio instruction and online\ninstruction (where possible) have reached\nthousands of out-of-school girls, boys\nand youth with continuous learning, and\nsupported their return to formal education\nwhen schools reopened. </li></ul>',
                  approach_goal:
                    'Girls and boys have the knowledge and skills to lead fulfilling, productive lives',
                  approach_step_1:
                    'Work with children and their families from birth to stimulate brain development and early learning',
                  approach_step_2:
                    'Support children to achieve foundational literacy and numeracy skills',
                  approach_step_3:
                    'Equip adolescents and youth with skills to earn a living',
                  approach_step_4:
                    'Influence governments to provide improved, gender-transformative and inclusive education services',
                  approach_step_5:
                    'Partner with communities to address social, cultural and gender-related access barriers to learning',
                  approach_title: 'Approach and Strategy',
                  approaches_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  challenges_subsector_1_body:
                    '<p>School shutdowns related to COVID-19 have been especially challenging for girls. Without the protective environment of school, they’ve become more exposed to gender-based violence, forced marriage and early pregnancy. The situation is particularly acute in sub-Saharan Africa, where World Vision estimates that over one million girls are in danger of never returning to school. The loss of education will have far-reaching effects—not just on girls, but on their children and entire communities. If young mothers in these countries aren’t supported to continue their education, the region could see its economy suffer a loss of $10 billion US in GDP above and beyond the immediate effects of COVID-19.</p<p> Beyond basic access to quality education, effective learning remains a challenge. Even before the pandemic, six out of ten children and adolescents worldwide—an estimated 617 million young people— were not achieving minimum skill levels in reading and math. Despite years of growing school enrolment rates in sub-Saharan Africa, more than 70 million girls—or 90%—were not on track to meet minimum literacy standards by the time they were of age to complete primary education.</p>',
                  challenges_subsector_1_title:
                    "Effects of COVID-19 on girls' education",
                  challenges_subsector_2_body:
                    '<p>Early access to literacy and numeracy programs ensures young people are equipped for successful lives.\nIdeally, this work begins with access to quality early childhood care and education (ECCE), but we know\nthat in 2020, 155 million preschool-age children were affected by school closures. The economic return\non investment in ECCE programs is equal to roughly ten times their cost through projects focused on\nchildren’s early foundational learning and brain development.\n</p><p>Another concerning effect of COVID-19 is the worsened mental health of children and youth—a result\nof school shutdowns, lack of access to alternative learning options and in many cases, real loss and grief.\nWorldwide, more than 1.6 billion children have suffered some degree of lost education. The disruption\nto routines, learning, social interaction and recreation has left young people anxious, angry and worried\nabout their futures. Girls and boys report increased mental health problems—with girls reporting them\nmore—and LGBTQI+ learners cite some of the highest levels of isolation and anxiety.\n</p><p>Access to and completion of quality education is key for children’s future stability and success, and\nwith so much at stake for a generation of learners, the protective aspects provided through safe school\nenvironments, positive peer relationships and caring adults is critical to restore. </p>',
                  challenges_subsector_2_footnote:
                    'Full list of references can be seen in our Annual Results Report',
                  challenges_subsector_2_title:
                    'Disruptions to early childhood education and mental health concerns',
                  challenges_summary:
                    '<p>Significant global investments to improve access to education for the world’s girls and boys have largely succeeded,\nwith both the Millennium Development Goals (MDGs) and Sustainable Development Goals (SDGs) focusing on\nissues of access, quality and gender equity. The number of out-of-school girls—which is historically larger—\nhas been moving toward parity with boys, while the gender gap among primary-age children has decreased.\n</p><p>Despite these encouraging trends, access to quality learning remains a challenge for the world’s most vulnerable\nchildren, especially those living in conflict-affected and fragile contexts. In 2019, 127 million primary and secondary\nschool-age children and youth—nearly half of the world’s out-of-school population—were living in crisis-affected\ncountries, yet education received just 2.6% of total humanitarian funding, far below the target of 4% set by the\nUnited Nations in 2012.\n</p><p>With the COVID-19 pandemic heightening existing barriers to education, UNESCO now estimates that an\nadditional 11 million primary and secondary school-age children and youth may not return to school. Even\nso, gaps in education spending are widespread, and the pandemic continues to place downward pressure on\nfunding for development assistance around the world, including for education</p>',
                  challenges_title: 'Global challenges',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  change_body:
                    'Efforts put in by families and communities over the past several years have contributed to measurable positive change. Here are some education examples we gathered in 2021.',
                  change_title: 'Change',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/collections/education',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL: 'https://www.worldvision.ca/our-work/education',
                  expenditure_discussion:
                    'In 2021, $42 million was invested in 111 projects that focused primarily on education approaches, reaching 618,956 girls, 597,582 boys, 97,582 women and\n95,204 men. Nearly all of this investment (97%) went toward development programming. While this work is valuable, we are committed to finding sources\nof revenue that will ensure vulnerable children have access to education in less stable settings as well—particularly in protracted emergencies and fragile\ncontexts. Even so, our breakdown of investment across countries in all levels of fragility shows that education spending happens broadly across all regions,\nwith investments per region ranging from 13% to 27% of the portfolio.',
                  expenditure_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/international-development-facts-girl-sits-in-a-classroom-while-writing-on-a-notebook.png',
                  expenditure_plans:
                    '<p>Our education work in 2021 brought improvements in quality standards of instruction and learning, seen in Unlock Literacy classroom curriculum\nand community reading clubs, early childhood education and development programs and centres, teacher training, context appropriate reading and\nlearning materials, and the adaptation of school infrastructure to be gender sensitive and inclusive of students with disabilities.\n</p><p>We continue to work with girls and boys throughout their education life cycle—from infancy and early childhood to formal pre-primary, primary and\nsecondary schooling and youth job skills training—as we equip young people to acquire literacy skills and live productive and fulfilling lives.</p>',
                  expenditure_subtitle:
                    'Every year we collect, analyse and report our results and investments to confirm we are going in the right direction and make adjustments if necessary',
                  expenditure_title: 'Results and Investments',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'For any child, education can open doors to to the future that would otherwise be locked tight. But it’s not just about the future – children with healthy learning environments are better protected from exploitation here and now. Girls, especially, are safer from abuse and early marriage. ',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/collections/education',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/child-education-our-work-child-at-chalkboard.jpg',
                  header_title: 'Education',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Sectors',
                  panel_mid01_first_label:
                    'In Mali, the primary school completion rate increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '20.3% to 60%',
                  panel_mid01_year: 'Toroly|2014-2020',
                  panel_mid02_first_label:
                    'In Sri Lanka, children reading with comprehension increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '18% to 65%',
                  panel_mid02_year: 'Eravur Pattu|2014-2021',
                  panel_top01_label: 'invested',
                  panel_top01_value: '$42 million',
                  panel_top02_label: 'focused on Education',
                  panel_top02_value: '111 projects',
                  panel_top03_label: 'people reached',
                  panel_top03_value: 1409324,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Progress',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 4,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 5,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 8,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  approach_body:
                    '<p><b>World Vision is responding to the child protection challenges imposed by conflict and\npoverty—and further aggravated by COVID-19 and climate change—using a systems approach\nthat addresses root causes of violence against girls and boys. Through this approach we\nempower key actors to work together to create a protective environment that cares for and\nsupports all children, especially the most vulnerable.\n</b></p><ul><li>We empower girls and boys with life skills, resilience, psychosocial wellbeing and\nsupport so they can become influential protection actors in their environment.\n</li><li>We work with children, parents, faith leaders and communities to transform harmful\ngender norms, attitudes and discriminatory behaviours into positive ones.\n</li><li>We strengthen the people, structures, services and supports around girls and boys\nin order to prevent violence in all its forms, protect them from violence in all its\nforms and respond to incidents of violence in all its forms.\n</li><li>We advocate at all levels to improve child protection laws and ensure accountability\nby duty bearers when those laws are broken.\n</li><li>We work across all sectors of development to ensure that we are addressing other\nroot causes of vulnerability.\n</li></ul><p><b> How we’ve adapted in the\nface of COVID-19</p></b>\n</li><li>Phones and online platforms have\nallowed us to provide case management\nand psychosocial services to the most\nvulnerable children—especially those\nsubjected to sexual and gender-based\nviolence—when face-to-face meetings\nare impossible.\n</li><li>We’ve worked to strengthen social\nprotection programs like cash-for-work,\nsubsidies and universal health care to\nensure that all vulnerable populations are\nprotected from COVID-19 repercussions.\n</li><li>We’ve prioritized locally based child\nprotection services through partnerships\nwith youth and women-led organizations,\nfaith leaders and community leaders,\nincreasing communities’ abilities to\nsafeguard their own children—especially\nas COVID-19 has limited access to certain\nrural populations.</li></ul>',
                  approach_goal:
                    'Girls and boys are protected from abuse, neglect, exploitation and all forms of violence',
                  approach_step_1:
                    'Strengthen the ability of all responsible parties to fulfill their child protection duties',
                  approach_step_2:
                    'Build ties between communities and their formal child protection systems',
                  approach_step_3:
                    'Address underlying causes of violence against children, especially those rooted in gender inequality',
                  approach_step_4:
                    'Empower children and youth to be active agents of change',
                  approach_title: 'Approach and Strategy',
                  approaches_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  challenges_subsector_1_body:
                    '<p>The COVID-19 pandemic has increased child protection risks and rights violations worldwide—the number\nof unaccompanied and separated children has increased since 2020 and with economic instability and\npoverty rising, child labour, household tension and domestic violence have all gone up. Caregivers have\nreported children to be more distressed and children themselves report feeling less happy and less safe\nduring the pandemic.</p><p>\nA 2021 study from World Vision in partnership with War Child looked at the impact of COVID-19 on\nchildren living in conflict-affected countries. It found that the number of refugee children expressing\na need for mental health support has more than tripled, with 57% of children living in fragile and\nconflict-affected countries expressing a need for mental health and psychosocial support because of the\npandemic and resulting lockdowns.</p><p>\nWhen schools closed to curb the spread of COVID-19, children and youth lost spaces that provided them\nwith learning, participation, social interaction and stability. In areas of conflict, this put young people at\nhigher risk of being recruited into armed groups and forces. Girls have suffered disproportionately, with\nincreases in FGM and early and forced marriage being reported.\n</p><p>Many governments have launched measures to ease the pandemic’s immediate impacts on families\nand children, with the most critical ones focused on social protection systems. Even so, two out of three\nchildren worldwide have no access to any form of child or family benefit, and coverage is lowest where\nchild poverty is highest.\n</p><p>Violence against children has lifelong impacts on their mental, physical and emotional health—and\non their orientation toward relationships and family. Unaddressed, it contributes to cycles of harm for\ngenerations and places a real financial burden on societies, estimated at up to $7 trillion US every year.\nWithout the care and protection of boys and girls, communities cannot flourish. Coordinated, global\naction is needed to achieve a world free of violence against children.</p>',
                  challenges_subsector_1_footnote:
                    'Full list of references can be seen in our Annual Results Report',
                  challenges_subsector_1_title:
                    'Increased risks due to COVID-19',
                  challenges_summary:
                    '<p>Every year, more than 1.7 billion girls and boys around the world experience emotional, physical and\nsexual violence. This happens in spaces where young people are meant to feel safe—in their homes,\ncommunities, schools and workplaces, among others. The factors that allow for this violence and even\ncreate it are many, and unsurprising: poverty, harmful cultural norms, conflict and displacement, gender\ninequality and weak or non-existent safety nets.\n</p><p>Girls experience particular violations to their rights, including barriers to education, sexual and genderbased violence, and early or forced marriage. In times of humanitarian crisis, an increase in violence against\ngirls makes them yet more vulnerable to unintended pregnancy, forced marriage and female genital\nmutilation (FGM). The World Health Organization cites that in some countries, more than a third of girls\nreport their first sexual encounter was coerced, and that girls who become pregnant before age 18 are\nmore likely to experience violence within a marriage or partnership.</p>',
                  challenges_title: 'Global challenges',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  change_body:
                    'Efforts put in by families and communities over the past several years have contributed to measurable positive change. Here are some child protection and participation examples we gathered in 2021.',
                  change_title: 'Change',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/help-sexually-exploited-children',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/child-protection',
                  expenditure_discussion:
                    '<p>In 2021, $35 million was invested in 253 projects that focused primarily on child protection and participation approaches, reaching 417,281 girls, 412,391 boys,\n470,633 women and 466,378 men. Financial analysis shows that the vast majority (97%) of this investment went toward development programs. This is slightly\nmisleading on a surface level, because World Vision’s humanitarian relief work incorporates child protection as a central priority, woven throughout our\nprogramming in fragile contexts and emergency settings. However, the categorization of projects does not always reflect that focus.\n</p><p>A breakdown of investment across countries in all levels of fragility shows child protection and participation as a backbone of World Vision’s work, particularly\nin high and medium developing regions (52% combined). This reflects the fact that beyond urgent survival situations, children need support from society to\nuphold their security and inclusion in all kinds of environments. </p>',
                  expenditure_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/international-development-facts-girl-sits-in-a-classroom-while-writing-on-a-notebook.png',
                  expenditure_plans:
                    'Strong collaboration across all levels of society is essential for children’s protection and participation. Our work in 2021 saw strong partnerships with\ncommunities seeking to understand and address root causes of vulnerability. Education on crucial child protection issues reached thousands of people\nincluding local leaders, faith leaders, caregivers and children themselves.',
                  expenditure_subtitle:
                    'Every year we collect, analyse and report our results and investments to confirm we are going in the right direction and make adjustments if necessary',
                  expenditure_title: 'Results and Investments',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'Millions of children around the world are trapped by violence – from child labour, to civil conflict, to forced marriage. We teach communities about child rights, galvanizing families to keep children safe. And we speak out for children in the halls of global power, pressing for decisions that shield and empower them.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/help-sexually-exploited-children',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/Child-rights-our-work-hands-with-sewing-tools_mobile_768x928.jpg',
                  header_title: 'Child Protection and Participation',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Sectors',
                  panel_mid01_first_label:
                    'In Mongolia, families listening to chidren and taking action increased from ',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '45.9% to 65.7%',
                  panel_mid01_year: 'Khan Uul|2013-2021',
                  panel_mid02_first_label:
                    'In Mali, children under five with birth certificates increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '43% to 95%',
                  panel_mid02_year: 'Toroly|2014-2021',
                  panel_top01_label: 'invested',
                  panel_top01_value: '$35 million',
                  panel_top02_label: 'focused on CPP',
                  panel_top02_value: '253 projects',
                  panel_top03_label: 'people reached',
                  panel_top03_value: 1766683,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Progress',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 5,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 10,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 16,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  approach_body:
                    '<p><b>World Vision’s WASH programs bring safe drinking water, improved sanitation and hygiene\npractices to communities around the world. We prioritize making improved water sources and\nsanitation facilities accessible for the most vulnerable, including people with disabilities and\nthose on the socio-economic margins—often women and girls.\n</p></b>Our water, sanitation and hygiene programs take place in both fragile and stable settings and are\nfocused in four key areas.\n</p><p><b>In communities,</b> WASH services are developed by residents in collaboration with NGOs, governments,\nthe private sector and donors. The resulting water schemes serve diverse populations—from small\ncollections of households to large communities accessing water taps and kiosks through piped\nsystems. Women are instrumental in choosing the location of the water points and participate in water\nmanagement committees, often as leaders of the committees themselves.\n</p><p><b>In schools,</b> World Vision works to provide access to safe water and improved sanitation through\nupgraded gender-responsive latrines along with hygiene education, including menstrual hygiene\nmanagement. Facilities are modified where needed so students with physical disabilities can access\nand use them.\n</p><p><b>In health facilities,</b> we collaborate with local health authorities to support better access to WASH\nservices, which are essential when providing basic health care to girls and boys.\n</p><p><b>In emergencies,</b> we provide gender-responsive WASH services among disaster-struck populations\nand within camps for refugees or internally displaced people.\n</p><p><b>How we’ve adapted in the\nface of COVID-19\n</p><ul><li>The pandemic has intensified the need\nfor water and hygiene in the countries\nwhere we work, making WASH programs\na core part of our comprehensive multisectoral response.\n</li><li>We have focused on stopping virus\ntransmission through hygiene promotion\nand increased handwashing services—\nparticularly in schools and health facilities.</li>',
                  approach_goal:
                    'Child and family health is protected through safe water, sanitation and hygiene services',
                  approach_step_1:
                    'Collaborate with communities, organizations and governments to develop gender-responsive local water and sanitation systems',
                  approach_step_2:
                    'Teach gender-sensitive hygiene and sanitation practices that prevent the spread of disease',
                  approach_step_3:
                    'Provide emergency WASH services during humanitarian crises',
                  approach_step_4:
                    'Ensure schools and health centres are equipped with gender-responsive, accessible WASH facilities',
                  approach_title: 'Approach and Strategy',
                  approaches_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  challenges_subsector_1_body:
                    '<p>The implications are significant, with more than 800 girls and boys under age five dying every day from\ndiarrheal diseases caused by unsafe water, sanitation and hygiene.\n</p><p>Even as progress is made, we see deep inequalities related to water and sanitation on regional and national\nlevels. For example, 3% of the global population (207 million people) currently travel more than 30 minutes\nto collect water—two thirds of them live in sub-Saharan Africa, with the burden falling disproportionately on\nwomen. Imbalances within countries are also common: between 2000 and 2017, basic water coverage in rural\nHaiti increased among the richest but decreased among the poorest, widening the gap between them.\n</p><p>Disparities like these are compounded by growing challenges like climate change, political instability,\neconomic crises, and the yet unknown long-term impacts of COVID-19.\n</p><p>In reporting on the state of water, sanitation and hygiene in school settings across the world, UNICEF\nrevealed that nearly one in three schools lack basic drinking water services, affecting almost 600 million\nchildren; over a third of schools lack basic sanitation services, affecting nearly 700 million children; and in\nthe least developed countries, 49% of all schools have no handwashing facilities at all. Poor sanitation\nplays a particular role for women and girls. According to the World Bank, at least 500 million women and\ngirls are lacking a safe, clean, private facility to manage their menstrual hygiene, and this affects girls’\neducation—a meta-analysis by the World Bank found that a quarter of adolescent girls in India did not\nattend school during menstruation because of inadequate toilets.\n</p><p>Investing in WASH services has broad benefits to society. Sanitation deficits cost the global economy\nnearly $223 billion in 2015; however, a WHO study calculated a global return of $5.50 US for every dollar\nspent in sanitation—seen in lower health costs, more productivity and fewer premature deaths.\n</p><p>Achieving universal access to water, sanitation and hygiene would bring remarkable change, with global\nreductions in waterborne disease, better nutrition outcomes, hundreds of daily deaths prevented—and\nthe reality of a world that upholds the dignity, safety and future prospects of an entire generation. </p>',
                  challenges_subsector_1_footnote:
                    'Full list of references can be seen in our Annual Results Report',
                  challenges_summary:
                    'In the past two decades, substantial progress has been made to provide the world’s population with\nbetter water, sanitation and hygiene (WASH). Even so, Sustainable Development Goal 6 set out to\nprovide water and sanitation access for all by 2030 and to leave no one behind, yet at least 2 billion people\nare still drinking water contaminated with feces and living without basic sanitation facilities like toilets and\nlatrines—and 673 million people still resort to defecating in the open.',
                  challenges_title: 'Global challenges',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  change_body:
                    'Efforts put in by families and communities over the past several years have contributed to measurable positive change. Here are some water, sanitation and hygiene examples we gathered in 2021.',
                  change_title: 'Change',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/collections/give-clean-water',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/clean-water',
                  expenditure_discussion:
                    'In 2021, $7 million was invested in 26 projects that focused primarily on WASH approaches, reaching 247,660 girls, 225,631 boys, 444,500 women\nand 407,187 men. The majority of our investments (65%) were deployed in the most fragile countries—no projects with a primary WASH focus\nwere implemented in high developing countries. Unique among our sector portfolios, WASH programming in 2021 had a general balance\nbetween development programming (56%) and emergency response and protracted emergencies and fragile contexts (44% combined). This\nreveals the two main avenues of our WASH work: rapid support—especially with training and hygiene resources—to address survival needs in\nurgent or unstable settings, and the strengthening of infrastructure and systems in more stable contexts.',
                  expenditure_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/international-development-facts-girl-sits-in-a-classroom-while-writing-on-a-notebook.png',
                  expenditure_plans:
                    'In the midst of the COVID-19 pandemic, prioritizing WASH efforts around hygiene facilities and handwashing education has been a central focus\nin 2021. We anticipate this work will continue, along with our ongoing focus on functional and sustainable WASH infrastructure, which is essential\nfor communities to thrive.',
                  expenditure_subtitle:
                    'Every year we collect, analyse and report our results and investments to confirm we are going in the right direction and make adjustments if necessary',
                  expenditure_title: 'Results and Investments',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'Clean water means life. For children living in poverty, it can also mean freedom – freedom from waterborne illnesses and long daily treks to haul home water for the family. Our clean water, sanitation and hygiene programs give children back their health. And their lives.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/collections/give-clean-water',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/clean-water-our-work-child-drinks-from-cup.jpg',
                  header_title: 'Water, Sanitation and Hygiene',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Sectors',
                  panel_mid01_second_label:
                    'communities were certified as "open defecation free"',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: 202,
                  panel_mid01_year: 2021,
                  panel_mid02_first_label:
                    'In Mali, households using an improved water source increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '7% to 47.1%',
                  panel_mid02_year: 'Buwatun|1995-2021',
                  panel_top01_label: 'invested',
                  panel_top01_value: '$7 million',
                  panel_top02_label: 'focused on WASH',
                  panel_top02_value: '26 projects',
                  panel_top03_label: 'people reached',
                  panel_top03_value: 1324978,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Progress',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 3,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 5,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 6,
                  sdg_04_link: 'https://unstats.un.org/sdgs/',
                  sdg_04_url: 9,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_subsector_1_body:
                    '<p>At World Vision, we believe that every child is born with the same set of God-given rights.  Each child is full of potential, and has much to contribute to their families and societies.  Every girl and boy deserves to be nurtured, included, supported and empowered to live life in all its fullness.  \n \n</p><p>As a global community, we have almost unanimously agreed that girls have the exact same rights as boys and women, as men. Nearly every country on the planet has signed and ratified the Convention on the Rights of the Child as well as the Universal Declaration of Human Rights. The latter is the most broadly translated document in the world, and can be found in dialects from Abkhaz to Zulu!\n \n</p><p>Yet today, gender-inequality is still being reckoned with everywhere, even in certain spheres of Canadian life. Gender violence still spans cultures and social groups, religion and education levels. It is deeply rooted in gender inequalities, in cultural norms that assert men’s superiority and power over women, and in rigid norms about men’s and women’s roles.</p>',
                  challenges_subsector_1_title:
                    "Why does gender equality and women's empowerment matter to World Vision?",
                  challenges_subsector_2_body:
                    '<p>At World Vision, we have learned that promoting gender equality and women’s empowerment is core to effective and sustainable development. Lack of gender equality can be damaging, not only to girls and women, but to their entire societies. \n\n</p><p>Gender inequality and gender-based violence costs everyone. One in every three women will be beaten, coerced into sex or otherwise abused in her lifetime. Little boys may come of age, seeing this happening to their mothers and sisters. The cycle can easily perpetuate. In its extreme form, gender-based violence manifests through crimes such as rape and honor killing, and brutal cultural practices such as female genital mutilation and early marriage. In cases where girl and women are harmed or killed, an entire family can be drastically impacted by the event.\n\n</p><p>But gender-based violence also manifests in subtler and even more pervasive ways, such as the restriction of actions and opinions, and control over choices and resources. When a girl is kept away from school, there may be little to challenge these approaches, and almost nowhere to turn for help in a crisis.</p>',
                  challenges_subsector_2_title:
                    'Why is gender equality important for sustainable development?',
                  challenges_summary:
                    '<p>Through gender equality and social inclusion (GESI), we work toward the balanced distribution of\npower for all genders, with all people participating in society. GESI is a multi-faceted process of transformation\nthat places the most vulnerable girls and boys and families at the centre, by:\n</p><ul><li>Promoting their equal and inclusive access, decision-making, participation and wellbeing.\n</li><li>Transforming systems, social norms and relationships so they can participate and benefit equally from projects.\n</li><li>Building their resilience, sense of agency and ability to act—both as individuals and groups.\n</li><li> Empowering and enhancing the wellbeing of vulnerable girls and boys, their families and communities.\n</li></ul><p>Our GESI approaches work toward agency, empowerment and transformation so that all people—especially\nwomen and girls—can access resources, opportunities, services, benefits and infrastructure; make decisions free\nof coercion; participate in societal affairs and systems of power that influence their lives; benefit from equal and\ninclusive systems that promote equity and take their needs into account, and live in a world where their holistic\nwellbeing is supported—this includes freedom from gender-based violence and all forms of discrimination.</p>',
                  challenges_title: 'Our approach',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/women-and-girls-crisis-fund',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/gender-equality',
                  header_body:
                    'Girls are born with the same God-given rights as boys, and that needs to matter – everywhere. Societies with greater gender equality enjoy more sustainable development, faster economic growth and better prospects for their children. Yet in many places, discrimination and violence against girls and women is still rampant.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/women-and-girls-crisis-fund',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/gender-equality-our-work-children.jpg',
                  header_title: 'Gender Equality and Social Inclusion',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  panel_mid01_first_label:
                    'In Ethiopia, women holding leadership positions on health committees increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '15% to 56%',
                  panel_mid01_year: 'Amhara|2016-2021',
                  panel_mid02_first_label:
                    'In Bangladesh, women reporting they have a say in household spending increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '26.1% to 8.4%',
                  panel_mid02_year: 'Thakurgaon|2016-2021',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 4,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 5,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 10,
                  sdg_04_link: 'https://unstats.un.org/sdgs/',
                  sdg_04_url: 16,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_subsector_1_body:
                    '<p>Citizen Voice and Action (CVA) is an\nevidence-based, social accountability\nmodel. It is designed to contribute to the\ntransformation of communities into more\ndemocratic and socially accountable\nones, able to lead local improvements\nfor the well-being of children. CVA\noperationalises and strengthens\nrelationships of direct accountability\namong citizens, policymakers and service\nproviders. It tackles the root causes of\npoverty, vulnerability, marginalisation,\nexclusion, inequality and poor governance.\n</p><p>A growing body of evidence shows that\nsocial accountability efforts by citizens\nand civil society organisations can\nserve to create new effective, vertical\nmechanisms of accountability and\nstrengthen existing horizontal ones.\nSignificant challenges such as weak\ncitizen voice and oversight are addressed\nand lead to better-informed policy\ndecisions, responsible management\nand leadership, and more efficient and\nresponsive investment decisions.\n More broadly, CVA promotes democracy,\ntransparency and development.\n</p><p>The World Vision Partnership validated and refined CVA in 26\ncommunities in five countries:\nArmenia, Kosovo, Romania, Pakistan and\nLebanon. Evidence from this process\nshowed CVA’s contribution to improved\naccess to services and its ability to\ngenerate evidence for influencing policy\nat the national level in both transitioning\nand fragile contexts. Further, CVA\ncomplements programming in areas\nwhere World Vision is providing services\nto enhance the sustainability of results\nand impact.</p>',
                  challenges_subsector_1_title:
                    'What is Citizen Voice and Action (CVA)?',
                  challenges_subsector_2_body:
                    '<p>When governments fail in the provision of services, including services for the poor and marginalised, they often fail for reasons related to resourcing and planning. Resources available and allocated to accomplish the aspirations set out in government policies are often limited. While limited resources are understandable, the issue is further complicated when limited resources are not allocated to the right priorities through good planning, planning that includes the voice of citizens as to what matters most. </p><p>Both participation and accountability are critical to ensuring good planning and execution. Many governments have made commitments to ensure participation and have guidelines meant to guide the involvement of all stakeholders in the process. Citizen participation is critical to ensure that policies are designed and delivered in a way that enables people to receive the right services critical to their needs in a way in which they can access. Many factors, however, adversely affect people’s ability to participate and influence government services. The exclusion of marginalised and discriminated groups from participatory spaces, and the suppression of poor people’s voices by dominant elite groups, remain serious obstacles in achieving effective participation of people.</p>',
                  challenges_subsector_2_title: 'Recognising the problems',
                  challenges_subsector_3_body:
                    'As much as governments have\nthe responsibility for ensuring services,\ncitizens need to be empowered\nand engaged in order to hold them\naccountable to deliver them. The\nCVA model equips communities with\nknowledge on policies, strategies,\ngovernment responsibilities and skills as\nwell as on platforms for influencing local\ngovernments to fulfil their commitments\nand mandate. It works by facilitating a\ncordial relationship between community\nmembers and their leaders so that the\nmonitoring and accountability process is\nbased on mutual trust and a respectful\nenvironment. ',
                  challenges_subsector_3_title: 'Finding the solutions',
                  challenges_summary:
                    '<p>Through social accountability, we equip communities to hold their own governments accountable for\nthe promises they make. Our approach to this work, called Citizen Voice and Action (CVA), starts by educating\ncommunities about their basic service rights—for example, how many teachers or nurses the government\npromises them—and then comparing these standards against current realities.\n</p><p>Armed with the results of their audits, communities are empowered to influence stakeholders and decisionmakers toward the improvement of their health, education, water or child protection services, using\nmeasurable action plans and ongoing advocacy.</p>',
                  challenges_title: 'Our approach',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/help-end-child-marriage',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  header_body:
                    'We equip communities to hold their own governments and institutions accountable. With community ownership, their local advocacy create stronger local systems that benefits all. ',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/help-end-child-marriage',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/gallery-images/Child-Protection_Advocacy-Landing-Page_Child-Reaching-Toward-Camera.jpg',
                  header_title: 'Social Accountability',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  panel_mid01_first_label:
                    'In Ethiopia, women holding leadership positions on health committees increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '15% to 56%',
                  panel_mid01_year: 'Amhara|2016-2021',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 1,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 10,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 16,
                  sdg_04_link: 'https://unstats.un.org/sdgs/',
                  sdg_04_url: 17,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_subsector_1_body:
                    '<p>Climate change tightens the screws on people who are already suffering, making every aspect of life more difficult. It compounds existing problems – like food insecurity, water shortages and the threat of illness. \n\n</p><p>Climate change is already threatening development work around the world and will continue to do so in the coming years. To serve struggling children and their communities faithfully, World Vision must take this link between climate change and sustainable development seriously.</p>',
                  challenges_subsector_1_title:
                    'The link between climate change and sustainable development',
                  challenges_subsector_2_body:
                    '<p>Climate change and poverty are interconnected. The environment is the world’s largest employer in developing countries. Most of the world’s families build their livelihoods on some aspect of the natural environment.\n\n</p><p> Climate change is causing anomalies in weather patterns. Droughts that used to happen once every 10-20 years are now happening every two or three years. Severe storms, extreme heat events or prolonged dry spells can wipe out entire crops. This leaves families unable to provide enough nutritious food for their children and without an income.\n\n</p><p> Climate change is also causing an increase in natural disasters and very extreme weather. The poor are the most vulnerable – and least able to recover. Natural disasters like typhoons can take a terrible toll on lives, destroying property and forcing families to abandon their hom es and fields.\n\n</p><p>Climate change can make clean water even harder to find. Sources of fresh, clean water are drying up. This can leave children and families with no choice but to drink dirty water, putting them at risk of water-borne disease. It can force them to walk even longer distances, to find water to drink, cook with, wash with or i rrigate their plants. \n\n</p><p>Lastly, climate change can increase the risk of disease. Increasing temperatures make tropical diseases welcome in new areas, places where the population is less immune or prepared. And, less water for sanitation and hand-washing can contribute to the spread of illness.</p>',
                  challenges_subsector_2_title: 'Effect on poverty',
                  challenges_subsector_3_body:
                    '<p>World Vision recognizes the link between climate change and sustainable development. We work with communities to restore environments that have been harmed, protect healthy environments and systematically build good environments to make them progressively stronger and healthier.\n\n</p><p>Some of our projects include environmentally restorative activities such as reforestation, agro-forestry and organic and conservation farming. We aim to help communities that rely on farming for food and income to learn improved and environmentally sustainable farming techniques.\n\n</p><p>Here are a few examples: \n</p><ul><li>We have seen great success in reforesting in parts of Africa using the technique of Farmer Managed Natural Regeneration, re-growing trees from root stumps of indigenous trees that were cut down in the past.\n</li><li>Several communities in Ethiopia have benefited from a cleaner, safer way to cook their food as a part of a clean stoves project. As well as reducing the health impacts associated with smoky, open fire stoves, the clean stoves can help reduce the number of trees cut down for firewood.\n</li><li>We also work with communities to improve their resilience, including disaster preparedness and risk reduction education, and improving food and water security.</li>',
                  challenges_subsector_3_title: 'What is World Vision doing?',
                  challenges_subsector_4_body:
                    '<p>The effects of climate change are expected to become greater over time without urgent action at a global, national and local level.  \n\n</p><p>People living in the poorest countries contributed little to these problems but are disproportionately affected by their negative consequences. Among them, children, women and people with disabilities are the most vulnerable and the least equipped to adapt to a changing climate.\n\n</p><p>Working to halt climate change can be expensive, and inconvenient. But, the impact of doing nothing would be devastating for all of us. It’s already devastating for millions of the world’s poorest children. \n\n</p><p>World bodies, governments, corporations and individuals must do whatever we can to protect children and families around the world from ever-worsening outcomes of climate change.</p>',
                  challenges_subsector_4_title:
                    'Long-term impact on developing countries',
                  challenges_title: 'Challenges and Approach',
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/solar-panels',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/climate-change',
                  header_body:
                    'Human beings rely on the natural environment for life, health and security. When climate change devastates that environment, we suffer on every level. And no one pays a higher price those who’ve done the least to cause this global problem – the poor.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/solar-panels',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/climate-change-hero-people-walking-on-a-field-mobile_1.jpg',
                  header_title: 'Climate Change',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  panel_mid01_first_label:
                    'In Mongolia, caregivers using effective disaster risk reduction strategies increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '72.8% to 94.4%',
                  panel_mid01_year: 'Chingeltei|2013-2021',
                  panel_mid02_first_label:
                    'In Mongolia, caregivers who had been affected by disaster but were able to maintain their standard of living increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '46% to 55%',
                  panel_mid02_year: 'Khan Uul|2013-2021',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 13,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 15,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/gift-of-the-month',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  header_body:
                    'With 84% of the global population identifying themselves with a religious group, faith plays a vital role in our world. Our Christian identity and focus on community empowerment help to establish trusted relationships with influential local faith-based organizations and faith leaders.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/gift-of-the-month',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/stories/hiddenhero-new-kind-of-hero-sierraleone-ebola-pastor-imam-teamwork.jpg',
                  header_title: 'Faith and Development',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 17,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/emergency-relief-fund',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/disaster-relief',
                  graphbox_title: 'Explore our results and investments',
                  header_body:
                    'Our disaster relief work saves lives – but it does far more than that. We warm, nourish, comfort and protect children who’ve experienced the unthinkable. We continue to walk beside them as their communities rebuild. And we press governments for programs and policies to secure their futures.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/emergency-relief-fund',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/disaster-relief-our-work-WV-staff-mobile.jpg',
                  header_title: 'Emergency Response',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  panel_mid01_first_label:
                    'In Mongolia, caregivers using effective disaster risk reduction strategies increased from',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '72.8% to 94.4%',
                  panel_mid01_year: 'Chingeltei|2013-2021',
                  panel_mid02_first_label:
                    'In Mongolia, caregivers who had been affected by disaster but were able to maintain their standard of living increased from',
                  panel_mid02_title: 'Change',
                  panel_mid02_value: '46% to 55%',
                  panel_mid02_year: 'Khan Uul|2013-2021',
                  panel_top01_label: 'emergencies',
                  panel_top01_value: 30,
                  panel_top02_label: 'countries',
                  panel_top02_value: 25,
                  panel_top03_label: 'people reached',
                  panel_top03_value: '6.6 million',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 2,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 5,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 13,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  challenges_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/partnerships',
                  header_body:
                    'We couldn’t do what we do alone. Our partners make our work possible.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/partnerships-world-vision-canada.jpg',
                  header_title: 'Partnerships',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 17,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                },
                {
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  current_URL:
                    'https://www.worldvision.ca/our-work/influencing-governments',
                  header_body:
                    'Canada’s government can be a powerful champion for children’s rights, health and well-being. Decisions made in Ottawa can help care for and protect children around the world – including those living in the most dangerous places. That’s why influencing government policy is such a critical part of our work.',
                  header_ctabutton_label: 'Donate',
                  header_ctabutton_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/hero-1920x864/influencing-governments-our-work-child-portrait.jpg',
                  header_title: 'Influencing Government',
                  navigation_menu: 'Areas of Focus',
                  navigation_submenu: 'Featured Themes',
                  panel_mid01_second_label:
                    'into our No Child for Sale campaign, the Standing Committee on Foreign Affairs and International Development published a report recommending that Canada prioritize legislation to strengthen supply chain integrity and combat modern slavery in global supply chains',
                  panel_mid01_title: 'Change',
                  panel_mid01_value: '10 years',
                  panel_mid01_year: 'Ottawa|2021',
                  sdg_01_link: 'https://unstats.un.org/sdgs/',
                  sdg_01_url: 8,
                  sdg_02_link: 'https://unstats.un.org/sdgs/',
                  sdg_02_url: 16,
                  sdg_03_link: 'https://unstats.un.org/sdgs/',
                  sdg_03_url: 17,
                  sdg_link_label:
                    'Learn more on how we are working to achieve them',
                  sdg_link_url:
                    'https://www.worldvision.ca/stories/advocacy/8-ways-were-working-to-achieve-the-sdgs',
                  sdg_title: 'Connected Sustainable Development Goals'
                }
              ]
            }
          },
          {
            label: 'Country',
            subMenuItems: {
              countries: [
                {
                  URL: 'https://www.worldvision.ca/our-work/afghanistan',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956922',
                  cta_title: 'Invest in stronger communities',
                  details_body_01:
                    '<p>World Vision has been working in Afghanistan since 2001, when our operations began in response to an emergency. Within a few years, the organisation moved toward rehabilitation and then on to long-term development programming. Since 2011, we have focused our operations in Herat, Ghor and Badghis provinces in the western region of the country.\n\n</p><p>As World Vision, we strive to ensure all children: experience good health; are educated for life; are cared for, protected and participating, and experience the love of God and their neighbours. We are proud to say that we have an excellent reputation among Afghan communities and feel privileged to be widely accepted in the provinces in which we work. We see everything we do as a partnership between us, communities and our donors.</p>',
                  details_subtitle_01: 'World Vision Afghanistan',
                  details_summary:
                    '<p>Power dynamics in Afghanistan are changing at a terrifying speed, and food scarcity and forced displacement are soaring. World Vision warns that children will pay the price as they face a greater risk of violence, abuse and exploitation\n</p><p> As an International Partnership, World Vision Canada (WVC) is still operational in Afghanistan and working to meet the needs of children and their families. WVC has worked in Afghanistan but, as a result of a change in Afghanistan’s government, at this time, no Canadian raised funds (either from private donations or from government) can be programmed there due to Canadian Criminal Code restrictions. As concerned Canadians, you can call your federal Member of Parliament and express your concern and frustration that legal barriers make it impossible for Canadian charities, like WVC, to support work in Afghanistan. Raise your concerns about the significant level of needs and the urgency to remove these barriers so that life-saving work can resume.</p>',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Power dynamics in Afghanistan are changing at a terrifying speed, and food scarcity and forced displacement are soaring. World Vision warns that children will pay the price as they face a greater risk of violence, abuse and exploitation',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Afghanistan',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_01_value: 2001,
                  summary_02_info:
                    'in fiscal year 2021. **At this time, no Canadian raised funds can be programmed in Afghanistan due to Canadian Criminal Code restriction. Learn more below',
                  summary_02_label: 'people reached',
                  summary_02_value: '101,088',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.444
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/armenia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956923',
                  cta_title: 'Invest in stronger communities',
                  details_body_01:
                    '<p>World Vision started its operations in Armenia right after the devastating earthquake in 1988 by delivering humanitarian aid. Later, along with the humanitarian support, World Vision started implementing development projects.\n\n</p><p>In 2000, World Vision launched its first ‘Child Sponsorship’ programme in Gyumri marking the start of long-term community development interventions.\n\n</p><p>Today, World Vision operates 15 offices in Armenia, and more than 110,000 children throughout the country directly benefit from the organisation’s development projects.</p>',
                  details_subtitle_01: 'World Vision Armenia',
                  details_summary:
                    'Children in Armenia face challenges in the areas of health care, education and child protection. To address maternal and child health, we developed video lessons to teach women about healthy pregnancy and newborn care. Moms receive information on pregnancy stages, nutrition, newborn care and pregnant women’s rights.\n',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Children in Armenia face challenges in the areas of health care, education and child protection. To address maternal and child health, we developed video lessons to teach women about healthy pregnancy and newborn care. Moms receive information on pregnancy stages, nutrition, newborn care and pregnant women’s rights.\n',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Armenia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_01_value: 1988,
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '4,998',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Transitioning|High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.673
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/bangladesh',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956924',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Even as the national economy grows at an impressive rate, many children in Bangladesh are being left behind. Child stunting rates are still considered very high and wasting is becoming a growing concern. Most affected are children living in poverty, with 57 per cent found to be stunted, wasted or underweight. These conditions can affect a child’s life-long ability to develop and learn. Also critical is gender equality, with women’s wages as low as a dollar a day and 63 per cent of adolescent girls in early marriages.\n',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Even as the national economy grows at an impressive rate, many children in Bangladesh are being left behind. Child stunting rates are still considered very high and wasting is becoming a growing concern. Most affected are children living in poverty, with 57 per cent found to be stunted, wasted or underweight. These conditions can affect a child’s life-long ability to develop and learn. Also critical is gender equality, with women’s wages as low as a dollar a day and 63 per cent of adolescent girls in early marriages.\n',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Bangladesh',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  panel_mid01_second_label:
                    'deaths were prevented through the ENRICH program',
                  panel_mid01_title: 'IMPACT',
                  panel_mid01_value: 93,
                  panel_mid01_year: '2016 - 2021',
                  panel_mid02_second_label:
                    'stunting cases were prevented through the ENRICH program',
                  panel_mid02_title: 'IMPACT',
                  panel_mid02_value: 535,
                  panel_mid02_year: '2016 - 2021',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '1,000,995',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.719
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/bolivia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956925',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Despite the recent strengthening of child protection laws, children in Bolivia continue to face abuse and exploitation. Domestic violence and school bullying are widespread in the country. Women and girls are especially at risk of violence and sexual assault.\n',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Despite the recent strengthening of child protection laws, children in Bolivia continue to face abuse and exploitation. Domestic violence and school bullying are widespread in the country. Women and girls are especially at risk of violence and sexual assault.\n',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Bolivia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '36,618',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.722
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/brazil',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956926',
                  cta_title: 'Invest in stronger communities',
                  details_image_alt:
                    'Mountains, buildings and homes in Brazil.',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/country-pages/hero-1920x864/Children-in-Brazil-Sponsor-a-Child-World-Vision-Canada.jpg',
                  details_summary:
                    'For more than 47 years we have been helping the most vulnerable children in Brazil access education, health care and skills-building social programs. The stress caused by the Zika virus in 2015 created a heavy burden for families in the communities we serve, who already suffer the effects of poverty and widespread crime and violence.\nBrazil has the second-largest number of murders of children under 19 in the world.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'For more than 47 years we have been helping the most vulnerable children in Brazil access education, health care and skills-building social programs. The stress caused by the Zika virus in 2015 created a heavy burden for families in the communities we serve, who already suffer the effects of poverty and widespread crime and violence.\nBrazil has the second-largest number of murders of children under 19 in the world.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Brazil',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '822',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Transitioning|High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.695
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/burundi',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956927',
                  cta_title: 'Invest in stronger communities',
                  details_body_01:
                    'Attention to malnourished children, savings groups and agricultural improvements for higher crop yields all serve to focus our work in Burundi. We support families with child growth monitoring and nutrition education. Our savings groups empower members to build capital for basic daily needs. Agriculture training teaches farmers new techniques for growing healthier crops.',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'Since achieving independence in 1962, Burundi has struggled with violence, including a brutal civil war in the 1990s and ongoing political and ethnic tensions in the wake of the 2015 presidential elections. Conflict, economic hardship, food insecurity, disease and natural disasters led to hundreds of thousands of people being displaced. Among them, 83 per cent identified natural disasters as the main reason they left home.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Since achieving independence in 1962, Burundi has struggled with violence, including a brutal civil war in the 1990s and ongoing political and ethnic tensions in the wake of the 2015 presidential elections. Conflict, economic hardship, food insecurity, disease and natural disasters led to hundreds of thousands of people being displaced. Among them, 83 per cent identified natural disasters as the main reason they left home.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Burundi',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '749,472',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.769
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/cambodia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956928',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Children in Cambodia face major challenges in the areas of personal safety and health and nutrition. Child labour and child trafficking are prevalent in the region; more than 20,000 children live and work on the streets of Phnom Penh alone. World Vision works with communities and organizations to promote stronger child protection laws and their implementation.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Children in Cambodia face major challenges in the areas of personal safety and health and nutrition. Child labour and child trafficking are prevalent in the region; more than 20,000 children live and work on the streets of Phnom Penh alone. World Vision works with communities and organizations to promote stronger child protection laws and their implementation.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Cambodia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '106,542',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.684
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/central-african-republic',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956929',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    "The Central African Republic has faced decades-long political instability and occasional outbreaks of violence, resulting in a dire humanitarian situation for the country's roughly 5 million citizens. Ranked second to the last on the UN’s Human Development Index in 2022, children in Central African Republic are particularly vulnerable to malnutrition, conflict and outbreaks of disease. A total of 3.1 million people are in need of assistance.",
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    "The Central African Republic has faced decades-long political instability and occasional outbreaks of violence, resulting in a dire humanitarian situation for the country's roughly 5 million citizens. Ranked second to the last on the UN’s Human Development Index in 2022, children in Central African Republic are particularly vulnerable to malnutrition, conflict and outbreaks of disease. A total of 3.1 million people are in need of assistance.",
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Central African Republic',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '227,070',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/chad',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956930',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'Sitting in the heart of sub-Saharan Africa, years of drought, famine and war in Chad has led to an isolated economy, poor education and health care, and a dependence on foreign aid. Early marriage is widespread—70 per cent of girls marry before age 18. Child brides often drop out of school and face life-threatening complications from bearing children before their bodies are ready.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Sitting in the heart of sub-Saharan Africa, years of drought, famine and war in Chad has led to an isolated economy, poor education and health care, and a dependence on foreign aid. Early marriage is widespread—70 per cent of girls marry before age 18. Child brides often drop out of school and face life-threatening complications from bearing children before their bodies are ready.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Chad',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '1,008,787',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.593
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/china',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956931',
                  cta_title: 'Invest in stronger communities',
                  details_body_01:
                    'China has benefitted from a rapidly growing economy but child poverty in China remains a persistent issue, especially in rural areas. World Vision invests in child development through education, health and supporting small-scale infrastructure projects in water and sanitation systems.\nChild rights and protection are another priority. Parents are learning about raising their children in safe and nurturing environments. Children and youth are participating in local decisions that affect their lives. We’ve also launched programs to care for children left behind when their parents migrate to cities to find jobs—a common practice in rural areas where work is scarce.',
                  details_summary:
                    'China has benefitted from a rapidly growing economy but child poverty in China remains a persistent issue, especially in rural areas. World Vision invests in child development through education, health and supporting small-scale infrastructure projects in water and sanitation systems.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'China has benefitted from a rapidly growing economy but child poverty in China remains a persistent issue, especially in rural areas. World Vision invests in child development through education, health and supporting small-scale infrastructure projects in water and sanitation systems.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'China',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '2,190',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.682
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/colombia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956932',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Until recently, the Colombian government and armed insurgents have been embroiled in a brutal, decades-long conflict. Nearly six million people fled their homes and generations have grown up with violence, instability and hunger.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Until recently, the Colombian government and armed insurgents have been embroiled in a brutal, decades-long conflict. Nearly six million people fled their homes and generations have grown up with violence, instability and hunger.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Colombia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '91,988',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.725
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/democratic-republic-of-congo',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956933',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'The Democratic Republic of Congo is a country with complex needs. Here, we work with some of the world’s most vulnerable children. But we also work in more stable areas of the country where we can implement child sponsorship programs.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'The Democratic Republic of Congo is a country with complex needs. Here, we work with some of the world’s most vulnerable children. But we also work in more stable areas of the country where we can implement child sponsorship programs.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Democratic Republic of the Congo',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '791,173',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.576
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/dominican-republic',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956934',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'World Vision has been active in the Dominican Republic (DR) for more than 30 years and currently benefits more than 21,000 children directly and approximately 340,000 children and youth indirectly. The focus of the programs in the DR are education, child protection and emergencies. We also put a high emphasis on advocacy, particularly in trying to influence the government and its services.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision has been active in the Dominican Republic (DR) for more than 30 years and currently benefits more than 21,000 children directly and approximately 340,000 children and youth indirectly. The focus of the programs in the DR are education, child protection and emergencies. We also put a high emphasis on advocacy, particularly in trying to influence the government and its services.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Dominican Republic',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '21,392',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.699
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/ecuador',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956935',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'When Pope Francis, the first pope from Latin America, visited Ecuador, he made a passionate public plea for the rich to help poor families in the country. Ongoing challenges for children in Ecuador include low literacy rates and the abuse and exploitation of children.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'When Pope Francis, the first pope from Latin America, visited Ecuador, he made a passionate public plea for the rich to help poor families in the country. Ongoing challenges for children in Ecuador include low literacy rates and the abuse and exploitation of children.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Ecuador',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '51,783',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.739
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/el-salvador',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956936',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'In El Salvador, violence between government forces and powerful gangs has forced thousands of children and parents to flee their homes. We work with domestic organizations to support these families and create an environment where children are safe and protected.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'In El Salvador, violence between government forces and powerful gangs has forced thousands of children and parents to flee their homes. We work with domestic organizations to support these families and create an environment where children are safe and protected.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'El Salvador',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '268,875',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.738
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/ethiopia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956937',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'The economy of Ethiopia has been one of Africa’s most robust for the past decade, but a severe drought in 2015 devastated food supplies for its 100 million citizens. In the face of this food and water crisis, World Vision pledged to dig wells, maintain water sources and help farmers cultivate as much food as possible.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'The economy of Ethiopia has been one of Africa’s most robust for the past decade, but a severe drought in 2015 devastated food supplies for its 100 million citizens. In the face of this food and water crisis, World Vision pledged to dig wells, maintain water sources and help farmers cultivate as much food as possible.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Ethiopia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  panel_mid01_first_label:
                    'healthcare providers with knowledge of at least two key standards of gender-responsive and adolescent-friendly service provision increased from',
                  panel_mid01_second_label: 'Amhara region',
                  panel_mid01_title: 'CHANGE',
                  panel_mid01_value: ' 55% to 82%',
                  panel_mid01_year: '2016 - 2021',
                  panel_mid02_first_label:
                    'women holding leadership positions on health committees increased from',
                  panel_mid02_second_label: 'Amhara region',
                  panel_mid02_title: 'CHANGE',
                  panel_mid02_value: '15% to 56%',
                  panel_mid02_year: '2016 - 2021',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '990,518',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.691
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/georgia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956938',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Children in Georgia live with the tension between different ethnic and religious groups due to inequities in resource distribution and rights. The economic situation is improving, but many youths are still unemployed (25 per cent) and often living on the street. This makes them more susceptible to trafficking and other exploitation.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Children in Georgia live with the tension between different ethnic and religious groups due to inequities in resource distribution and rights. The economic situation is improving, but many youths are still unemployed (25 per cent) and often living on the street. This makes them more susceptible to trafficking and other exploitation.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Georgia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '4,159',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Transitioning|High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.732
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/ghana',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956939',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'World Vision started working in Ghana in 1979 and our goal is to contribute to the sustained well-being of 4.5 million vulnerable children, their families and communities.\nToday, we work in solidarity with families and children to help establish solid infrastructure in the areas of education, health care and child protection. We work with partners wherever possible to ensure sustainable, effective systems are put in place.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision started working in Ghana in 1979 and our goal is to contribute to the sustained well-being of 4.5 million vulnerable children, their families and communities.\nToday, we work in solidarity with families and children to help establish solid infrastructure in the areas of education, health care and child protection. We work with partners wherever possible to ensure sustainable, effective systems are put in place.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Ghana',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '32,171',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.666
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/guatemala',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956940',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'For many children in Guatemala, poverty and violence are far too often common companions with homicide rates among the highest in the world outside of war zones. To protect children from the violence around them, we work with pastors, teachers, community leaders and the children themselves to raise awareness and implement strategies to help kids be safe and thrive',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'For many children in Guatemala, poverty and violence are far too often common companions with homicide rates among the highest in the world outside of war zones. To protect children from the violence around them, we work with pastors, teachers, community leaders and the children themselves to raise awareness and implement strategies to help kids be safe and thrive',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Guatemala',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '24,624',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.655
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/haiti',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956941',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Haiti has been in a state of civil unrest since July 2018. Protests continue to erupt in cities across the country due to increases in the cost of living, government corruption, and high inflation. Protesters are calling for the resignation of the Head of State. Schools, public administration and trade continue to be paralyzed by threats of violence, preventing citizens to move around freely.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Haiti has been in a state of civil unrest since July 2018. Protests continue to erupt in cities across the country due to increases in the cost of living, government corruption, and high inflation. Protesters are calling for the resignation of the Head of State. Schools, public administration and trade continue to be paralyzed by threats of violence, preventing citizens to move around freely.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Haiti',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '28,714',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/honduras',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956942',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Unreliable rains have put additional strain on Hondurans in recent years. The key to combating hunger and disease in these conditions is to build household and community resilience. A lack of clean water is another environmental and health issue for children in Honduras. Community volunteers, health staff, church leaders and sanitation committees partner with us to train families on treating water and practicing basic sanitation to improve the health and nutrition of children.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Unreliable rains have put additional strain on Hondurans in recent years. The key to combating hunger and disease in these conditions is to build household and community resilience. A lack of clean water is another environmental and health issue for children in Honduras. Community volunteers, health staff, church leaders and sanitation committees partner with us to train families on treating water and practicing basic sanitation to improve the health and nutrition of children.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Honduras',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '113,976',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.716
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/india',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956943',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'India is the second-hardest hit by the COVID-19 pandemic in terms of the number of cases worldwide (43 million people infected as of April 2022). In 2021, daily infection rates soared to over 370,000 and daily deaths surpassed 3,000. Already vulnerable children were hit hardest as they lost parents and caregivers. A new strain of the virus also infected more children.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'India is the second-hardest hit by the COVID-19 pandemic in terms of the number of cases worldwide (43 million people infected as of April 2022). In 2021, daily infection rates soared to over 370,000 and daily deaths surpassed 3,000. Already vulnerable children were hit hardest as they lost parents and caregivers. A new strain of the virus also infected more children.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'India',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '242,184',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.625
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/indonesia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956944',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'In 2015, a report from UNICEF showed that child mortality rates had significantly dropped in Indonesia. Improvements were attributed to the work of many development agencies, including World Vision. These agencies have partnered to upgrade health for children by providing immunizations, treating childhood diseases and encouraging breastfeeding for the first six months of a child’s life.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'In 2015, a report from UNICEF showed that child mortality rates had significantly dropped in Indonesia. Improvements were attributed to the work of many development agencies, including World Vision. These agencies have partnered to upgrade health for children by providing immunizations, treating childhood diseases and encouraging breastfeeding for the first six months of a child’s life.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Indonesia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '67,576',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.688
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/iraq',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956945',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'In 2014, World Vision established its operations in the Kurdistan Region of Iraq, an autonomous region in the northern part of the country. The protracted conflict with ISIS in the region has caused millions to flee their homes. The conflict plus political instability and low oil prices have derailed the economy and left many families in precarious situations.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'In 2014, World Vision established its operations in the Kurdistan Region of Iraq, an autonomous region in the northern part of the country. The protracted conflict with ISIS in the region has caused millions to flee their homes. The conflict plus political instability and low oil prices have derailed the economy and left many families in precarious situations.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Iraq',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '164,282',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.535
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/jerusalem-west-bank-gaza',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956946',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Daily violence is a reality for children in Jerusalem/West Bank/Gaza communities. Amidst the conflicts, families struggle to make a living and children do their best to continue their education.World Vision helps communities through projects that generate food and income, such as agricultural cooperatives, savings groups and small business support. Schools are equipped with new resources, such as science labs, computer resource centres, libraries and sports facilities.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Daily violence is a reality for children in Jerusalem/West Bank/Gaza communities. Amidst the conflicts, families struggle to make a living and children do their best to continue their education.World Vision helps communities through projects that generate food and income, such as agricultural cooperatives, savings groups and small business support. Schools are equipped with new resources, such as science labs, computer resource centres, libraries and sports facilities.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Jerusalem - West Bank - Gaza',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '123,898',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/kenya',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956947',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'World Vision Kenya continues its active response to conditions of severe drought causing over 90 per cent of open water sources to dry up and affecting nearly 3.5 million people. Beyond the emergency response to drought, our priorities for children in Kenya are three-fold: strengthening family livelihoods and resilience, ensuring child protection and access to quality education, and improving child and maternal health.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision Kenya continues its active response to conditions of severe drought causing over 90 per cent of open water sources to dry up and affecting nearly 3.5 million people. Beyond the emergency response to drought, our priorities for children in Kenya are three-fold: strengthening family livelihoods and resilience, ensuring child protection and access to quality education, and improving child and maternal health.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Kenya',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  panel_mid01_second_label:
                    'deaths were prevented through the ENRICH program',
                  panel_mid01_title: 'IMPACT',
                  panel_mid01_value: 306,
                  panel_mid01_year: '2016 - 2021',
                  panel_mid02_second_label:
                    'stunting cases were prevented through the ENRICH program',
                  panel_mid02_title: 'IMPACT',
                  panel_mid02_value: 2250,
                  panel_mid02_year: '2016 - 2021',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '653,017',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.692
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/laos',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956948',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'For nearly 40 years, Laos has been steadily moving away from a centrally-planned economy towards a market-oriented economy, which has led to significant progress in key social and economic indicators. Still, many challenges remain for children in Laos. Eighty per cent of the population still depend on agriculture for their livelihoods and at least 18 per cent live in poverty.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'For nearly 40 years, Laos has been steadily moving away from a centrally-planned economy towards a market-oriented economy, which has led to significant progress in key social and economic indicators. Still, many challenges remain for children in Laos. Eighty per cent of the population still depend on agriculture for their livelihoods and at least 18 per cent live in poverty.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Laos',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '1,622',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.75
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/lebanon',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956949',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Lebanon currently hosts an estimated 1.5 million Syrians who have fled their homes, half of whom are children. World Vision’s Syria Crisis Response has reached approximately 1.1 million people, including more than 374,000 in Lebanon, who are assisted with food, cash, access to improved water and sanitation and child protection services.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Lebanon currently hosts an estimated 1.5 million Syrians who have fled their homes, half of whom are children. World Vision’s Syria Crisis Response has reached approximately 1.1 million people, including more than 374,000 in Lebanon, who are assisted with food, cash, access to improved water and sanitation and child protection services.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Lebanon',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '32,154',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.638
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/malawi',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956950',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  details_summary:
                    'World Vision Malawi has been implementing relief, development and advocacy interventions in the country for more than 35 years. Our goal is to directly improve the wellbeing of 1.5 million children in Malawi and indirectly support another 4 million people.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision Malawi has been implementing relief, development and advocacy interventions in the country for more than 35 years. Our goal is to directly improve the wellbeing of 1.5 million children in Malawi and indirectly support another 4 million people.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Malawi',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '2,055,983',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.671
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/mali',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956951',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'Mali is a drought-prone country and many residents do not have access to safe drinking water. We help prevent children in Mali from contracting waterborne diseases by providing safe water to hundreds of communities. With farming as the main source of income for more than 70 per cent of the population, we promote the use of drought-tolerant crops and other approaches to help families withstand droughts and floods.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Mali is a drought-prone country and many residents do not have access to safe drinking water. We help prevent children in Mali from contracting waterborne diseases by providing safe water to hundreds of communities. With farming as the main source of income for more than 70 per cent of the population, we promote the use of drought-tolerant crops and other approaches to help families withstand droughts and floods.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Mali',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  panel_mid01_first_label:
                    'households managing to meet their basic\nneeds—including food, health and education—increased\nfrom',
                  panel_mid01_second_label: 'Seno',
                  panel_mid01_title: 'CHANGE',
                  panel_mid01_value: '44% to 67%',
                  panel_mid01_year: '2013 - 2021',
                  panel_mid02_first_label:
                    'households having enough food for their families throughout the year increased from',
                  panel_mid02_second_label: 'Buwatun',
                  panel_mid02_title: 'CHANGE',
                  panel_mid02_value: '16.9% to 66.2%',
                  panel_mid02_year: '2013 - 2021',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '595,526',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.591
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/mauritania',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956952',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'Many communities in Mauritania do not have health facilities nearby. When a health worker is desperately needed—such as during a difficult birth or when a newborn has a high fever—there may not be one. We step into this health care gap by training and equipping Community Health Workers who help prevent deaths from avoidable causes such as diarrhea, pneumonia and malaria among children.\nMauritania has one of the lowest literacy and school enrollment rates in sub-Saharan Africa.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Many communities in Mauritania do not have health facilities nearby. When a health worker is desperately needed—such as during a difficult birth or when a newborn has a high fever—there may not be one. We step into this health care gap by training and equipping Community Health Workers who help prevent deaths from avoidable causes such as diarrhea, pneumonia and malaria among children.\nMauritania has one of the lowest literacy and school enrollment rates in sub-Saharan Africa.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Mauritania',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '79,188',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.606
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/mexico',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956953',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Food insecurity is a huge concern in Mexico, with some states reporting malnutrition levels as high as 36.4 per cent among children. Limited access to clean water is a major cause of malnutrition because of the relationship between health and nutrition—as when sick children lose their appetite or their capacity to absorb nutrients. We address this issue by providing rainwater collection tanks, improving sanitation and infrastructure and promoting nutritious vegetable gardens',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Food insecurity is a huge concern in Mexico, with some states reporting malnutrition levels as high as 36.4 per cent among children. Limited access to clean water is a major cause of malnutrition because of the relationship between health and nutrition—as when sick children lose their appetite or their capacity to absorb nutrients. We address this issue by providing rainwater collection tanks, improving sanitation and infrastructure and promoting nutritious vegetable gardens',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Mexico',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '6,438',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Transitioning|High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.757
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/mongolia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956954',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'While Mongolia is still known for its nomadic herding, its population has become increasingly urban as families seek job opportunities and better education for their children. Data show that two in five vulnerable people in Mongolia are children under the age of 15.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'While Mongolia is still known for its nomadic herding, its population has become increasingly urban as families seek job opportunities and better education for their children. Data show that two in five vulnerable people in Mongolia are children under the age of 15.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Mongolia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  panel_mid01_first_label:
                    'the percentage of parents and caregivers who had been affected by disaster but were able to maintain their standard of living increased from',
                  panel_mid01_second_label: 'Khan Uul',
                  panel_mid01_title: 'CHANGE',
                  panel_mid01_value: '46% to 55%',
                  panel_mid01_year: '2013 - 2021',
                  panel_mid02_first_label:
                    'households with enough food year-round for their family needs increased from',
                  panel_mid02_second_label: 'Chingeltei',
                  panel_mid02_title: 'CHANGE',
                  panel_mid02_value: '52.6% to 74.4%',
                  panel_mid02_year: '2013 - 2021',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '80,642',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.716
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/mozambique',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956955',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'In 2015, Mozambique was officially declared to be free of thousands of landmines left over from decades of war, meaning farmers can cultivate crops and graze livestock safely. World Vision supports children in Mozambique through agriculture associations where family farmers collaborate on buying seeds and marketing their crops. Goat rearing and fish farming are also ways for families to increase food supplies and earn income.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'In 2015, Mozambique was officially declared to be free of thousands of landmines left over from decades of war, meaning farmers can cultivate crops and graze livestock safely. World Vision supports children in Mozambique through agriculture associations where family farmers collaborate on buying seeds and marketing their crops. Goat rearing and fish farming are also ways for families to increase food supplies and earn income.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Mozambique',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '41,518',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.758
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/nepal',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956956',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Nepal is one of the poorest and least-developed countries in Asia. Poor children in Nepal are among the country’s most vulnerable citizens, susceptible to abuse, child labour and neglect. The under-five mortality rate stands at approximately 30 deaths per 1,000 live births, compared with 5 deaths per 1,000 live births in Canada',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Nepal is one of the poorest and least-developed countries in Asia. Poor children in Nepal are among the country’s most vulnerable citizens, susceptible to abuse, child labour and neglect. The under-five mortality rate stands at approximately 30 deaths per 1,000 live births, compared with 5 deaths per 1,000 live births in Canada',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Nepal',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '49,521',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.683
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/nicaragua',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956957',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'A World Vision survey in Nicaragua showed that nearly half of the respondents would not report instances of child abuse. In response, we launched an awareness campaign called I Use My Voice Against Child Abuse and have had thousands of children and adults participate in discussion groups about how to report and prevent abuse of children in Nicaragua.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'A World Vision survey in Nicaragua showed that nearly half of the respondents would not report instances of child abuse. In response, we launched an awareness campaign called I Use My Voice Against Child Abuse and have had thousands of children and adults participate in discussion groups about how to report and prevent abuse of children in Nicaragua.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Nicaragua',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '34,698',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.796
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/niger',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956958',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'When Ebola ravaged West Africa in 2015, World Vision Niger’s efforts turned to training and educating faith leaders. Using workshops called Channels of Hope, we reached religious leaders from all regions of Niger, training them to better convey the message of disease prevention among their faith communities.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'When Ebola ravaged West Africa in 2015, World Vision Niger’s efforts turned to training and educating faith leaders. Using workshops called Channels of Hope, we reached religious leaders from all regions of Niger, training them to better convey the message of disease prevention among their faith communities.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Niger',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '121,520',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.629
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/peru',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956959',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'In the past decade, Peru’s economy has grown steadily, but income inequity still leaves millions of children living in poverty. In remote rural areas and “less desirable” urban neighbourhoods, poverty remains deep and has led us to run programs to train adults and youth in skills that will help them improve family income.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'In the past decade, Peru’s economy has grown steadily, but income inequity still leaves millions of children living in poverty. In remote rural areas and “less desirable” urban neighbourhoods, poverty remains deep and has led us to run programs to train adults and youth in skills that will help them improve family income.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Peru',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Latin America',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '37,385',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'High Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.721
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/philippines',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956960',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'Our priorities for children in the Philippines are child protection, education, health and nutrition and economic empowerment. World Vision Philippines promotes thriving communities where peace and justice prevail, and all can enjoy security, opportunity and happiness. We do this by coming alongside the poor and vulnerable, building their capacity to be agents of sustainable change.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Our priorities for children in the Philippines are child protection, education, health and nutrition and economic empowerment. World Vision Philippines promotes thriving communities where peace and justice prevail, and all can enjoy security, opportunity and happiness. We do this by coming alongside the poor and vulnerable, building their capacity to be agents of sustainable change.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Philippines',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '15,526',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.784
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/rwanda',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956961',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'World Vision began operations in Rwanda in 1994 in response to the humanitarian crisis caused by the genocide. In 2000, the mission moved from relief to long-term development and supporting children in Rwanda. Today, we impact the lives of more than one million Rwandans with a focus on the most vulnerable children and women.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision began operations in Rwanda in 1994 in response to the humanitarian crisis caused by the genocide. In 2000, the mission moved from relief to long-term development and supporting children in Rwanda. Today, we impact the lives of more than one million Rwandans with a focus on the most vulnerable children and women.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Rwanda',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '878,335',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.805
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/senegal',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956962',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'When one million Senegalese people were impacted by severe drought, World Vision responded with emergency food kits to protect children and families from malnutrition. Longer term, we help farmers access drought-resistant seeds and develop cereal banks for grain storage. Cereal banks protect the harvest from damage by fire or pests and allow communities to set aside food for the lean season.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'When one million Senegalese people were impacted by severe drought, World Vision responded with emergency food kits to protect children and families from malnutrition. Longer term, we help farmers access drought-resistant seeds and develop cereal banks for grain storage. Cereal banks protect the harvest from damage by fire or pests and allow communities to set aside food for the lean season.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Senegal',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '104,123',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.684
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/sierra-leone',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956963',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'World Vision was launched in Sierra Leone in 1996 during the civil war and has since transitioned to long-term development. Priority sectors today are health and nutrition, education and life skills, economic development and child protection.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision was launched in Sierra Leone in 1996 during the civil war and has since transitioned to long-term development. Priority sectors today are health and nutrition, education and life skills, economic development and child protection.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Sierra Leone',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '16,542',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.655
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/somalia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956964',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  details_summary:
                    'World Vision has worked with communities, families and children in Somalia since 1992. The country has been through consecutive seasons of failed rains with a devastating impact on poor, rural families who depend on farming and grazing for their food intake and family income. Currently, approximately 1.4 million children are at risk of acute malnutrition.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision has worked with communities, families and children in Somalia since 1992. The country has been through consecutive seasons of failed rains with a devastating impact on poor, rural families who depend on farming and grazing for their food intake and family income. Currently, approximately 1.4 million children are at risk of acute malnutrition.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Somalia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  panel_mid01_first_label:
                    'respondents in our final project evaluation agreed that activities and efforts in the community to protect children from harm, exploitation, violence and abuse had increased since the previous year',
                  panel_mid01_second_label: 'Baidoa',
                  panel_mid01_title: 'CHANGE',
                  panel_mid01_value: 0.9,
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/WVC-About-Us-hero-image-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '761,500',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/south sudan',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956965',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'South Sudan gained independence from Sudan in 2011, but the new country continues to experience instability and is still a fragile state. One in five people have had to flee their homes since the re-emergence of conflict in 2013. Ongoing conflict makes it difficult to reach the most vulnerable with much needed assistance.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'South Sudan gained independence from Sudan in 2011, but the new country continues to experience instability and is still a fragile state. One in five people have had to flee their homes since the re-emergence of conflict in 2013. Ongoing conflict makes it difficult to reach the most vulnerable with much needed assistance.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'South Sudan',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '1,392,542',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/sri-lanka',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956966',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'World Vision has been serving the people of Sri Lanka for more than 40 years with development and relief programs across the Island. We are active in over 2,500 villages, impacting the lives of more than 270,000 children in Sri Lanka. ',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision has been serving the people of Sri Lanka for more than 40 years with development and relief programs across the Island. We are active in over 2,500 villages, impacting the lives of more than 270,000 children in Sri Lanka. ',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Sri Lanka',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  panel_mid01_first_label:
                    'children who can read with comprehension increased from',
                  panel_mid01_second_label: 'Eravur Pattu',
                  panel_mid01_title: 'CHANGE',
                  panel_mid01_value: '18% to 65%',
                  panel_mid01_year: '2014 - 2021',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '19,650',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Medium Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.67
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/sudan',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956967',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'World Vision’s history in Sudan dates back to 1983 when it was operational for five years before closing in 1988. We resumed operations in Sudan in 2004 in response to the Darfur crisis. As the work has evolved, we’ve opened field offices in Khartoum and Blue Nile states.In Sudan, the support of the Government of Canada, along with individual Canadians, allows us to run relief, recovery and development programs that benefit more than 1.5 million people directly and indirectly.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision’s history in Sudan dates back to 1983 when it was operational for five years before closing in 1988. We resumed operations in Sudan in 2004 in response to the Darfur crisis. As the work has evolved, we’ve opened field offices in Khartoum and Blue Nile states.In Sudan, the support of the Government of Canada, along with individual Canadians, allows us to run relief, recovery and development programs that benefit more than 1.5 million people directly and indirectly.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Sudan',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '479,444',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile'
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/syria',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956968',
                  cta_title: 'Invest in stronger communities',
                  details_summary:
                    'The Syrian crisis is responsible for the highest number of refugees in the world and has resulted in the second-highest number of internally displaced people. Nearly 610,000 people have been killed, and 90 per cent of the country’s children are in need of help.. Approximately 13 million people have been forced from their homes',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'The Syrian crisis is responsible for the highest number of refugees in the world and has resulted in the second-highest number of internally displaced people. Nearly 610,000 people have been killed, and 90 per cent of the country’s children are in need of help.. Approximately 13 million people have been forced from their homes',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Syria Response (Turkey, Jordan, Syria)',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Most Fragile',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.568
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/tanzania',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956969',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'To help families improve their situation, we support farmers and entrepreneurs with skills and resources to increase their yields and incomes. Advocacy training on legal rights to health and education, and how to work with government to ensure promised services are delivered, is part of our work. Our approach helps people see themselves as valued by God, and active participants in the development process.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'To help families improve their situation, we support farmers and entrepreneurs with skills and resources to increase their yields and incomes. Advocacy training on legal rights to health and education, and how to work with government to ensure promised services are delivered, is part of our work. Our approach helps people see themselves as valued by God, and active participants in the development process.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Tanzania',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  panel_mid01_second_label:
                    'deaths were prevented through the ENRICH program',
                  panel_mid01_title: 'IMPACT',
                  panel_mid01_value: 563,
                  panel_mid01_year: '2016 - 2021',
                  panel_mid02_second_label:
                    'stunting cases were prevented through the ENRICH program',
                  panel_mid02_title: 'IMPACT',
                  panel_mid02_value: 2149,
                  panel_mid02_year: '2016 - 2021',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '3,435,103',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.707
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/uganda',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956970',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'World Vision Uganda started in 1986, after a brutal six-year war. Helping those affected by conflict and violence is still a priority, whether in refugee camps housing South Sudanese who have fled to northern Uganda, or at the Children of War Rehabilitation Centre in Gulu, where we rehabilitate and resettle children affected by war. Services provided range from meeting basic needs through education and health care, to psychological and spiritual support.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'World Vision Uganda started in 1986, after a brutal six-year war. Helping those affected by conflict and violence is still a priority, whether in refugee camps housing South Sudanese who have fled to northern Uganda, or at the Children of War Rehabilitation Centre in Gulu, where we rehabilitate and resettle children affected by war. Services provided range from meeting basic needs through education and health care, to psychological and spiritual support.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Uganda',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '404,734',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.717
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/zambia',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956971',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'Ongoing challenges for Zambia include deep rural poverty and high unemployment rates. World Vision provides business skills trainings so men and women can start small businesses and provide for their children. Savings groups allow members to accrue small funds for emergencies and access loans to build their businesses.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Ongoing challenges for Zambia include deep rural poverty and high unemployment rates. World Vision provides business skills trainings so men and women can start small businesses and provide for their children. Savings groups allow members to accrue small funds for emergencies and access loans to build their businesses.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Zambia',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '121,783',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.726
                },
                {
                  URL: 'https://www.worldvision.ca/our-work/zimbabwe',
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956972',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_summary:
                    'Zimbabwe continues to face extremely high unemployment rates, with a resulting 76 per cent of the population living in poverty. Families often run out of food between harvests and one-fourth of children are stunted due to malnutrition.',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_body:
                    'Zimbabwe continues to face extremely high unemployment rates, with a resulting 76 per cent of the population living in poverty. Families often run out of food between harvests and one-fourth of children are stunted due to malnutrition.',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Zimbabwe',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '185,304',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.732
                },
                {
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956973',
                  cta_title: 'Invest in stronger communities',
                  details_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/get-involved/corporate-partnership/world-vision-corporate-partnerships-group-of-children-smiling-desktop-v2.jpg',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Angola',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Africa',
                  results_image_url:
                    'https://www.worldvision.ca/WorldVisionCanada/media/about-us/world-vision-about-us-school-girl-secondary-banner-desktop.jpg',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '78,096',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.657
                },
                {
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956974',
                  cta_title: 'Invest in stronger communities',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Myanmar',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Asia and Pacific',
                  panel_mid01_second_label:
                    'deaths were prevented through the ENRICH program',
                  panel_mid01_title: 'IMPACT',
                  panel_mid01_value: 61,
                  panel_mid01_year: '2016 - 2021',
                  panel_mid02_second_label:
                    'stunting cases were prevented through the ENRICH program',
                  panel_mid02_title: 'IMPACT',
                  panel_mid02_value: 399,
                  panel_mid02_year: '2016 - 2021',
                  results_title: 'Results',
                  summary_01_label: 'Partnering since',
                  summary_02_info: 'in fiscal year 2021',
                  summary_02_label: 'people reached',
                  summary_02_value: '257,005',
                  summary_03_label: 'projects supported',
                  summary_04_label: 'Level of Fragility',
                  summary_04_value: 'Very Low Developing',
                  summary_05_label: 'Gender Equality Rank',
                  summary_05_value: 0.681
                },
                {
                  cta_body:
                    'When you give where most needed, you’ll help provide things like healthcare, safety, food, clean water and more to vulnerable children and families around the world. It’s a powerful way to help fight poverty and hunger, and give hope to those in need.',
                  cta_button_label: 'Donate to Where Most Needed',
                  cta_button_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  cta_image_url:
                    'https://cdn.shopify.com/s/files/1/1786/1839/products/fuel_for_the_future_crop_seeds_for_farmers_main-image_2x_c1181161-fbc1-449c-aefe-26968b912d4d_1000x1000.jpg?v=1632956975',
                  cta_title: 'Invest in stronger communities',
                  details_title: 'Country Details',
                  graphbox_title: 'Explore our results and investment',
                  header_cta_label: 'Donate',
                  header_cta_url:
                    'https://donate.worldvision.ca/products/where-most-needed',
                  header_title: 'Ukraine Response (Ukraine, Romania, Moldova)',
                  navigation_menu: 'Countries',
                  navigation_regions: 'Middle East and Eastern Europe',
                  results_title: 'Results'
                }
              ]
            }
          },
          {
            label: 'Programs',
            url: '/our-work/programs'
          },
          {
            label: 'Resources',
            url: '/our-work/resources'
          }
        ]}
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
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
