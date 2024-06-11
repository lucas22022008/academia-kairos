import styles from "./Inicio.module.css";

function Inicio() {
    return(
        <section className={styles.home}>
            <div className={styles.inicio}>
                <h1>ACADEMIA <span>KAIRÓS</span></h1>
                <p>Transforme sua <span>saúde</span> e <span>autoestima</span> com atividade física na KAIRÓS Academia.</p>
                <a href="http://instagram.com/kairosacademia1">
                    <button>COMEÇAR AGORA!</button>
                </a>
            </div>
        </section>
    );
}

export default Inicio;