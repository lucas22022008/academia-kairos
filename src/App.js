import Header from './components/Header';
import styles from './App.module.css'
import Chamada from './components/Chamada';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <div>
          <h1>ACADEMIA <span>KAIRÓS</span></h1>
          <p>Transforme sua <span>saúde</span> e <span>autoestima</span> com atividade física na KAIRÓS ACADEMIA!</p>
          <Chamada link="https://instagram.com/kairosacademia1" texto="COMEÇAR AGORA!" />
        </div>
      </main>
      <Rodape />
    </>
  );
}

export default App;
