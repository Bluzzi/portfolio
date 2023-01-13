import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

// Plugins:
dayjs.extend(duration);
dayjs.extend(relativeTime);

// Exports:
export const dayJS = dayjs;
export { Dayjs } from "dayjs";