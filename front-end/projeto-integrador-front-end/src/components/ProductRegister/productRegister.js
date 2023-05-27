import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function ProductRegister() {

    //Armazenando os dados do inputs
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();
    const [parcelas, setParcelas] = useState();
    const [console, setConsole] = useState();
    const [altText, setAltText] = useState();
    const [rating, setRating] = useState();
    const [description, setDescriprion] = useState();

    // Envia os dados do formulário para o DB
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8888/produtos", { 
                    name,
                    picture,
                    price,
                    parcelas,
                    console,
                    altText,
                    rating,
                    description
            });

            //limpa os formulários
            setName("");
            setPrice("");
            setPicture("");
            setParcelas("");
            setConsole("");
            setAltText("");
            setRating("");
            setDescriprion("")

        } catch(error) {
            console.error(error);
        res.status(500).json({ error: 'falha ao enviar dados' });
        }

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
                        placeholder="name" 
                        type="text" 
                        value={name} 
                        required 
                        onChange={event => {setName(event.target.value); setAltText(event.target.value)}}
                        className={styles.form_input} 
                    />
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Preço do produto
                    </p>
                    <input 
                        placeholder="price" 
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
                        placeholder="rating" 
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
                        placeholder="parcelas" 
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
                        placeholder="description" 
                        value={description}
                        rows="4" 
                        required 
                        className={styles.form_input} 
                        onChange={event => setDescriprion(event.target.value)}
                        ></textarea>
                </div>
                <div  className={styles.form}>
                    <p 
                        className={styles.form_p} 
                        >Adicione a imagem do produto</p>
                    <input 
                        placeholder="picture" 
                        value={picture}
                        type="file"  
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