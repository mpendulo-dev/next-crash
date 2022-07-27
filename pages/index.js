import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
      <Head>
          <title>Ninja Home</title>
          <meta name='keywords' content='ninjas'/>
        </Head>
      <div>
          
        <h1 className={styles.title}>Home page</h1>
          <p className={styles.text}>Below is a list of ninjas/users that we get from the JSON placeholder API, to make requests to the API we took advantage of NextJS SSR, so the data from the API fetched on initial page load</p>
          <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
          </Link>
        
      </div>
    </>
  )
}
