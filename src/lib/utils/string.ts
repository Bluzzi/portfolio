export function pluralize(noun: string, count: number, suffix = "s"): string {
  return `${noun}${count !== 1 ? suffix : ""}`;
}