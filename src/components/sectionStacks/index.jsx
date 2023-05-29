import { TechCard } from '../techCard'
import styles from './styles.module.css'
import { technologies } from '../../data/technologies.js'

export const StacksSection = () => {
    return (
        <section className={styles.stacksSection} id='stacksSection'>
            <h2>Tecnologias</h2>
            <div>
                {technologies.map((card) => <TechCard key={card.name} name={card.name} img={card.img} color={card.color}/>)}
            </div>
        </section>
    )
}
        