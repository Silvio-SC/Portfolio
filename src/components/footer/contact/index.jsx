import styles from './styles.module.css'
import whatsapp from '../../../assets/whatsapp-icon.png'
import linkedin from '../../../assets/linkedin-icon.png'
import github from '../../../assets/github-icon.png'

export const Contact = () => {
    return (
          <div className = {styles.contact}>
            <a><img src={whatsapp} alt="icon do whatsapp" /></a>
            <a href='https://www.linkedin.com/in/silvio-f-s/' target='__blank'><img src={linkedin} alt="icone do linkedin" /></a>
            <a href='https://github.com/Silvio-SC' target='__blank'><img src={github} alt="icone do github" /></a>
          </div>
    )
}