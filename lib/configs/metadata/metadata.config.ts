import type { Metadata } from "next";

const data = {
  title: "Camille Dugas | Développeur Frontend",
  description: [
    "Développeur frontend depuis 2016. Spécialisé dans l'écosystème JavaScript,",
    "je travaille principalement avec les frameworks React et Next."
  ].join(" "),
  image: "https://camilledugas.me/meta-tag-image.png"
};

export const metadata: Metadata = {
  icons: "/favicon.ico",

  title: data.title,
  description: data.description,

  themeColor: "#FFFFFF",

  openGraph: {
    title: data.title,
    description: data.description,
    images: data.image,
    siteName: "Camille Dugas | Portfolio",
    url: "https://camilledugas.me",
    type: "website"
  },

  twitter: {
    title: data.title,
    description: data.description,
    images: data.image,
    card: "summary_large_image"
  }
};