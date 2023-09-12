import { projectsBack, projectsFront } from '../../data/projects'
import { ProjectCard } from '../projectCard'
import styles from './styles.module.css'

export const SectionProjects = () => {
    return (
        <section className={styles.sectionProjects} id='sectionProjects'>
          <h2>Projetos</h2>
          <h3>Front-end</h3>
          <div>
          {projectsFront.map((card) => 
            <ProjectCard key={card.name} 
              name={card.name} 
              descricao={card.descricao} 
              repositorio={card.repositorio} 
              site={card.site} 
              tecnologias={card.tech}
              img={card.img}
              />)}
          </div>

          <h3>Back-end</h3>
          <div>
          {projectsBack.map((card) => 
            <ProjectCard key={card.name} 
              name={card.name} 
              descricao={card.descricao} 
              repositorio={card.repositorio} 
              site={card.site} 
              tecnologias={card.tech}
              img={card.img}
              />)}
          </div>
          <a href='https://github.com/Silvio-SC' target='_blank'>Ver todos os projetos no github </a>
        </section>
    )
}
