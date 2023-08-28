import styles from './styles.module.css'
import { username } from '../../data/user.js'
import bannerImg from "../../assets/banner-img.png";
import { Contact } from "../footer/contact";

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div>
                <h3>{username}</h3>
                <h2>Desenvolvedor Web</h2>
                <p>Seja bem vindo ao meu portfolio, Aqui trago minha experiencia com projetos e stacks que estou utilizando</p>
                <Contact />
            </div>
        </section>
    )
}
        