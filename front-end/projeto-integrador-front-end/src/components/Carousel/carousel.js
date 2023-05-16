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
                <div className={styles.imageAndbuttons}>
                    <button onClick={prevClick} key ='1'className={styles.Buttons}>⇠</button>
                    <img src={images[imageIndex].src} alt={images[imageIndex].alt} className={styles.img}/>
                    <button onClick={nextClick} className={styles.Buttons}>⇢</button>
                </div>
                <div className={styles.bools}>
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