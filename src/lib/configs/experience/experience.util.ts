import type { Experience, ExperienceBase } from "./experience.type";
import { humanizeDateDiff } from "#source/lib/utils/date/difference";
import { dayJS } from "#source/lib/utils/day-js";

export function populateExperience(experienceBase: ExperienceBase[]): Experience[] {
  const populated = experienceBase.map(exp => {
    const dateFormat = {
      start: exp.date.start.format("DD/MM/YYYY"),
      end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
    };

    return {
      ...exp,
      duration: humanizeDateDiff(exp.date.start, exp.date.end ?? dayJS()),
      dateFormat
    };
  });

  populated.sort((a, b) =>  {
    // Check if either experience is ongoing (end date is null) and prioritize it:
    if (a.date.end === null) return -1;
    if (b.date.end === null) return 1;

    // Compare end dates to determine which is more recent:
    if (a.date.end.isAfter(b.date.end)) return -1;
    if (b.date.end.isAfter(a.date.end)) return 1;

    // If end dates are the same, compare start dates to find the more recent one:
    if (a.date.start.isAfter(b.date.start)) return -1;
    if (b.date.start.isAfter(a.date.start)) return 1;

    // Keep original order if both start and end dates are identical:
    return 0;
  });

  return populated;
}