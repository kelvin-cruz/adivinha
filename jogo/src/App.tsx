import styles from "./app.module.css"

import { LetterUsed } from "./components/LettersUsed"
import { Button } from "./components/Button"
import { Input } from './components/Input'
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Header } from './components/Header'


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
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
        <LetterUsed />

      </main>
    </div>
  )
}