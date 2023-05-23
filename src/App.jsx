import './styles/reset.css';
import './styles/index.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header />         
      <main>
        <section>
          <div>
            <h3>JOSEDASILVA</h3>
            <h2>Bem vindo ao meu portfólio</h2>
            <p>Uma frase interessante sobre mim</p>
            <button>Saiba mais</button>
          </div>
          <img src="" alt="" />
        </section>
        <section>
          <h2>Sobre min</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut qui quia optio harum, recusandae praesentium ex dignissimos sit et exercitationem est sed aperiam tempore voluptates reiciendis non atque quis.</p>
        </section>
        <section>
          <h2>Tecnologias</h2>
          <div>
            <div>card</div>
          </div>
        </section>
        <section>
          <h2>projetos</h2>
          <div>
            <div>Cards</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
