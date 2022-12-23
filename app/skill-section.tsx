import { ReactElement } from "react";
import { Skill } from "$lib/components/skill";

export function SkillSection(): ReactElement {
  const skills = [
    { title: "TypeScript", logo: "/skills/typescript.svg", link: "https://www.typescriptlang.org" },
    { title: "React", logo: "/skills/react.png", link: "https://fr.reactjs.org" },
    { title: "Next", logo: "/skills/next-js.svg", link: "https://nextjs.org" },
    { title: "CSS", logo: "/skills/css.png", link: "https://developer.mozilla.org/fr/docs/Web/CSS" },
    { title: "SASS/SCSS", logo: "/skills/sass.png", link: "https://sass-lang.com/" },
    { title: "Tailwind", logo: "/skills/tailwind.svg", link: "https://tailwindcss.com/" },
    { title: "Jotai/Zustand", logo: "/skills/jotai.png", link: "https://jotai.org/" },
    { title: "Testing Library", logo: "/skills/testing-library.png", link: "https://testing-library.com" },
    { title: "Storybook", logo: "/skills/storybook.png", link: "https://storybook.js.org/" }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => <Skill key={skill.title} title={skill.title} logoSrc={skill.logo} link={skill.link} />)}
    </div>
  );
}