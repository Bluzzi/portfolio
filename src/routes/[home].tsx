import type { ReactElement } from "react";
import { BackpackSection } from "./[home].backpack";
import { ContactSection } from "./[home].contact";
import { DividerBand } from "./[home].divider";
import { HeroSection } from "./[home].hero";
import { HikesSection } from "./[home].hikes";
import { JourneySection } from "./[home].journey";
import { NightSection } from "./[home].night";
import { StrengthSection } from "./[home].strength";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <DividerBand />

      <NightSection>
        <HikesSection />
        <StrengthSection />
        <JourneySection />
        <BackpackSection />
      </NightSection>

      <ContactSection />
    </>
  );
};

export default Home;
