import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function ProductRegister() {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();
    const [parcelas, setParcelas] = useState();
    const [console, setConsole] = useState();
    const [altText, setAltText] = useState();
    const [rating, setRating] = useState();
    const [description, setDescription] = useState();

   
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
             await axios.post("http://localhost:8888/produtos", { 
                    name,
                    picture,
                    price,
                    parcelas,
                    console,
                    altText,
                    rating,
                    description
            })
            setName("")
            setPrice("")
            setPicture("")
            setParcelas("")
            setConsole("")
            setAltText("")
            setRating("")
            setDescription("")

        } catch (error) {
            console.log(error);
        res.status(500).json({ error: 'falha ao enviar dados' })
        }
       return false
    }
    return (
        <>
                <h2 className={styles.form_title} >Cadastre Seu Novo Produto</h2>

            <form  onSubmit={handleSubmit} className={styles.form_all}>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Nome do produto
                    </p>
                    <input 
                        placeholder="Nome" 
                        type="text" 
                        value={name} 
                        required 
                        onChange={event => {
                            setName(event.target.value) 
                            setAltText(event.target.value)}}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Preço do produto
                    </p>
                    <input 
                        placeholder="00.00" 
                        type="number" 
                        value={price} 
                        required 
                        onChange={event => setPrice(event.target.value)}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Classificação do produto
                    </p>
                    <input 
                        placeholder="1-5 " 
                        type="number" 
                        value={rating} 
                        required 
                        onChange={event => setRating(event.target.value)}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                    className={styles.form_p} 
                    >Quantidades de Parcelas
                    </p>
                    <input 
                        placeholder="1-12 " 
                        type="number" 
                        value={parcelas}   
                        required 
                        onChange={event => setParcelas(event.target.value)}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p}
                        >Para Qual Tipo de Vídeo Game?</p>
                    <input 
                        placeholder="console" 
                        type="text" 
                        value={console} 
                        required 
                        onChange={event => setConsole(event.target.value)}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Descrição do produto</p>
                    <textarea 
                        placeholder="Descreva seu item" 
                        value={description}
                        rows="5" 
                        type="text" 
                        required 
                        className={styles.form_input} 
                        onChange={event => setDescription(event.target.value)}
                        ></textarea>
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Adicione a imagem do produto</p>
                    <input 
                        placeholder="Imagem do Produto" 
                        value={picture}
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