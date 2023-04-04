import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Footer()  {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_contact}>
                    <h2>Nosso Contato</h2>
                    <p>Telefone: (11)1234-5678</p>
                    <p>Email: PI@email.com</p>
                </div>
                <div className={styles.footer_social}>
                    <ul>
                    <li>
                    <a href="https://www.facebook.com/"> 
                    <img src="/assets/facebook.png"/>                   
                        </a>Facebook</li>                             
                    <li>
                    <a href="https://www.instagram.com/">
                    <img src="/assets/instagran.png"/>                            
                        </a >Instagran</li>
                    </ul> 
                </div>
            </footer>
        </>
    )
}

