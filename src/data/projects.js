import htmlIcon from "../assets/icons8-html.png";
import cssIcon from "../assets/icons8-css.png";
import jsIcon from "../assets/icons8-javascript.png";
import reactIcon from "../assets/icons8-nativo-de-reagir.png";
// import tailwindIcon from "../assets/icons8-tailwind-css.png";
import gitIcon from "../assets/icons8-git.png";
import styledIcon from "../assets/icons8-styled-components-48.png";

import imgEcommerce from "../assets/Project-img/1.png"
import imgKenzieEmpresas from "../assets/Project-img/2.png"
import imgKenzieHub from "../assets/Project-img/3.png"
import imgHamburgueriaKenzie from "../assets/Project-img/4.png"


export const projects = [
  {
    name: "Kenzie Hub",
    descricao: "Site para alunos da Kenzie onde pode-se colocar suas stack de tecnologia e nivel de proficiência com cada uma.Tem uma pagina de login, registro e uma dashboard com as tecnologias.",
    repositorio: "https://github.com/Silvio-SC/kenzie-hub",
    site: "https://kenziehub-dusky.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon, reactIcon, styledIcon],
    img: imgEcommerce,
  },
  {
    name: "Kenzie Empresas",
    descricao: "Site que contém empresas e funcionários, em que estes podem se cadastrar e ser contratados para uma das empresas. Existe a pagina de login e cadastro, a dashboard do usuário comum e a dashboard do administrador. A Api é local, por isso não é possível visualizar o site.",
    repositorio: "https://github.com/Silvio-SC/Projeto-Frotend-Empresas__Silvio-SC",
    site: "",
    tech: [htmlIcon, cssIcon, jsIcon],
    img: imgKenzieEmpresas,
  },
  {
    name: "Ecommerce ",
    descricao: "Site que simula uma loja de itens geeks, onde tem produtos com preços e um carinho onde se pode adicionar itens e ver o somatório total.",
    repositorio: "https://github.com/Silvio-SC/M1-Ecommerce_Silvio_SC",
    site: "https://m1-ecommerce-silvio-sc.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon],
    img: imgKenzieHub,
  },
  {
    name: "Hamburgueria Kenzie",
    descricao: "Site de fastfood feito em React e StyledComponents, onde se pode pesquisar por produtos e adiconar ao carrionho",
    repositorio: "https://hamburgueriakenzie-zeta.vercel.app/",
    site: "https://hamburgueriakenzie-zeta.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon, reactIcon, styledIcon],
    img: imgHamburgueriaKenzie,
  },
];
