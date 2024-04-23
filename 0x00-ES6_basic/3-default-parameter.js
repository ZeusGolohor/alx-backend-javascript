export default function getSumOfHoods(initialNumber = undefined,
  expansion1989 = undefined,
  expansion2019 = undefined) {
  const expansion1989Value = (expansion1989 === undefined) ? 89 : expansion1989;
  const expansion2019Value = (expansion2019 === undefined) ? 19 : expansion2019;
  return initialNumber + expansion1989Value + expansion2019Value;
}
