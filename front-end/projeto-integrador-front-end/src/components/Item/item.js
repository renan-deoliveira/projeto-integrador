import styles from '../../styles/Home.module.css'


export default function Item({props,index})  {

    const rating = (number) => {
        let starRating = "";
        for (var i = 0; i < 5 ; i++){
            ( number <= i ? starRating += "☆" : starRating += "★");
        }
        return starRating ;
    };
    return(
        <>
             <div key={index} className={styles.item}> 
                {<img src ={props.src} alt={props.alt}  className={styles.item_img}/> }
                <div>
                    <h3 className={styles.item_titulo}>{props.titulo} - {props.console}</h3>
                    <p className={styles.item_preco}>R$ {props.preco},00</p>
                    <p className={styles.item_preco}>até {props.parcelas}x de R$ {props.valorDaParcela},00 sem juros</p>
                    <p className={styles.item_preco}>ou R$ {(props.preco / 10) * 9}  no PIX</p>
                </div>
            </div>
       </>
    )
}
