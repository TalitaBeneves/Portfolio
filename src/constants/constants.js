import foto1 from "../img/foto.png";
import foto2 from "../img/foto2.png";
import foto3 from "../img/foto3.png";
import foto4 from "../img/foto4.png";

export const projects = [
  {
    title: "React-Website",
    desc: "Usando ReactJs, Styled Components, e Smooth Scroll criei um website.  O site se chama Agentes V e é um website com informaões de um jogo chamado Valorant, fazendo com que o usuario se interece pelo jogo.",
    image: foto1,
    tags: ["ReactJs", "Styled Components", "Smooth Scroll"],
    source: "https://www.youtube.com/watch?v=hkVG26LRxTs&t=1s",
    visit: "https://github.com/TalitaBeneves/React-Website",
    id: 0,
  },

  {
    title: "Game-Database ",
    desc: "Site de banco de dados de jogos em Angular 11 com uma API pública. Utilizei ngFor, ngIf, chamadas http, interceptores http, rotas para transmitir dados entre os componentes e outros.",
    image: foto3,
    tags: ["Angular", "API Pública"],
    source: "https://www.youtube.com/watch?v=4TUQBMGeb4s",
    visit: "https://github.com/TalitaBeneves/Biblioteca-de-Jogos",
    id: 1,
  },
  {
    title: "Animated-Website",
    desc: "O projeto é sobre as montanhas mais populares do mundo em formato de Rank, junto com as mais perigosas e as mais escaladas",
    image: foto2,
    tags: ["React Hooks", "Styled Components"],
    source: "https://www.youtube.com/watch?v=iP4E3R7m2v0",
    visit: "https://github.com/TalitaBeneves/ReactJS-Animated-Website",
    id: 2,
  },
  {
    title: "Halloween ",
    desc: "Projeto responsivo criado apenas com HTML, CSS and JavaScript 🎃",
    image: foto4,
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://www.youtube.com/watch?v=H6kg0bLBR8w",
    visit:
      "https://github.com/TalitaBeneves/Responsive-Halloween-Website_Design/tree/main/projeto",
    id: 3,
  },
];

export const TimeLineData = [
  { month: "09", year: 2020, text: "Comecei minha jornada na Programação." },
  { month: "02", year: 2021, text: "Comecei a estudar Angular, Git e GitHub." },
  {
    month: "09",
    year: 2021,
    text: "Comecei me aperfeiçoar em React e TypeScript.",
  },
  {
    month: "03",
    year: 2022,
    text: "Comecei a trabalhar com Análise e Desenvolvimento de sitemas na Target Bank.",
  },
];
