import type { Experience, ExperienceBase } from "./experience.type";
import { humanizeDateDiff } from "#/utils/date/difference";
import { dayJS } from "#/utils/day-js";

export function populateExperience(experienceBase: ExperienceBase[]): Experience[] {
  return experienceBase.map(exp => {
    const dateFormat = {
      start: exp.date.start.format("DD/MM/YYYY"),
      end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
    };

    return {
      ...exp,
      duration: humanizeDateDiff(exp.date.start, exp.date.end ?? dayJS()),
      dateFormat
    };
  }).sort((a, b) => a.date.start.isBefore(b.date.start) ? 1 : -1);
}