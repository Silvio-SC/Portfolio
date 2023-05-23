import { projects } from '../../data/projects'
import { ProjectCard } from '../component/projectCard'
import styles from './styles.module.css'

export const SectionProjects = () => {
    const cards = []
    projects.forEach((card) => {
       let Card = <ProjectCard name={card.name} descricao={card.descricao} />
       cards.push(Card)
    })

    return (
        <section className={styles.sectionProjects}>
          <h2>projetos</h2>
          <div>
            {cards}
          </div>
        </section>
    )
}