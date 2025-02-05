import Styles from './Styles.module.css'

type props = React.ComponentProps<"button"> & {
    title:string
}



export function Button({ title, ...rest }: props) {
    return (

        <button type='button' className={Styles.button} {...rest}> {title}</button>
    )
}