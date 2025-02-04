import styles from "./app.module.css"
import { Header } from './components/Header'
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"


export function App() {
  function handleRestartgame() {
    alert("reiniciar o jogo")
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartgame} />

        < Tip tip=" Umas das linguagens de programação mais usadas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>


      </main>


    </div>
  )
}