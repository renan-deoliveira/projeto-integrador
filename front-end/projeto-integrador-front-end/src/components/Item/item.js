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
            <div key={index} className={styles.banner}>
                <img src ={props.src} alt={props.alt} className={styles.img_banner}/>
                <div>
                    <h3 className={styles.titulo_banner}>{props.titulo} - {props.console}</h3>
                    <p className={styles.calssificacao_banner}>{rating(props.classificacao)} ({props.classificacao})</p>
                    <p className={styles.preco_banner}>R$ {props.preco},00</p>
                    <p className={styles.preco_banner}>até {props.parcelas}x de R$ {props.valorDaParcela},00 sem juros</p>
                    <p className={styles.preco_banner}>ou R$ {(props.preco / 10) * 9}  no PIX</p>
                </div>  
            </div>
       </>
    )
}