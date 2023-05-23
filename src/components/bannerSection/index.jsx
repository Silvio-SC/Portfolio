import { Button } from "../component/button"
import styles from './styles.module.css'

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <h3>JOSEDASILVA</h3>
            <div>
                <h2>Bem vindo ao meu portfólio</h2>
                <p>Uma frase interessante sobre mim</p>
                <Button text='Saiba mais'/>
            </div>
            <img src="./src/assets/banner-img.png" alt="" />
        </section>
    )
}
        