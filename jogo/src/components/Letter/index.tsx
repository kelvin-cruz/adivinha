import styles from './styles.module.css'

type props = {
    value?: string
}


export function Letter({ value = "" }: props) {
    return (
        <div className= {styles.container}>
            
            <span>{value}</span>

        </div>
    )
}