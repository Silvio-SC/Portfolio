import { user } from '../../data/user.js'
import styles from './styles.module.css'
import whatsapp from '../../assets/whatsapp-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'

export const Footer = () => {
    return (
      <footer className = {styles.footer} id='footer'>
        <div>
          <h2>Contato</h2>
          <div>
            <a href='#'><img src={whatsapp} alt="icon do whatsapp" /></a>
            <a href='#'><img src={linkedin} alt="icone do linkedin" /></a>
            <a href='#'><img src={github} alt="icone do github" /></a>
          </div>
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </footer>
    )
}