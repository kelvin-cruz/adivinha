import styles from "./app.module.css"
import { Header } from './components/Header'


export function App() {
  function handleRestartgame() {
    alert("reiniciar o jogo")
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartgame} />
      </main>

    </div>
  )
}