import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'


export default function ProductRegister() {

    const [name, setname] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();
    const [parcelas, setParcelas] = useState();
    const [console, setConsole] = useState();
    const [altText, setAltText] = useState();
    const [rating, setRating] = useState();

    const submit = async() => {
        try {
             await axios.post("http:localhost:8888/produtos", { 
                name,
                picture,
                price,
                parcelas,
                console,
                altText,
                rating})
            
        } catch (error) {
            
        }
    }
    return (
        <>
                <h2 className={styles.form_title} >Cadastre Seu Novo Produto</h2>

            <form method="POST"  className={styles.form_all}>
                <div  className={styles.form}>
                    <label 
                    htmlFor="name"
                    className={styles.form_label} 
                    >Nome do produto
                    </label>
                    <input type="text" 
                    id="name" 
                    name="name" 
                    onChange={event => setname(event.target.value)}
                    required className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <label 
                    htmlFor="price"
                    className={styles.form_label} 
                    >Nome do produto
                    </label>
                    <input type="text" 
                    id="price" 
                    name="price" 
                    onChange={event => setPrice(event.target.value)}
                    required className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <label 
                    htmlFor="rating"
                    className={styles.form_label} 
                    >Nome do produto
                    </label>
                    <input type="text" 
                    id="rating" 
                    name="rating" 
                    onChange={event => setRating(event.target.value)}
                    required className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <label 
                    htmlFor="parcelas"
                    className={styles.form_label} 
                    >Nome do produto
                    </label>
                    <input type="text" 
                    id="parcelas" 
                    name="parcelas" 
                    onChange={event => setParcelas(event.target.value)}
                    required className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <label htmlFor="console" className={styles.form_label} >Valor do produto</label>
                    <input type="number" 
                    id="console" 
                    name="console" 
                    required 
                    className={styles.form_input} 
                    onChange={event => setConsole(event.target.value)}
                    
                    />
                </div>
                <div  className={styles.form}>
                    <label htmlFor="altText" className={styles.form_label} >Descrição do produto</label>
                    <textarea 
                    id="altText" 
                    name="altText" 
                    rows="4" 
                    required 
                    className={styles.form_input} 
                    onChange={event => setAltText(event.target.value)}
                    ></textarea>
                </div>
                <div  className={styles.form}>
                    <label htmlFor="picture" className={styles.form_label} >Adicione a imagem do produto</label>
                    <input 
                    id="picture" 
                    name="picture" 
                    type="text"  
                    className={styles.form_input_file} 
                    onChange={event => setPicture(event.target.value)}
                    ></input>
                </div>
                <div>
                    <button 
                    type="submit" 
                    className={styles.form_submit} 
                    >Registrar Produto
                    </button>
                </div>
            </form>
        </>
    )
}