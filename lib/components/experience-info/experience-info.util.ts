import type { ExperienceType } from "#/configs/experience";
import type { ExperienceTypeLabelInfo } from "./experience-info.type";

export function getLabelInfoByExperienceType(type: ExperienceType): ExperienceTypeLabelInfo {
  switch (type) {
    case "open-source": {
      return { color: "green", text: "open source" };
    }

    case "pro": {
      return { color: "blue", text: "pro" };
    }
  }
}