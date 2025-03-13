import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "HM Tecnologia",
  DESCRIPTION: "Hiuri Mendes Blog.",
  EMAIL: "hiurimendes@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Conheça mais do meu trabalho",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Uma coleção de artigos sobre tópicos pelos quais sou apaixonado.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projetos",
  DESCRIPTION:
    "Uma coleção de meus projetos com links para repositórios e demonstrações.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://twitter.com/hiuri_mendes",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/hiurimendes",
  },
  {
    NAME: "Website",
    HREF: "https://hiurimendes.com.br",
  },
];
