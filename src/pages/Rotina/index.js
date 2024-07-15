import styles from "./Rotina.module.css";
import Rodape from "../../components/Rodape";
import Treino from "../../components/Treino";

function Rotina() {
    return (
        <>
            <div className={styles.treinos}>
                <img src="imagens/kairos.png" className={styles.logo} alt="logo da Academia Kairós."/>
                <p>Boa tarde NomeAluno, Esta é sua rotina de Treino!</p>
                <Treino treino="Peito, Ombro e Tríceps" dia="Segunda e Quinta" />
                <Treino treino="Bíceps e Costa" dia="Terça e Sexta" />
                <Treino treino=" Pernas completo" dia="Quarta e Sábado" />
            </div>
            <Rodape />
        </>
    );
}

export default Rotina;
