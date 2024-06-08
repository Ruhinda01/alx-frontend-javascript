export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  let string = '';
  for (const element of set) {
    if (element && element.startsWith(startString)) {
      string += string.length === 0 ? element.replace(startString, '') : element.replace(startString, '-');
    }
  }
  return string;
}
