import styles from "./Treino.module.css";

function Treino({ treino, dia }) {
    return (
        <div className={styles.card}>
            <h1>{ `${ treino }` }</h1>
            <p>O treino deve ser feito { `${ dia }` }</p>
        </div>
    );
}

export default Treino;