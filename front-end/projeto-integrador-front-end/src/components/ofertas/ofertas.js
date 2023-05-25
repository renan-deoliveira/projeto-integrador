import styles from '../../styles/Home.module.css'
import Item from "../Item/item";

export default function ofertas() {
    const items = [
        {
            src: "/assets/fifa.webp",
            preco: 137,
            parcelas: 5,
            valorDaParcela: 28,
            titulo: "Fifa 2022",
            console: "Xbox One",
            classificacao: 4,
            alt: "item 1"
        },
        {
            src: "/assets/minecraft.webp",
            preco: 120,
            parcelas: 5,
            valorDaParcela: 24,
            titulo: "Minecraft",
            console: "Xbox One",
            classificacao: 4,
            alt: "item 2"
        },
        {
            src: "/assets/overwatch.jpg",
            preco: 235,
            parcelas: 5,
            valorDaParcela: 47,
            titulo: "Overwatch 2",
            console: "PS4",
            classificacao: 4,
            alt: "item 3"
        },
        {
            src: "/assets/super-mario.jpg",
            preco: 350,
            parcelas: 5,
            valorDaParcela: 70,
            titulo: "Super Mario",
            console: "Nintendo",
            classificacao: 3,
            alt: "item 4"
        },
        {
            src: "/assets/csGo.jpeg",
            preco: 184,
            parcelas: 5,
            valorDaParcela: 37,
            titulo: "Counter Striker",
            console: "PS4",
            classificacao: 4,
            alt: "item 5"
        }
    ];
    return (
        <>
            <div className={styles.ofertas}>
                <h2 className={styles.ofertas_titulo}>ofertas</h2>
                <div className={styles.ofertas_iten}>
                    {items.map(function (item, index) {
                        return <Item props={item} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}