import styles from '@/styles/Home.module.css'
import Carousel from '@/components/Carousel/carousel'
// import Destaque from '@/components/Destaque/Destaque'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
// import Slider from '@/components/Carrousel2/carrousel2'



export default function Home() {
  return (
    <>

      <main className={styles.main}>

        <Carousel />
        {/* <Destaque /> */}
        {/* <Slider /> */}
        <Footer />
      </main>
    </>
  )
}
