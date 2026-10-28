import type { CSSProperties, ReactElement } from "react";
import { AboutSection } from "./[home].about";
import { ExperienceSection } from "./[home].experience";
import { SkillSection } from "./[home].skill";
import { Line } from "#/lib/components/line";
import { Text } from "#/lib/components/text";
import { dayJS } from "#/lib/utils/day-js";
import { ArrowUpRightIcon } from "lucide-react";

const Home = (): ReactElement => {
  return (
    <div className="space-y-16 max-sm:space-y-12">
      <AboutSection />

      <SkillSection />

      <ExperienceSection />

      {/* Contact call-to-action: */}
      <section aria-label="Contact" className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 p-12 text-center max-sm:p-8">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-volt/10 blur-3xl" />

        <span aria-hidden className="travel-pulse" style={{ "--travel-delay": "4s" } as CSSProperties} />

        <div className="relative space-y-4">
          <Text type="h2" size="4xl" font="display" className="tracking-tight max-sm:text-3xl">
            Un projet
            {" "}
            en tête
            <span className="text-volt"> ?</span>
          </Text>

          <Text color="gray" className="mx-auto max-w-md">
            Pour une collaboration, un besoin technique ou un simple échange, écrivez-moi directement.
          </Text>

          <a
            href="mailto:contact@camilledugas.me"
            className="group mt-2 inline-flex items-center gap-3 rounded-full bg-volt py-2 pl-6 pr-2 font-semibold text-black"
          >
            Me contacter

            {/* Arrow chip that rotates on hover: */}
            <span aria-hidden className="flex size-8 items-center justify-center rounded-full bg-black text-volt transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRightIcon size={16} />
            </span>
          </a>
        </div>
      </section>

      {/* Footer: */}
      <footer>
        <Line className="mb-6" />

        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:gap-2">
          <Text size="small" color="gray">
            ©
            {String(dayJS().year())}
            {" "}
            Camille Dugas
          </Text>

          <Text size="small" color="gray">Construit avec React Router et Tailwind CSS</Text>
        </div>
      </footer>
    </div>
  );
};

export default Home;
