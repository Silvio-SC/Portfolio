import styles from './styles.module.css'
import { username } from '../../data/user.js'
import bannerImg from "../../assets/banner-img.png";
import { Contact } from "../footer/contact";

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div>
                <h3>{username}</h3>
                <h2>Programador Front-End </h2>
                <p>Tenho 21 anos, moro no Rio de Janeiro (RJ). Estudo programação a 6 meses</p>
                <Contact />
            </div>
            <img src={bannerImg} alt="" />
        </section>
    )
}
        