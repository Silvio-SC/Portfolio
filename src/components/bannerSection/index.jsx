import styles from './styles.module.css'
import { username } from '../../data/user.js'
import { Contact } from "../footer/contact";

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div>
                <h3>{username}</h3>
                <h2>Desenvolvedor Web</h2>
                {/* <p>Seja bem vindo ao meu portfolio, aqui trago minha experiência com projetos e stacks que estou praticando e desenvolvendo.</p> */}
                {/* <Contact /> */}
            </div>
        </section>
    )
}
        