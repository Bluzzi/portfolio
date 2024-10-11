import type { Metadata } from "next";

const data = {
  title: "Camille Dugas | Développeur Full-Stack",
  description: [
    "Développeur Full-Stack depuis 2016. Spécialisé dans l'écosystème TypeScript,",
    "je travaille principalement avec NodeJS, ReactJS et NextJS."
  ].join(" ")
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  icons: "/favicon.ico",

  title: data.title,
  description: data.description,

  openGraph: {
    title: data.title,
    description: data.description,
    siteName: "Camille Dugas | Portfolio",
    url: "https://camilledugas.me",
    type: "website"
  },

  twitter: {
    title: data.title,
    description: data.description
  }
};