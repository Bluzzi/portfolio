import dayjs, { Dayjs } from "dayjs";

export function date(day: number, month: number, year: number): Dayjs {
  return dayjs().date(day).month(month - 1).year(year);
}