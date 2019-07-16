export function getLocalDateFromUTC(UTCDate) {
  return new Date(UTCDate).toLocaleDateString().replace(/\//g, '.');
}
