import { Button } from "../component/button"
import styles from './styles.module.css'
import { username } from '../../data/user.js'
import bannerImg from "../../assets/banner-img.png";

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div>
                <h3>{username}</h3>
                <h2>Bem vindo ao meu portfólio</h2>
                <p>Uma frase interessante sobre mim</p>
                <Button text='Saiba mais'/>
            </div>
            <img src={bannerImg} alt="" />
        </section>
    )
}
        