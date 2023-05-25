import styles from './styles.module.css'

export const TechCard = ({name, img}) => {

    return (
        <div className={styles.card}>
            <img src={img} alt="imagem da tecnologia" />
            <h3>{name}</h3>
        </div>
    )
}