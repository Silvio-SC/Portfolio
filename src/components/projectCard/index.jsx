import styles from './styles.module.css'
import gitICon from "../../assets/github-icon-2.png";

export const ProjectCard = ({name, descricao, repositorio, site, tecnologias, img}) => {

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
                <span>
                    <a href={repositorio} target='__blanck'>Repositorio</a>       
                    {site ? <span> - </span> : null}
                    {site ? <a href={site} target='__blanck'>site</a> : null}
                </span>
            </div>
            <img src={img} alt="icone do Github" />

        </div>
    )
}