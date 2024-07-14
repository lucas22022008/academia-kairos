import styles from "./Rotina.module.css";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";
import Treino from "../../components/Treino";

function Rotina() {
    return (
        <>
            <Header />
            <div className={styles.treinos}>
                <Treino treino="Peito, Ombro e Tríceps" dia="Segunda e Quinta" />
                <Treino treino="Bíceps e Costa" dia="Terça e Sexta" />
                <Treino treino="Perna Completa" dia="Quarta e Sábado" />
            </div>
            <Rodape />
        </>
    );
}

export default Rotina;