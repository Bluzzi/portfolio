import type { Dayjs } from "#source/lib/utils/day-js";
import type { DateUnit } from "./difference.type";
import { dayJS } from "#source/lib/utils/day-js";
import { pluralize } from "#source/lib/utils/string";

export const dateDiffUnits = (dateOne: Dayjs, dateTwo: Dayjs): DateUnit[] => {
  const diff = dayJS.duration(dateTwo.diff(dateOne));

  return [
    {
      name: "an",
      suffix: "s",
      value: diff.years(),
    },
    {
      name: "mois",
      suffix: null,
      value: diff.months(),
    },
    // {
    //   name: "semaine",
    //   suffix: "s",
    //   value: Math.round(diff.days() / 7)
    // }
  ] satisfies DateUnit[];
};

export const humanizeDateDiff = (dateOne: Dayjs, dateTwo: Dayjs): string => {
  const dateUnits = dateDiffUnits(dateOne, dateTwo);

  for (let index = 0; index < dateUnits.length; index += 1) {
    const current = dateUnits.at(index);

    if (current?.value === undefined || current.value === 0) continue;

    const next = dateUnits.at(index + 1);

    return [current, next].filter((element): element is NonNullable<typeof element> => element?.value !== undefined).map((element) => {
      return element.suffix ? `${String(element.value)} ${pluralize(element.name, element.value, element.suffix)}` : `${String(element.value)} ${element.name}`;
    }).join(" et ");
  }

  throw new Error("The date difference is negative");
};
