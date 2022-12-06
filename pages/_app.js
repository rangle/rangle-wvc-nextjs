// Styles from World Vision for the global components
import '../_wvc/dist/css/styles.css'

import '../styles/globals.scss'
import SubNavigation from '../components/SubNavigation/SubNavigation'
import Script from 'next/script'
import GlobalNavBar from '../components/Global/NavBar/NavBar'
import GlobalFooter from '../components/Global/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script src='../_wvc/dist/js/lazy-loading.js' />
      <Script src='../_wvc/dist/js/header.min.js' />
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

      <div className='newsletter-container'>
        <iframe
          data-gtm-yt-inspected-1_25='true'
          data-gtm-yt-inspected-9483441_46='true'
          id='newsletter-subscription2'
          onLoad="javascript: if(typeof ewt != 'undefined' &amp;&amp; ewt &amp;&amp; ewt.setIFrameSrc) ewt.setIFrameSrc(this, 'https://site3.worldvision.ca/Double_Optin/newsletter'); else if(this.src != 'https://site3.worldvision.ca/Double_Optin/newsletter') this.src = 'https://site3.worldvision.ca/Double_Optin/newsletter';"
          scrolling='no'
          src='https://site3.worldvision.ca/Double_Optin/newsletter'
          className='newsletter-iframe'
          title='Newsletter Signup'
          width='100%'
        ></iframe>
      </div>
      <GlobalFooter />
    </div>
  )
}

export default MyApp
