import type { Metadata } from "next";

const data = {
  title: "Camille Dugas | Développeur Full-Stack",
  description: [
    "Développeur frontend depuis 2016. Spécialisé dans l'écosystème JavaScript,",
    "je travaille principalement avec les frameworks React et Next."
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