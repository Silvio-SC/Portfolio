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
            <a><img src={whatsapp} alt="icon do whatsapp" /></a>
            <a href='https://www.linkedin.com/in/silvio-f-s/' target='__blank'><img src={linkedin} alt="icone do linkedin" /></a>
            <a href='https://github.com/Silvio-SC' target='__blank'><img src={github} alt="icone do github" /></a>
          </div>
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </footer>
    )
}