import { ReactElement } from "react";
import { Line } from "$lib/components/line";
import { SkillSection } from "./skill.section";
import { ExperienceSection } from "./experience.section";
import { AboutSection } from "./about.section";
import { LinkSection } from "./link.section";
import { tw } from "typewind";

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Line className={tw.my_7} />

      <SkillSection />
      <Line className={tw.my_7} />

      <ExperienceSection />
      <Line className={tw.my_7} />

      <LinkSection />
    </>
  );
}