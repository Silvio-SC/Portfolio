import { projects } from '../../data/projects'
import { ProjectCard } from '../projectCard'
import styles from './styles.module.css'

export const SectionProjects = () => {
    const cards = []
    projects.forEach((card) => {
       let Card = <ProjectCard name={card.name} descricao={card.descricao} link={card.link} />
       cards.push(Card)
    })

    return (
        <section className={styles.sectionProjects} id='sectionProjects'>
          <h2>projetos</h2>
          <div>
            {cards}
          </div>
        </section>
    )
}