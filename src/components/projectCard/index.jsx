import styles from './styles.module.css'
import gitICon from "../../assets/github-icon-2.png";

export const ProjectCard = ({name, descricao, link, tecnologias}) => {

    return (
        <div className={styles.card}>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{descricao}</p>
                </div>
                <ul>
                    {tecnologias.map((tech) => <li key={tech}><img src={tech} /></li>)}
                </ul>
                <a href={link} target='__blanck'>Saiba mais</a>
            </div>
            <img src={gitICon} alt="icone do Github" />
        </div>
    )
}