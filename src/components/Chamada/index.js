import styles from './Chamada.module.css';

function Chamada({ link, texto }) {
    return (
        <a href={`${ link }`} className={styles.chamada}>
            <button>{ texto }</button>
        </a>
    )
}

export default Chamada;