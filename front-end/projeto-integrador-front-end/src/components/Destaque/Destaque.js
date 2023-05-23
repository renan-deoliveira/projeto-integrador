import styles from '../../styles/Home.module.css'
import Item from "../Item/item";

export default function Destaque() {
    const items = [
        {
            src: "/assets/fifa.png",
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
            console: "PS4",
            classificacao: 3,
            alt: "item 4"
        },
        {
            src: "/assets/csGo.jpeg",
            preco: 184,
            parcelas: 5,
            valorDaParcela: 37,
            titulo: "Couter Striker",
            console: "Xbox Serie X",
            classificacao: 4,
            alt: "item 5"
        }
    ];
    return (
        <>
            <div className={styles.destaque}>
                <h2 className={styles.destaque_titulo}>Destaques</h2>
                <div className={styles.itens}>
                    {items.map(function (item, index) {
                        return <Item props={item} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}