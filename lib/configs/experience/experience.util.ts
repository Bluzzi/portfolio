import { Experience, ExperienceBase } from "./experience.type";
import { pluralize } from "$lib/utils/string";
import dayjs from "dayjs";

export function populateExperience(experienceBase: ExperienceBase[]): Experience[] {
  return experienceBase.map(exp => {
    // Get duration :
    const years = Math.abs(exp.date.start.diff(exp.date.end ?? dayjs(), "year"));
    const months = Math.abs(exp.date.start.diff(exp.date.end ?? dayjs(), "month")) - years * 12;

    const duration = years > 0 ? `${years} ${pluralize("an", years)} et ${months} mois` : `${months} mois`;

    // Format dates :
    const dateFormat = {
      start: exp.date.start.format("DD/MM/YYYY"),
      end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
    };

    // Return :
    return {
      ...exp,
      duration,
      dateFormat
    };
  }).sort((a, b) => a.date.start.isBefore(b.date.start) ? 1 : -1);
}