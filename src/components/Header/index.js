import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (

        <header className={styles.header}>
            <Link to="/" >
                <img src="imagens\kairos.png" alt="Logo da Acamia Kairós" />
            </Link>
        </header>
    );
};

export default Header;