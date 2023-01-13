import { Dayjs } from "dayjs";

export type ExperienceType = "open-source" | "pro";

export type Experience = {
  type: ExperienceType;
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