import styles from './styles.module.css'

type props = {
    value?: string
    size?: "defaut" | "small"
    color?: "defaut" | "correct" | "wrong"
}


export function Letter({ value = "", size = "defaut", color = "defaut" }: props) {
    return (
        <div className={`
        ${styles.container}
        ${size === "small" && styles.LetterSmall}
        ${color === "correct" && styles.LetterCorrect}
         ${color === "wrong" && styles.LetterWrong}
        `}>

            <span>{value}</span>

        </div>
    )
}