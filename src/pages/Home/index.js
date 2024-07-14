import Header from "../../components/Header";
import styles from "./Home.module.css";
import Chamada from "../../components/Chamada";
import Rodape from "../../components/Rodape";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className={styles.home}>
        <div>
          <h1>ACADEMIA <span>KAIRÓS</span></h1>
          <p>Transforme sua <span>saúde</span> e <span>autoestima</span> com atividade física na KAIRÓS ACADEMIA!</p>
          <Link to="/login">
            <Chamada link="#" texto="COMEÇAR AGORA!" />
          </Link>
        </div>
      </main>
      <Rodape />
    </>
  );
}

export default Home;