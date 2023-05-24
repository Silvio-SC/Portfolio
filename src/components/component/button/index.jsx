import styles from './styles.module.css'

export const Button = ({text, link}) => {
    return (
        <button className={styles.button}>
            <a href={link}>{text}</a>
        </button>
    )
}