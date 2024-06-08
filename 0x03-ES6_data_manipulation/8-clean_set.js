export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  let string = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      if (string.length > 0) {
        string += '-';
      }
      string += element.slice(startString.length);
    }
  }
  return string;
}
