// Styles from World Vision for the global components
import '../_wvc/dist/css/styles.css'

import '../styles/globals.scss'
import styles from './app.module.scss'
import SubNavigation from '../components/SubNavigation/SubNavigation'
import Script from 'next/script'
import GlobalNavBar from '../components/Global/NavBar/NavBar'
import GlobalFooter from '../components/Global/Footer/Footer'
import { convertToKebabCase } from '../utils/convertStrings'

function MyApp({ Component, pageProps }) {
  const newsletterId =
    pageProps.controls &&
    convertToKebabCase(
      pageProps.controls.find(
        (control) => control.ITEM === 'section_order_newsletter'
      )?.TEXT
    )
  return (
    <div className={styles['page-container']}>
      <Script src='../_wvc/dist/js/lazy-loading.js' />
      <Script src='../_wvc/dist/js/header.js' />
      <Script src='../_wvc/dist/js/jssocials.min.js' />
      <Script src='../_wvc/dist/js/site.js' />
      <Script src='../_wvc/dist/js/web-chat.js' />
      <Script src='../_wvc/dist/js/bootstrap.min.js' />
      <Script src='../_wvc/dist/js/data-layer-events.js' />
      <Script src='../_wvc/dist/js/bootstrap-tabcollapse.js' />

      <Script src='https://unpkg.com/@world-vision-canada/wvc-design-system@1.*.*/dist/wvc.umd.min.js' />
      <Script src='https://code.jquery.com/jquery-3.6.0.min.js' />
      <Script src='https://sdks.shopifycdn.com/js-buy-sdk/1.11.0/index.umd.min.js' />

      <GlobalNavBar />
      <SubNavigation navItems={pageProps.navigation} />
      <Component {...pageProps} />
      <div className={styles['disclaimer']}>{pageProps.disclaimer}</div>

      <div className='newsletter-container' id={newsletterId}>
        <iframe
          data-gtm-yt-inspected-1_25='true'
          data-gtm-yt-inspected-9483441_46='true'
          id='newsletter-subscription2'
          scrolling='no'
          onLoad={() => {
            if (typeof ewt != 'undefined' && ewt && ewt.setIFrameSrc) {
              ewt.setIFrameSrc(
                this,
                'https://site3.worldvision.ca/Double_Optin/newsletter'
              )
            }
          }}
          src='https://site3.worldvision.ca/Double_Optin/newsletter'
          className='newsletter-iframe'
          title='Newsletter Signup'
          width='100%'
        />
      </div>
      <GlobalFooter />
    </div>
  )
}

export default MyApp
