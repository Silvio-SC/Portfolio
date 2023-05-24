import { Button } from '../component/button';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className = {styles.header}>
          <h1>Portifólio</h1>
          <ul>
            <li><a href='#sectionAboutMe'>Sobre</a></li>
            <li><a href='#stacksSection'>Stack</a></li>
            <li><a href='#sectionProjects'>Projetos</a></li>
          </ul>
          <Button text="Contato" link="#footer"/>
        </header>
    )
}