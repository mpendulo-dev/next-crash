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
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic, nulla facere itaque et vitae est ipsa ullam, amet natus beatae libero. Quas odio voluptate tenetur. Unde vero eveniet beatae?</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic, nulla facere itaque et vitae est ipsa ullam, amet natus beatae libero. Quas odio voluptate tenetur. Unde vero eveniet beatae?</p>
          <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
          </Link>
        
      </div>
    </>
  )
}
