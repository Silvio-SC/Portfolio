import { projects } from '../../data/projects'
import { ProjectCard } from '../projectCard'
import styles from './styles.module.css'

export const SectionProjects = () => {
    return (
        <section className={styles.sectionProjects} id='sectionProjects'>
          <h2>projetos</h2>
          <div>
          {projects.map((card) => 
            <ProjectCard key={card.name} 
              name={card.name} 
              descricao={card.descricao} 
              link={card.link} 
              tecnologias={card.tech}
              />)}
          </div>
        </section>
    )
}
