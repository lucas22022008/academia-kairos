import styles from "./Formulario.module.css";
import Chamada from "../Chamada";
import { Link } from "react-router-dom";

function Formulario() {
    return (
        <form className={styles.formulario}>
            <div className={styles.logo}>
                <img src="imagens/kairos.png" alt="Logo da Academia Kairós"/>
            </div>
            <br></br>
            <div className={styles.userArea}>
                <input className={styles.userInput} id="email" name="email" type="email" required/>
                <label for="email" className={styles.userLabel}>Email</label>
            </div>
            <br></br>
            <br></br>
            <div className={styles.userArea}>
                <input className={styles.userInput} id="senha" name="senha" type="password" required/>
                <label for="senha" className={styles.userLabel}>Senha</label>
            </div>
            <br></br>
            <br></br>
            <Link to="/rotina">
                <Chamada link="#" texto="ENTRAR"/>
            </Link>
        </form>
    );
}
export default Formulario;