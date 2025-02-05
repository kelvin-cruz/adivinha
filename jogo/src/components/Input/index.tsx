import styles from './styles.module.css'

type props = React.ComponentProps<"input">



export function Input({ ...rest }: props) {
    return (
        <input type="text" className={styles.Input} {...rest} />
    )
}