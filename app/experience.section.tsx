import { Text } from "$lib/components/text";
import { getExperiences } from "$lib/services/experience";
import { ReactElement } from "react";

export function ExperienceSection(): ReactElement {
  const experiences = getExperiences();

  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="my-5">
          <div className="flex justify-between flex-wrap">
            <Text size="large" className="uppercase">{experience.company}</Text>

            <Text color="gray">
              {experience.dateFormat.start} - {experience.dateFormat.end} ({experience.duration})
            </Text>
          </div>

          <Text className="mb-1">{experience.title}</Text>

          {experience.description.map(line => <Text key={line} color="gray" size="small" className="ml-1">● {line}</Text>)}

          <Text size="small" color="gray" className="mt-1"><span className="text-white">Technologies :</span> {experience.skills.join(" • ")}</Text>
        </div>
      ))}
    </>
  );
}