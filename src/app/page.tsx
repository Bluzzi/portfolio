import type { ReactElement } from "react";
import { AboutSection } from "./about.section";
import { ExperienceSection } from "./experience.section";
import { SkillSection } from "./skill.section";
import { Line } from "#source/lib/components/line";

export const revalidate = 3600;

const Home = (): ReactElement => {
  return (
    <>
      <AboutSection />
      <Line className="my-7" />

      <SkillSection />
      <Line className="my-7" />

      <ExperienceSection />
    </>
  );
};

export default Home;
