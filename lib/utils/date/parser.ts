import { dayJS, Dayjs } from "$lib/utils/day-js";

export function date(day: number, month: number, year: number): Dayjs {
  return dayJS().date(day).month(month - 1).year(year);
}