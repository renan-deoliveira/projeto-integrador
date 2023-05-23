import styles from '@/styles/Home.module.css'
import Carousel from '@/components/Carousel/carousel'
import Destaque from '@/components/Destaque/Destaque'

export default function Home() {
  return (
    <>

      <main className={styles.main}>

        <Carousel />
        <Destaque />
      </main>
    </>
  )
}
