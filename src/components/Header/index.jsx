import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Cálculo de IMC</h1>
            <p>Preencha os campos abaixo.</p>
        </header>
    )
}

export default Header;