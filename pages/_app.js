import '../styles/globals.scss'
import SubNavigation from '../components/SubNavigation/SubNavigation'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SubNavigation navItems={pageProps.navigation} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
