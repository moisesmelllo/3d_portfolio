import {
  python,
  automacao,
  js,
  weather_project,
  flexbox_project,
  compras_project,
  dev,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  devHub,
  promptopia,
  nike,
  next,
  figma,
  mongodb,
  tailwind,
  nextauth,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "sobre",
  },
  {
    id: "works",
    title: "trabalhos",
  },
  {
    id: "contact",
    title: "contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python automation",
    icon: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mongoDB",
    icon: mongodb,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "nextauth",
    icon: nextauth,
  },
];

const experiences = [
  {
    title: "Começo da jornada e primeira linguagem",
    company_name: "Python",
    icon: python,
    iconBg: "#383E56",
    date: "Março 2022 - Janeiro 2023",
    points: [
      "Aqui foi meu primeiro contato com a programação.",
      "Vi muitos vídeos gratuitos no YouTube; ainda não fazia ideia de com o que gostaria de trabalhar.",
      "Escolhi Python pela quantidade de vídeos e informações que vi a respeito da linguagem.",
      "A escolha também se deve à quantidade de pessoas que a recomendam como primeira linguagem.",
    ],
  },
  {
    title: "Primeiro Curso de Automação",
    company_name: "Python",
    icon: automacao,
    iconBg: "#E6DEDD",
    date: "Janeiro 2023 - Junho 2023",
    points: [
      "Neste momento, já havia consumido conteúdo suficiente e decidi investir em um curso.",
      "Adorei um que já conhecia o criador no YouTube e decidi embarcar nesta jornada com foco em automações.",
      "O curso era gigantesco, mas eu estava adorando e em pouco tempo já havia criado vários projetos pessoais.",
      "Um deles, inclusive, é utilizado em minha empresa hoje para fazer automaticamente a consulta de processos do TJSP.",
    ],
  },
  {
    title: "Mudando de linguagem",
    company_name: "JavaScript",
    icon: js,
    iconBg: "#383E56",
    date: "Junho 2023 - dezembro 2023",
    points: [
      "Depois de passar as férias inteiras estudando, cheguei à conclusão de que quero ser um desenvolvedor web.",
      "Após esta conclusão, migrei radicalmente para o JavaScript e iniciei meus estudos, que por sinal foram muito mais rápidos, tendo em vista que já tinha uma bagagem na programação.",
      "Após aprender os fundamentos, escolhi o React como minha primeira biblioteca/framework e estou atualmente (inclusive agora mesmo, enquanto você lê) estudando tudo o que posso para me tornar um desenvolvedor melhor a cada dia.",
    ],
  },
  {
    title: "Próximos passos",
    company_name: "Faculdade e o mundo",
    icon: dev,
    iconBg: "#E6DEDD",
    date: "Agora - Futuro",
    points: [
      "Atualmente estou no segundo semestre da minha faculdade de engenharia de software pela Anhanguera",
      "Sempre gostei de ser autodidata, porém conhecimento nunca é demais, então vou atrás deste diploma, enquanto adquiro o máximo de conhecimento possível.",
      "Além disso, estou à procura da minha primeira vaga como desenvolvedor.",
      "Sei que posso aprender muito mais quando estiver trabalhando na área e sei que serei o melhor funcionário possível.",
      "Quem sabe minha primeira vaga não é na sua empresa!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nike sales page",
    description: "O melhor da nike com o melhor do css",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/moisesmelllo/nike_pagina_de_vendas",
    deploy_link: "https://nike-pagina-de-vendas.vercel.app/",
  },
  {
    name: "Promptopia",
    description: "Crie e divulgue seus prompts de IA",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/moisesmelllo/promptopia-official",
    deploy_link: "https://promptopia-official.vercel.app/",
  },
  {
    name: "DevEvent",
    description: "The Hub for Every Dev Event You Can't Miss",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: devHub,
    source_code_link: "https://github.com/moisesmelllo/event-hub",
    deploy_link: "https://event-hub-sandy.vercel.app/",
  },

  {
    name: "Aplicativo do clima",
    description: "Website de consulta do clima de qualquer local do planeta.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather_project,
    source_code_link:
      "https://github.com/moisesmelllo/WeatherApp/tree/main/weather-app-react",
    deploy_link: "https://weather-app-delta-coral.vercel.app/",
  },

  {
    name: "Flexbox project",
    description:
      "Website de vendas, usado para praticar e demonstrar minhas habilidades em flexbox, .",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "flexbox",
        color: "green-text-gradient",
      },
    ],
    image: flexbox_project,
    source_code_link: "https://github.com/moisesmelllo/flexbox-project",
    deploy_link: "https://flexbox-project-psi.vercel.app/",
  },
  {
    name: "Carrinho de compras",
    description:
      "Simulação de um carrinho de compras de e-comerse e suas funções essenciais.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: compras_project,
    source_code_link:
      "https://github.com/moisesmelllo/Projeto-Carrinho-de-compras/tree/main/build",
    deploy_link: "https://projeto-carrinho-de-compras-seven.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
