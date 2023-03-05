import { ReactElement } from "react";
import { ExperienceProps } from "./experience-info.type";
import { Text } from "$lib/components/text";
import { Label } from "$lib/components/label";
import { getLabelInfoByExperienceType } from "./experience-info.util";
import { tw } from "typewind";

export function ExperienceInfo({ experience, ...props }: ExperienceProps): ReactElement {
  const experienceTypeLabel = getLabelInfoByExperienceType(experience.type);

  return (
    <div {...props}>
      <div className={tw.flex.flex_wrap.justify_between}>
        <div className={tw.flex.flex_wrap.items_center.gap_2}>
          <Text size="large" className={tw.uppercase}>{experience.company}</Text>

          <Label color={experienceTypeLabel.color} text={experienceTypeLabel.text} link={experience.link ?? undefined} />
        </div>

        <Text color="gray">
          {experience.dateFormat.start} - {experience.dateFormat.end} ({experience.duration})
        </Text>
      </div>

      <Text className={tw.mb_1}>{experience.title}</Text>

      {experience.description.map(line => <Text key={line} color="gray" size="small" className={tw.ml_1}>● {line}</Text>)}

      <Text size="small" color="gray" className={tw.mt_1}>
        <span className={tw.text_white}>Technologies :</span> {experience.skills.join(" • ")}
      </Text>
    </div>
  );
}