import htmlIcon from "../assets/icons8-html.png";
import cssIcon from "../assets/icons8-css.png";
import jsIcon from "../assets/icons8-javascript.png";
// import jsIcon from "../assets/icons8-javascript.svg";
import reactIcon from "../assets/icons8-nativo-de-reagir.png";
import gitIcon from "../assets/icons8-git.png";
import styledIcon from "../assets/styeldComponents.png";
import typescriptIcon from "../assets/icons8-typescript-96.png";
import nodeIcon from "../assets/icons8-node-js.png";
import ExpressIcon from "../assets/icons8-express-js.png";
import typeORMIcon from "../assets/typeORM.png";
import postgraSQLIcon from "../assets/icons8-postgreesql.png";
import sqlIcon from "../assets/sql.png";

import imgEcommerce from "../assets/Project-img/Ecommerce.png"
import imgKenzieEmpresas from "../assets/Project-img/KenzieEmpresas.png"
import imgKenzieHub from "../assets/Project-img/kenziehub.png"
import imgKenzieMovies from "../assets/Project-img/KenzieMovies.png"


export const projects = [
  {
    name: "Kenzie Hub",
    descricao: "Site para alunos da Kenzie onde pode-se colocar suas stack de tecnologia e nivel de proficiência com cada uma.Tem uma pagina de login, registro e uma dashboard com as tecnologias.",
    repositorio: "https://github.com/Silvio-SC/kenzie-hub",
    site: "https://kenziehub-dusky.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon, reactIcon, styledIcon],
    img: imgKenzieHub,
  },
  {
    name: "Kenzie Movie",
    descricao: "Projeto de um site de avalição de filmes. foi desenvolvido em uma equipe de 4 pessoas em uma semana.",
    repositorio: "https://github.com/Silvio-SC/Kenzie-Movie-Typescript",
    site: "https://m3-s7-kenzie-movie-entrega-template-grupo-3-t17-raph-lr37ift8n.vercel.app/",
    tech: [htmlIcon, cssIcon, reactIcon, typescriptIcon, styledIcon],
    img: imgKenzieMovies,
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
    img: imgEcommerce,
  }
];
