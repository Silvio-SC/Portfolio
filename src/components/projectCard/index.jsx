import styles from './styles.module.css'
import gitICon from "../../assets/git-icon.png";

export const ProjectCard = ({name, descricao, link}) => {

    return (
        <div className={styles.card}>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{descricao}</p>
                </div>
                <a href={link} target='__blanck'>Saiba mais</a>
            </div>
            <img src={gitICon} alt="icone do Github" />
        </div>
    )
}