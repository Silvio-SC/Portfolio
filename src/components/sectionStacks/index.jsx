import { TechCard } from '../techCard'
import styles from './styles.module.css'
import { technologies } from '../../data/technologies.js'

export const StacksSection = () => {
    const cards = []
    technologies.forEach((card) => {
       let Card = <TechCard name={card.name} img={card.img} />
       cards.push(Card)
    })

    return (
        <section className={styles.stacksSection} id='stacksSection'>
            <h2>Tecnologias</h2>
            <div>
                {cards}
            </div>
        </section>
    )
}
        