import Layout from '../components/Layout'
import '../styles/globals.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import React from 'react'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on("routeChangeStart", handleRouteStart)
    Router.events.on("routeChangeComplete", handleRouteDone)
    Router.events.on("routeChangeError", handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart)
      Router.events.off("routeChangeComplete", handleRouteDone)
      Router.events.off("routeChangeError", handleRouteDone)
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
