import { dayJS, Dayjs } from "$lib/utils/day-js";
import { pluralize } from "$lib/utils/string";
import type { DateUnit } from "./difference.type";

export function humanizeDateDiff(dateOne: Dayjs, dateTwo: Dayjs): string {
  const dateUnits = dateDiffUnits(dateOne, dateTwo);

  for (let index = 0; index < dateUnits.length; index++) {
    const current = dateUnits[index];

    if (!current.value) continue;

    const next = dateUnits[index + 1];

    return [current, next].filter(element => element && element.value).map(element => {
      return element.suffix ? `${element.value} ${pluralize(element.name, element.value, element.suffix)}` : `${element.value} ${element.name}`;
    }).join(" et ");
  }

  throw new Error("The date difference is negative");
}

export function dateDiffUnits(dateOne: Dayjs, dateTwo: Dayjs): DateUnit[] {
  const diff = dayJS.duration(dateTwo.diff(dateOne));

  return [
    {
      name: "an",
      suffix: "s",
      value: diff.years()
    },
    {
      name: "mois",
      suffix: null,
      value: diff.months()
    },
    {
      name: "semaine",
      suffix: "s",
      value: Math.round(diff.days() / 7)
    },
    {
      name: "jour",
      suffix: "s",
      value: diff.days() % 7
    }
  ] satisfies DateUnit[];
}
