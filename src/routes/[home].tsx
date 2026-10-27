import type { ReactElement } from "react";
import { AboutSection } from "./[home].about";
import { ExperienceSection } from "./[home].experience";
import { SkillSection } from "./[home].skill";
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
