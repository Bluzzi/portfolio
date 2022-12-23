import { Text } from "$lib/components/text";
import { ReactElement } from "react";
import experienceConfig from "$lib/configs/experience.json";
import dayjs from "dayjs";

export function ExperienceSection(): ReactElement {
  // Parse experiences dates:
  const experiences = experienceConfig.map(experience => ({
    ...experience,
    date: {
      start: dayjs(experience.date.start),
      end: experience.date.end ? dayjs(experience.date.end) : null
    }
  }));

  // Sort experiences by start date:
  experiences.sort((a, b) => a.date.start.isBefore(b.date.start) ? 1 : -1);

  // TODO : add experience time

  // Component content:
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="my-5">
          <div className="flex gap-2 justify-between">
            <Text size="large" className="uppercase">{experience.company}</Text>

            <Text color="gray">
              {experience.date.start.format("DD/MM/YYYY")} - {experience.date.end ? experience.date.end.format("DD/MM/YYYY") : "présent"}
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