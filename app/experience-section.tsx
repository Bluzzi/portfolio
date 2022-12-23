import { Text } from "$lib/components/text";
import { ReactElement } from "react";
import experiences from "$lib/configs/experience.json";

export function ExperienceSection(): ReactElement {
  return (
    <div>
      <Text size="2xl">Mes expériences professionnelles</Text>

      {experiences.map((experience, index) => {
        return (
          <Text key={index}>{experience.title}</Text>
        );
      })}
    </div>
  );
}