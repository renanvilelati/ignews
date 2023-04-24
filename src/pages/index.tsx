import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { SubscribeButton } from '@/SubscribeButton'

export default function Home() {
  return (
    <>
      <Head> <title>Home | ig.news</title> </Head>
    
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>😁 Hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>

            <p>
              Get access to all the publications <br />
              <span> for $9.98 month </span>
            </p>

            <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
