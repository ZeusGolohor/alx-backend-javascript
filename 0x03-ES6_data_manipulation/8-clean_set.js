export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }

  const filtered = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));
  return filtered.join('-');
}
