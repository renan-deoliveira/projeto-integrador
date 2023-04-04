import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <a href='/'>Logo</a>
                <input placeholder='Olá, oque você está proucurando?' type='text' />
                <a href='/produtos'>Produtos</a>
                <a href='/ofertas'>Ofertas</a>
                <div className={styles.header__login}>
                    <img src='/assets/avatar-login.png' width='35px' height='35px' />
                    <div className={styles.header__login__description}>
                        <p>Olá, seja bem vindo(a)</p>
                        <div className={styles.header__login__description__label}>
                            <a href='/login'>Entre</a>
                            <p>ou</p>
                            <a href='/cadastro'>Cadastre-se</a>
                        </div>
                    </div>
                </div>
                <div className={styles.header__carrinho}>
                    <img src='/assets/carrinho.png' />
                    <p>0</p>
                </div>
            </header>
        </>
    )
}