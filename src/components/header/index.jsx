import styles from './styles.module.css'

export const Header = () => {
    return (
        <header className = {styles.header}>
          <h1>Portifólio</h1>
          <ul>
            <li>Sobre</li>
            <li>Stack</li>
            <li>Projetos</li>
          </ul>
          <button>Contato</button>
        </header>
    )
}