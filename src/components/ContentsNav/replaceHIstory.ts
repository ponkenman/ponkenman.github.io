export const replaceUrl = (e: HTMLAnchorElement) => {
  window.location.replace(e.href);
  return true;
}