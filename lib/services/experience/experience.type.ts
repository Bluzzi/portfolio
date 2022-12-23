import { Dayjs } from "dayjs";

export type Experience = {
  dateFormat: {
    start: string;
    end: string;
  },
  dateInstance: {
    start: Dayjs;
    end: Dayjs | null;
  },
  duration: string;
  company: string;
  title: string;
  description: string[];
  skills: string[];
}