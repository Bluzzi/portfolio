import type { CSSProperties, ReactElement } from "react";
import { BreakablePhoto } from "#/lib/components/breakable-photo";
import { SocialButton } from "#/lib/components/social-button";
import { StatCard } from "#/lib/components/stat-card";
import { Text } from "#/lib/components/text";
import { experiences } from "#/lib/configs/experience";
import { skills } from "#/lib/configs/skill";
import { dayJS } from "#/lib/utils/day-js";

export const AboutSection = (): ReactElement => {
  // Stats derived from the configs, so they stay accurate when the content changes:
  const oldestExperience = experiences.at(-1);
  const yearsOfExperience = oldestExperience ? String(dayJS().diff(oldestExperience.date.start, "year")) : "0";

  return (
    <section aria-label="À propos" className="space-y-4">
      {/* Hero card: */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 p-9 max-sm:p-6">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-volt/10 blur-3xl" />

        {/* Current pulse traveling along the top edge: */}
        <span aria-hidden className="travel-pulse" style={{ "--travel-delay": "1.5s" } as CSSProperties} />

        <div className="relative flex items-center justify-between gap-10 max-sm:flex-col-reverse max-sm:items-start max-sm:gap-6">
          <div className="space-y-6">
            {/* Status badge: */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-sm text-green">
              <span className="relative flex size-2">
                <span aria-hidden className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
                <span aria-hidden className="relative inline-flex size-2 rounded-full bg-green" />
              </span>
              Développeur Full-Stack
            </div>

            <Text type="h1" size="5xl" font="display" className="max-sm:text-4xl">
              Camille
              {" "}
              <span className="inline-block -rotate-1 rounded-xl bg-volt px-3 text-black">Dugas</span>
            </Text>

            <Text color="gray" size="large">
              Développeur Full-Stack depuis 2016, spécialisé dans l'écosystème TypeScript.
            </Text>

            {/* Social links: */}
            <div className="flex items-center gap-3 pt-1">
              <SocialButton href="https://github.com/Bluzzi" target="_blank" logoSrc="/socials/github.svg" alt="GitHub" />
              <SocialButton href="mailto:contact@camilledugas.me" target="_blank" logoSrc="/socials/gmail.svg" alt="Email" />
              <SocialButton href="https://www.linkedin.com/in/camille-dugas" target="_blank" logoSrc="/socials/linkedin.svg" alt="LinkedIn" />
            </div>
          </div>

          {/* Profile photo: */}
          <BreakablePhoto src="/camille.jpg" brokenSrc="/pixelbluzzi.png" alt="Profile picture" />
        </div>
      </div>

      {/* Stats: */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard value={yearsOfExperience} label="années d'expérience" />
        <StatCard value={String(experiences.length)} label="entreprises" />
        <StatCard value={String(skills.length)} label="technologies" />
      </div>
    </section>
  );
};
