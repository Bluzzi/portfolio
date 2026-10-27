import type { ReactElement } from "react";
import { AboutSection } from "./about.section";
import { ExperienceSection } from "./experience.section";
import { SkillSection } from "./skill.section";
import { Line } from "#/lib/components/line";

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
