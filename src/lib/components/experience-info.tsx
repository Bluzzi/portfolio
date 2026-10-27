import type { LabelColor } from "#/lib/components/label";
import type { Experience } from "#/lib/configs/experience";
import type { HTMLAttributes, ReactElement } from "react";
import { Label } from "#/lib/components/label";
import { Text } from "#/lib/components/text";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
};

export const ExperienceInfo = ({ experience, ...props }: ExperienceProps): ReactElement => {
  return (
    <div {...props}>
      <div className="flex justify-between max-sm:flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <Text size="large" className="uppercase">{experience.company}</Text>

          <Label color="blue" text="URL" link={experience.link ?? undefined} />
        </div>

        <Text color="gray">
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

      <Text className="mb-1">{experience.title}</Text>

      {experience.description.map((line) => (
        <Text key={line} color="gray" size="small" className="ml-1">
          ●
          {" "}
          {line}
        </Text>
      ))}

      <Text size="small" color="gray" className="mt-1">
        <span className="text-white">Technologies :</span>
        {" "}
        {experience.skills.join(" • ")}
      </Text>
    </div>
  );
};
