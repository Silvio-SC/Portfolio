import htmlIcon from "../assets/icons8-html-48.png";
import cssIcon from "../assets/icons8-css-48.png";
import jsIcon from "../assets/icons8-javascript-48.png";
import reactIcon from "../assets/icons8-nativo-de-reagir-48.png";
// import tailwindIcon from "../assets/icons8-tailwindcss-48.png";
import gitIcon from "../assets/icons8-git-48.png";
import styledIcon from "../assets/icons8-styled-components-48.png";


export const projects = [
  {
    name: "Kenzie Empresas",
    descricao: "Site que contém empresas e funcionários, em que estes podem se cadastrar e ser contratados para uma das empresas. Existe a pagina de login e cadastro, a dashboard do usuário comum e a dashboard do administrador. A Api é local, por isso não é possível visualizar o site.",
    link: "https://github.com/Silvio-SC/Projeto-Frotend-Empresas__Silvio-SC",
    tech: [htmlIcon, cssIcon, jsIcon],
  },
  {
    name: "Ecommerce ",
    descricao: "Site que simula uma loja de itens geeks, onde tem produtos com preços e um carinho onde se pode adicionar itens e ver o somatório total.",
    link: "https://m1-ecommerce-silvio-sc.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon],
  },
  {
    name: "Hamburgueria Kenzie",
    descricao: "Site de fastfood feito em React e StyledComponents, onde se pode pesquisar por produtos e adiconar ao carrionho",
    link: "https://hamburgueriakenzie-zeta.vercel.app/",
    tech: [htmlIcon, cssIcon, jsIcon, reactIcon, styledIcon],
  },
  // {
  //   name: "Projeto 4",
  //   descricao: "Descrição do projeto",
  // },
];
