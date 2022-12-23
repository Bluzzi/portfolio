import { ReactElement } from "react";
import { Line } from "$lib/components/line";
import { SkillSection } from "./skill.section";
import { ExperienceSection } from "./experience.section";
import { AboutSection } from "./about.section";
import { LinkSection } from "./link.section";

export default function Home(): ReactElement {
  return (
    <>
      <div className="mx-auto w-1/2 lg:w-3/4 sm:w-11/12">
        <AboutSection />
        <Line className="my-7" />

        <SkillSection />
        <Line className="my-7" />

        <ExperienceSection />
        <Line className="my-7" />

        <LinkSection />
      </div>
    </>
  );
}