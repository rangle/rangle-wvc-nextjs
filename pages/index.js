import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Vision - Our Work</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={`${styles['section']} ${styles['section--hero']}`}>
          <h2>Hero</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--counter']}`}
        >
          <h2>Counter</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--sticky-carousel']}`}
        >
          <h2>Sticky Carousel</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--video-carousel']}`}
        >
          <h2>Video Carousel</h2>
        </section>
        <section className={`${styles['section']} ${styles['section--map']}`}>
          <h2>Map</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--sector-overview']}`}
        >
          <h2>Sector Overview w modal</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--rolling-credits']}`}
        >
          <h2>Rolling Credits</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--did-you-know']}`}
        >
          <h2>Did you know carousel</h2>
        </section>
        <section
          className={`${styles['section']} ${styles['section--pre-footer']}`}
        >
          <h2>Pre footer catchall</h2>
        </section>
      </main>
    </div>
  )
}
