import styles from './styles.module.css'

export const Footer = () => {
    return (
      <footer className = {styles.footer}>
        <div>
          <h2>Contato</h2>
          <div>
            <a href='#'><img src="./src/assets/whatsapp-icon.png" alt="" /></a>
            <a href='#'><img src="./src/assets/linkedin-icon.png" alt="" /></a>
            <a href='#'><img src="./src/assets/github-icon.png" alt="" /></a>
          </div>
        </div>
        <p>Todos os direitos reservados - José da Silva</p>
      </footer>
    )
}