import styles from './styles.module.css'
import tipIcon from './../../assets/tipIcon.svg'

type props = {
    tip: string
}


export function Tip({ tip }: props) {
    return (
        <div className={styles.tip}>
            <img src={tipIcon} alt="icone" />
            <div>
                <h3>Dica</h3>
                <p> {tip}  </p>
            </div>
        </div>
    )

}