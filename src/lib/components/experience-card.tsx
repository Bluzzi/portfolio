import type { Experience } from "#/lib/configs/experience";
import type { ReactElement } from "react";
import { clsx } from "clsx";

export type ExperienceCardProps = {
  experience: Experience;
};

// Timeline entry with date, icon, description and technology tags:
export const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  const { start, end } = experience.date;
  const isOngoing = end === null;
  const dateLine = isOngoing ? "aujourd'hui" : `${start.format("YYYY")} – ${end.format("YYYY")}`;

  return (
    <article className="relative flex flex-wrap gap-x-10 gap-y-6 py-9 pr-6 transition-colors duration-150 hover:bg-card-hover">
      <div className="w-40 shrink-0 pt-2.5 text-right">
        <p className={clsx("font-jersey text-[34px] leading-none max-sm:text-[26px]", isOngoing ? "text-amber" : "text-cream")}>
          {dateLine}
        </p>
        <p className="mt-2 text-[14px] text-lavender">{experience.duration}</p>
      </div>

      <div className="flex w-14 shrink-0 justify-center">
        <div className={clsx("flex h-14 w-14 items-center justify-center shadow-dot", isOngoing ? "bg-amber" : "border-2 border-line bg-card")}>
          <img src={experience.icon} alt="" width={experience.iconSize} />
        </div>
      </div>

      <div className="min-w-0 grow basis-[520px]">
        <h3 className="font-jersey text-[52px] leading-none tracking-[1px] max-sm:text-[32px]">
          {experience.link
            ? (
                <a className="text-cream transition-colors hover:text-amber" href={experience.link} target="_blank" rel="noreferrer">
                  {experience.company}
                </a>
              )
            : experience.company}
        </h3>
        <p className="mt-1.5 mb-4 text-[16px] font-semibold text-pink">{experience.title}</p>
        <p className="mb-4.5 max-w-[720px] text-[17px] leading-[1.7] text-cream-soft">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span key={skill} className="border border-line px-2.5 py-[5px] text-[13px] font-medium text-lavender-dark">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
