import { Experience } from "./experience.type";
import { pluralize } from "$lib/utils/string";
import experienceConfig from "$lib/configs/experience.json";
import dayjs from "dayjs";

export function getExperiences(): Experience[] {
  // Parse experiences dates:
  const experiences = experienceConfig.map(experience => {
    // Get DayJS instance of dates :
    const dateInstance = {
      start: dayjs(experience.date.start),
      end: experience.date.end ? dayjs(experience.date.end) : null
    };

    // Format date as string :
    const dateFormat = {
      start: dateInstance.start.format("DD/MM/YYYY"),
      end: dateInstance.end ? dateInstance.end.format("DD/MM/YYYY") : "présent"
    };

    // Get duration of experience :
    const years = Math.abs(dateInstance.start.diff(dateInstance.end ?? dayjs(), "year"));
    const months = Math.abs(dateInstance.start.diff(dateInstance.end ?? dayjs(), "month")) - years * 12;

    const duration = years > 0 ? `${years} ${pluralize("an", years)} et ${months} mois` : `${months} mois`;

    // Format the experience :
    return {
      ...experience,
      dateFormat: {
        start: dateFormat.start,
        end: dateFormat.end
      },
      dateInstance: {
        start: dateInstance.start,
        end: dateInstance.end
      },
      duration: duration
    };
  });

  // Sort experiences by start date:
  experiences.sort((a, b) => a.dateInstance.start.isBefore(b.dateInstance.start) ? 1 : -1);

  return experiences;
}