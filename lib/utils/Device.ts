export function isMobile() : boolean {
  return /Android|Mobi/i.test(navigator.userAgent);
}