import type { Experience } from "#/lib/configs/experience";
import type { HTMLAttributes, ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { clsx } from "clsx";
import { ExternalLinkIcon } from "lucide-react";

export type ExperienceProps = HTMLAttributes<HTMLElement> & {
  experience: Experience;
};

export const ExperienceInfo = ({ experience, className, ...props }: ExperienceProps): ReactElement => {
  return (
    <div className={clsx("relative", className)} {...props}>
      {/* Timeline dot: */}
      <span aria-hidden className="absolute top-[26px] left-0 size-[15px] rounded-full border-2 border-night-950 bg-volt" />

      <article className="relative rounded-2xl border border-white/10 bg-night-900 p-6 transition-all hover:border-white/20 hover:shadow-[0_0_48px_-20px_rgb(234_255_61/0.25)]">
        {/* Header: */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Text size="xl" font="display">{experience.company}</Text>

            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-sm text-gray-400 transition-colors hover:border-volt/50 hover:text-white"
              >
                Voir le site
                <ExternalLinkIcon size={12} />
              </a>
            )}
          </div>

          <Text color="gray" size="small">
            {experience.dateFormat.start}
            {" "}
            -
            {" "}
            {experience.dateFormat.end}
            {" "}
            (
            {experience.duration}
            )
          </Text>
        </div>

        <Text size="large" className="mt-1.5">{experience.title}</Text>

        {/* Missions: */}
        <div className="mt-4 space-y-2">
          {experience.description.map((line) => (
            <div key={line} className="flex items-start gap-3">
              <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-volt" />
              <Text size="small" color="gray">{line}</Text>
            </div>
          ))}
        </div>

        {/* Technologies: */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {experience.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400">{skill}</span>
          ))}
        </div>
      </article>
    </div>
  );
};
