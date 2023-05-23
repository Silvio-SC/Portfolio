import styles from './styles.module.css'

export const ProjectCard = ({name, descricao}) => {
    return (
        <div className={styles.card}>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{descricao}</p>
                </div>
                <a href="#" target='__blanck'>Saiba mais</a>
            </div>
            <img src="./src/assets/git-icon.png" alt="icone do Github" />
        </div>
    )
}