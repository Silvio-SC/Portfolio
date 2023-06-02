import { user } from '../../data/user.js'
import styles from './styles.module.css'
import { Contact } from './contact/index.jsx'

export const Footer = () => {
    return (
      <footer className = {styles.footer} id='footer'>
        <div>
          <h2>Contato</h2>
          <Contact />
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </footer>
    )
}