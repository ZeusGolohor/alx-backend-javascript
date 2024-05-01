export default function cleanSet(set, startString) {
  const filtered = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return filtered.join('-');
}
