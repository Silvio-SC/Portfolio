import './styles/reset.css';
import './styles/index.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BannerSection } from './components/bannerSection';
import { Main } from './components/main';
import { SectionAboutMe } from './components/SectionAboutMe';
import { StacksSection } from './components/sectionStacks';
import { SectionProjects } from './components/sectionProjects';

function App() {
  return (
    <>
      <Header />     
      <Main>
        <BannerSection />
        <SectionAboutMe />
        <StacksSection />
        <SectionProjects />
      </Main>    
      <Footer />
    </>
  )
}

export default App
