import styles from '../../styles/Home.module.css'


export default function Item({ props, index }) {

    const rating = (number) => {
        let starRating = "";
        for (var i = 0; i < 5; i++) {
            (number <= i ? starRating += "☆" : starRating += "★");
        }
        return starRating;
    };
    return (
        <>
            <div key={index} className={styles.item}>
                {<img src={props.picture} alt={props.alt} className={styles.item_img} />}
                <div>
                    <h3 className={styles.item_titulo}>{props.name} - {props.console}</h3>
                    <p className={styles.item_preco}>R$ {props.price},00</p>
                    <p className={styles.item_preco}>até {props.parcelas}x de R$ {props.price / props.parcelas} sem juros</p>
                    <p className={styles.item_preco}>ou R$ {(props.price / 10) * 9}  no PIX</p>
                </div>
            </div>
        </>
    )
}
