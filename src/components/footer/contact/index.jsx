import styles from './styles.module.css'
import portf from '../../../assets/portf.png'
import linkedin from '../../../assets/linkedin-icon-2.png'
import github from '../../../assets/github-icon-2.png'

export const Contact = () => {
    return (
          <div className = {styles.contact}>
            <a href='https://drive.google.com/drive/folders/13Zz7lutfGnKN6GWMEwcs3YmdVmE9TD3i?usp=drive_link' target='__blank'><img src={portf} alt="icon do portfolio" /></a>
            <a href='https://www.linkedin.com/in/silvio-f-s/' target='__blank'><img src={linkedin} alt="icone do linkedin" /></a>
            <a href='https://github.com/Silvio-SC' target='__blank'><img src={github} alt="icone do github" /></a>
          </div>
    )
}