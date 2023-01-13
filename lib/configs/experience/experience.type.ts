import { Dayjs } from "dayjs";

export type Experience = {
  type: "open-source" | "pro";
  date: {
    start: Dayjs;
    end: Dayjs | null;
  },
  dateFormat: {
    start: string;
    end: string;
  },
  duration: string;
  company: string;
  title: string;
  description: string[];
  skills: string[];
}

export type ExperienceBase = Omit<Experience, "duration" | "dateFormat">;