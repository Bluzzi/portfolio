import type { ReactElement } from "react";
import { Chip } from "#/components/chip";
import { Container } from "#/components/container";
import { SkillTag } from "#/components/skill-tag";
import { backpackCategories, otherSkills, otherSkillsLimit } from "#/configs/backpack";
import { useState } from "react";

export const BackpackSection = (): ReactElement => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? otherSkills : otherSkills.slice(0, otherSkillsLimit);
  return (
    <section id="sac" className="pt-34">
      <Container>
        <div className="mb-11">
          <h2 className="font-jersey text-[80px] leading-none tracking-[1px] max-sm:text-[44px]">Le sac à dos</h2>
          <p className="mt-4.5 max-w-[720px] text-[18px] leading-[1.65] text-lavender-dark">
            Les outils que je choisis quand j'ai carte blanche, ceux que j'utilise au quotidien. Mais je ne m'y limite pas. Je m'adapte sans difficulté à toutes les technologies de l'écosystème
            {" "}
            <strong className="text-cream">TypeScript, React et Node</strong>
            .
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {backpackCategories.map((category) => (
            <div key={category.title} className="bg-card p-7">
              <div className="mb-5 flex items-center gap-3.5">
                <img src={category.icon} alt="" width={category.iconSize} />
                <h3 className="font-jersey text-[30px] leading-none tracking-[1px]">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillTag key={skill.title} title={skill.title} link={skill.link} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3.5 border-2 border-dashed border-line px-7 py-6">
          <p className="font-caveat font-semibold text-[24px] text-pink">et aussi, selon le terrain :</p>

          <div className="flex flex-wrap gap-2">
            {visibleSkills.map((skill) => (
              <Chip key={skill.title} title={skill.title} link={skill.link} />
            ))}
            <Chip title={showAllSkills ? "réduire ↑" : "…"} onPress={() => setShowAllSkills((open) => !open)} />
          </div>
        </div>
      </Container>
    </section>
  );
};
