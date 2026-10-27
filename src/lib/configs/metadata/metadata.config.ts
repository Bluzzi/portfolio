const data = {
  title: "Camille Dugas | Développeur Full-Stack",
  description: [
    "Développeur Full-Stack depuis 2016. Spécialisé dans l'écosystème TypeScript,",
    "je travaille principalement avec NodeJS, ReactJS et NextJS.",
  ].join(" "),
};

export const metadata = {
  metadataBase: new URL("https://camilledugas.me"),

  icons: "/favicon.ico",

  title: data.title,
  description: data.description,
};
