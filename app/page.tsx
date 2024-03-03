import type { ReactElement } from "react";
import { Line } from "#/components/line";
import { SkillSection } from "./skill.section";
import { ExperienceSection } from "./experience.section";
import { AboutSection } from "./about.section";
import { LinkSection } from "./link.section";

export const revalidate = 3600;

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Line className="my-7" />

      <SkillSection />
      <Line className="my-7" />

      <ExperienceSection />
      <Line className="my-7" />

      <LinkSection />
    </>
  );
}