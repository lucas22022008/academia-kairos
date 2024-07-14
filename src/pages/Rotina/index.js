import styles from "./Rotina.module.css";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";
import Treino from "../../components/Treino";

function Rotina() {
    return (
        <>
            <Header />
            <div className={styles.treinos}>
                <Treino />
                <Treino />
                <Treino />
            </div>
            <Rodape />
        </>
    );
}

export default Rotina;