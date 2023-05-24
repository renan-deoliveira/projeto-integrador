import { useState } from "react";
import styles from "../../styles/Home.module.css"


export default function Carousel()  {
    const [imageIndex, setImageIndex] = useState(0)

    const images = [
        {
            src: "/assets/fortnitee.png",
            alt: "Noticia 1"
        },
        {
            src: "/assets/jogosVariaveis.jpg",
            alt: "Noticia 2"
        },
        {
            src: "/assets/jogosDigitais.png",
            alt: "Noticia 3"
        }
    ];

    const prevClick = () => {
        setImageIndex(imageIndex > 0 ? imageIndex - 1 : imageIndex + (images.length - 1));
    };
    const nextClick = () => {
        setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : imageIndex - (images.length - 1));
    };
    return(
        <>
            <div className={styles.carrousel}>
                <div className={styles.carrousel_itens}>
                    <button onClick={prevClick} key ='1'className={styles.carrousel_buttons}>⇠</button>
                    <img src={images[imageIndex].src} alt={images[imageIndex].alt} className={styles.carrousel_img}/>
                    <button onClick={nextClick} className={styles.carrousel_buttons}>⇢</button>
                </div>
                <div className={styles.carrousel_bools}>
                    {images.map((image, index) =>(
                        <span key={index} onClick={() => setImageIndex(index)} >
                            {imageIndex === index ? "●" : "○"}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}