import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <a href="https://kairos-academia.netlify.app/">
                <img src="\imagens\kairos.png"/>
            </a>
        </header>
    );
};

export default Header;