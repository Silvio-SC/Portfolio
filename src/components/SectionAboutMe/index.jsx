import styles from './styles.module.css'
import { Contact } from '../footer/contact'

export const SectionAboutMe = () => {
    return (
        <section className={styles.sectionAboutMe} id='sectionAboutMe' >
            <h2>Sobre mim</h2>
            <p>
                Desde o final de 2022, estou focado em desenvolver minhas habilidades como desenvolvedor, me formei como desenvolvedor fullstack pela kenzie Academy Brasil e estou cursando ADS pela faculdade Descomplica. Durante este período, adquiri experiência prática em diversas tecnologias de front-end e back-end.
            </p>
        </section>
    )
}