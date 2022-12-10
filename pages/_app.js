import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
// Styles from World Vision for the global components
import '../_wvc/dist/css/styles.css'

import '../styles/globals.scss'
import styles from './app.module.scss'
import SubNavigation from '../components/SubNavigation/SubNavigation'
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

  const router = useRouter()
  return (
    <div className={styles['page-container']}>
      <Head>
        <title>{pageProps.TITLETAG}</title>
        <meta name='description' content={pageProps.METADATA} />
        <link
          rel='canonical'
          href={`https://our-work.worldvision.ca${router.asPath}`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        strategy='beforeInteractive'
        src='https://code.jquery.com/jquery-3.6.0.min.js'
      ></Script>
      <Script src='js/lazy-loading.js' />
      <Script src='js/header.js' />
      {/* @TODO: Do we need this? I've commented it out in site.js due to errors */}
      {/* <Script src='js/jssocials.min.js' /> */}
      <Script src='js/site.js' />
      {/* @TODO: Do we need web-chat? If so we need to debug:
        TypeError: Cannot read properties of null (reading 'contentWindow')
      */}
      {/* <Script src='js/web-chat.js' /> */}
      <Script src='js/bootstrap.min.js' />
      <Script src='js/data-layer-events.js' />
      <Script src='js/bootstrap-tabcollapse.js' />

      <Script src='https://unpkg.com/@world-vision-canada/wvc-design-system@1.*.*/dist/wvc.umd.min.js'></Script>
      <Script src='https://sdks.shopifycdn.com/js-buy-sdk/1.11.0/index.umd.min.js'></Script>

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
