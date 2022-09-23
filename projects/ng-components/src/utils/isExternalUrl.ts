export const isExternalUrl = (url: string) => {
  return /(^\/\/|:\/\/|mailto:|^\/?.0\/)/.test(url);
}
