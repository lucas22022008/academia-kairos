import styles from "./Treino.module.css";

function Treino({ treino, dia }) {
    return (
        <div className={styles.card}>
            <div>
            <h1>{ `${ treino }` }</h1>
            <p>O treino deve ser feito { `${ dia }` }</p>
            </div>
            <img src="imagens/halter.png" alt="Halter de academia"/>
        </div>
    );
}

export default Treino;