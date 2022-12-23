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
  experiences.sort((a, b) => a.date.start.isAfter(b.date.start) ? 1 : -1);

  // Component content:
  return (
    <div>
      <Text size="2xl">Mes expériences professionnelles</Text>

      {experiences.map((experience, index) => {
        return (
          <div key={index} className="my-3">
            <Text className="mb-1">
              {experience.date.start.format("DD/MM/YYYY")} - {experience.date.end ? experience.date.end.format("DD/MM/YYYY") : "présent"} (5 mois)
            </Text>

            <Text>{experience.company.toUpperCase()} - {experience.title}</Text>

            {experience.description.map(line => <Text key={line} color="gray" size="small" className="ml-1">● {line}</Text>)}
          </div>
        );
      })}
    </div>
  );
}